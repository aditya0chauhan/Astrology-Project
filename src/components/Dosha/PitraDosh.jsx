import { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';

const PitraDosh = ({ userData }) => {
    const [pitra, setPitra] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const pitraDosh = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `https://api.jyotishamastroapi.com/api/dosha/pitra-dosh?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`,
                    {
                        headers: { key: import.meta.env.VITE_ASTRO_API_KEY },
                    }
                )

                const dosha = await data.json();
               
                setPitra(dosha.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        pitraDosh();
    }, [userData]);

     if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!pitra) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }
    return (
        <div>
            <div className="space-y-8 text-white">

                {/* Report */}
                <div className="bg-[#1A2742] rounded-xl border border-amber-400 p-6">

                    <h2 className="text-2xl font-bold text-amber-400 mb-6">
                        🕉️ पितृ दोष रिपोर्ट
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div className="bg-[#243454] rounded-lg p-5">

                            <p className="text-gray-300 mb-2">
                                पितृ दोष
                            </p>

                            <p
                                className={`text-2xl font-bold ${pitra.is_dosha_present
                                        ? "text-red-400"
                                        : "text-green-400"
                                    }`}
                            >
                                {pitra.is_dosha_present ? "उपस्थित" : "नहीं"}
                            </p>

                        </div>

                        <div className="bg-[#243454] rounded-lg p-5">

                            <p className="text-gray-300 mb-2">
                                ज्योतिष निष्कर्ष
                            </p>

                            <p className="text-green-300 leading-7">
                                {pitra.bot_response}
                            </p>

                        </div>

                    </div>

                </div>



                {/* Effects */}

                <div className="bg-[#1A2742] rounded-xl border border-amber-400 p-6">

                    <h2 className="text-xl font-bold text-amber-300 mb-6">
                        ⚠️ पितृ दोष के प्रभाव
                    </h2>

                    <div className="space-y-4">

                        {pitra.effects.map((item, index) => (

                            <div
                                key={index}
                                className="flex gap-4 bg-[#243454] rounded-lg p-5"
                            >

                                <div className="h-8 w-8 rounded-full bg-red-500 text-white flex justify-center items-center font-bold shrink-0">
                                    {index + 1}
                                </div>

                                <p className="leading-8">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>



                {/* Remedies */}

                <div className="bg-[#1A2742] rounded-xl border border-amber-400 p-6">

                    <h2 className="text-xl font-bold text-amber-300 mb-6">
                        🪔 पितृ दोष निवारण उपाय
                    </h2>

                    <div className="space-y-4">

                        {pitra.remedies.map((item, index) => (

                            <div
                                key={index}
                                className="flex gap-4 bg-[#243454] rounded-lg p-5"
                            >

                                <div className="h-8 w-8 rounded-full bg-amber-400 text-black flex justify-center items-center font-bold shrink-0">
                                    {index + 1}
                                </div>

                                <p className="leading-8">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>
        </div>
    )
}

export default PitraDosh