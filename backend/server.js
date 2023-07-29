import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './db/db.js';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import blogRoute from './routes/blog.js';

dotenv.config();
const app = express();

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

//Middlewares
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/blog', blogRoute);

const ports = process.env.PORT;

app.listen(ports, () => {
  connectToDB();
  console.log(`server running successfully on port: ${ports}`);
});
