import { FaFilePdf } from "react-icons/fa";
import { GenrateReport } from "../../utils/buttons/Genrate";
import { API_BASE } from "../../config/api";

const reports = [
    {
        id: "destiny_of_heart",
        title: "Destiny of the Heart",
        subtitle: "❤️ Numerology Insights for Love",
        endpoint: "destiny_of_heart",
        price: 599,
    },
    {
        id: "career_success",
        title: "Career Success & Advancement",
        subtitle: "💼 Numerology guidance for career growth and success",
        endpoint: "career_success",
        price: 699,
    },
    {
        id: "numero_three_year",
        title: "Numerology 3 Year Prediction",
        subtitle: "📅 Detailed numerology prediction for the next 3 years",
        endpoint: "numero_three_year_predictions",
        price: 799,
    },
    {
        id: "numero_five_year",
        title: "Numerology 5 Year Prediction",
        subtitle: "📅 Detailed numerology prediction for the next 5 years",
        endpoint: "numero_five_year_predictions",
        price: 999,
    },
    {
        id: "numero_nine_year",
        title: "Numerology 9 Year Prediction",
        subtitle: "📅 Detailed numerology prediction for the next 9 years",
        endpoint: "numero_nine_year_predictions",
        price: 1499,
    },
    {
        id: "startup_success",
        title: "The Business Code",
        subtitle: "🚀 A Numerology Guide to Startup Success",
        endpoint: "startup_success",
        price: 799,
    },
    {
        id: "motherhood_by_numbers",
        title: "Motherhood by Numbers",
        subtitle: "👶 A Numerology Journey to Parenthood",
        endpoint: "motherhood_by_numbers",
        price: 699,
    },
    {
        id: "wellness_guide",
        title: "Wellness by Numbers",
        subtitle: "🌿 A Numerology Health Guide",
        endpoint: "wellness_guide",
        price: 699,
    },
    {
        id: "life_direction_2026",
        title: "Life Direction & Purpose – 2026",
        subtitle: "🧭 Numerology guidance for life direction and purpose",
        endpoint: "life_direction_report_2026",
        price: 799,
    },
    {
        id: "personal_empowerment",
        title: "Personal Empowerment & Confidence",
        subtitle: "💪 Numerology guidance for confidence and personal growth",
        endpoint: "personal_empowerment_report",
        price: 599,
    },
];

const NumerologyReports = ({ userData }) => {
    const handlePayment = async (report) => {
        const token = localStorage.getItem("astro-token");

        if (!token) {
            alert("PDF purchase karne ke liye pehle login karein.");
            return;
        }

        try {
            const orderResponse = await fetch(
                `${API_BASE}/payments/create-pdf-order`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        reportId: report.id,
                    }),
                }
            );

            const orderData = await orderResponse.json();

            if (!orderResponse.ok || !orderData.success) {
                throw new Error(
                    orderData.message || "Order create nahi hua."
                );
            }

            if (!window.Razorpay) {
                throw new Error("Razorpay load nahi hua.");
            }

            const razor = new window.Razorpay({
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: orderData.order.amount,
                currency: orderData.order.currency,
                name: "Manoj Vedic Astro",
                description: report.title,
                order_id: orderData.order.id,

                prefill: {
                    name: userData?.name || "",
                },

                handler: async (response) => {
                    try {
                        const verifyResponse = await fetch(
                            `${API_BASE}/payments/verify-pdf-payment`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`,
                                },
                                body: JSON.stringify({
                                    ...response,
                                    reportId: report.id,
                                    userData,
                                }),
                            }
                        );

                        const verifyData = await verifyResponse.json();

                        if (!verifyResponse.ok || !verifyData.success) {
                            throw new Error(
                                verifyData.message ||
                                "Payment verification failed."
                            );
                        }

                        const pdfUrl =
                            verifyData.pdf?.url ||
                            verifyData.pdf?.downloadUrl ||
                            verifyData.pdf?.pdf_url ||
                            verifyData.pdf?.download_url;

                        if (!pdfUrl) {
                            console.log("PDF Response:", verifyData);
                            alert("Payment successful, lekin PDF URL nahi mila.");
                            return;
                        }

                        window.open(pdfUrl, "_blank");

                    } catch (error) {
                        console.error("Payment Verification Error:", error);
                        alert(error.message);
                    }
                },

                modal: {
                    ondismiss: () => {
                        console.log("Razorpay checkout dismissed");
                    },
                },

                theme: {
                    color: "#f59e0b",
                },
            });

            razor.open();

        } catch (error) {
            console.error("Numerology Payment Error:", error);
            alert(error.message);
        }
    };

    return (
        <div className="mt-10 p-10">
            <h2 className="text-3xl font-bold text-center text-amber-400 my-8">
                🔢 Numerology Reports
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {reports.map((report) => (
                    <div
                        key={report.id}
                        className="bg-[#111827] border border-amber-400 rounded-2xl p-6 shadow-xl hover:scale-[1.03] duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex justify-center mb-5">
                                <FaFilePdf
                                    className="text-red-500"
                                    size={55}
                                />
                            </div>

                            <h3 className="text-xl font-bold text-amber-400 text-center">
                                {report.title}
                            </h3>

                            <p className="text-center text-gray-300 mt-4 leading-7">
                                {report.subtitle}
                            </p>

                            <p className="text-center text-2xl font-bold text-white mt-5">
                                ₹{report.price}
                            </p>
                        </div>

                        <button onClick={() => handlePayment(report)}
                            className="mt-8 py-3 rounded-xl flex justify-center items-center cursor-pointer">
                            <GenrateReport />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NumerologyReports;