import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js';
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('MongoDB Connected 🍃');
  } catch (error) {
    throw error;
  }
};

// Middlewares
app.use('/auth', authRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  connect();
  console.log(`Server is Running On Port ${port} 🐨`);
});
