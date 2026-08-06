

import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const API_BASE =
    import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const services = [
    "Shravan Maas Poojan",
    "Astrology consultation",
    "Kundali Milan consultation",
    "Dosh/Dasha consultation",
    "Numerology consultation",
    "Vastu Consultation",
    "Lal Kitab Consultation",
    "HastLikhit Kundali",
    "Kaalsarp Dosh Poojan & Consultation",
    "KP Astrology Consultation",
    "Baby Name Selection Consultation",
    "Gemstone Recommendation",
    "Mangal Dosh Removal poojan & Consultation",
    "Pitra Dosh Removal Poojan & Consultation",
    "Mahamrityunjaya Poojan & Consultation",
    "Gopan Poojan & Consultation to Get a child",
    "Nagbali Poojan & Consultation",
    "Early Marriage Poojan & Consultation",
    "Victory in a Lawsuit Poojan & Consultation",
];

export default function Appointment() {
    const location = useLocation();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const initialService = useMemo(
        () => location.state?.service || "",
        [location]
    );

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        service: initialService,
        bookingDate: "",
        bookingTime: "",
        message: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("astro-token");

        if (!token) {
            alert("Please login first.");
            navigate("/account");
            return;
        }

        if (
            !form.name ||
            !form.phone ||
            !form.email ||
            !form.service ||
            !form.bookingDate ||
            !form.bookingTime
        ) {
            setMessage("Please fill all required fields.");
            return;
        }

        try {
            setLoading(true);
            setMessage("");

            const response = await fetch(`${API_BASE}/bookings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Booking Failed");
            }

            setMessage("✅ Appointment booked successfully.");

            setForm({
                name: "",
                phone: "",
                email: "",
                service: initialService,
                bookingDate: "",
                bookingTime: "",
                message: "",
            });
        } catch (error) {
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    const today = new Date().toISOString().split("T")[0];

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);

    const lastBookingDate = maxDate.toISOString().split("T")[0];

    return (
        <div className="min-h-screen mt-18 bg-gradient-to-b from-[#050d19] via-[#0b1627] to-[#07111f] text-white">
            <section className="mx-auto max-w-6xl px-5 py-12">
                <div className="mb-10 rounded-3xl border border-amber-400/30 bg-[#0d1628]/90 p-8 text-center shadow-2xl">
                    <h1 className="text-4xl font-bold text-amber-400 md:text-5xl">
                        🔱 Book Astrology Consultation
                    </h1>
                    <p className="mt-4 text-gray-300">
                        Personalized guidance • Secure booking • Trusted Vedic Astrology
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {[
                            "100% Secure Booking",
                            "Experienced Astrologer",
                            "Fast Confirmation",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-amber-400/20 bg-[#101d33] p-4"
                            >
                                <p className="font-semibold text-amber-300">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 rounded-3xl border border-amber-400/20 bg-[#0d1628] p-8 shadow-xl">
                        <h2 className="mb-6 text-2xl font-bold text-amber-400">
                            Appointment Details
                        </h2>


                        {message && (
                            <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center text-green-300">
                                {message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <input name="name" value={form.name} onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full rounded-xl border border-slate-700 bg-[#15233b] p-4" />

                            <input name="phone" value={form.phone} onChange={handleChange}
                                placeholder="Mobile Number"
                                className="w-full rounded-xl border border-slate-700 bg-[#15233b] p-4" />

                            <input name="email" value={form.email} onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full rounded-xl border border-slate-700 bg-[#15233b] p-4" />

                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-700 bg-[#15233b] p-4"
                            >
                                <option value="">Select Service</option>
                                {services.map((s) => (
                                    <option key={s}>{s}</option>
                                ))}
                            </select>

                            <div className="">

                                <div className="w-full">
                                    <label className="mb-2 block text-sm font-medium text-amber-300 my-3">
                                        Booking Date
                                    </label>

                                    <input
                                        type="date"
                                        name="bookingDate"
                                        value={form.bookingDate}
                                        onChange={handleChange}
                                        min={today}
                                        max={lastBookingDate}
                                        className="rounded-xl border border-slate-700 bg-[#15233b] p-4 min-w-full"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-amber-300 mt-5">
                                        Booking Time
                                    </label>

                                    <input
                                        type="time"
                                        name="bookingTime"
                                        value={form.bookingTime}
                                        onChange={handleChange}
                                        className="rounded-xl border border-slate-700 bg-[#15233b] p-4 min-w-full"
                                    />
                                </div>
                            </div>

                            <textarea
                                rows="5"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="optional"
                                className="w-full rounded-xl border border-slate-700 bg-[#15233b] p-4"
                            />

                            <button
                                disabled={loading}
                                className="w-full rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 py-4 text-lg font-bold text-black transition hover:scale-[1.02] disabled:opacity-60"
                            >
                                {loading ? "Booking..." : "Book Appointment"}
                            </button>
                            <p className="text-center text-sm text-gray-400">
                                Your booking will be confirmed after our team contacts you.
                            </p>
                        </form>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-3xl border border-amber-400/20 bg-[#0d1628] p-6">
                            <h3 className="mb-4 text-xl font-bold text-amber-400">
                                Why Choose Us?
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>✔ Accurate Vedic Analysis</li>
                                <li>✔ Personalized Solutions</li>
                                <li>✔ Complete Privacy</li>
                                <li>✔ Online & Offline Consultation</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6">
                            <h3 className="text-xl font-bold text-emerald-300">
                                Need Help?
                            </h3>
                            <p className="mt-3 text-sm text-gray-300">
                                After booking, our team will contact you to confirm your
                                consultation schedule.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
