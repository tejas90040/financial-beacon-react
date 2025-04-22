
/**
 * This file represents the data models that would be stored in AWS DynamoDB
 * In a real application, these models would be used with AWS SDK to interact with DynamoDB
 */

// User model - would be stored in a DynamoDB table
export interface User {
  userId: string;  // Primary partition key
  email: string;   // GSI for email lookups
  fullName: string;
  createdAt: string;
  lastLoginAt: string;
  aadharImageS3Key: string;  // Reference to the S3 object key for Aadhar card image
}

// Transaction model - would be stored in a DynamoDB table
export interface Transaction {
  transactionId: string;     // Primary partition key
  userId: string;            // GSI for querying user's transactions
  date: string;              // Sort key for chronological sorting
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  createdAt: string;
  updatedAt: string;
}

// Budget model - would be stored in a DynamoDB table
export interface Budget {
  budgetId: string;         // Primary partition key
  userId: string;           // GSI for querying user's budgets
  month: string;            // YYYY-MM format
  category: string;         // Optional category-specific budget
  amount: number;
  createdAt: string;
  updatedAt: string;
}

// Category model - would be stored in a DynamoDB table
export interface Category {
  categoryId: string;       // Primary partition key
  userId: string;           // GSI for querying user's categories
  name: string;
  color: string;            // For UI visualization
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * AWS Integration Notes:
 * 
 * 1. DynamoDB Tables:
 *    - Users: Store user profiles and authentication details
 *    - Transactions: Store all financial transactions with GSI on userId
 *    - Budgets: Store budget configurations
 *    - Categories: Store expense categories
 * 
 * 2. S3 Bucket:
 *    - Store Aadhar card images and other user documents
 *    - Path format: /user-documents/{userId}/aadhar.{extension}
 * 
 * 3. AWS Cognito:
 *    - Handle user authentication and session management
 * 
 * 4. AWS Lambda:
 *    - Process data between frontend and DynamoDB
 *    - Handle image processing for Aadhar verification
 * 
 * 5. AWS EC2:
 *    - Host the React application
 */
