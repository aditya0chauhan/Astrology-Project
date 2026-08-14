import "dotenv/config";
import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import astroRoutes from "./routes/astroRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";

connectDB();

export const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/astro", astroRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/location", locationRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'astrology-account-backend' });
});

const isEntryPoint = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isEntryPoint) {
  app.listen(PORT, () => {
    console.log(`Astrology account backend running on port ${PORT}`);
  });
}
