import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../../utils/buttons/Loader";

const CurrentMD = ({ userData }) => {
    const { t, i18n } = useTranslation();
    const [mahadasha, setMahadasha] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const fetchMahadasha = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `/.netlify/functions/proxy/api/dasha/current-mahadasha?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=${i18n.language === "hi" ? "hi" : "en"}`)

                const dasha = await data.json();
                setMahadasha(dasha.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMahadasha();
    }, [userData, i18n.language]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!mahadasha) {
        return <div className="text-center text-red-400 mt-10">
            {t("noDataAvailable")}
        </div>
    }

    const dashaCards = [
        {
            title: t("mahadasha"),
            data: mahadasha.order_of_dashas.major,
        },
        {
            title: t("antardasha"),
            data: mahadasha.order_of_dashas.minor,
        },
        {
            title: t("paryantardasha"),
            data: mahadasha.order_of_dashas.sub_minor,
        },
        {
            title: t("shookshamaDasha"),
            data: mahadasha.order_of_dashas.sub_sub_minor,
        },
        {
            title: t("pranaDasha"),
            data: mahadasha.order_of_dashas.sub_sub_sub_minor,
        },
    ];

    return (
        <div className=" text-white mt-24">

            <h1 className="text-3xl text-center font-bold text-amber-400 mb-10">
                {t("currentDasha")}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {dashaCards.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-amber-400 bg-[#1A2742] p-6"
                    >
                        <h2 className="text-xl text-amber-300 font-bold mb-4">
                            {item.title}
                        </h2>

                        <p>
                            <strong>{t("planet")} :</strong> {item.data.name}
                        </p>

                        <p>
                            <strong>{t("start")} :</strong> {item.data.start}
                        </p>

                        <p>
                            <strong>{t("end")} :</strong> {item.data.end}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default CurrentMD;