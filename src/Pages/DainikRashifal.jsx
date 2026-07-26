import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../utils/buttons/Loader";
import { useTranslation } from "react-i18next";


const DainikRashifal = () => {
    const { rashi } = useParams();
    const { t, i18n } = useTranslation();
    const [rashifal, setRashifal] = useState(null);
    const [loading, setLoading] = useState(false);
    const cacheRef = useRef({});

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
            const cacheKey = `${zodicNumber}_${lang}`;

            if (cacheRef.current[cacheKey]) {
                setRashifal(cacheRef.current[cacheKey]);
                return;
            }

            setLoading(true);
            const langCode = lang === 'en' ? 'en' : 'hi';
            const response = await fetch(
                `/.netlify/functions/proxy/api/prediction/daily?zodiac=${zodicNumber}&day=today&lang=${langCode}`
            );
            const data = await response.json();
            console.log(data)
            cacheRef.current[cacheKey] = data;
            setRashifal(data);
        }
        catch (error) {
            console.error("FULL ERROR:", error);
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
            <div className="mt-24 min-h-screen bg-[#1A2742] rounded-lg text-white px-5 py-10">
                <h1 className="text-center text-3xl text-yellow-400 font-bold mb-8">
                    🌞 {t("dailyHoroscope")}
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
                    {
                        rashiCards.map((item) => (
                            <Link key={item.path} to={`/dainik_rashifal/${item.path}`}
                                className="bg-white/10 rounded-xl p-6 text-center border border-yellow-500 hover:scale-105 duration-300 hover:scale-[1.10] duration-300">
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
                        {rashiNames[rashi]} {t("dailyHoroscope")}
                    </h1>

                    <p className="text-sm text-gray-300">
                        {t("date")} {rashifal.response.date}
                    </p>

                    <div>
                        <h2 className="text-green-400 text-xl font-semibold mb-3">{t("todayHoroscope")}</h2>
                        <p className="text-gray-200 leading-relaxed">{rashifal.response.horoscope_data}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Card
                            title={t("love")}
                            value={rashifal.response.relationship} />

                        <Card
                            title={t("finance")}
                            value={rashifal.response.finance} />

                        <Card
                            title={t("health")}
                            value={rashifal.response.health} />

                        <Card
                            title={t("travel")}
                            value={rashifal.response.travel} />
                    </div>

                    <div className="bg-black/30 rounded-xl p-4 space-y-2">
                        <p className="text-yellow-300">
                            {t("luckyColor")} <span className="font-semibold">{rashifal.response.lucky_color}</span>
                        </p>
                        <p className="text-yellow-300">
                            {t("luckyNumber")} <span className="font-semibold">{rashifal.response.lucky_numbers.join(", ")}</span>
                        </p>
                    </div>
                </div>
            )}

            {!loading && (!rashifal?.response) && (
                <div className="max-w-3xl mx-auto bg-white/10 p-6 rounded-2xl text-center">
                    <p className="text-red-400 text-lg">Unable to load horoscope data. Please try again.</p>
                </div>
            )}
        </div>
    )
}

const Card = ({ title, value }) => {
    return (

        <div className="bg-black/30 rounded-xl p-4">

            <h2 className="text-yellow-400">
                {title}
            </h2>

            <p>{value}</p>
        </div>

    )
}

export default DainikRashifal;