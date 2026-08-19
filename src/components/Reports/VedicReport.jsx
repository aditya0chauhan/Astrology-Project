import { useState } from "react";
import { API_BASE } from "../../config/api";
import { generatePdfReport } from "../../utils/pdf/pdfReports";
import { FaFilePdf } from "react-icons/fa";
import { GenrateReport } from "../../utils/buttons/Genrate";

const reports = [
  {
    id: "vedic_5_year",
    title: "Vedic 5 Year Predictions",
    endpoint: "vedic_five_year_predictions",
    price: 1100,
    subtitle: `🔮 अगले 5 सालों की विस्तृत भविष्यवाणियाँ
📅 अगले 5 सालों के लिए साल-दर-साल भविष्यवाणियाँ
👤 जन्म का पूरा विवरण और पंचांग विश्लेषण
🪐 ग्रहों की विस्तृत स्थिति और ग्रहों की ताकत
📊 लग्न (जन्म) कुंडली का विश्लेषण
🌙 चंद्र कुंडली का विश्लेषण
💎 नवांश (D9) कुंडली का विश्लेषण
🔯 16 से ज़्यादा डिविजनल (वर्ग) कुंडलियाँ
🏠 सभी 12 भावों (घरों) का पूरा विश्लेषण
⭐ KP (कृष्णमूर्ति पद्धति) ज्योतिष विश्लेषण
🤝 ग्रहों की मित्रता का विश्लेषण
🌅 विस्तृत लग्न रिपोर्ट
⏳ महादशा और अंतर्दशा की समय-सीमा
💼 करियर और प्रोफेशनल ग्रोथ का अनुमान
💰 फाइनेंस और धन-संपत्ति से जुड़ी भविष्यवाणियाँ
❤️ शादी और रिश्तों से जुड़ी जानकारी
👨‍👩‍👧 परिवार और बच्चों का विश्लेषण
🏥 स्वास्थ्य और सेहत से जुड़ी सलाह
🎓 शिक्षा और पढ़ाई में तरक्की
🌍 विदेश यात्रा और अवसर
🏡 प्रॉपर्टी, गाड़ी और भौतिक सुख-सुविधाएँ
🕉️ आध्यात्मिक विकास और उपायों की सलाह
⚠️ शुभ और चुनौतीपूर्ण समय
📖 71 पेज की प्रीमियम वैदिक ज्योतिष रिपोर्ट`,
  },
  {
    id: "vedic_10_year",
    title: "Vedic 10 Year Predictions",
    endpoint: "vedic_ten_year_predictions",
    price: 2100,
    subtitle: `🔮 भविष्य के 10 सालों की विस्तृत भविष्यवाणी
📅 अगले 10 सालों के लिए साल-दर-साल भविष्यवाणियां
👤 जन्म और पंचांग की पूरी जानकारी
🪐 ग्रहों की स्थिति और उनकी ताकत का विस्तृत विश्लेषण
📊 लग्न चार्ट, नवांश (D9) और चंद्र चार्ट
🔯 16 से ज़्यादा डिविजनल (वर्ग) चार्ट का विश्लेषण
🏠 सभी 12 भावों (घरों) का पूरा विश्लेषण
⭐ KP ज्योतिष (कृष्णमूर्ति पद्धति) की जानकारी
🤝 ग्रहों की मित्रता और संबंधों का विश्लेषण
🌅 विस्तृत लग्न रिपोर्ट
⏳ महादशा और अंतर्दशा की समय-सीमा
💼 करियर और नौकरी का पूर्वानुमान
💰 धन और आर्थिक तरक्की का विश्लेषण
📈 बिज़नेस में सफलता और अवसर
❤️ शादी और रिश्तों से जुड़ी भविष्यवाणियां
👨‍👩‍👧 परिवार और घरेलू जीवन का विश्लेषण
🏥 सेहत और तंदुरुस्ती का पूर्वानुमान
🎓 शिक्षा और प्रतियोगी परीक्षाओं के लिए मार्गदर्शन
🌍 विदेश यात्रा और वहाँ बसने की संभावनाएँ
🚗 प्रॉपर्टी, गाड़ी और भौतिक सुख-सुविधाओं का विश्लेषण
🕉️ आध्यात्मिक विकास और जीवन के लिए मार्गदर्शन
⚠️ महत्वपूर्ण अवसर और सावधानी वाले समय
📄 111 पेज की प्रीमियम वैदिक ज्योतिष रिपोर्ट`,
  },
  {
    id: "vedic_15_year",
    title: "Vedic 15 Year Predictions",
    endpoint: "vedic_fifteen_year_predictions",
    price: 3100,
    subtitle: `🔮 भविष्य की 15 साल की विस्तृत भविष्यवाणियां
📅 अगले 15 सालों के लिए साल-दर-साल भविष्यवाणियां
👤 जन्म का पूरा विवरण और पंचांग विश्लेषण
🪐 ग्रहों की विस्तृत स्थिति और ग्रहों की ताकत
📊 लग्न चार्ट (जन्म कुंडली)
🌙 चंद्र कुंडली का विश्लेषण
💎 नवांश (D9) चार्ट का विश्लेषण
🔯 16 से ज़्यादा डिविजनल (वर्ग) चार्ट
🏠 सभी 12 भावों (घरों) का पूरा विश्लेषण
⭐ KP (कृष्णमूर्ति पद्धति) ज्योतिष विश्लेषण
🤝 ग्रहों की मित्रता का विश्लेषण
🌅 विस्तृत लग्न रिपोर्ट
⏳ महादशा और अंतर्दशा की समय-सीमा
💼 करियर और प्रोफेशनल ग्रोथ की भविष्यवाणियां
💰 धन और आर्थिक समृद्धि का विश्लेषण
📈 बिज़नेस और निवेश के मौके
❤️ शादी और रिश्तों से जुड़ी जानकारी
👨‍👩‍👧 परिवार और बच्चों का विश्लेषण
🏥 स्वास्थ्य और सेहत से जुड़ी सलाह
🎓 शिक्षा और पढ़ाई में तरक्की
🌍 विदेश यात्रा और वहाँ बसने की संभावनाएँ
🏡 प्रॉपर्टी, गाड़ी और भौतिक सुख-सुविधाएँ
🕉️ आध्यात्मिक विकास और व्यक्तिगत विकास
⚠️ अच्छा और चुनौतीपूर्ण समय
📖 137 पेज की प्रीमियम वैदिक ज्योतिष रिपोर्ट`,
  },

];

const VedicReport = ({ userData }) => {

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

            const pdfResult = await generatePdfReport(
              report.endpoint,
              userData
            );

            console.log("Vedic PDF Result:", pdfResult);

            if (pdfResult?.downloadUrl) {
              window.open(pdfResult.downloadUrl, "_blank");
            } else if (pdfResult?.url) {
              window.open(pdfResult.url, "_blank");
            } else {
              alert(
                "Payment verified, lekin PDF URL nahi mila."
              );
            }

          } catch (error) {
            console.error(error);
            alert(error.message);
          }
        },

        modal: {
          ondismiss: () => {
            console.log("Payment cancelled");
          },
        },

        theme: {
          color: "#f59e0b",
        },
      });

      razor.open();

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">
        🪐 Vedic Astrology Reports
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {reports.map((report) => (

          <div
            key={report.id}
            className="bg-[#111827] border border-amber-400 rounded-2xl p-6 shadow-xl hover:scale-[1.03] duration-300 flex flex-col justify-between ">

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
              className="mt-8 py-3 rounded-xl duration-300 flex justify-center items-center"
            >
              <GenrateReport />
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default VedicReport; 