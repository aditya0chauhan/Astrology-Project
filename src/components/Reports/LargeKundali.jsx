import { FaFilePdf } from "react-icons/fa";
import { generatePdfReport } from "../../utils/pdfReports";
import { GenrateReport ,Whatsapp} from "../../utils/buttons/Genrate";
import { useState } from "react";
import Loader from '../../utils/buttons/Loader';


const LargeKundali = ({ userData }) => {
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        try {
            setLoading(true)
            const result = await generatePdfReport("generate", userData, "medium");
            if (!result || !result.downloadUrl) {
                 alert("📄 Aapki Premium Kundali Report WhatsApp ke madhyam se uplabdh karaai jayegi. Kripya 'Get WhatsApp' button par click karke apni janm jankari bheje. lagbhag 15 minute ke andar PDF Report WhatsApp par bhej di jayegi. 🙏");
                return;
            }
            window.open(result.downloadUrl, "_blank", "noopener,noreferrer");

        } catch (error) {
            console.error("Generate Report Error =>", error);
            alert(error.message || "Something went wrong");
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-10">
            <div className="max-w-sm mx-auto">
                <div className="bg-[#111827] border border-amber-400 rounded-2xl p-6 shadow-xl hover:scale-[1.03] duration-300">

                    {loading ? (

                        <div className="h-72 flex flex-col justify-center items-center">
                            <Loader />
                            <p className="text-amber-300 mt-4 text-center">
                                आपकी कुंडली तैयार की जा रही है...
                                <br />
                                कृपया कुछ क्षण प्रतीक्षा करें।
                            </p>
                        </div>

                    ) : (

                        <>
                            <div className="flex justify-center mb-5">
                                <FaFilePdf className="text-red-500" size={60} />
                            </div>

                            <h3 className="text-xl font-bold text-center text-amber-400">
                                Premium Kundali Analysis
                            </h3>

                            <p className="text-center text-gray-300 mt-4">
                                Detailed Advanced Kundali, Birth Chart PDF Report
                            </p>

                            <button disabled={loading}
                                className="mt-8 w-full flex flex-col justify-center items-center disabled:opacity-60  disabled:cursor-not-allowed">
                                <span onClick={handleGenerate}>
                                    <GenrateReport />
                                </span>
                                <a
                                    href="https://wa.me/918882532259?text=Agar%20aapko%20*Premium%20Kundali%20Report*%20banwani%20hai,%20to%20neeche%20di%20gayi%20jaankari%20bhar%20kar%20bheje:%0A%0A👤%20Naam:%0A📅%20Janm%20Tithi%20(DD/MM/YYYY):%0A⏰%20Janm%20Samay%20(Exact):%0A📍%20Janm%20Sthan:%20(City,%20State,%20Country)%0A%0AJaankari%20bhejne%20ke%20baad%20aapko%20₹999%20payment%20ke%20liye%20QR%20Code%20bheja%20jayega.%20Payment%20confirm%20hone%20ke%20lagbhag%2015%20minute%20ke%20andar%20aapki%20Premium%20Kundali%20Report%20PDF%20WhatsApp%20par%20bhej%20di%20jayegi.%20🙏"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="my-3 flex items-center p-2 rounded-lg text-white"
                                >
                                    <Whatsapp /> </a>
                            </button>
                        </>

                    )}

                </div>
            </div>

        </div>
    );
};

export default LargeKundali;