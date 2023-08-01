import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import blogRoute from "./routes/blog.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("MONGO_DB connected successfully");
  } catch (err) {
    console.log(err);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/blogs", blogRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong.";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const ports = process.env.PORT;

app.listen(ports, () => {
  connectToDB();
  console.log(`server running successfully on port: ${ports}`);
});
