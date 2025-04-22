
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
}

interface TransactionListProps {
  transactions: Transaction[];
  title: string;
  description: string;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, title, description }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: '2-digit', 
      year: 'numeric' 
    }).format(date);
  };

  const getCategoryColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      'Food': 'bg-yellow-100 text-yellow-800',
      'Transportation': 'bg-blue-100 text-blue-800',
      'Housing': 'bg-purple-100 text-purple-800',
      'Entertainment': 'bg-pink-100 text-pink-800',
      'Utilities': 'bg-green-100 text-green-800',
      'Healthcare': 'bg-red-100 text-red-800',
      'Shopping': 'bg-indigo-100 text-indigo-800',
      'Salary': 'bg-green-100 text-green-800',
      'Investment': 'bg-blue-100 text-blue-800',
      'Other': 'bg-gray-100 text-gray-800',
    };
    
    return categoryColors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{formatDate(transaction.date)}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>
                    <Badge className={getCategoryColor(transaction.category)}>
                      {transaction.category}
                    </Badge>
                  </TableCell>
                  <TableCell className={`text-right ${transaction.type === 'income' ? 'text-expense-green' : 'text-expense-red'}`}>
                    {transaction.type === 'income' ? '+' : '-'} {formatCurrency(Math.abs(transaction.amount))}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4 text-muted-foreground">
                  No transactions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TransactionList;
