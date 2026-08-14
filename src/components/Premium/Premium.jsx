import { useState } from "react";
import { API_BASE } from "../../config/api";
import { useNavigate } from "react-router-dom";

const Premium = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handlePayment = async (plan) => {
        const token = localStorage.getItem("astro-token");

        if (!token) {
            navigate("/account");
            return;
        }

        try {
            setLoading(true);

            // 1. Create Order
            const orderResponse = await fetch(
                `${API_BASE}/payments/${
                    plan === "Gold"
                        ? "create-gold-order"
                        : "create-order"
                }`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await orderResponse.json();

            if (
                !orderResponse.ok ||
                !data.success ||
                !data.order?.id
            ) {
                throw new Error(
                    data.message || "Unable to create order for payment"
                );
            }

            if (!window.Razorpay) {
                throw new Error("Razorpay checkout failed to load");
            }

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,

                amount: data.order.amount,
                currency: data.order.currency,

                name: "Manoj Vedic Astro",
                description: `${plan} Plan`,

                order_id: data.order.id,

                prefill: {
                    name: "Test User",
                    email: "test@example.com",
                    contact: "9999999999",
                },

                modal: {
                    ondismiss: function () {
                        console.log("Razorpay checkout dismissed");
                        setLoading(false);
                    },
                },

                // 2. Verify Payment
                handler: async function (response) {
                    try {
                        const verifyToken =
                            localStorage.getItem("astro-token");

                        const verifyRes = await fetch(
                            `${API_BASE}/payments/${
                                plan === "Gold"
                                    ? "verify-gold-payment"
                                    : "verify-payment"
                            }`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${verifyToken}`,
                                },
                                body: JSON.stringify(response),
                            }
                        );

                        const verifyData = await verifyRes.json();

                        console.log("Payment Verification:", verifyData);

                        if (!verifyRes.ok || !verifyData.success) {
                            throw new Error(
                                verifyData.message ||
                                    "Payment Verification Failed"
                            );
                        }

                        // 3. Refresh Profile
                        const profileRes = await fetch(
                            `${API_BASE}/auth/profile`,
                            {
                                headers: {
                                    Authorization: `Bearer ${verifyToken}`,
                                },
                            }
                        );

                        const profileData = await profileRes.json();

                        if (!profileRes.ok || !profileData.success) {
                            throw new Error(
                                profileData.message ||
                                    "Failed to refresh profile"
                            );
                        }

                        localStorage.setItem(
                            "astro-user",
                            JSON.stringify(profileData.user)
                        );

                        alert(
                            `🎉 ${plan} Plan Activated Successfully`
                        );

                        window.location.href = "/account";
                    } catch (error) {
                        console.error(error);
                        alert(error.message);
                    } finally {
                        setLoading(false);
                    }
                },

                theme: {
                    color: "#f59e0b",
                },
            };

            const razor = new window.Razorpay(options);

            razor.on("payment.failed", function (response) {
                console.log("Payment Failed:", response);

                if (typeof razor.close === "function") {
                    razor.close();
                }

                setLoading(false);

                alert("Payment Failed. Please try again.");
            });

            razor.open();

        } catch (error) {
            console.error(error);
            setLoading(false);
            alert(error.message);
        }
    };

    return (
    <div className="w-full bg-slate-950 text-white p-5 rounded-lg">

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">

            {/* SILVER PLAN */}
            <div className="w-full rounded-2xl border border-amber-400 bg-slate-900 p-3 md:p-5">

                <h2 className="text-3xl font-bold text-amber-400">
                    Silver Plan
                </h2>

                <p className="mt-3 text-5xl font-bold text-white">
                    ₹199
                </p>

                <p className="mt-2 text-sm text-slate-400">
                    Valid for 24 hours
                </p>

                <ul className="mt-6 space-y-3 text-slate-300">
                    <li>✔ Mangal Dosh Details</li>
                    <li>✔ Manglik Dosh Details</li>
                    <li>✔ KaalSarp Dosh Details</li>
                    <li>✔ Pitra Dosh Details</li>
                    <li>✔ Shani Sade Sati Details</li>
                    <li>✔ Sampurn Mahadasha Details</li>
                    <li>✔ Sampurn Mahadasha Timeline Details</li>
                    <li>✔ Yogini Dasha Details</li>
                    <li>✔ Sampurn Yogini Dasha Details</li>
                    <li>✔ Specific Sub Dasha Details</li>
                    <li>✔ Ratna Details</li>
                    <li>✔ Rudraksh Details</li>
                </ul>

                <button
                    onClick={() => handlePayment("Silver")}
                    disabled={loading}
                    className="mt-8 w-full rounded-xl bg-amber-400 py-3 font-semibold text-slate-900 transition hover:bg-amber-300 disabled:opacity-60"
                >
                    {loading ? "Please wait..." : "Pay ₹199"}
                </button>

            </div>


            {/* GOLD PLAN */}
            <div className="w-full rounded-2xl border border-yellow-500 bg-gradient-to-br from-amber-300 to-yellow-200 text-slate-950 p-3 md:p-5">

                <div className="flex items-center justify-between gap-3">
                    <h2 className="text-3xl font-bold">
                        Gold Plan
                    </h2>

                </div>

                <p className="mt-3 text-5xl font-bold">
                    ₹499
                </p>

                <p className="mt-2 text-sm text-slate-700">
                    Includes Silver Plan + Gold features
                    Valid for 3 Days
                </p>

                <ul className="mt-6 space-y-1 font-semibold">
                    <li>✔ Silver Plan</li>
                    <li>✔ Dashkoot Milan Details</li>
                    <li>✔ Samgra Milan Details</li>
                    <li>✔ Dasha Sandhi Details</li>
                    <li>✔ Papsamya Milan Details</li>
                    <li>✔ Lal Kitab - Rin Dosh Details</li>
                    <li>✔ Lal Kitab - Upaye Details</li>
                    <li>✔ Number Analysis</li>
                    <li>✔ Lucky Number</li>
                    <li>✔ Name Analysis</li>
                    <li>✔ Plane Details</li>
                    <li>✔ Missing & Available Number</li>
                    <li>✔ Mobile Number</li>
                    <li>✔ Numerology Suggestion</li>
                </ul>

                <button
                    onClick={() => handlePayment("Gold")}
                    disabled={loading}
                    className="mt-8 w-full rounded-xl bg-slate-950 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
                >
                    {loading ? "Please wait..." : "Pay ₹499"}
                </button>

            </div>

        </div>
    </div>
);
};

export default Premium;