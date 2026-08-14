import Booking from "../models/Booking.js";
import razorpay from "../config/razorpay.js";
import crypto from "crypto";

const SERVICE_PRICES = {
  "Shravan Maas Poojan": 1999,
  "Astrology consultation": 250,
  "Vastu consultation": 500,
  "Numerology consultation": 799,
  "Dosh & Dasha Consultation" : 250,
  "Lal Kitab Consultation": 999,
  "KP Astrology Consultation": 250,
  "Baby Name Selection Consultation":501,
  "Ratna Consultation": 1100,
  "Rudraksha Consultation": 499,
  "HastLikhit Kundali": 11000,
  "Kaalsarp Dosh Poojan (Ujjain)": 11000,
  "Kaalsarp Dosh Poojan + Rudrabhishek (Lohargal)": 25000,
  "Kaalsarp Dosh Poojan + Rudrabhishek (Kirodi)": 27500,
  "Kaalsarp Dosh Poojan + Rudrabhishek (Kadamkund)": 31000,
  "Mangal Dosh Consultation & poojan  ": 11000,
  "Pitra Dosh Removal Consultation & Poojan ": 15000,
  "Mahamrityunjaya Poojan": 51000,
  "Mahamrityunjaya Rudrabhishek Anusthan": 81000,
  "Santan Prapti Gopal Anusthan": 125000,
  "Nagbali Poojan ": 21000,
  "Shigrah Vivah Poojan": 71000,
  "Mukdama Vijay Austhan": 151000,
  "Navratri Poojan ":11000,
  "Shat-chandi poojan":151000,
  "Vastu Dosh Niwaran Poojan (siddh yantra, sampurn kit)" :7100,
  "Vastu Dosh Niwaran Poojan (personal solution)" :3100,
  "Vastu Dosh Niwaran Poojan (Navakalash)" :31000,
  "Vastu Dosh Niwaran Navakalash Poojan (Rajasthan) " :21000,
  "Vastu Dosh Niwaran Saptdivasia Poojan " :61000,
  "Vastu Dosh Niwaran Saptdivasia Poojan (Rajasthan)" :51000,

};

export const createBookingOrder = async (req, res) => {
  try {
    const { service } = req.body;

    const amount = SERVICE_PRICES[service];

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Invalid service selected",
      });
    }

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `booking_${Date.now()}`,
      notes: {
        userId: req.userId,
        service,
      },
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create booking order",
    });
  }
};

export const verifyBookingPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingData,
    } = req.body;

    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Invalid Payment Signature",
      });
    }

    const order = await razorpay.orders.fetch(
      razorpay_order_id
    );

    if (
      order.notes?.userId !== req.userId ||
      order.currency !== "INR"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid Booking Payment",
      });
    }

    const amount = SERVICE_PRICES[bookingData.service];

    if (!amount || order.amount !== amount * 100) {
      return res.status(400).json({
        success: false,
        message: "Invalid Booking Amount",
      });
    }

    const existingBooking = await Booking.findOne({
      razorpay_payment_id,
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: "Payment already processed",
      });
    }

    const booking = await Booking.create({
      user: req.userId,
      name: bookingData.name,
      phone: bookingData.phone,
      email: bookingData.email,
      service: bookingData.service,
      bookingDate: bookingData.bookingDate,
      bookingTime: bookingData.bookingTime,
      message: bookingData.message || "",
      amount,
      paymentStatus: "Success",
      razorpay_order_id,
      razorpay_payment_id,
      status: "Pending",
    });

    res.status(200).json({
      success: true,
      message: "Payment verified and booking created",
      booking,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Booking payment verification failed",
    });
  }
};

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

    const amount = SERVICE_PRICES[service];

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Invalid service selected",
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

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

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

export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatus = [
      "Pending",
      "Confirmed",
      "Completed",
      "Cancelled",
    ];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Booking Status",
      });
    }

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.status = status;

    await booking.save();

    res.json({
      success: true,
      message: "Booking status updated successfully",
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