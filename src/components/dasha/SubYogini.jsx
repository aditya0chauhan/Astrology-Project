import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";

const SubYogini = ({ userData }) => {
    const [subyogini, setSubyogini] = useState(null);
    const [loading, setLoading] = useState(false);
    const [openSection, setOpenSection] = useState(0);
    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const fetchSubYogini = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `https://api.jyotishamastroapi.com/api/dasha/yogini-dasha-sub?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`,
                    {
                        headers: { key: import.meta.env.VITE_ASTRO_API_KEY },
                    }
                )

                const dasha = await data.json();
                setSubyogini(dasha.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSubYogini();
    }, [userData]);

   if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!subyogini) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }
    return (
        <div className="mt-24 text-white">

            <h1 className="text-3xl font-bold text-center text-amber-400">
                योगिनी उपदशा
            </h1>

            <p className="text-center text-gray-300 mt-2">
                प्रत्येक योगिनी दशा के अंतर्गत आने वाली उपदशाओं का विस्तृत विवरण
            </p>

            <div className="space-y-5 mt-10">

                {subyogini.map((main, index) => (

                    <div
                        key={index}
                        className="bg-[#1A2742] border border-amber-400 rounded-xl overflow-hidden"
                    >

                        {/* Header */}

                        <button
                            className="w-full px-6 py-5 flex justify-between items-center"
                            onClick={() =>
                                setOpenSection(openSection === index ? null : index)
                            }
                        >

                            <div className="text-left">

                                <h2 className="text-xl font-bold text-amber-300">
                                    {main.main_dasha}
                                </h2>

                                <p className="text-green-300">
                                    स्वामी : {main.main_dasha_lord}
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

                                    {main.sub_dasha_list.map((item, i) => (

                                        <div
                                            key={i}
                                            className="bg-[#243454] rounded-lg p-5 border-l-4 border-amber-400"
                                        >

                                            <h3 className="text-lg font-semibold text-amber-300">
                                                {item}
                                            </h3>

                                            <p className="text-green-300 mt-2">
                                                प्रारम्भ :
                                                <span className="text-white ml-2">
                                                    {main.sub_dasha_start_dates[i]}
                                                </span>
                                            </p>

                                            <p className="text-red-300">
                                                समाप्त :
                                                <span className="text-white ml-2">
                                                    {main.sub_dasha_end_dates[i]}
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

        </div>
    );
}

export default SubYogini