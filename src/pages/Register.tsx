
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Eye, EyeOff, Upload } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Register: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [aadharImage, setAadharImage] = useState<File | null>(null);
  const [aadharPreview, setAadharPreview] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleAadharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setAadharImage(file);
    
    // Create a preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setAadharPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const validateStep1 = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return false;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return false;
    }
    
    if (password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!aadharImage) {
      toast({
        title: "Error",
        description: "Please upload your Aadhar card image",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Here we would normally connect to AWS Cognito, DynamoDB and S3
    // For now, we'll simulate a registration
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Register with:', { fullName, email, password, aadharImage });
      
      toast({
        title: "Registration Successful",
        description: "Your account has been created. You can now log in.",
      });
      
      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "There was an error during registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-2 bg-expense-primary/10 rounded-full">
                <PieChart className="h-6 w-6 text-expense-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center font-bold">Create an account</CardTitle>
            <CardDescription className="text-center">
              {currentStep === 1 ? 
                "Enter your details to create your account" : 
                "Upload your Aadhar card for verification"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={currentStep === 2 ? handleRegister : (e) => { e.preventDefault(); handleNextStep(); }} className="space-y-4">
              {currentStep === 1 ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName" 
                      placeholder="John Doe" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button 
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password" 
                      placeholder="••••••••" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-expense-primary hover:bg-expense-primary/90"
                  >
                    Next Step
                  </Button>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="aadharImage">Upload Aadhar Card Image</Label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      {aadharPreview ? (
                        <div className="space-y-2">
                          <img 
                            src={aadharPreview} 
                            alt="Aadhar Preview" 
                            className="max-h-48 mx-auto rounded-md" 
                          />
                          <p className="text-sm text-gray-500 text-center">
                            Click below to change the image
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="aadharImage"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-expense-primary hover:text-expense-primary/80"
                            >
                              <span>Upload a file</span>
                              <input
                                id="aadharImage"
                                name="aadharImage"
                                type="file"
                                className="sr-only"
                                accept="image/*"
                                onChange={handleAadharChange}
                                required
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1 border-expense-primary text-expense-primary hover:bg-expense-primary/10"
                      onClick={handlePrevStep}
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1 bg-expense-primary hover:bg-expense-primary/90"
                      disabled={isLoading || !aadharImage}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </div>
                </>
              )}
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-expense-primary hover:text-expense-primary/80 font-semibold">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
