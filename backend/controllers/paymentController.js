import razorpay from "../config/razorpay.js";
import crypto from "crypto";
import User from "../models/user.js"
import Payment from "../models/payment.js";

export const createOrder = async (req, res) => {
  try {
    const amount = 19900;

    const options = {
      amount,
      currency: "INR",
      receipt: `silver_${Date.now()}`,
      notes: {
        userId: req.userId,
        plan: "Silver",
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
      message: "Failed to create Silver order",
    });
  }
};

export const createGoldOrder = async (req, res) => {
  try {
    const amount = 49900;

    const options = {
      amount,
      currency: "INR",
      receipt: `gold_${Date.now()}`,
      notes: {
        userId: req.userId,
        plan: "Gold",
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
      message: "Failed to create Gold order",
    });
  }
};

export const verifyGoldPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
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
        message: "Invalid Signature",
      });
    }

    const order = await razorpay.orders.fetch(
      razorpay_order_id
    );

    if (
      order.amount !== 49900 ||
      order.currency !== "INR" ||
      order.notes?.userId !== req.userId ||
      order.notes?.plan !== "Gold"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid Gold Plan order",
      });
    }

    const existingPayment = await Payment.findOne({
      razorpay_payment_id,
    });

    if (existingPayment) {
      return res.status(400).json({
        success: false,
        message: "Payment already processed",
      });
    }

    await Payment.create({
      user: req.userId,
      razorpay_order_id,
      razorpay_payment_id,
      amount: 49900,
      currency: "INR",
      plan: "Gold",
      status: "Success",
      method: "Razorpay",
    });

    const goldExpiry = new Date(
      Date.now() + 3 * 24 * 60 * 60 * 1000
    );

    await User.findByIdAndUpdate(req.userId, {
      plan: "Gold",
      isPremium: true,
      goldExpiry,
    });

    res.status(200).json({
      success: true,
      message: "Gold Plan Activated Successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Gold Payment Verification Failed",
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Invalid Signature",
      });
    }
    const order = await razorpay.orders.fetch(razorpay_order_id);

    if (
      order.amount !== 19900 ||
      order.currency !== "INR" ||
      order.notes?.userId !== req.userId
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid Silver Plan order",
      });
    }

    const existingPayment = await Payment.findOne({
      razorpay_payment_id,
    });

    if (existingPayment) {
      return res.status(400).json({
        success: false,
        message: "Payment already processed",
      });
    }

    await Payment.create({
      user: req.userId,
      razorpay_order_id,
      razorpay_payment_id,
      amount: 19900,
      currency: "INR",
      plan: "Silver",
      status: "Success",
      method: "Razorpay",
    });

    const premiumExpiry = new Date(
      Date.now() + 24 * 60 * 60 * 1000
    );

    await User.findByIdAndUpdate(req.userId, {
      plan: "Silver",
      isPremium: true,
      premiumExpiry,
    });

    res.status(200).json({
      success: true,
      message: "Payment Verified Successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Payment Verification Failed",
    });
  }
};

export const getPaymentHistory = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      payments,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch payment history",
    });
  }
};