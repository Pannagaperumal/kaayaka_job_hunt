import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';

import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import connectdb from './config/db.js';

// Load environment variables from .env file
dotenv.config();

const app = express();


// Set the port from environment variables or default to 8080
const port = process.env.PORT || 8080;
console.log(`PORT: ${port}`);

// Middleware
app.use(express.json());
app.use(cors()); 
app.use(morgan('dev')); 


// Connect to the database
connectdb();

// Routes
app.use('/api/v1/test', testRoutes); 
app.use('/api/v1/auth', authRoutes); 

// Start the server
app.listen(port, () => {
  console.log("Server is running".bgWhite.bold);
});