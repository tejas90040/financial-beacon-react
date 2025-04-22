
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';

interface ExpenseSummaryProps {
  income: number;
  expenses: number;
  savings: number;
  compareToLastMonth?: {
    income: number;
    expenses: number;
    savings: number;
  };
}

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ 
  income, 
  expenses, 
  savings,
  compareToLastMonth 
}) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };
  
  const calculatePercentageChange = (current: number, previous: number) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / Math.abs(previous)) * 100;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Income Card */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-blue-100 mr-3">
                <TrendingUp className="h-5 w-5 text-expense-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{formatCurrency(income)}</div>
                {compareToLastMonth && (
                  <div className="flex items-center mt-1">
                    <span className={`text-xs ${calculatePercentageChange(income, compareToLastMonth.income) >= 0 ? 'text-expense-green' : 'text-expense-red'}`}>
                      {calculatePercentageChange(income, compareToLastMonth.income) >= 0 ? '+' : ''}
                      {calculatePercentageChange(income, compareToLastMonth.income).toFixed(1)}%
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Expenses Card */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-red-100 mr-3">
                <TrendingDown className="h-5 w-5 text-expense-red" />
              </div>
              <div>
                <div className="text-2xl font-bold">{formatCurrency(expenses)}</div>
                {compareToLastMonth && (
                  <div className="flex items-center mt-1">
                    <span className={`text-xs ${calculatePercentageChange(expenses, compareToLastMonth.expenses) <= 0 ? 'text-expense-green' : 'text-expense-red'}`}>
                      {calculatePercentageChange(expenses, compareToLastMonth.expenses) >= 0 ? '+' : ''}
                      {calculatePercentageChange(expenses, compareToLastMonth.expenses).toFixed(1)}%
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Savings Card */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Savings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-green-100 mr-3">
                <DollarSign className="h-5 w-5 text-expense-green" />
              </div>
              <div>
                <div className="text-2xl font-bold">{formatCurrency(savings)}</div>
                {compareToLastMonth && (
                  <div className="flex items-center mt-1">
                    <span className={`text-xs ${calculatePercentageChange(savings, compareToLastMonth.savings) >= 0 ? 'text-expense-green' : 'text-expense-red'}`}>
                      {calculatePercentageChange(savings, compareToLastMonth.savings) >= 0 ? '+' : ''}
                      {calculatePercentageChange(savings, compareToLastMonth.savings).toFixed(1)}%
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseSummary;
