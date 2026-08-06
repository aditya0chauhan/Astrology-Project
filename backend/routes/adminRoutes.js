import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import { getDashboard, getUsers, updateUserPlan, updateUserStatus, updateUser } from "../controllers/adminController.js";

const router = express.Router();
router.get(
    "/dashboard",
    authMiddleware,
    adminMiddleware,
    getDashboard
);

router.get(
    "/users",
    authMiddleware,
    adminMiddleware,
    getUsers
);

router.put(
    "/users/:id/plan",
    authMiddleware,
    adminMiddleware,
    updateUserPlan
);

router.put(
    "/users/:id/status",
    authMiddleware,
    adminMiddleware,
    updateUserStatus
);

router.put(
    "/users/:id",
    authMiddleware,
    adminMiddleware,
    updateUser
);

export default router;