import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createBooking,
  getMyBookings,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", authMiddleware, createBooking);

router.get("/my-bookings", authMiddleware, getMyBookings);

export default router;