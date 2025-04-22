
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PieChart, Menu } from 'lucide-react';

interface NavbarProps {
  isAuthenticated?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated = false }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <PieChart className="h-6 w-6 text-expense-primary" />
            <Link to="/" className="text-xl font-bold text-expense-dark">ExpenseTracker</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-expense-primary transition-colors">Home</Link>
            <Link to="/features" className="text-gray-600 hover:text-expense-primary transition-colors">Features</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-expense-primary transition-colors">Pricing</Link>
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button className="bg-expense-primary hover:bg-expense-primary/90">Dashboard</Button>
              </Link>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login">
                  <Button variant="outline" className="border-expense-primary text-expense-primary hover:bg-expense-primary/10">Login</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-expense-primary hover:bg-expense-primary/90">Register</Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-md py-2 px-4 shadow-md animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-600 py-2 hover:text-expense-primary transition-colors">Home</Link>
              <Link to="/features" className="text-gray-600 py-2 hover:text-expense-primary transition-colors">Features</Link>
              <Link to="/pricing" className="text-gray-600 py-2 hover:text-expense-primary transition-colors">Pricing</Link>
              {isAuthenticated ? (
                <Link to="/dashboard" className="py-2">
                  <Button className="w-full bg-expense-primary hover:bg-expense-primary/90">Dashboard</Button>
                </Link>
              ) : (
                <div className="flex flex-col space-y-2 py-2">
                  <Link to="/login">
                    <Button variant="outline" className="w-full border-expense-primary text-expense-primary hover:bg-expense-primary/10">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="w-full bg-expense-primary hover:bg-expense-primary/90">Register</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
