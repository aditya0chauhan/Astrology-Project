import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    razorpay_order_id: {
      type: String,
      required: true,
      unique: true,
    },

    razorpay_payment_id: {
      type: String,
      required: true,
      unique: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "INR",
    },

    plan: {
      type: String,
      enum: ["Silver", "Gold"],
      default: "Silver",
    },
    status: {
      type: String,
      enum: ["Pending", "Success", "Failed"],
      default: "Success",
    },

    method: {
      type: String,
      default: "Razorpay",
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;