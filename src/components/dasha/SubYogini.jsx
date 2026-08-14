import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";
import PremiumLock from "../Premium/PremiumLock";
import { hasSilverAccess } from "../../utils/premiumAccess";

const SubYogini = ({ userData }) => {
    const { t, i18n } = useTranslation();
    const [subyogini, setSubyogini] = useState(null);
    const [loading, setLoading] = useState(false);
    const [openSection, setOpenSection] = useState(0);
    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const fetchSubYogini = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem("astro-token");
                const data = await fetch(
                    `${API_BASE}/astro/dasha/yogini-dasha-sub?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=${i18n.language === "hi" ? "hi" : "en"}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })

                const dasha = await data.json();
                setSubyogini(dasha.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSubYogini();
    }, [userData, i18n.language]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!subyogini) {
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
                {t("yoginiSubDasha")}
            </h1>

            <p className="text-center text-gray-300 mt-2">
                {t("yoginiSubDashaSubtitle")}
            </p>

            <div className="space-y-5 mt-10">

                {subyogini
                    ?.slice(0, isPremium ? subyogini.length : 2)
                    .map((main, index) => (

                        <div
                            key={index}
                            className="bg-[#1A2742] border border-amber-400 rounded-xl overflow-hidden"
                        >

                            {/* Header */}

                            <button
                                className="w-full px-6 py-5 flex justify-between items-center"
                                onClick={() =>
                                    setOpenSection(
                                        openSection === index ? null : index
                                    )
                                }
                            >

                                <div className="text-left">

                                    <h2 className="text-xl font-bold text-amber-300">
                                        {main.main_dasha}
                                    </h2>

                                    <p className="text-green-300">
                                        {t("lord")}: {main.main_dasha_lord}
                                    </p>

                                </div>

                                <span className="text-3xl text-amber-400">
                                    {openSection === index ? "−" : "+"}
                                </span>

                            </button>

                            {/* Body */}

                            {openSection === index && (

                                <div className="px-6 pb-6">

                                    <div className="space-y-4">

                                        {main.sub_dasha_list?.map((item, i) => (

                                            <div
                                                key={i}
                                                className="bg-[#243454] rounded-lg p-5 border-l-4 border-amber-400"
                                            >

                                                <h3 className="text-lg font-semibold text-amber-300">
                                                    {item}
                                                </h3>

                                                <p className="text-green-300 mt-2">
                                                    {t("start")}:
                                                    <span className="text-white ml-2">
                                                        {main.sub_dasha_start_dates?.[i]}
                                                    </span>
                                                </p>

                                                <p className="text-red-300">
                                                    {t("end")}:
                                                    <span className="text-white ml-2">
                                                        {main.sub_dasha_end_dates?.[i]}
                                                    </span>
                                                </p>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                            )}

                        </div>

                    ))}

            </div>

            {/* Premium Lock */}

            {!isPremium && (
                <div className="mt-8">
                    <PremiumLock
                        title={`${t("yoginiSubDasha")} की पूरी जानकारी के लिए`}
                    />
                </div>
            )}

        </div>
    );
}

export default SubYogini