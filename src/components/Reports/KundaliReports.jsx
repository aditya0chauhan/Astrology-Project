import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { GenrateReport } from "../../utils/buttons/Genrate";
import { API_BASE } from "../../config/api";

const reports = [
  {
    id: "kundali_pdf",
    title: "Kundali PDF",
    subtitle:
      "📊 जन्म एवं नवांश कुंडली, ⭐ नक्षत्र एवं राशि विवरण, 🪐 ग्रहों की स्थिति एवं विश्लेषण, ⏳ दशा विवरण",
    pdfType: "medium",
    price: 499,
  },
  {
    id: "advance_kundali",
    title: "Advance Kundali",
    subtitle:
      "🪐 विस्तृत जन्म कुंडली, 📊 एडवांस्ड चार्ट, 🔍 ग्रह एवं भाव विश्लेषण, ⏳ दशा विश्लेषण और विस्तृत रिपोर्ट",
    pdfType: "large",
    price: 999,
  },
  {
    id: "samyak_kundali",
    title: "Samyak Kundali",
    subtitle:
      "⭐ विस्तृत कुंडली विश्लेषण, 🪐 ग्रहों की स्थिति, 📊 चार्ट एवं ज्योतिषीय विवरण",
    endpoint: "kundali_samyak",
    price: 499,
  },
  {
    id: "dirgh_drishti",
    title: "Dirgh Drishti Kundali",
    subtitle:
      "🔮 गहन भविष्य दृष्टि, 🪐 ग्रहों का विस्तृत विश्लेषण, 📊 जीवन के महत्वपूर्ण क्षेत्रों का ज्योतिषीय मार्गदर्शन",
    endpoint: "kundali_dirghaDrishti",
    price: 1499,
  },
  {
    id: "foreign_travel",
    title: "Kundali Foreign Travel Report",
    subtitle: "🌍 विदेश यात्रा, विदेश में अवसर, यात्रा की संभावनाएँ और विदेश में जीवन से जुड़े ज्योतिषीय संकेतों का विस्तृत विश्लेषण",
    endpoint: "foreign_travel_report",
    price: 799,
  },
  {
    id: "government_job",
    title: "Kundali Government Job Report",
    subtitle:
      "💼 सरकारी नौकरी के योग, करियर संकेत, प्रतियोगी परीक्षाओं और नौकरी से जुड़े ज्योतिषीय संकेतों का विस्तृत विश्लेषण",
    endpoint: "government_job_report",
    price: 999,
  },
  {
    id: "mul_patrika",
    title: "Kundali Mool Patrika",
    subtitle:
      "📜 मूल जन्म पत्रिका, 🪐 ग्रहों की स्थिति, 📊 जन्म कुंडली का विस्तृत विवरण",
    endpoint: "Kundali_moolPatrika",
    price: 1999,
  },
];

const KundaliReports = ({ userData }) => {
  const [loadingReport, setLoadingReport] = useState(null);

  const handleGeneratePdf = async (report) => {
    const token = localStorage.getItem("astro-token");

    if (!token) {
      alert("PDF खरीदने के लिए पहले login करें.");
      return;
    }

    try {
      setLoadingReport(report.id);
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

      if (
        !orderResponse.ok ||
        !orderData.success ||
        !orderData.order?.id
      ) {
        throw new Error(
          orderData.message || "Unable to create payment order"
        );
      }

      if (!window.Razorpay) {
        throw new Error(
          "Razorpay checkout failed to load"
        );
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: orderData.order.amount,
        currency: orderData.order.currency,

        name: "Manoj Vedic Astro",
        description: report.title,

        order_id: orderData.order.id,

        prefill: {
          name: userData?.name || "",
        },

        modal: {
          ondismiss: () => {
            console.log("Razorpay checkout dismissed");
            setLoadingReport(null);
          },
        },

        handler: async (response) => {
          try {
            const verifyToken =
              localStorage.getItem("astro-token");

            const verifyResponse = await fetch(
              `${API_BASE}/payments/verify-pdf-payment`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${verifyToken}`,
                },
                body: JSON.stringify({
                  ...response,
                  reportId: report.id,
                  userData,
                }),
              }
            );

            const verifyData =
              await verifyResponse.json();

            console.log(
              "PDF Payment Verification:",
              verifyData
            );

            if (
              !verifyResponse.ok ||
              !verifyData.success
            ) {
              throw new Error(
                verifyData.message ||
                "Payment verification failed"
              );
            }

            const pdfUrl =
              verifyData.pdf?.downloadUrl ||
              verifyData.pdf?.url ||
              verifyData.pdf?.pdf_url ||
              verifyData.pdf?.download_url;

            if (!pdfUrl) {
              console.log("Complete PDF Response:", verifyData);

              alert(
                "Payment successful, lekin PDF URL nahi mila."
              );

              return;
            }

            window.open(
              pdfUrl,
              "_blank",
              "noopener,noreferrer"
            );

          } catch (error) {
            console.error(
              "PDF Payment / Generation Error:",
              error
            );

            alert(
              error.message ||
              "Payment successful, lekin PDF generate nahi ho payi."
            );
          } finally {
            setLoadingReport(null);
          }
        },

        theme: {
          color: "#f59e0b",
        },
      };
      const razor = new window.Razorpay(options);

      razor.on("payment.failed", (response) => {
        console.error(
          "Razorpay Payment Failed:",
          response
        );

        setLoadingReport(null);

        alert(
          "Payment Failed. Please try again."
        );
      });

      razor.open();

    } catch (error) {
      console.error(
        "PDF Payment Error:",
        error
      );

      setLoadingReport(null);

      alert(
        error.message ||
        "Payment process failed."
      );
    }
  };

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold text-center text-amber-400 my-8">
        🪐 Kundali Reports
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

            <button
              onClick={() => handleGeneratePdf(report)}
              disabled={loadingReport !== null}
              className="mt-8 py-3 rounded-xl flex justify-center items-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loadingReport === report.id ? (
                "Please wait..."
              ) : (
                <GenrateReport />
              )}
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default KundaliReports;