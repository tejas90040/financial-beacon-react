
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import DashboardSidebar from '@/components/DashboardSidebar';
import ExpenseSummary from '@/components/ExpenseSummary';
import ExpenseChart from '@/components/ExpenseChart';
import TransactionList from '@/components/TransactionList';
import { Transaction } from '@/components/TransactionList';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Mock data for the dashboard
  const summaryData = {
    income: 5250.75,
    expenses: 3528.42,
    savings: 1722.33,
    compareToLastMonth: {
      income: 4980.50,
      expenses: 3750.20,
      savings: 1230.30,
    }
  };
  
  const categoryData = [
    { name: 'Housing', value: 1200, color: '#8884d8' },
    { name: 'Food', value: 800, color: '#82ca9d' },
    { name: 'Transportation', value: 450, color: '#ffc658' },
    { name: 'Entertainment', value: 350, color: '#ff8042' },
    { name: 'Utilities', value: 280, color: '#0088FE' },
    { name: 'Others', value: 448.42, color: '#FFBB28' },
  ];
  
  const transactions: Transaction[] = [
    {
      id: '1',
      date: '2023-04-15',
      description: 'Monthly Rent',
      category: 'Housing',
      amount: 1200,
      type: 'expense',
    },
    {
      id: '2',
      date: '2023-04-14',
      description: 'Grocery Shopping',
      category: 'Food',
      amount: 120.50,
      type: 'expense',
    },
    {
      id: '3',
      date: '2023-04-14',
      description: 'Gas Station',
      category: 'Transportation',
      amount: 45.75,
      type: 'expense',
    },
    {
      id: '4',
      date: '2023-04-13',
      description: 'Movie Tickets',
      category: 'Entertainment',
      amount: 35.99,
      type: 'expense',
    },
    {
      id: '5',
      date: '2023-04-12',
      description: 'Electricity Bill',
      category: 'Utilities',
      amount: 85.32,
      type: 'expense',
    },
    {
      id: '6',
      date: '2023-04-10',
      description: 'Salary Deposit',
      category: 'Salary',
      amount: 3250.75,
      type: 'income',
    },
    {
      id: '7',
      date: '2023-04-10',
      description: 'Freelance Project',
      category: 'Other',
      amount: 2000,
      type: 'income',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Dashboard Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 py-3 flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <h1 className="text-xl font-semibold text-expense-dark">Dashboard</h1>
            
            <div className="flex items-center space-x-4">
              <Select defaultValue="april2023">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="april2023">April 2023</SelectItem>
                  <SelectItem value="march2023">March 2023</SelectItem>
                  <SelectItem value="february2023">February 2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="container mx-auto">
            {/* Summary Cards */}
            <section className="mb-6">
              <ExpenseSummary 
                income={summaryData.income}
                expenses={summaryData.expenses}
                savings={summaryData.savings}
                compareToLastMonth={summaryData.compareToLastMonth}
              />
            </section>
            
            {/* Charts */}
            <section className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ExpenseChart 
                data={categoryData} 
                title="Expense Breakdown" 
                description="Your expenses by category for April 2023" 
              />
              
              <div className="expense-card">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Add New Transaction</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <Input placeholder="Description" className="col-span-3 md:col-span-1" />
                      <Select defaultValue="expense">
                        <SelectTrigger>
                          <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="expense">Expense</SelectItem>
                          <SelectItem value="income">Income</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input type="number" placeholder="Amount" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="housing">Housing</SelectItem>
                          <SelectItem value="food">Food</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                          <SelectItem value="entertainment">Entertainment</SelectItem>
                          <SelectItem value="utilities">Utilities</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button type="button" className="bg-expense-primary hover:bg-expense-primary/90">
                        Add Transaction
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Monthly Budget Tracking</h3>
                    <div className="bg-gray-200 rounded-full h-2.5 mb-1">
                      <div className="bg-expense-primary h-2.5 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>$3,528 spent</span>
                      <span>$5,250 budget</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      You've used 67% of your monthly budget
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Recent Transactions */}
            <section className="mb-6">
              <TransactionList 
                transactions={transactions}
                title="Recent Transactions"
                description="Your latest financial activities"
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
