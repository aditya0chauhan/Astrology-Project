import  { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';

const KaalsarapDosha = ({userData}) => {
    const [kalsarap, setKalsarap] = useState(null);
        const [loading, setLoading] = useState(false);
    
        useEffect(() => {
            if (!userData) return;
    
            const { formattedDate, time, latitude, longitude } = userData;
    
            const kalsarapdosh = async () => {
                try {
                    setLoading(true);
    
                    const data = await fetch(
                        `https://api.jyotishamastroapi.com/api/dosha/kaalsarp-dosh?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`,
                        {
                            headers: { key: import.meta.env.VITE_ASTRO_API_KEY },
                        }
                    )
    
                    const dosha = await data.json();
                    setKalsarap(dosha.response);
                } catch (err) {
                    console.log(err);
                } finally {
                    setLoading(false);
                }
            };
    
            kalsarapdosh();
        }, [userData]);
    
        if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }
    
        if (!kalsarap) {
            return <div className="text-center text-red-400 mt-10">
                डेटा उपलब्ध नहीं है।
            </div>
        }
  return (
    <div>
        <div className="bg-[#1A2742] rounded-xl border border-amber-400 p-6">

<h2 className="text-2xl font-bold text-amber-400 mb-6">
🔥 कालसर्प दोष रिपोर्ट
</h2>

<div className="grid md:grid-cols-2 gap-5">

<div className="bg-[#243454] rounded-lg p-4">
<p className="text-gray-300">कालसर्प दोष</p>

<p className={`text-xl font-bold ${
kalsarap.is_dosha_present
?"text-red-400"
:"text-green-400"
}`}>
{kalsarap.is_dosha_present ? "उपस्थित" : "नहीं"}
</p>

</div>



</div>

</div>
<div className="mt-10 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

<h2 className="text-xl font-bold text-amber-300 mb-4">

🤖 ज्योतिष निष्कर्ष

</h2>

<p className="leading-8 text-gray-200">

{kalsarap.bot_response}

</p>

</div>
<div className="mt-10 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

<h2 className="text-xl font-bold text-amber-300 mb-6">

🪔 उपाय

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