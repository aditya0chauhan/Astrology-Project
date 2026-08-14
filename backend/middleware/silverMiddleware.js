import User from "../models/user.js";

const silverMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select("plan");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.plan !== "Silver") {
      return res.status(403).json({
        success: false,
        message: "Silver plan required",
      });
    }

    next();
  } catch (error) {
    console.error("Silver Middleware Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to verify plan",
    });
  }
};

export default silverMiddleware;