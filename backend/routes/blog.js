import express from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blogController.js";
import { verifyBlogOwner } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createBlog);
//UPDATE
router.put("/:id", verifyBlogOwner, updateBlog);
//DELETE
router.delete("/:id", verifyBlogOwner, deleteBlog);
//GET
router.get("/:id", getBlog);
//GET ALL
router.get("/", getBlogs);

export default router;
