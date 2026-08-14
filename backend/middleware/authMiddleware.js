import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided",
      });
    }


    const token = authHeader.split(" ")[1];

    // Token Verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // User ki ID request me save karo
    req.userId = decoded.id;

    next();
  } catch (error) {
      console.log(error);
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

export default authMiddleware;