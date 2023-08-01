import express from "express";
import { createError } from "../utils/error.js";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('Hello user, you are logged in');
// });

// router.get('/checkUser/:id', verifyUser, (req, res, next) => {
//   res.send('Hello user, you are logged in and you can delete your account');
// });

//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GET ALL
router.get("/", getUsers);

export default router;
