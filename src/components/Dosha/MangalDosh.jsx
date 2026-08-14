import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";
import PremiumLock from "../Premium/PremiumLock";
import { hasSilverAccess } from "../../utils/premiumAccess";

const MangalDosh = ({ userData }) => {
    const { t, i18n } = useTranslation();

    const [mangalDosh, setMangalDosh] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const fetchMangalDosh = async () => {
            try {
                setLoading(true);

                const token = localStorage.getItem("astro-token");

                const data = await fetch(
                    `${API_BASE}/astro/dosha/mangal_dosh?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=${i18n.language === "hi" ? "hi" : "en"}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token || ""}`,
                        },
                    }
                );

                const dosha = await data.json();
                setMangalDosh(dosha.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMangalDosh();
    }, [userData, i18n.language]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!mangalDosh) {
        return (
            <div className="text-center text-red-400 mt-10">
                {t("noDataAvailable")}
            </div>
        );
    }

    const user = JSON.parse(
        localStorage.getItem("astro-user") || "null"
    );

    const isPremium = hasSilverAccess(user);

    return (
        <div className="space-y-8">

            {/* Main Report */}
            <div className="bg-[#1A2742] rounded-xl border border-amber-400 p-6">

                <h2 className="text-2xl font-bold text-amber-400 mb-6">
                    🔥 {t("mangalDoshReport")}
                </h2>

                {/* Free Information */}
                <div className="grid md:grid-cols-2 gap-5">

                    <div className="bg-[#243454] rounded-lg p-5">
                        <p className="text-gray-300 mb-2">
                            {t("mangalDosh")}
                        </p>

                        <p
                            className={`text-xl font-bold ${
                                mangalDosh.is_dosha_present
                                    ? "text-red-400"
                                    : "text-green-400"
                            }`}
                        >
                            {mangalDosh.is_dosha_present
                                ? t("present")
                                : t("absent")}
                        </p>
                    </div>

                </div>

                {/* Premium / Upgrade */}
                {!isPremium && (
                    <div className="mt-6">
                        <PremiumLock title={`${t("mangalDosh")} की पूरी जानकारी के लिए`} />
                    </div>
                )}

                {/* Premium Content */}
                {isPremium && (
                    <div className="mt-6">

                        <div className="grid md:grid-cols-2 gap-5">

                            <div className="bg-[#243454] rounded-lg p-5">
                                <p className="text-gray-300">
                                    {t("partialDosha")}
                                </p>

                                <p className="text-xl font-bold text-yellow-300 mt-2">
                                    {mangalDosh.is_anshik
                                        ? t("yes")
                                        : t("no")}
                                </p>
                            </div>

                            <div className="bg-[#243454] rounded-lg p-5">
                                <p className="text-gray-300">
                                    {t("score")}
                                </p>

                                <p className="text-xl font-bold text-cyan-300 mt-2">
                                    {mangalDosh.score}
                                </p>
                            </div>

                            <div className="bg-[#243454] rounded-lg p-5">
                                <p className="text-gray-300">
                                    {t("cancellationScore")}
                                </p>

                                <p className="text-xl font-bold text-green-300 mt-2">
                                    {mangalDosh.cancellation?.cancellationScore}
                                </p>
                            </div>

                        </div>

                        {/* Conclusion */}
                        <div className="mt-8 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

                            <h2 className="text-xl font-bold text-amber-300 mb-4">
                                🤖 {t("astrologyConclusion")}
                            </h2>

                            <p className="leading-8 text-gray-200">
                                {mangalDosh.bot_response}
                            </p>

                        </div>

                        {/* Cancellation Reasons */}
                        <div className="mt-8 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

                            <h2 className="text-xl font-bold text-amber-300 mb-5">
                                ❌ {t("reasonsForDoshaEnding")}
                            </h2>

                            <ul className="space-y-3">
                                {mangalDosh.cancellation?.cancellationReason?.map(
                                    (item, index) => (
                                        <li
                                            key={index}
                                            className="bg-[#243454] rounded-lg p-4 text-gray-200"
                                        >
                                            • {item}
                                        </li>
                                    )
                                )}
                            </ul>

                        </div>

                        {/* Reasons */}
                        <div className="mt-8 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

                            <h2 className="text-xl font-bold text-amber-300 mb-4">
                                📌 {t("reasonsForDosha")}
                            </h2>

                            <p className="leading-8 text-white">
                                {mangalDosh.factors?.lagna}
                            </p>

                        </div>

                        {/* Remedies */}
                        <div className="mt-8 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

                            <h2 className="text-xl font-bold text-amber-300 mb-6">
                                🪔 {t("remedies")}
                            </h2>

                            <div className="space-y-4 text-white">

                                {mangalDosh.remedies?.map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4 bg-[#243454] rounded-lg p-5"
                                        >
                                            <div className="h-9 w-9 shrink-0 rounded-full bg-amber-400 text-black flex justify-center items-center font-bold">
                                                {index + 1}
                                            </div>

                                            <p className="leading-8">
                                                {item}
                                            </p>
                                        </div>
                                    )
                                )}

                            </div>

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
};

export default MangalDosh;