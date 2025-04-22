
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PieChart, BarChart, CreditCard, DollarSign, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-expense-dark mb-6">
              Take Control of Your <span className="text-expense-primary">Finances</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Track, analyze, and optimize your expenses with our intuitive expense tracking platform.
              Get real-time insights into your spending habits.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto bg-expense-primary hover:bg-expense-primary/90">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-expense-primary text-expense-primary hover:bg-expense-primary/10">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
              alt="Financial Planning Dashboard" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-expense-dark mb-4">Why Choose ExpenseTracker</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides powerful tools to help you make smarter financial decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="expense-card">
              <div className="p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <PieChart className="h-7 w-7 text-expense-primary" />
              </div>
              <h3 className="text-xl font-bold text-expense-dark mb-3">Visual Analytics</h3>
              <p className="text-gray-600">
                Get clear visualizations of your spending patterns to identify areas where you can save money.
              </p>
            </div>
            
            <div className="expense-card">
              <div className="p-3 bg-teal-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CreditCard className="h-7 w-7 text-expense-secondary" />
              </div>
              <h3 className="text-xl font-bold text-expense-dark mb-3">Secure Transactions</h3>
              <p className="text-gray-600">
                Your financial data is protected with bank-level security and encryption.
              </p>
            </div>
            
            <div className="expense-card">
              <div className="p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BarChart className="h-7 w-7 text-expense-primary" />
              </div>
              <h3 className="text-xl font-bold text-expense-dark mb-3">Detailed Reports</h3>
              <p className="text-gray-600">
                Generate comprehensive reports to track your progress and plan for future expenses.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-expense-dark mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with ExpenseTracker is simple.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-expense-primary rounded-full text-white w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold text-expense-dark mb-3">Create an Account</h3>
              <p className="text-gray-600">
                Sign up for free and complete your profile with your basic information.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-expense-secondary rounded-full text-white w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold text-expense-dark mb-3">Track Your Expenses</h3>
              <p className="text-gray-600">
                Start logging your expenses and categorizing them for better tracking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-expense-accent rounded-full text-white w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold text-expense-dark mb-3">Gain Insights</h3>
              <p className="text-gray-600">
                View detailed analytics and reports to understand your spending habits.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-expense-dark mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what people are saying about ExpenseTracker.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="expense-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold text-expense-dark">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "ExpenseTracker has transformed how I manage my business finances. The visual reports make it so easy to understand where money is going."
              </p>
            </div>
            
            <div className="expense-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold text-expense-dark">Michael Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Freelance Developer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The ability to track project-specific expenses has made tax season so much easier. I can't imagine going back to spreadsheets."
              </p>
            </div>
            
            <div className="expense-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold text-expense-dark">Jennifer Lee</h4>
                  <p className="text-gray-500 text-sm">Healthcare Professional</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I've finally got control of my personal budget thanks to ExpenseTracker. The mobile app makes logging expenses on the go super simple."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-expense-primary to-expense-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of users who have transformed their financial habits with ExpenseTracker.
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="bg-white text-expense-primary hover:bg-gray-100">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Landing;
