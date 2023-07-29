import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log('MONGO_DB connected successfully');
  } catch (err) {
    console.log(err);
  }
};

export default connectToDB;
