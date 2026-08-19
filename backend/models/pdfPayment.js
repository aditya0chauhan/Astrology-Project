import mongoose from "mongoose";

const pdfPaymentSchema = new mongoose.Schema(
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

    reportId: {
      type: String,
      required: true,
    },

    reportTitle: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "INR",
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

const PdfPayment = mongoose.model("PdfPayment", pdfPaymentSchema);

export default PdfPayment;