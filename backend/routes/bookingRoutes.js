import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {  createBookingOrder,  verifyBookingPayment,  getMyBookings,  getAllBookings,  updateBookingStatus,} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/create-order", authMiddleware, createBookingOrder);

router.post("/verify-payment", authMiddleware, verifyBookingPayment);

router.get("/my-bookings", authMiddleware, getMyBookings);

router.get("/all", authMiddleware, getAllBookings);

router.put("/:id/status", authMiddleware, updateBookingStatus);

export default router;