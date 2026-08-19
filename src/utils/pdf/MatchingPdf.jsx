import { useState } from "react";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";

const MatchingPdf = ({ boyData, girlData }) => {
  const [loading, setLoading] = useState(false);

  const handleMatchingPdf = async () => {
    const token = localStorage.getItem("astro-token");

    if (!token) {
      alert("PDF purchase karne ke liye login karein.");
      return;
    }

    try {
      setLoading(true);

      const orderResponse = await fetch(
        `${API_BASE}/payments/create-pdf-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            reportId: "matching_kundali",
          }),
        }
      );

      const orderData = await orderResponse.json();

      if (!orderResponse.ok || !orderData.success) {
        throw new Error(orderData.message || "Order create nahi hua.");
      }

      if (!window.Razorpay) {
        throw new Error("Razorpay load nahi hua.");
      }

      const razor = new window.Razorpay({
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Manoj Vedic Astro",
        description: "Matching Kundali PDF",
        order_id: orderData.order.id,

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
                  reportId: "matching_kundali",
                  boyData,
                  girlData,
                }),
              }
            );

            const verifyData = await verifyResponse.json();

            if (!verifyResponse.ok || !verifyData.success) {
              throw new Error(
                verifyData.message || "Payment verification failed."
              );
            }

            const pdfUrl =
              verifyData.pdf?.downloadUrl ||
              verifyData.pdf?.url ||
              verifyData.pdf?.pdf_url ||
              verifyData.pdf?.download_url;

            console.log("Matching PDF Response:", verifyData);

            if (!pdfUrl) {
              alert("Payment verified, lekin PDF URL nahi mila.");
              return;
            }

            window.open(
              pdfUrl,
              "_blank",
              "noopener,noreferrer"
            );
            
          } catch (error) {
            console.error(error);
            alert(error.message);
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },

        theme: {
          color: "#f59e0b",
        },
      });

      razor.on("payment.failed", () => {
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
    <div className="mt-10 flex justify-center">
      <button
        onClick={handleMatchingPdf}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold cursor-pointer disabled:opacity-60"
      >
        {loading ? <Loader /> : "📄 Download Matching PDF ₹499"}
      </button>
    </div>
  );
};

export default MatchingPdf;