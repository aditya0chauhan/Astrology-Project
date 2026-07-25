import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Loader from '../../utils/buttons/Loader';

const PitraDosh = ({ userData }) => {
    const { t, i18n } = useTranslation();
    const [pitra, setPitra] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const pitraDosh = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `/.netlify/functions/proxy/api/dosha/pitra-dosh?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=${i18n.language === 'hi' ? 'hi' : 'en'}`)

                const dosha = await data.json();
               
                setPitra(dosha.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        pitraDosh();
    }, [userData, i18n.language]);

     if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!pitra) {
        return <div className="text-center text-red-400 mt-10">
            {t('noDataAvailable')}
        </div>
    }
    return (
        <div>
            <div className="space-y-8 text-white">

                {/* Report */}
                <div className="bg-[#1A2742] rounded-xl border border-amber-400 p-6">

                    <h2 className="text-2xl font-bold text-amber-400 mb-6">
                        🕉️ {t('pitraDoshReport')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div className="bg-[#243454] rounded-lg p-5">

                            <p className="text-gray-300 mb-2">
                                {t('pitraDosh')}
                            </p>

                            <p
                                className={`text-2xl font-bold ${pitra.is_dosha_present
                                        ? "text-red-400"
                                        : "text-green-400"
                                    }`}
                            >
                                {pitra.is_dosha_present ? t('present') : t('absent')}
                            </p>

                        </div>

                        <div className="bg-[#243454] rounded-lg p-5">

                            <p className="text-gray-300 mb-2">
                                {t('astrologyConclusion')}
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
                        ⚠️ {t('pitraDoshEffects')}
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
                        🪔 {t('pitraDoshRemedies')}
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