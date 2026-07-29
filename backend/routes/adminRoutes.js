import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getDashboard,
  getUsers,
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/dashboard", authMiddleware, getDashboard);

router.get("/users", authMiddleware, getUsers);

export default router;