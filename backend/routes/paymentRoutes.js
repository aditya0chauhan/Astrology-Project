import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import { createOrder, verifyPayment, createGoldOrder, verifyGoldPayment, getPaymentHistory } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/create-order", authMiddleware, createOrder);
router.post("/verify-payment", authMiddleware, verifyPayment);
router.get("/history", authMiddleware, adminMiddleware, getPaymentHistory);

router.post("/create-gold-order", authMiddleware, createGoldOrder);
router.post("/verify-gold-payment", authMiddleware, verifyGoldPayment);

export default router;