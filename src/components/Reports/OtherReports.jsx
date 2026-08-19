import { FaFilePdf } from "react-icons/fa";
import { GenrateReport } from "../../utils/buttons/Genrate";
import { API_BASE } from "../../config/api";

const reports = [
  {
    id: "financial_opportunities",
    title: "Financial Opportunities & Challenges",
    subtitle:
      "💰 वित्तीय अवसरों, आर्थिक चुनौतियों और धन-संपत्ति से जुड़े ज्योतिषीय संकेतों का विस्तृत विश्लेषण",
    endpoint: "financial_opportunities_and_challenges_report",
    price: 799,
  },

  {
    id: "education_learning",
    title: "Education & Learning Pathways",
    subtitle:
      "🎓 शिक्षा, सीखने की क्षमता, पढ़ाई में प्रगति और शैक्षणिक अवसरों से जुड़े ज्योतिषीय संकेतों का विस्तृत विश्लेषण",
    endpoint: "education_and_learning_pathways_report",
    price: 799,
  },

  {
    id: "life_purpose",
    title: "Kundali Life Purpose Report",
    subtitle:
      "🧭 जीवन के उद्देश्य, दिशा, व्यक्तिगत क्षमता और महत्वपूर्ण जीवन क्षेत्रों से जुड़े ज्योतिषीय संकेतों का विस्तृत विश्लेषण",
    endpoint: "life_purpose_report",
    price: 799,
  },

  {
    id: "decision_year_2026",
    title: "2026 Decision Year Report",
    subtitle:
      "📅 2026 में महत्वपूर्ण निर्णयों, अवसरों, चुनौतियों और सही समय से जुड़े विशेष ज्योतिषीय संकेतों का विश्लेषण",
    endpoint: "decision_year_report_2026",
    price: 799,
  },

  {
    id: "master_combo_2026",
    title: "2026 Master Combo Report",
    subtitle:
      "🔮 2026 के लिए एक व्यापक प्रीमियम रिपोर्ट जिसमें जीवन के प्रमुख क्षेत्रों और महत्वपूर्ण अवसरों का विस्तृत विश्लेषण शामिल है",
    endpoint: "master_combo_report_2026",
    price: 1499,
  },
];

const OtherReports = ({ userData }) => {
  const handlePayment = async (report) => {
    const token = localStorage.getItem("astro-token");

    if (!token) {
      alert("PDF purchase karne ke liye pehle login karein.");
      return;
    }

    try {
      // ==============================
      // CREATE ORDER
      // ==============================

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

      // ==============================
      // RAZORPAY CHECK
      // ==============================

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

        // ==============================
        // PAYMENT SUCCESS
        // ==============================

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

            const verifyData =
              await verifyResponse.json();

            console.log(
              "VERIFY PDF RESPONSE:",
              verifyData
            );

            if (
              !verifyResponse.ok ||
              !verifyData.success
            ) {
              throw new Error(
                verifyData.message ||
                  "Payment verification failed."
              );
            }

            // ==============================
            // GET PDF URL
            // ==============================

            const pdfUrl =
              verifyData.pdf?.url ||
              verifyData.pdf?.downloadUrl ||
              verifyData.pdf?.pdf_url ||
              verifyData.pdf?.download_url;

            if (!pdfUrl) {
              console.log(
                "Complete PDF Response:",
                verifyData
              );

              alert(
                "Payment successful, lekin PDF URL nahi mila."
              );

              return;
            }

            // ==============================
            // OPEN PDF
            // ==============================

            window.open(pdfUrl, "_blank");

          } catch (error) {
            console.error(
              "Payment Verification Error:",
              error
            );

            alert(error.message);
          }
        },

        // ==============================
        // MODAL CLOSED
        // ==============================

        modal: {
          ondismiss: () => {
            console.log(
              "Razorpay checkout dismissed"
            );
          },
        },

        theme: {
          color: "#f59e0b",
        },
      });

      razor.open();

    } catch (error) {
      console.error(
        "Other PDF Payment Error:",
        error
      );

      alert(error.message);
    }
  };

  return (
    <div className="mt-10 p-10">

      <h2 className="text-3xl font-bold text-center text-amber-400 my-8">
        📚 Other Reports
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
              onClick={() => handlePayment(report)}
              className="mt-8 py-3 rounded-xl flex justify-center items-center cursor-pointer"
            >
              <GenrateReport />
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default OtherReports;