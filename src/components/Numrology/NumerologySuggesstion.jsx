import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";
import PremiumLock from "../Premium/PremiumLock";


const NumerologySuggesstion = ({ userData }) => {
    const [data, setData] = useState(null);
    const [analysisData, setAnalysisData] = useState(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userData) {
            fetchData();
            nuAnalysis()
        }
    }, [userData]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const token = localStorage.getItem("astro-token");

            const response = await fetch(
                `${API_BASE}/astro/numerology/numerology-suggestion?date=${formattedDate}&lang=hi`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const result = await response.json();
            if (result.response) {
                setData(result.response);
            }
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }

    }

    const nuAnalysis = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const token = localStorage.getItem("astro-token");

            const response = await fetch(
                `${API_BASE}/astro/numerology/numerology-analysis?date=${formattedDate}&lang=hi`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const result = await response.json();
            if (result.response) {
                setAnalysisData(result.response);
            }
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }
    }

    const user = JSON.parse(
        localStorage.getItem("astro-user") || "null"
    );

    const isGold =
        user?.plan === "Gold" &&
        user?.goldExpiry &&
        new Date(user.goldExpiry) > new Date();

    <div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
    </div>

    return (
        <div className="mt-10 px-5 text-white min-h-screen flex flex-col justify-center items-center">

            {loading && <Loader />}
  
            {!loading && !isGold && (
                <div className="w-full max-w-6xl mx-auto bg-[#050b20] border border-yellow-500 rounded-3xl p-8">

                    <h2 className="text-center text-3xl font-bold text-yellow-400 mb-8">
                        🌟 Numerology
                    </h2>

                    <PremiumLock
                        title="Full Numerology की पूरी जानकारी के लिए"
                    />

                </div>
            )}

            {!loading && isGold && data && (

                <div className="w-full max-w-6xl mx-auto bg-[#050b20] border border-yellow-500 rounded-3xl p-8">

                    <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10">
                        🌟 Numerology Suggestions
                    </h2>

                    <div className="border border-yellow-500 rounded-2xl p-5 mb-6 bg-[#020817]">

                        <h3 className="text-2xl text-yellow-400 mb-3">
                            👕 शुभ वस्त्र
                        </h3>

                        <p className="text-xl mb-3">
                            रंग : {data.cloth?.clothColour}
                        </p>

                        <p className="text-gray-300 leading-8">
                            {data.cloth?.cloth_colour_description}
                        </p>

                    </div>


                    <div className="border border-yellow-500 rounded-2xl p-5 mb-6 bg-[#020817]">

                        <h3 className="text-2xl text-yellow-400 mb-3">
                            🪔 {data.oil?.oil_suggestion_title}
                        </h3>

                        <h2 className="text-xl font-bold text-yellow-400 mb-3">
                            {data.oil?.oil_suggestion}
                        </h2>

                        <p className="text-gray-300 leading-8">
                            {data.oil?.oil_suggestion_description}
                        </p>

                    </div>

                    <div className="border border-yellow-500 rounded-2xl p-5 mb-6 bg-[#020817]">

                        <h3 className="text-2xl text-yellow-400 mb-3">
                            📿 रुद्राक्ष सुझाव
                        </h3>

                        <p className="text-gray-300 mb-3">
                            राशि :
                            <span className="text-yellow-400">
                                {" "}
                                {data.rudraksha?.zodiac}
                            </span>
                        </p>

                        <h2 className="text-xl font-bold text-yellow-400 mb-4">
                            {data.rudraksha?.rudraksha_suggestion}
                        </h2>

                        {data.rudraksha?.rudraksha_description?.map(
                            (item, index) => (
                                <p
                                    key={index}
                                    className="text-gray-300 leading-8 mb-3"
                                >
                                    ✅ {item}
                                </p>
                            )
                        )}

                    </div>

                    <div className="border border-yellow-500 rounded-2xl p-5 bg-[#020817]">

                        <h3 className="text-2xl text-yellow-400 mb-3">
                            ⌚ शुभ घड़ी
                        </h3>

                        <p className="text-xl text-yellow-400 mb-3">
                            {data.watch?.watchColour}
                        </p>

                        <p className="text-gray-300 leading-8">
                            {data.watch?.wristWatch}
                        </p>

                    </div>

                </div>
            )}

            {!loading && isGold && analysisData && (

                <div className="w-full max-w-6xl mx-auto bg-[#050b20] border border-yellow-500 rounded-3xl p-8 my-10">

                    <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10">
                        🔮 Numerology Analysis
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {[
                            {
                                title: "💼 Career",
                                value: analysisData.career,
                            },

                            {
                                title: "❤️ Health",
                                value: analysisData.health,
                            },

                            {
                                title: "💰 Money",
                                value: analysisData.money,
                            },

                            {
                                title: "💍 Relationship",
                                value: analysisData.relationship,
                            },

                            {
                                title: "👔 Job",
                                value: analysisData.job,
                            },

                        ].map((item, index) => (

                            <div
                                key={index}
                                className="border border-yellow-500 rounded-2xl p-5 bg-[#020817] hover:scale-105 duration-300"
                            >

                                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 leading-8">
                                    {item.value}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            )}

        </div>
    );
}

export default NumerologySuggesstion;