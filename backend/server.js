import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './db/db.js';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

const ports = process.env.PORT;

app.listen(ports, () => {
  connectToDB();
  console.log(`server running successfully on port: ${ports}`);
});
