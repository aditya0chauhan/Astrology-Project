import User from "../models/user.js";

export const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const activeUsers = await User.countDocuments({
      status: "Active",
    });

    const silverUsers = await User.countDocuments({
      plan: "Silver",
    });

    const goldUsers = await User.countDocuments({
      plan: "Gold",
    });

    res.json({
      summary: {
        totalUsers,
        activeUsers,
        silverUsers,
        goldUsers,
        revenue: 0,
      },
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json(users);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const updateUserPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const { plan } = req.body;

    const allowedPlans = ["Basic", "Silver", "Gold"];

    if (!allowedPlans.includes(plan)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Plan",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.plan = plan;

    user.isPremium = plan === "Silver" || plan === "Gold";

    if (plan === "Basic") {
      user.isPremium = false;
      user.premiumExpiry = null;
      user.goldExpiry = null;
    }

    if (plan === "Silver") {
      user.goldExpiry = null;
    }

    if (plan === "Gold") {
      user.premiumExpiry = null;
    }

    await user.save();

    res.json({
      success: true,
      message: "Plan updated successfully",
      user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatus = [
      "Active",
      "Suspended",
      "Blocked",
    ];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Status",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.status = status;

    await user.save();

    res.json({
      success: true,
      message: "Status updated successfully",
      user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { plan, status } = req.body;

    const allowedPlans = ["Basic", "Premium"];
    const allowedStatus = ["Active", "Suspended", "Blocked"];

    if (!allowedPlans.includes(plan)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Plan",
      });
    }

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Status",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.plan = plan;
    user.status = status;
    user.isPremium = plan === "Premium";

    await user.save();

    res.json({
      success: true,
      message: "User updated successfully",
      user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};