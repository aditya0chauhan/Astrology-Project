import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";

const CurrentMD = ({ userData }) => {
    const [mahadasha, setMahadasha] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const fetchMahadasha = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `https://api.jyotishamastroapi.com/api/dasha/current-mahadasha?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`,
                    {
                        headers: { key: import.meta.env.VITE_ASTRO_API_KEY },
                    }
                )

                const dasha = await data.json();
                setMahadasha(dasha.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMahadasha();
    }, [userData]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!mahadasha) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }

    const dashaCards = [
        {
            title: "महादशा",
            data: mahadasha.order_of_dashas.major,
        },
        {
            title: "अन्तर्दशा",
            data: mahadasha.order_of_dashas.minor,
        },
        {
            title: "प्रत्यन्तर दशा",
            data: mahadasha.order_of_dashas.sub_minor,
        },
        {
            title: "सूक्ष्म दशा",
            data: mahadasha.order_of_dashas.sub_sub_minor,
        },
        {
            title: "प्राण दशा",
            data: mahadasha.order_of_dashas.sub_sub_sub_minor,
        },
    ];

    return (
        <div className=" text-white mt-24">

            <h1 className="text-3xl text-center font-bold text-amber-400 mb-10">
                वर्तमान दशा
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
                            <strong>ग्रह :</strong> {item.data.name}
                        </p>

                        <p>
                            <strong>प्रारम्भ :</strong> {item.data.start}
                        </p>

                        <p>
                            <strong>समाप्त :</strong> {item.data.end}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default CurrentMD;