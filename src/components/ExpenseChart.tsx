
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

interface ExpenseData {
  name: string;
  value: number;
  color: string;
}

interface ExpenseChartProps {
  data: ExpenseData[];
  title: string;
  description: string;
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ data, title, description }) => {
  const totalExpense = data.reduce((sum, item) => sum + item.value, 0);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-md shadow">
          <p className="font-semibold text-sm">{data.name}</p>
          <p className="text-sm">{formatCurrency(data.value)}</p>
          <p className="text-xs text-gray-500">
            {((data.value / totalExpense) * 100).toFixed(1)}% of total
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChartComponent>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChartComponent>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpenseChart;
