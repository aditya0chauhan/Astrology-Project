import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      service,
      bookingDate,
      bookingTime,
      message,
    } = req.body;

    // Validation
    if (
      !name ||
      !phone ||
      !email ||
      !service ||
      !bookingDate ||
      !bookingTime
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const booking = await Booking.create({
      user: req.userId,
      name,
      phone,
      email,
      service,
      bookingDate,
      bookingTime,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Booking Created Successfully",
      booking,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.userId,
    }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};