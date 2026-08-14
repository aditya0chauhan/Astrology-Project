import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";
import PremiumLock from "../Premium/PremiumLock";

const NuAnalysis = ({ userData }) => {
    const [data, setData] = useState(null);
    const [year, setYear] = useState(null);
    const [masterNumber, setMasterNumber] = useState(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userData) {
            fetchData();
            fetchMasterNumber()
            personalYear()
        }
    }, [userData]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const token = localStorage.getItem("astro-token");

            const response = await fetch(
                `${API_BASE}/astro/numerology/karmic-number?date=${formattedDate}&lang=hi`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const result = await response.json();
            console.log(result.response)
            setData(result.response)
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }

    }

    const personalYear = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const token = localStorage.getItem("astro-token");

            const yearResponse = await fetch(
                `${API_BASE}/astro/numerology/personal-year?date=${formattedDate}&gender=${userData.gender}&lang=hi`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const result = await yearResponse.json();
            setYear(result.response)
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }

    }
    const fetchMasterNumber = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const token = localStorage.getItem("astro-token");

            const master = await fetch(
                `${API_BASE}/astro/numerology/master-numbers?date=${formattedDate}&lang=hi`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const result = await master.json();
            setMasterNumber(result.response)
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }

    }

    if (loading) return (
        <div className='min-h-[50vh] w-full flex justify-center items-center mt-10 rounded-xl bg-[#0f172a] p-6'>
            <Loader />
        </div>
    )

    const user = JSON.parse(
        localStorage.getItem("astro-user") || "null"
    );

    const isGold =
        user?.plan === "Gold" &&
        user?.goldExpiry &&
        new Date(user.goldExpiry) > new Date();

 return (
    <div className="mt-10 max-w-5xl mx-auto px-4">
        {!isGold && (
            <div className="bg-[#111827] border border-amber-400 rounded-2xl p-6 shadow-xl text-white">

                <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">
                    🔢 Full Numerology Analysis
                </h2>

                <PremiumLock
                    title="Full Numerology की पूरी जानकारी के लिए"
                />

            </div>
        )}

        {isGold && data && (
            <div className="bg-[#111827] border border-amber-400 rounded-2xl p-6 shadow-xl text-white">

                <h2 className="text-2xl font-bold text-amber-400 mb-8 text-center">
                    🔢 कार्मिक नंबर
                </h2>

                <div className="bg-[#020817] border border-orange-500 rounded-xl p-5 mb-6">

                    <p className="text-orange-400 font-semibold text-lg mb-3">
                        ✨ कर्मिक नंबर सूची
                    </p>

                    <p className="text-xl font-bold text-white">
                        {data.karmicNumbers}
                    </p>

                </div>

                {data.karmicNumber?.title && (
                    <div className="bg-[#020817] border border-orange-500 rounded-xl p-5 mb-6">

                        <p className="text-orange-400 font-semibold text-lg mb-3">
                            📌 शीर्षक
                        </p>

                        <h3 className="text-2xl font-bold text-white">
                            {data.karmicNumber.title}
                        </h3>

                    </div>
                )}

                {data.karmicNumber?.summary && (
                    <div className="bg-[#020817] border border-orange-500 rounded-xl p-5 mb-6">

                        <p className="text-orange-400 font-semibold text-lg mb-3">
                            📋 सारांश
                        </p>

                        <p className="leading-8 text-gray-200">
                            {data.karmicNumber.summary}
                        </p>

                    </div>
                )}


                {data.karmicNumber?.descriptions?.length > 0 && (
                    <div className="bg-[#020817] border border-orange-500 rounded-xl p-5">

                        <p className="text-orange-400 font-semibold text-lg mb-4">
                            📜 विस्तृत विवरण
                        </p>

                        <div className="space-y-4">

                            {data.karmicNumber.descriptions.map(
                                (description, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl border border-orange-500/40 bg-[#111827] p-4"
                                    >
                                        <p className="leading-8 text-gray-200">
                                            🔸 {description}
                                        </p>
                                    </div>
                                )
                            )}

                        </div>

                    </div>
                )}

            </div>
        )}

        {isGold && masterNumber && (
            <div className="bg-[#111827] border border-amber-400 rounded-2xl p-6 shadow-xl text-white mt-8">

                <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">
                    🌟 मास्टर नंबर
                </h2>

                {masterNumber.master_driver && (
                    <div className="bg-[#020817] border border-orange-500 rounded-xl p-5 mb-5">

                        <h3 className="text-orange-400 font-bold text-xl mb-3">
                            🚗 मास्टर ड्राइवर नंबर
                        </h3>

                        <p className="leading-8 text-gray-200">
                            {masterNumber.master_driver.message}
                        </p>

                    </div>
                )}

                {masterNumber.master_conductor && (
                    <div className="bg-[#020817] border border-orange-500 rounded-xl p-5">

                        <h3 className="text-orange-400 font-bold text-xl mb-3">
                            🎯 मास्टर कंडक्टर नंबर
                        </h3>

                        <p className="leading-8 text-gray-200">
                            {masterNumber.master_conductor.message}
                        </p>

                    </div>
                )}

            </div>
        )}

        {isGold && year && (
            <div className="bg-[#111827] border border-amber-400 rounded-2xl p-6 shadow-xl text-white mt-8">

                <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">
                    📅 व्यक्तिगत वर्ष
                </h2>

                <div className="bg-[#020817] border border-orange-500 rounded-xl p-5 mb-5">

                    <p className="text-orange-400 font-semibold text-lg mb-2">
                        ✨ Personal Year Number
                    </p>

                    <p className="text-3xl font-bold text-white">
                        {year.personalYear}
                    </p>

                </div>

                {year.description && (
                    <div className="bg-[#020817] border border-orange-500 rounded-xl p-5 mb-5">

                        <h3 className="text-xl font-bold text-amber-400 mb-3">
                            {year.description.title}
                        </h3>

                        <p className="leading-8 text-gray-200">
                            {year.description.description}
                        </p>

                    </div>
                )}

                {year.luckFactorDetails && (
                    <div className="bg-[#020817] border border-orange-500 rounded-xl p-5">

                        <h3 className="text-xl font-bold text-amber-400 mb-4">
                            🍀 {year.luckFactorDetails.title}
                        </h3>

                        {year.luckFactorDetails.descriptions?.map(
                            (item, index) => (
                                <p
                                    key={index}
                                    className="leading-8 text-gray-200 mb-2"
                                >
                                    ⭐ {item}
                                </p>
                            )
                        )}

                    </div>
                )}

            </div>
        )}

    </div>
);
}

export default NuAnalysis