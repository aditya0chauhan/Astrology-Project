import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },

    password: {
      type: String,
      required: true,
    },

    verificationToken: {
      type: String,
      default: null,
    },

    phone: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    plan: {
      type: String,
      default: "Basic",
    },

    isPremium: {
      type: Boolean,
      default: false,
    },

    premiumExpiry: {
      type: Date,
      default: null,
    },

    purchasedReports: [
      {
        reportType: String,
        purchasedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    status: {
      type: String,
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;