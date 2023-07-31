import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference the User model
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
