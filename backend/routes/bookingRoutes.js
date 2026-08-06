import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {createBooking,getMyBookings,getAllBookings,updateBookingStatus,} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", authMiddleware, createBooking);

router.get("/my-bookings", authMiddleware, getMyBookings);

router.get("/all", authMiddleware, getAllBookings);

router.put("/:id/status", authMiddleware, updateBookingStatus);

export default router;