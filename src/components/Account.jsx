import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaUserCircle, FaShieldAlt, FaCreditCard, FaChartLine, FaUsers, FaGem } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const API_BASE = 'http://localhost:5000/api';

const Account = () => {
  const { t } = useTranslation();
  const [authMode, setAuthMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [user, setUser] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('astro-user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      if (parsedUser.role === 'admin') {
        loadAdminData();
      }
    }
  }, []);

  const loadAdminData = async () => {
    try {
      const [dashboardRes, usersRes, paymentsRes] = await Promise.all([
        fetch(`${API_BASE}/admin/dashboard`),
        fetch(`${API_BASE}/admin/users`),
        fetch(`${API_BASE}/payments/history`),
      ]);

      const dashboardData = await dashboardRes.json();
      const usersData = await usersRes.json();
      const paymentsData = await paymentsRes.json();

      setDashboard(dashboardData);
      setUsers(usersData.users || []);
      setPayments(paymentsData.payments || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const endpoint = authMode === 'register' ? '/auth/register' : '/auth/login';
      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed');
      }

      setUser(data.user);
      localStorage.setItem('astro-user', JSON.stringify(data.user));
      setMessage(authMode === 'register' ? 'Account created successfully.' : 'Welcome back!');
      if (data.user.role === 'admin') {
        loadAdminData();
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    if (!user) return;

    try {
      const response = await fetch(`${API_BASE}/payments/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail: user.email, plan: 'Premium', amount: 2999 }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Payment failed');

      if (data.user) {
        const updatedUser = { ...user, ...data.user };
        setUser(updatedUser);
        localStorage.setItem('astro-user', JSON.stringify(updatedUser));
      }

      setMessage(`Payment completed for ${data.transaction.plan}`);
      if (user.role === 'admin') {
        loadAdminData();
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  const summaryCards = useMemo(() => {
    if (!dashboard?.summary) return [];
    return [
      { label: 'Total Users', value: dashboard.summary.totalUsers, icon: <FaUsers /> },
      { label: 'Active Users', value: dashboard.summary.activeUsers, icon: <FaShieldAlt /> },
      { label: 'Premium Users', value: dashboard.summary.premiumUsers, icon: <FaCrown /> },
      { label: 'Revenue', value: `₹${dashboard.summary.revenue}`, icon: <FaChartLine /> },
    ];
  }, [dashboard]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#1f2c4d,_#07111f_60%,_#030711)] pt-24 pb-16 px-4 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[28px] border border-amber-400/20 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Astrology Account Suite</p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{t('accountTitle') || 'Professional account portal'}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 sm:text-base font-bold text-red-400">
                प्रिय उपयोगकर्ता,

                Account सुविधा पर वर्तमान में कार्य चल रहा है। जल्द ही आप अपने व्यक्तिगत खाते के माध्यम से:

                📄 अपनी कुंडली एवं रिपोर्ट डाउनलोड कर सकेंगे।
                📅 बुक की गई पूजा एवं परामर्श की स्थिति देख सकेंगे।
                ❤️ अपनी पसंदीदा सेवाओं को सुरक्षित रख सकेंगे।
                📜 अपने ऑर्डर एवं हिस्ट्री को आसानी से प्रबंधित कर सकेंगे।

                हम इस सुविधा को बेहतर अनुभव के साथ जल्द ही उपलब्ध कराएंगे।

                आपके धैर्य और सहयोग के लिए धन्यवाद। 🙏
              </p>
            </div>
            <div className="rounded-2xl border border-amber-300/20 bg-slate-950/60 px-4 py-3 text-sm text-amber-200">
              <div className="flex items-center gap-2"><FaGem /> Secure & responsive experience</div>
            </div>
          </div>
        </motion.div>

        {!user ? (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
              <div className="flex items-center gap-3 text-amber-200">
                <FaUserCircle className="text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold">{authMode === 'login' ? 'Login to your account' : 'Create your account'}</h2>
                  <p className="text-sm text-slate-400">Elegant astrology portal access</p>
                </div>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                {authMode === 'register' && (
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                )}
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0"
                  placeholder="Email address"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0"
                  placeholder="Password"
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                {authMode === 'register' && (
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                )}
                <button type="submit" className="w-full rounded-xl bg-amber-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-300">
                  {loading ? 'Please wait...' : authMode === 'login' ? 'Login' : 'Register'}
                </button>
              </form>

              <div className="mt-4 text-sm text-slate-400">
                {authMode === 'login' ? 'New here?' : 'Already have an account?'}{' '}
                <button className="text-amber-300" onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}>
                  {authMode === 'login' ? 'Create account' : 'Login instead'}
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="rounded-[24px] border border-amber-400/20 bg-gradient-to-br from-amber-500/15 to-emerald-500/10 p-6 shadow-2xl">
              <div className="flex items-center gap-3 text-amber-200">
                <FaCreditCard className="text-2xl" />
                <div>
                  <h2 className="text-xl font-semibold">Premium astrology services</h2>
                  <p className="text-sm text-slate-400">Pay securely and unlock detailed consultations</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Premium Plan</h3>
                    <p className="text-sm text-slate-400">₹2,999 for advanced astrology reports</p>
                  </div>
                  <div className="rounded-full bg-amber-400/20 px-3 py-1 text-sm font-semibold text-amber-300">Popular</div>
                </div>
                <button onClick={handlePayment} className="mt-5 w-full rounded-xl border border-amber-300/30 bg-amber-400/10 px-4 py-3 font-semibold text-amber-200 transition hover:bg-amber-400/20">
                  Pay with UPI Apps
                </button>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Your profile</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{user.name}</h2>
                </div>
                <div className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-300">{user.role}</div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-1 font-medium text-white">{user.email}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="mt-1 font-medium text-white">{user.phone || 'Not provided'}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Plan</p>
                  <p className="mt-1 font-medium text-white">{user.plan || 'Basic'}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Status</p>
                  <p className="mt-1 font-medium text-white">{user.status || 'Active'}</p>
                </div>
              </div>

              {message && <div className="mt-6 rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">{message}</div>}

              <button onClick={() => { localStorage.removeItem('astro-user'); setUser(null); setMessage('Logged out successfully.'); }} className="mt-6 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
                Logout
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
              {user.role === 'admin' ? (
                <>
                  <div className="flex items-center gap-3 text-amber-200">
                    <FaShieldAlt className="text-2xl" />
                    <div>
                      <h2 className="text-xl font-semibold">Admin panel</h2>
                      <p className="text-sm text-slate-400">Monitor user activity and payments</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {summaryCards.map((card) => (
                      <div key={card.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2 text-amber-300">{card.icon}<span className="text-sm">{card.label}</span></div>
                        <p className="mt-3 text-2xl font-semibold text-white">{card.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white">User list</h3>
                    <div className="mt-3 space-y-2">
                      {users.map((entry) => (
                        <div key={entry.id} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="font-medium text-white">{entry.name}</p>
                            <p className="text-sm text-slate-400">{entry.email}</p>
                          </div>
                          <div className="mt-2 text-sm text-amber-200 sm:mt-0">
                            {entry.plan} • {entry.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white">Recent payments</h3>
                    <div className="mt-3 space-y-2">
                      {payments.map((entry) => (
                        <div key={entry.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-white">{entry.userEmail}</p>
                            <p className="text-sm text-amber-300">₹{entry.amount}</p>
                          </div>
                          <p className="mt-1 text-sm text-slate-400">{entry.plan} • {entry.status} • {entry.method}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <div className="flex items-center gap-3 text-amber-200">
                    <FaCreditCard className="text-2xl" />
                    <div>
                      <h2 className="text-xl font-semibold">Membership</h2>
                      <p className="text-sm text-slate-400">Upgrade your astrology experience</p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">Current plan</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{user.plan || 'Basic'}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-400">Enjoy detailed planetary insights, priority support, and premium reports.</p>
                    <button onClick={handlePayment} className="mt-5 rounded-xl bg-amber-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-300">
                      Upgrade to Premium
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;