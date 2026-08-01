import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../utils/buttons/Loader";
import { useTranslation } from "react-i18next";


const MasikRashifal = () => {
    const { rashi } = useParams();
    const { t, i18n } = useTranslation();
    const [rashifal, setRashifal] = useState(null);
    const [loading, setLoading] = useState(false);
    const cacheRef = useRef({}); // Cache API responses to avoid duplicate calls

    const zodiacMap = {
        mesh: 1,
        vrishabh: 2,
        mithun: 3,
        kark: 4,
        singh: 5,
        kanya: 6,
        tula: 7,
        vrishchik: 8,
        dhanu: 9,
        makar: 10,
        kumbh: 11,
        meen: 12
    }

    const rashiNames = {
        mesh: t("rashi1"),
        vrishabh: t("rashi2"),
        mithun: t("rashi3"),
        kark: t("rashi4"),
        singh: t("rashi5"),
        kanya: t("rashi6"),
        tula: t("rashi7"),
        vrishchik: t("rashi8"),
        dhanu: t("rashi9"),
        makar: t("rashi10"),
        kumbh: t("rashi11"),
        meen: t("rashi12")
    }

    const rashiCards = [
        {
            name: t("rashi1"),
            path: "mesh",
            icon: "♈"
        },
        {
            name: t("rashi2"),
            path: "vrishabh",
            icon: "♉"
        },
        {
            name: t("rashi3"),
            path: "mithun",
            icon: "♊"
        },
        {
            name: t("rashi4"),
            path: "kark",
            icon: "♋"
        },
        {
            name: t("rashi5"),
            path: "singh",
            icon: "♌"
        },
        {
            name: t("rashi6"),
            path: "kanya",
            icon: "♍"
        },
        {
            name: t("rashi7"),
            path: "tula",
            icon: "♎"
        },
        {
            name: t("rashi8"),
            path: "vrishchik",
            icon: "♏"
        },
        {
            name: t("rashi9"),
            path: "dhanu",
            icon: "♐"
        },
        {
            name: t("rashi10"),
            path: "makar",
            icon: "♑"
        },
        {
            name: t("rashi11"),
            path: "kumbh",
            icon: "♒"
        },
        {
            name: t("rashi12"),
            path: "meen",
            icon: "♓"
        }
    ]

    const getRashifal = async (lang) => {
        try {
            const zodicNumber = zodiacMap[rashi];
            const cacheKey = `monthly_${zodicNumber}_${lang}`;
            const API_BASE =
             import.meta.env.VITE_API_URL || "http://localhost:5000/api";


            if (cacheRef.current[cacheKey]) {
                setRashifal(cacheRef.current[cacheKey]);
                return;
            }

            setLoading(true);
            const langCode = lang === 'en' ? 'en' : 'hi';
            const response = await fetch(
                `${API_BASE}/astro/prediction/monthly?zodiac=${zodicNumber}&day=today&lang=${langCode}`
            );

            const data = await response.json();
            // Store in cache
            cacheRef.current[cacheKey] = data;
            setRashifal(data);
        }
        catch (error) {
            console.error("Error fetching monthly horoscope:", error);
            setRashifal(null);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (rashi) {
            getRashifal(i18n.language);
        }
    }, [rashi, i18n.language])

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-[#0a0a0a]">
                <Loader />
            </div>
        )
    }

    if (!rashi) {
        return (
            <div className="mt-24 min-h-screen bg-[#0a0a0a] text-white px-5 py-10">
                <h1 className="text-center text-3xl text-yellow-400 font-bold mb-8">
                    🌞 {t("monthlyHoroscope")}
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
                    {
                        rashiCards.map((item) => (
                            <Link key={item.path} to={`/masik_rashifal/${item.path}`}
                                className="bg-white/10 rounded-xl p-6 text-center border border-yellow-500 hover:scale-105 duration-300  hover:scale-[1.10] duration-300">
                                <h2 className="text-4xl">
                                    {item.icon}
                                </h2>
                                <p className="text-yellow-300 mt-3 text-xl">
                                    {item.name}
                                </p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="mt-24 min-h-screen bg-[#0a0a0a] text-white px-5 py-10">
            {loading && (
                <div className="min-h-screen flex justify-center items-center">
                    <Loader />
                </div>
            )}

            {!loading && rashifal?.response && (
                <div className="max-w-3xl mx-auto bg-white/10 p-6 rounded-2xl space-y-5">
                    <h1 className="text-3xl text-yellow-400 font-bold text-center">
                        {rashiNames[rashi]} {t("monthlyHoroscope")}
                    </h1>

                    <p className="text-sm text-gray-300">
                        {t("month")} {rashifal.response.month}
                    </p>

                    <div>
                        <h2 className="text-green-400 text-xl font-semibold mb-3">{t("monthlyHoroscope")}</h2>
                        <p className="text-gray-200 leading-relaxed">{rashifal.response.horoscope_data}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Card
                            title={t("love")}
                            value={rashifal.response.love} />

                        <Card
                            title={t("career")}
                            value={rashifal.response.career} />

                        <Card
                            title={t("family")}
                            value={rashifal.response.family} />

                        <Card
                            title={t("health")}
                            value={rashifal.response.health} />

                        <Card
                            title={t("challengingDays")}
                            value={rashifal.response.challenging_days}
                            colSpan={true} />
                    </div>
                </div>
            )}

            {!loading && (!rashifal?.response) && (
                <div className="max-w-3xl mx-auto bg-white/10 p-6 rounded-2xl text-center">
                    <p className="text-red-400 text-lg">Unable to load monthly horoscope data. Please try again.</p>
                </div>
            )}
        </div>
    )
}

const Card = ({ title, value, colSpan }) => {
    return (
        <div className={`bg-black/30 rounded-xl p-4 ${colSpan ? 'col-span-2' : ''}`}>
            <h2 className="text-yellow-400">
                {title}
            </h2>
            <p>{value}</p>
        </div>
    )
}

export default MasikRashifal;