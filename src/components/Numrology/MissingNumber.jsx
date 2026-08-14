import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";
import PremiumLock from "../Premium/PremiumLock";


const MissingNumber = ({ userData }) => {
    const [data, setData] = useState(null);
    const [availableData, setAvailableData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userData) {
            fetchData();
            fetchAvailableData()
        }
    }, [userData]);


    const fetchData = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const token = localStorage.getItem("astro-token");

            const response = await fetch(
                `${API_BASE}/astro/numerology/missing-numbers?date=${formattedDate}&gender=${userData.gender}&lang=hi`,
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

    const fetchAvailableData = async () => {
        setLoading(true);
        try {

            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const token = localStorage.getItem("astro-token");

            const response = await fetch(
                `${API_BASE}/astro/numerology/available-numbers?date=${formattedDate}&gender=${userData.gender}&lang=hi`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const result = await response.json();
            setAvailableData(result.response);

        }

        catch (error) {
            console.log(error);
        }


        finally {
            setLoading(false);
        }


    }

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }
    const user = JSON.parse(
        localStorage.getItem("astro-user") || "null"
    );

    const isGold =
        user?.plan === "Gold" &&
        user?.goldExpiry &&
        new Date(user.goldExpiry) > new Date();

    return (
        <div className="mt-10 px-5 text-white min-h-screen flex flex-col items-center">

            {loading && <Loader />}

            {!loading && !isGold && (
                <div className="w-full max-w-6xl bg-[#050b20] border border-yellow-500 rounded-3xl p-8">
                    <h2 className="text-center text-3xl font-bold text-yellow-400 mb-8">
                        🔢  Available & Missing Numbers Analysis
                    </h2>

                    <PremiumLock
                        title="Numerology की पूरी जानकारी के लिए"
                    />
                </div>
            )}

            {!loading && isGold && data && (
                <div className="w-full max-w-6xl bg-[#050b20] border border-yellow-500 rounded-3xl p-8">

                    <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10">
                        🔢 Missing Numbers Analysis
                    </h2>

                    <h3 className="text-2xl text-yellow-400 mb-5">
                        ⚠️ Missing Number Effects
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        {data.missingNumberDetails?.map((item, index) => (
                            Object.entries(item).map(([number, details]) => (
                                <div
                                    key={`${number}-${index}`}
                                    className="border border-yellow-500 rounded-2xl p-5 bg-[#020817]"
                                >
                                    <h3 className="text-xl font-bold text-yellow-400 mb-4">
                                        {number}
                                    </h3>

                                    <ul className="space-y-3">
                                        {details?.map((text, i) => (
                                            <li
                                                key={i}
                                                className="text-gray-300 leading-7"
                                            >
                                                🔸 {text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ))}
                    </div>

                    <h3 className="text-2xl text-yellow-400 mb-5">
                        🙏 Missing Number Remedies
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {data.missingNumberRemedies?.map((item, index) => (
                            Object.entries(item).map(([number, remedies]) => (
                                <div
                                    key={`${number}-${index}`}
                                    className="border border-yellow-500 rounded-2xl p-5 bg-[#020817]"
                                >
                                    <h3 className="text-xl font-bold text-yellow-400 mb-4">
                                        {number}
                                    </h3>

                                    <ul className="space-y-3">
                                        {remedies?.map((text, i) => (
                                            <li
                                                key={i}
                                                className="text-gray-300 leading-7"
                                            >
                                                ✅ {text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ))}
                    </div>

                </div>
            )}

            {!loading && isGold && availableData && (
                <div className="w-full max-w-6xl bg-[#050b20] border border-yellow-500 rounded-3xl p-8 mt-10">

                    <h2 className="text-center text-3xl font-bold text-yellow-400 mb-8">
                        ✨ Available Numbers Analysis
                    </h2>

                    <div className="border border-yellow-500 rounded-2xl p-6 text-center mb-8">

                        <h3 className="text-xl text-gray-300 mb-3">
                            आपके उपलब्ध नंबर
                        </h3>

                        <p className="text-4xl font-bold text-yellow-400">
                            {availableData.availableNumbers}
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {availableData.availableNumberDitails?.map((item, index) => (

                            <div
                                key={index}
                                className="border border-yellow-500 rounded-2xl p-5 bg-[#020817] hover:scale-105 duration-300"
                            >

                                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                                    🔢 {item.number}
                                </h3>

                                <p className="text-gray-300 leading-8">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            )}

        </div>
    );
}
export default MissingNumber;