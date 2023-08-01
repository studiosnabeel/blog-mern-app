import jwt from "jsonwebtoken";
import { createError } from "./error.js";
import Blog from "../model/Blog.js";

// utils/verifyToken.js

import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: No token provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token." });
    }

    // Attach the user object to the request for use in other middleware or route handlers
    req.user = decoded;
    next();
  });
};

// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;

//   if (!token) return next(createError(401, "You are not authenticated!"));

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return next(createError(403, "Token not valid!"));
//     req.user = user;
//     next();
//   });
// };

// export const verifyUser = (req, res, next) => {
//   verifyToken(req, res, next, () => {
//     if (req.user.id === req.params.id) {
//       next();
//     } else {
//       return next(createError(403, "You are not authorized"));
//     }
//   });
// };

// export const verifyAdmin = (req, res, next) => {
//   verifyToken(req, res, next, () => {
//     if (req.user.isAdmin) {
//       next();
//     } else {
//       return next(createError(403, 'You are not authorized'));
//     }
//   });
// };

// utils/verifyToken.js

// export const verifyAdmin = (req, res, next) => {
//   if (req.user && req.user.role === "admin") {
//     // The user is an admin, proceed to the next middleware or route handler
//     next();
//   } else {
//     // The user is not authorized, return a 403 Forbidden response
//     return res
//       .status(403)
//       .json({ message: "Forbidden: You are not an admin." });
//   }
// };

// utils/verifyToken.js

export const verifyBlogOwner = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    if (blog.author.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Forbidden: You are not the owner of this blog." });
    }

    next();
  } catch (err) {
    next(err);
  }
};
