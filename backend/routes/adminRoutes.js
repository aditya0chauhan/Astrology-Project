import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {getDashboard,getUsers,updateUserPlan,updateUserStatus,updateUser} from "../controllers/adminController.js";

const router = express.Router();

router.get("/dashboard", authMiddleware, getDashboard);
router.get("/users", authMiddleware, getUsers);
router.put("/users/:id/plan", authMiddleware, updateUserPlan);
router.put("/users/:id/status", authMiddleware, updateUserStatus);
router.put("/users/:id", authMiddleware, updateUser);

export default router;