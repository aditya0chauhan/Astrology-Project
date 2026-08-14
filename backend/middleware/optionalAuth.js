import jwt from "jsonwebtoken";

const optionalAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Token nahi hai → user ko allow karo
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      req.userId = null;
      return next();
    }

    const token = authHeader.split(" ")[1];

    // Token verify
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Tumhare authMiddleware mein bhi decoded.id use ho raha hai
    req.userId = decoded.id;

    next();
  } catch (error) {
    // Invalid/expired token → public user ki tarah allow
    req.userId = null;
    next();
  }
};

export default optionalAuth;