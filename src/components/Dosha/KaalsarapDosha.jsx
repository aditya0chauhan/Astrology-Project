import  { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Loader from '../../utils/buttons/Loader';

const KaalsarapDosha = ({userData}) => {
    const { t, i18n } = useTranslation();
    const [kalsarap, setKalsarap] = useState(null);
        const [loading, setLoading] = useState(false);
    
        useEffect(() => {
            if (!userData) return;
    
            const { formattedDate, time, latitude, longitude } = userData;
    
            const kalsarapdosh = async () => {
                try {
                    setLoading(true);
    
                    const data = await fetch(
                        `/.netlify/functions/proxy/api/dosha/kaalsarp-dosh?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=${i18n.language === 'hi' ? 'hi' : 'en'}`)
    
                    const dosha = await data.json();
                    setKalsarap(dosha.response);
                } catch (err) {
                    console.log(err);
                } finally {
                    setLoading(false);
                }
            };
    
            kalsarapdosh();
        }, [userData, i18n.language]);
    
        if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }
    
        if (!kalsarap) {
            return <div className="text-center text-red-400 mt-10">
                {t('noDataAvailable')}
            </div>
        }
  return (
    <div>
        <div className="bg-[#1A2742] rounded-xl border border-amber-400 p-6">

<h2 className="text-2xl font-bold text-amber-400 mb-6">
🔥 {t('kaalsarpDoshReport')}
</h2>

<div className="grid md:grid-cols-2 gap-5">

<div className="bg-[#243454] rounded-lg p-4">
<p className="text-gray-300">{t('kaalsarpDosh')}</p>

<p className={`text-xl font-bold ${
kalsarap.is_dosha_present
?"text-red-400"
:"text-green-400"
}`}>
{kalsarap.is_dosha_present ? t('present') : t('absent')}
</p>

</div>



</div>

</div>
<div className="mt-10 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

<h2 className="text-xl font-bold text-amber-300 mb-4">

🤖 {t('astrologyConclusion')}

</h2>

<p className="leading-8 text-gray-200">

{kalsarap.bot_response}

</p>

</div>
<div className="mt-10 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

<h2 className="text-xl font-bold text-amber-300 mb-6">

🪔 {t('remedies')}

</h2>

<div className="space-y-4 text-white">

{kalsarap.remedies.map((item,index)=>(

<div
key={index}
className="flex gap-4 bg-[#243454] rounded-lg p-5"
>

<div className="h-9 w-9 rounded-full bg-amber-400 text-black flex justify-center items-center font-bold">

{index+1}

</div>

<p className="leading-8">

{item}

</p>

</div>

))}

</div>

</div>
    </div>
  )
}

export default KaalsarapDosha