import User from "../models/user.js";

export const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const activeUsers = await User.countDocuments({
      status: "Active",
    });

    const premiumUsers = await User.countDocuments({
      plan: "Premium",
    });

    res.json({
      summary: {
        totalUsers,
        activeUsers,
        premiumUsers,
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