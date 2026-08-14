import { FaFilePdf } from "react-icons/fa";
import { GenrateReport } from '../../utils/buttons/Genrate';
import { generatePdfReport } from '../../utils/pdf/pdfReports'

const reports = [
  {
    id: "kundali1",
    title: " kundali Report",
    subtitle: "📊 जन्म एवं नवांश कुंडली, ⭐ नक्षत्र एवं राशि विवरण, 🪐 ग्रहों की स्थिति एवं विश्लेषण,⏳ विम्शोत्तरी महादशा, ग्रह मित्रता, 🏠 लग्न एवं भाव विश्लेषण, 👤 व्यक्तित्व एवं जीवन संकेत, हिन्दी एवं English में उपलब्ध"
  },
  {
    id: "kundali2",
    title: "matching Kundali Report",
    subtitle: "❤️ दूल्हा-दुल्हन की कुंडली का पूरा मिलान, 📊 अष्टकूट गुण मिलान (36 पॉइंट्स), 💖 दशकूट मिलान (10 पैरामीटर्स), 🔥 मांगलिक दोष का विश्लेषण, ⚠️ वेध दोष का विश्लेषण, 🪐 ग्रहों की अनुकूलता, 📈 अनुकूलता स्कोर और ग्राफ़, 📅 चल रही दशा का मिलान,📄23-पेज की विस्तृत विवाह रिपोर्ट",
  },
  {
    id: "kundali3",
    title: "Sampuran kundali Report",
    subtitle: "जन्म कुंडली का पूरा विश्लेषण, 📊 KP ज्योतिष विश्लेषण, 📖 15+ डिविजनल चार्ट, ⭐ ग्रहों की ताकत का विश्लेषण, 📈 पूरी दशा टाइमलाइन, 📐 अष्टकवर्ग विश्लेषण, 💼 करियर और धन संबंधी जानकारी, ❤️ परिवार और रिश्तों पर मार्गदर्शन, 🎓 शिक्षा का विश्लेषण, 🧘 आध्यात्मिक मार्गदर्शन, 💎 शुभ रत्न और मंत्र, 📄 60+ पेज की प्रोफेशनल PDF",
  },
  {
    id: "kundali4",
    title: "Kundali Deep Report",
    subtitle: "🪐 कुंडली की बुनियादी जानकारी, 🌟 ग्रहों की स्थिति, ताकत, नक्षत्र स्वामी, ग्रहों की अवस्था और नक्षत्र, 📊 कुंडली चार्ट, 📈 एडवांस्ड डिविजनल चार्ट, 🤝 ग्रहों के आपसी संबंध का विश्लेषण, 🔍 KP ज्योतिष विश्लेषण, 🏠 भाव कुंडली, ⏳ दशा विश्लेषण, अच्छे और बुरे गुण, 📄 45-पेज की प्रोफेशनल PDF",
  },
  {
    id: "kundali5",
    title: "Detailed Kundali Report",
    subtitle: "⭐ जन्म कुंडली का पूरा विश्लेषण, 🪐 ग्रहों की स्थिति और KP विश्लेषण, 🏠 भाव-वार व्याख्या, 📈 महादशा की समय-सीमा, ⚠️ काल सर्प और मंगल दोष की जाँच, 🌙 वर्तमान साढ़े साती का विश्लेषण, 📊 ग्रहों की ताकत और मित्रता, 📄 प्रोफेशनल PDF रिपोर्ट",
  },
  {
    id: "kundali6",
    title: "Premium Kundali Report",
    subtitle: "🪔 पूरी जन्म कुंडली, 🪐 ग्रहों की स्थिति और ताकत, 📊 लग्न, चंद्र और नवांश चार्ट, 🔮 15 से ज़्यादा एडवांस्ड डिविजनल चार्ट, 📐 KP ज्योतिष विश्लेषण, 🌟 जैमिनी ज्योतिष विश्लेषण, 🤝 ग्रहों की मित्रता तालिका, ⏳ महादशा और अंतर्दशा, 💼 करियर विश्लेषण, ❤️ शादी और रिश्तों की जानकारी, 💰 धन और वित्त विश्लेषण, 🎓 शिक्षा और पेशा, 👨‍👩‍👧 परिवार और बच्चे, 🩺 ​​स्वास्थ्य विश्लेषण, 🧘 आध्यात्मिक मार्गदर्शन, 📄 83-पेज की प्रीमियम कुंडली रिपोर्ट ",
  },
];

const KundaliReports = ({userData}) => {

  const handleGeneratePdf = async (reportName) => {
  try {
    const result = await generatePdfReport(
      "generate",
      userData,
      "large"
    );

    console.log("PDF RESULT:", result);

    if (result?.url) {
      window.open(result.url, "_blank");
    } else {
      alert("PDF generate ho gayi, lekin URL nahi mila.");
    }
  } catch (error) {
    console.error("PDF Error:", error);
    alert("PDF generate nahi ho payi.");
  }
};

  const handleWhatsApp = (reportName) => {
    const phone = "918882532259";

    const message = `🙏 Namaste Manoj Astro Guruji,
    Mujhe "${reportName}" ki Full PDF report chahiye.
    Kripya iski process aur payment details bhej dijiye.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
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

            </div>

            <button
              onClick={() => handleGeneratePdf(report.title)}
                 
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

export default KundaliReports; 