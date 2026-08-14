import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";
import PremiumLock from "../Premium/PremiumLock";

const MobileAnalysis = ({ userData }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userData) {
            fetchData();
        }
    }, [userData]);

    const fetchData = async () => {

        setLoading(true);

        try {

            const token = localStorage.getItem("astro-token");

            const response = await fetch(
                `${API_BASE}/astro/numerology/mobile-analysis?phone=${userData.phone}&lang=hi`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const result = await response.json();
            setData(result.response);
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
    <div className="mt-10 px-5 text-white min-h-screen flex justify-center items-center">

        {loading && <Loader />}

        {!loading && !isGold && (
            <div className="w-full max-w-6xl bg-[#050b20] border border-yellow-500 rounded-3xl p-8">
                <h2 className="text-center text-3xl font-bold text-yellow-400 mb-8">
                    📱 Mobile Number Analysis
                </h2>

                <PremiumLock
                    title="Full Numerology की पूरी जानकारी के लिए"
                />
            </div>
        )}

        {!loading && isGold && data && (
            <div className="w-full max-w-6xl bg-[#050b20] border border-yellow-500 rounded-3xl p-8">

                <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10">
                    📱 Mobile Number Analysis
                </h2>

                <div className="border border-yellow-500 rounded-2xl p-6 text-center mb-8">
                    <h3 className="text-gray-300 text-xl">
                        आपका मोबाइल नंबर
                    </h3>

                    <h2 className="text-4xl font-bold text-yellow-400 mt-3">
                        {data.mobileNumber}
                    </h2>

                    <p className="mt-4 text-gray-300 leading-7">
                        {data.mobileNumberDescriptions}
                    </p>
                </div>

                <div className="border border-yellow-500 rounded-2xl p-5 mb-8 text-center">
                    <h3 className="text-2xl text-yellow-400 mb-3">
                        🔢 Mobile Number Sum
                    </h3>

                    <p className="text-3xl font-bold">
                        {data.mobileNumberSum}
                    </p>
                </div>

                <h3 className="text-2xl text-yellow-400 mb-5">
                    ✨ Result
                </h3>

                <div className="space-y-4 mb-8">
                    {data.mobileNumberSumResult?.map((item, index) => (
                        <div
                            key={index}
                            className="border border-yellow-500 rounded-xl p-4 bg-[#020817]"
                        >
                            ✅ {item}
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl text-yellow-400 mb-5">
                    🔢 Digit Analysis
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    {data.individualDigitAnalysis?.map((item, index) => (
                        <div
                            key={index}
                            className="border border-yellow-500 rounded-2xl p-5 bg-[#020817]"
                        >
                            <h3 className="text-3xl font-bold text-yellow-400 mb-3">
                                {item.digit}
                            </h3>

                            <p className="text-gray-300 leading-7">
                                {item.meaning}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="border border-yellow-500 rounded-2xl p-5 mb-8">
                    <h3 className="text-2xl text-yellow-400 mb-3">
                        ⚠️ Negative Numbers
                    </h3>

                    <p className="text-gray-300">
                        {data.negativeNumbers}
                    </p>
                </div>

                <div className="border border-yellow-500 rounded-2xl p-5">
                    <h3 className="text-2xl text-yellow-400 mb-3">
                        🔮 Special Combination
                    </h3>

                    <p className="text-gray-300">
                        {data.pairsOfThree}
                    </p>
                </div>

            </div>
        )}

    </div>
);
}


export default MobileAnalysis