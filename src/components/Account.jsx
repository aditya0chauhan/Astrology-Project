import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaUserCircle, FaShieldAlt, FaCreditCard, FaChartLine, FaUsers, FaGem, FaEye, FaEyeSlash, } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Premium from './Premium/Premium';

const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Account = () => {
  const { t } = useTranslation();
  const [authMode, setAuthMode] = useState('login');
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", phone: "", });
  const [user, setUser] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [users, setUsers] = useState([]);

  const isSilverActive =
    user?.plan === "Silver" &&
    user?.premiumExpiry &&
    new Date(user.premiumExpiry) > new Date();

  const isGoldActive =
    user?.plan === "Gold" &&
    user?.goldExpiry &&
    new Date(user.goldExpiry) > new Date();

  const isPremiumActive = isSilverActive || isGoldActive;

  const [payments, setPayments] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [myBookings, setMyBookings] = useState([]);
  const [selectedBookingStatus, setSelectedBookingStatus] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedPlans, setSelectedPlans] = useState({});
  const [selectedStatus, setSelectedStatus] = useState({});

  const loadProfile = async () => {
    try {
      const token = localStorage.getItem("astro-token");

      if (!token) return;

      const response = await fetch(`${API_BASE}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to load profile");
      }

      const data = await response.json();

      setUser(data.user);
      localStorage.setItem("astro-user", JSON.stringify(data.user));

      if (data.user.role === "admin") {
        loadAdminData();
      } else {
        loadMyBookings();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("astro-token");

    if (token) {
      loadProfile();
    }
  }, []);

  const loadAdminData = async () => {
    try {
      const token = localStorage.getItem("astro-token");

      const [dashboardRes, usersRes, bookingsRes, paymentsRes] = await Promise.all([
        fetch(`${API_BASE}/admin/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),

        fetch(`${API_BASE}/admin/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),

        fetch(`${API_BASE}/bookings/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),

        fetch(`${API_BASE}/payments/history`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      const dashboardData = await dashboardRes.json();
      const usersData = await usersRes.json();
      const bookingsData = await bookingsRes.json();
      const paymentsData = await paymentsRes.json();

      setDashboard(dashboardData);

      // Backend getUsers() res.json(users) return karta hai
      setUsers(usersData);
      setBookings(bookingsData.bookings || []);

      setPayments(paymentsData.payments || []);
    } catch (error) {
      console.error(error);
    }
  };
  const loadMyBookings = async () => {
    try {
      const token = localStorage.getItem("astro-token");

      const response = await fetch(`${API_BASE}/bookings/my-bookings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to load bookings");
      }

      setMyBookings(data.bookings || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    if (authMode === "register") {
      if (form.password !== form.confirmPassword) {
        setMessage("Passwords dosen't match");
        setLoading(false);
        return;
      }
    }

    try {
      const endpoint =
        authMode === "register"
          ? "/auth/register"
          : "/auth/login";

      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      setUser(data.user);
      localStorage.setItem("astro-user", JSON.stringify(data.user));

      if (data.token) {
        localStorage.setItem("astro-token", data.token);
      }

      setMessage(
        authMode === "register"
          ? "Account created successfully."
          : "Welcome back!"
      );
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      });

      if (data.user?.role === "admin") {
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
      setLoading(true);

      const token = localStorage.getItem("astro-token");

      // 1. Create Razorpay Order
      const orderResponse = await fetch(
        `${API_BASE}/payments/create-order`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(
          orderData.message || "Failed to create payment order"
        );
      }

      // 2. Open Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: orderData.order.amount,
        currency: orderData.order.currency,

        name: "Manoj Astro",
        description: "Silver Plan - 24 Hours",

        order_id: orderData.order.id,

        handler: async function (response) {

          // 3. Verify Payment on Backend
          const verifyResponse = await fetch(
            `${API_BASE}/payments/verify-payment`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            }
          );

          const verifyData = await verifyResponse.json();

          if (!verifyResponse.ok) {
            throw new Error(
              verifyData.message || "Payment verification failed"
            );
          }

          setMessage("🎉 Silver Plan activated for 24 hours!");

          // Refresh profile
          await loadProfile();
        },

        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phone || "",
        },

        theme: {
          color: "#fbbf24",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {
      console.error(error);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePlan = async (userId) => {
    try {
      const token = localStorage.getItem("astro-token");

      const response = await fetch(
        `${API_BASE}/admin/users/${userId}/plan`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            plan: selectedPlans[userId],
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update plan");
      }

      alert("✅ Plan updated successfully");

      loadAdminData();

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleUpdateStatus = async (userId) => {
    try {
      const token = localStorage.getItem("astro-token");

      const response = await fetch(
        `${API_BASE}/admin/users/${userId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status: selectedStatus[userId],
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update status");
      }

      alert("✅ Status updated successfully");

      loadAdminData();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleUpdateBookingStatus = async (bookingId) => {
    try {
      const token = localStorage.getItem("astro-token");

      const response = await fetch(
        `${API_BASE}/bookings/${bookingId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status: selectedBookingStatus[bookingId],
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update booking");
      }

      alert("✅ Booking status updated successfully");

      loadAdminData();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleSaveUser = async (userId) => {
    try {
      const token = localStorage.getItem("astro-token");

      const response = await fetch(
        `${API_BASE}/admin/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            plan: selectedPlans[userId] || users.find(u => u._id === userId)?.plan,
            status: selectedStatus[userId] || users.find(u => u._id === userId)?.status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update user");
      }

      alert("✅ User updated successfully");

      loadAdminData();

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const summaryCards = useMemo(() => {
    if (!dashboard?.summary) return [];

    return [
      {
        label: "Total Users",
        value: dashboard.summary.totalUsers,
        icon: <FaUsers />,
      },
      {
        label: "Active Users",
        value: dashboard.summary.activeUsers,
        icon: <FaShieldAlt />,
      },
      {
        label: "Silver Users",
        value: dashboard.summary.silverUsers,
        icon: <FaCrown />,
      },
      {
        label: "Gold Users",
        value: dashboard.summary.goldUsers,
        icon: <FaGem />,
      },
      {
        label: "Revenue",
        value: `₹${dashboard.summary.revenue}`,
        icon: <FaChartLine />,
      },
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

            </div>
            <div className="rounded-2xl border border-amber-300/20 bg-slate-950/60 px-4 py-3 text-sm text-amber-200">
              <div className="flex items-center gap-2"><FaGem /> Secure & responsive experience</div>
            </div>
          </div>
        </motion.div>

        {!user ? (
          <div className="w-full grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
              <div className="w-full flex items-center gap-3 text-amber-200">
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
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value.toLowerCase().trim(), })
                  }
                />
                <div className="relative">
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 pr-12 outline-none ring-0"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {authMode === "register" && (
                  <div className="relative">
                    <input
                      className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 pr-12 outline-none ring-0"
                      placeholder="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={form.confirmPassword}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          confirmPassword: e.target.value,
                        })
                      }
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                )}
                {authMode === 'register' && (
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                )}
                <button type="submit" disabled={loading}
                  className={`w-full rounded-xl px-4 py-3 font-semibold transition 
                ${loading ? "bg-gray-500 cursor-not-allowed text-white" : "bg-amber-400 hover:bg-amber-300 text-slate-950"}`}
                >
                  {loading
                    ? "Please Wait..."
                    : authMode === "login"
                      ? "Login"
                      : "Register"}
                </button>
              </form>

              {message && (
                <div
                  className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${message.toLowerCase().includes("success") ||
                    message.toLowerCase().includes("welcome")
                    ? "bg-green-500/20 border border-green-500 text-green-300"
                    : "bg-red-500/20 border border-red-500 text-red-300"
                    }`}
                >
                  {message}
                </div>
              )}

              <div className="mt-4 text-sm text-slate-400">
                {authMode === 'login' ? 'New here?' : 'Already have an account?'}{' '}
                <button className="text-amber-300" onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}>
                  {authMode === 'login' ? 'Create account' : 'Login instead'}
                </button>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="grid w-full min-w-0 gap-6 xl:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.65fr)]">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Your profile</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{user.name}</h2>
                </div>
                <div className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-300">{user.role}</div>
              </div>

              <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2">

                <div className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Email</p>

                  <p className="mt-1 break-all text-sm font-medium text-white sm:text-base">
                    {user.email}
                  </p>
                </div>

                <div className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Phone</p>

                  <p className="mt-1 break-words font-medium text-white">
                    {user.phone || "Not provided"}
                  </p>
                </div>

                <div className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Plan</p>

                  <p className="mt-1 font-medium text-white">
                    {isGoldActive
                      ? "Gold"
                      : isSilverActive
                        ? "Silver"
                        : "Basic"}
                  </p>
                </div>

                <div className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Status</p>

                  <p className="mt-1 break-words font-medium text-white">
                    {user.status || "Active"}
                  </p>
                </div>

              </div>

              {message && <div className="mt-6 rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">{message}</div>}

              <button
                onClick={() => {
                  localStorage.removeItem('astro-user');
                  localStorage.removeItem("astro-token");
                  setUser(null);
                  setMessage('Logged out successfully.');
                }}
                className="mt-6 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
                Logout
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="min-w-0 w-full rounded-[24px] border border-white/10 bg-slate-950/70 p-5 sm:p-6 lg:p-8 shadow-2xl overflow-hidden"
            >
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
                        <div
                          key={entry._id}
                          className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-[1fr_auto_auto] md:items-center"
                        >
                          <div className="min-w-0">
                            <p className="font-medium text-white">
                              {entry.name}
                            </p>

                            <p className="break-all text-sm text-slate-400">
                              {entry.email}
                            </p>

                            <p className="mt-1 text-xs text-slate-500 break-all">
                              ID: {entry._id}
                            </p>

                            {entry.plan === "Silver" && entry.premiumExpiry && (
                              <p className="mt-1 text-xs text-amber-300">
                                Silver Expiry:{" "}
                                {new Date(entry.premiumExpiry).toLocaleString("en-IN")}
                              </p>
                            )}

                            {entry.plan === "Gold" && entry.goldExpiry && (
                              <p className="mt-1 text-xs text-yellow-300">
                                Gold Expiry:{" "}
                                {new Date(entry.goldExpiry).toLocaleString("en-IN")}
                              </p>
                            )}

                            {entry.plan === "Basic" && (
                              <p className="mt-1 text-xs text-slate-500">
                                No active premium plan
                              </p>
                            )}
                          </div>
                          <div className="mt-3 flex flex-col gap-2 sm:mt-0 sm:items-end">

                            <select value={selectedPlans[entry._id] || entry.plan}
                              onChange={(e) => setSelectedPlans({ ...selectedPlans, [entry._id]: e.target.value, })
                              }
                              className="rounded-lg bg-slate-900 border border-white/10 px-3 py-2 text-white"
                            >
                              <option value="Basic">Basic</option>
                              <option value="Silver">Silver</option>
                              <option value="Gold">Gold</option>
                            </select>

                            <select
                              value={selectedStatus[entry._id] || entry.status}
                              onChange={(e) =>
                                setSelectedStatus({
                                  ...selectedStatus,
                                  [entry._id]: e.target.value,
                                })
                              }
                              className="rounded-lg bg-slate-900 border border-white/10 px-2 py-2 text-white"
                            >
                              <option value="Active">Active</option>
                              <option value="Suspended">Suspended</option>
                              <option value="Blocked">Blocked</option>
                            </select>

                          </div>
                          <button
                            onClick={() => handleSaveUser(entry._id)}
                            className=" mt-5 lg:mt-0 rounded-lg bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
                          >
                            Save
                          </button>

                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white">Bookings</h3>
                    <div className="mt-3 space-y-2">
                      {bookings.map((booking) => (
                        <div
                          key={booking._id}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                          <p className="font-semibold text-white">
                            {booking.name}
                          </p>

                          <p className="text-sm text-slate-400">
                            {booking.email}
                          </p>

                          <p className="mt-2 text-sm text-amber-300">
                            Service : {booking.service}
                          </p>

                          <p className="text-sm text-slate-300">
                            Date : {booking.bookingDate}
                          </p>

                          <p className="text-sm text-slate-300">
                            Time : {booking.bookingTime}
                          </p>

                          <select
                            value={selectedBookingStatus[booking._id] || booking.status}
                            onChange={(e) =>
                              setSelectedBookingStatus({
                                ...selectedBookingStatus,
                                [booking._id]: e.target.value,
                              })
                            }
                            className="mt-3 rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                          <button
                            onClick={() => handleUpdateBookingStatus(booking._id)}
                            className="mt-3 rounded-lg bg-amber-400 px-3 py-2 ml-10 text-sm font-semibold text-slate-900 hover:bg-amber-300"
                          >
                            Save
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white">
                      Recent payments
                    </h3>

                    <div className="mt-3 space-y-3">
                      {payments.length === 0 ? (
                        <p className="text-slate-400">No payments found.</p>
                      ) : (
                        payments.map((entry) => (
                          <div
                            key={entry._id}
                            className="rounded-2xl border border-white/10 bg-white/5 p-4"
                          >
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                              <div className="min-w-0">
                                <p className="font-semibold text-white break-words">
                                  {entry.user?.name || "Unknown User"}
                                </p>

                                <p className="text-sm text-slate-400 break-all">
                                  {entry.user?.email || "No email"}
                                </p>
                              </div>

                              <div className="text-left sm:text-right">
                                <p className="text-lg font-bold text-amber-300">
                                  ₹{entry.amount / 100}
                                </p>

                                <p className="text-sm text-green-300">
                                  {entry.status}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4 grid gap-2 text-sm text-slate-300">

                              <p className="break-all">
                                <span className="text-slate-500">Payment ID:</span>{" "}
                                {entry.razorpay_payment_id || "N/A"}
                              </p>

                              <p className="break-all">
                                <span className="text-slate-500">Order ID:</span>{" "}
                                {entry.razorpay_order_id || "N/A"}
                              </p>

                              <p>
                                <span className="text-slate-500">Plan:</span>{" "}
                                {entry.plan}
                              </p>

                              <p>
                                <span className="text-slate-500">Method:</span>{" "}
                                {entry.method}
                              </p>

                              <p>
                                <span className="text-slate-500">Date:</span>{" "}
                                {entry.createdAt
                                  ? new Date(entry.createdAt).toLocaleString("en-IN")
                                  : "N/A"}
                              </p>

                            </div>
                          </div>
                        ))
                      )}
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
                  <div className="my-6 w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                    <p className="text-sm text-slate-400">Current plan</p>
                    <p className="mt-2 break-words text-2xl font-semibold text-white">{user.plan || 'Basic'}</p>
                    <p className="my-3 break-words text-sm leading-7 text-slate-400">
                      {isGoldActive
                        ? "You are currently on the Gold plan. You have access to Silver and Gold premium features."
                        : isSilverActive
                          ? "You are currently on the Silver plan. You have access to detailed astrology reports and premium features."
                          : "You are currently on the Basic plan. Upgrade to unlock premium astrology features."
                      }
                    </p>

                    {!isPremiumActive && (
                      <Premium user={user}>
                        <div className="rounded-2xl border border-green-500 bg-green-500/10 p-2">
                          <h2 className="text-xl font-bold text-green-300">
                            🎉 Premium Content Unlocked
                          </h2>

                          <p className="mt-2 text-slate-300">
                            Congratulations! Only Premium users can see this section.
                          </p>
                        </div>
                      </Premium>
                    )}
                  </div>
                  <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
                    <h2 className="text-2xl font-bold text-white">
                      📅 My Bookings
                    </h2>

                    <div className="mt-4 space-y-3">
                      {myBookings.length === 0 ? (
                        <p className="text-slate-400">
                          You haven't booked any appointment yet.
                        </p>
                      ) : (
                        myBookings.map((booking) => (
                          <div
                            key={booking._id}
                            className="rounded-2xl border border-white/10 bg-slate-900/40 p-4"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white">
                                {booking.service}
                              </h3>

                              <span
                                className={`rounded-full px-3 py-1 text-sm font-medium
            ${booking.status === "Pending"
                                    ? "bg-yellow-500/20 text-yellow-300"
                                    : booking.status === "Confirmed"
                                      ? "bg-blue-500/20 text-blue-300"
                                      : booking.status === "Completed"
                                        ? "bg-green-500/20 text-green-300"
                                        : "bg-red-500/20 text-red-300"
                                  }`}
                              >
                                {booking.status}
                              </span>
                            </div>

                            <div className="mt-3 grid gap-2 text-sm text-slate-300">
                              <p>
                                📅 <strong>Date:</strong> {booking.bookingDate}
                              </p>

                              <p>
                                🕒 <strong>Time:</strong> {booking.bookingTime}
                              </p>

                              <p>
                                📧 <strong>Email:</strong> {booking.email}
                              </p>

                              <p>
                                📞 <strong>Phone:</strong> {booking.phone}
                              </p>

                              {booking.message && (
                                <p>
                                  💬 <strong>Message:</strong> {booking.message}
                                </p>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
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