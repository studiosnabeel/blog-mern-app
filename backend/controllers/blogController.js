import Blog from "../model/Blog.js";
import User from "../model/User.js";

export const createBlog = async (req, res, next) => {
  const newBlog = new Blog({
    title: req.body.title,
    desc: req.body.desc,
    author: req.user.id, // Set the author's ID to the authenticated user's ID
  });
  try {
    const savedBlog = await newBlog.save();

    await User.findByIdAndUpdate(req.user.id, {
      $push: { blogs: savedBlog._id },
    });

    res.status(200).json(savedBlog);
  } catch (err) {
    next(err);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (err) {
    next(err);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json("Blog has been deleted successfully");
  } catch (err) {
    next(err);
  }
};

export const getBlog = async (req, res, next) => {
  try {
    const currentBlog = await Blog.findById(req.params.id);
    res.status(200).json(currentBlog);
  } catch (err) {
    next(err);
  }
};

export const getBlogs = async (req, res, next) => {
  try {
    const Blogs = await Blog.find(req.body);
    res.status(200).json(Blogs);
  } catch (err) {
    next(err);
  }
};
