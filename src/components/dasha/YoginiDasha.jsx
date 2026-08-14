import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";
import PremiumLock from "../Premium/PremiumLock";
import { hasSilverAccess } from "../../utils/premiumAccess";

const YoginiDasha = ({ userData }) => {
    const { t, i18n } = useTranslation();
    const [yogini, setYogini] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;
        const { formattedDate, time, latitude, longitude } = userData;
        const fetchYoginiDasha = async () => {
            try {
                setLoading(true);
                  const token = localStorage.getItem("astro-token");
                const data = await fetch(
                    `${API_BASE}/astro/dasha/yogini-dasha-main?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=${i18n.language === "hi" ? "hi" : "en"}`,
                {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })

                const dasha = await data.json();
                setYogini(dasha.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchYoginiDasha()
    }, [userData, i18n.language])

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!yogini) {
        return <div className="text-center text-red-400 mt-10">
            {t("noDataAvailable")}
        </div>
    }

    const user = JSON.parse(
        localStorage.getItem("astro-user") || "null"
    );

    const isPremium = hasSilverAccess(user);

return (
    <div className="mt-24 text-white">

        <h1 className="text-3xl font-bold text-center text-amber-400">
            {t("yoginiDasha")}
        </h1>

        {/* Premium Lock - Basic User */}
        {!isPremium && (
            <div className="mt-6">
                <PremiumLock
                    title={`${t("yoginiDasha")} की जानकारी के लिए`}
                />
            </div>
        )}

        {/* Dasha List */}
        <div className="mt-10 space-y-5">

            {yogini.dasha_list
                .slice(
                    0,
                    isPremium
                        ? yogini.dasha_list.length
                        : 2
                )
                .map((item, index) => (

                    <div
                        key={index}
                        className="bg-[#1A2742] border border-amber-400 rounded-xl p-5 hover:border-amber-300 transition"
                    >

                        <div className="flex justify-between items-center flex-wrap gap-4">

                            {/* Number + Dasha Name */}
                            <div className="flex items-center gap-4">

                                <div className="h-12 w-12 rounded-full bg-amber-400 text-black font-bold flex justify-center items-center">
                                    {index + 1}
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-amber-300">
                                        {item}
                                    </h2>

                                    <p className="text-gray-400 mt-1">
                                        {t("yoginiDasha")}
                                    </p>
                                </div>

                            </div>

                            {/* Lord */}
                            <div className="text-center">

                                <p className="text-gray-400">
                                    {t("dashaLord")}
                                </p>

                                <h3 className="text-xl text-green-300 font-semibold">
                                    {yogini.dasha_lord_list[index]}
                                </h3>

                            </div>

                            {/* End Date */}
                            <div className="text-right">

                                <p className="text-gray-400">
                                    {t("endDate")}
                                </p>

                                <h3 className="text-red-300 font-semibold">
                                    {yogini.dasha_end_dates[index]}
                                </h3>

                            </div>

                        </div>

                    </div>

                ))}

        </div>

    </div>
);
}

export default YoginiDasha