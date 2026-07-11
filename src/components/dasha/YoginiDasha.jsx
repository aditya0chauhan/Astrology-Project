import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";

const YoginiDasha = ({ userData }) => {
    const [yogini, setYogini] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;
        const { formattedDate, time, latitude, longitude } = userData;
        const fetchYoginiDasha = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `https://api.jyotishamastroapi.com/api/dasha/yogini-dasha-main?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`,
                    {
                        headers: { key: import.meta.env.VITE_ASTRO_API_KEY },
                    }
                )

                const dasha = await data.json();
                setYogini(dasha.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchYoginiDasha()
    }, [userData])
   
     if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!yogini) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }
    return (
        <div className="mt-24 text-white">

            <h1 className="text-3xl font-bold text-center text-amber-400">
                योगिनी दशा
            </h1>

            <p className="text-center text-gray-300 mt-2">
                जन्म के आधार पर योगिनी दशाओं का क्रम एवं समाप्ति तिथि
            </p>

            <div className="mt-10 space-y-5">

                {yogini.dasha_list.map((item, index) => (

                    <div
                        key={index}
                        className="bg-[#1A2742] border border-amber-400 rounded-xl p-5 hover:border-amber-300 transition"
                    >

                        <div className="flex justify-between items-center flex-wrap gap-4">

                            {/* Number */}

                            <div className="flex items-center gap-4">

                                <div className="h-12 w-12 rounded-full bg-amber-400 text-black font-bold flex justify-center items-center">
                                    {index + 1}
                                </div>

                                <div>

                                    <h2 className="text-2xl font-bold text-amber-300">
                                        {item}
                                    </h2>

                                    <p className="text-gray-400 mt-1">
                                        योगिनी दशा
                                    </p>

                                </div>

                            </div>

                            {/* Lord */}

                            <div className="text-center">

                                <p className="text-gray-400">
                                    दशा स्वामी
                                </p>

                                <h3 className="text-xl text-green-300 font-semibold">
                                    {yogini.dasha_lord_list[index]}
                                </h3>

                            </div>

                            {/* End Date */}

                            <div className="text-right">

                                <p className="text-gray-400">
                                    समाप्ति
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