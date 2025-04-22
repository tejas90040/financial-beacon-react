
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  PieChart,
  BarChart,
  CreditCard,
  DollarSign,
  User,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardSidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', icon: PieChart, path: '/dashboard' },
    { name: 'Transactions', icon: CreditCard, path: '/dashboard/transactions' },
    { name: 'Reports', icon: BarChart, path: '/dashboard/reports' },
    { name: 'Budget', icon: DollarSign, path: '/dashboard/budget' },
    { name: 'Profile', icon: User, path: '/dashboard/profile' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed md:static inset-y-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-gray-200 shadow-sm transform transition-transform duration-200 ease-in-out md:transform-none",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <PieChart className="h-6 w-6 text-expense-primary" />
            <span className="text-xl font-bold text-expense-dark">ExpenseTracker</span>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleSidebar}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Sidebar content */}
        <div className="flex-1 overflow-auto py-4 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100 transition-colors",
                    isActive(item.path) && "bg-expense-primary/10 text-expense-primary font-medium"
                  )}
                >
                  <item.icon className={cn(
                    "h-5 w-5 mr-3",
                    isActive(item.path) ? "text-expense-primary" : "text-gray-500"
                  )} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Sidebar footer */}
        <div className="p-4 border-t border-gray-200">
          <Link to="/login">
            <Button 
              variant="outline"
              className="w-full justify-start border-expense-primary text-expense-primary hover:bg-expense-primary/10"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
