import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

export const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

export const users = [
  {
    id: 1,
    name: 'Admin Astro',
    email: 'admin@astrology.com',
    password: 'admin123',
    role: 'admin',
    phone: '+91 98765 43210',
    plan: 'Premium',
    status: 'Active',
    joinedAt: '2026-01-10',
  },
  {
    id: 2,
    name: 'Aarav Sharma',
    email: 'user@astrology.com',
    password: 'user123',
    role: 'user',
    phone: '+91 91234 56789',
    plan: 'Basic',
    status: 'Active',
    joinedAt: '2026-06-20',
  },
];

export const payments = [
  {
    id: 'pay_1001',
    userEmail: 'admin@astrology.com',
    plan: 'Premium',
    amount: 2999,
    status: 'Paid',
    method: 'Razorpay Mock Gateway',
    createdAt: '2026-07-15T10:00:00Z',
  },
];

export const sanitizeUser = ({ password, ...rest }) => rest;

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'astrology-account-backend' });
});

app.post('/api/auth/register', (req, res) => {
  const { name, email, password, role = 'user', phone = '' } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required.' });
  }

  const existingUser = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists.' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
    role: role === 'admin' ? 'admin' : 'user',
    phone,
    plan: 'Basic',
    status: 'Active',
    joinedAt: new Date().toISOString().split('T')[0],
  };

  users.push(newUser);
  res.status(201).json({ user: sanitizeUser(newUser) });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = users.find(
    (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password,
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  res.json({ user: sanitizeUser(user) });
});

app.get('/api/admin/dashboard', (_req, res) => {
  const activeUsers = users.filter((user) => user.status === 'Active').length;
  const premiumUsers = users.filter((user) => user.plan === 'Premium').length;
  const revenue = payments.reduce((sum, entry) => sum + entry.amount, 0);

  res.json({
    summary: {
      totalUsers: users.length,
      activeUsers,
      premiumUsers,
      revenue,
    },
    recentPayments: payments.slice(-3).reverse(),
  });
});

app.get('/api/admin/users', (_req, res) => {
  res.json({ users: users.map((user) => sanitizeUser(user)) });
});

app.post('/api/payments/checkout', (req, res) => {
  const { userEmail, plan = 'Premium', amount = 2999 } = req.body || {};

  if (!userEmail) {
    return res.status(400).json({ message: 'User email is required.' });
  }

  const transaction = {
    id: `pay_${Date.now()}`,
    userEmail,
    plan,
    amount: Number(amount),
    status: 'Paid',
    method: 'Razorpay Mock Gateway',
    createdAt: new Date().toISOString(),
  };

  payments.push(transaction);

  const matchedUser = users.find((entry) => entry.email.toLowerCase() === String(userEmail).toLowerCase());
  if (matchedUser) {
    matchedUser.plan = plan;
    matchedUser.status = 'Active';
  }

  res.json({
    success: true,
    transaction,
    user: matchedUser ? sanitizeUser(matchedUser) : null,
    gatewayUrl: `https://pay.example.com/checkout/${transaction.id}`,
  });
});

app.get('/api/payments/history', (_req, res) => {
  res.json({ payments });
});

const isEntryPoint = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isEntryPoint) {
  app.listen(PORT, () => {
    console.log(`Astrology account backend running on port ${PORT}`);
  });
}
