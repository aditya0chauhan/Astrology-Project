import  { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';

const MangalDosh = ({userData}) => {
    const [mangalDosh, setMangalDosh] = useState(null);
        const [loading, setLoading] = useState(false);
    
        useEffect(() => {
            if (!userData) return;
    
            const { formattedDate, time, latitude, longitude } = userData;
    
            const mangalDosh = async () => {
                try {
                    setLoading(true);
    
                    const data = await fetch(
                        `https://api.jyotishamastroapi.com/api/dosha/mangal_dosh?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`,
                        {
                            headers: { key: import.meta.env.VITE_ASTRO_API_KEY },
                        }
                    )
    
                    const dosha = await data.json();
                    setMangalDosh(dosha.response);
                } catch (err) {
                    console.log(err);
                } finally {
                    setLoading(false);
                }
            };
    
            mangalDosh();
        }, [userData]);
    
       if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }
    
        if (!mangalDosh) {
            return <div className="text-center text-red-400 mt-10">
                डेटा उपलब्ध नहीं है।
            </div>
        }
  return (
    <div>
        <div className="bg-[#1A2742] rounded-xl border border-amber-400 p-6">

<h2 className="text-2xl font-bold text-amber-400 mb-6">
🔥 मंगल दोष रिपोर्ट
</h2>

<div className="grid md:grid-cols-2 gap-5">

<div className="bg-[#243454] rounded-lg p-4">
<p className="text-gray-300">मंगल दोष</p>

<p className={`text-xl font-bold ${
mangalDosh.is_dosha_present
?"text-red-400"
:"text-green-400"
}`}>
{mangalDosh.is_dosha_present ? "उपस्थित" : "नहीं"}
</p>

</div>

<div className="bg-[#243454] rounded-lg p-4">

<p className="text-gray-300">
आंशिक दोष
</p>

<p className="text-xl font-bold text-yellow-300">
{mangalDosh.is_anshik ? "हाँ" : "नहीं"}
</p>

</div>

<div className="bg-[#243454] rounded-lg p-4">

<p className="text-gray-300">
स्कोर
</p>

<p className="text-xl font-bold text-cyan-300">
{mangalDosh.score}
</p>

</div>

<div className="bg-[#243454] rounded-lg p-4">

<p className="text-gray-300">
Cancellation Score
</p>

<p className="text-xl font-bold text-green-300">
{mangalDosh.cancellation.cancellationScore}
</p>

</div>

</div>

</div>
<div className="mt-10 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

<h2 className="text-xl font-bold text-amber-300 mb-4">

🤖 ज्योतिष निष्कर्ष

</h2>

<p className="leading-8 text-gray-200">

{mangalDosh.bot_response}

</p>

</div>
<div className="mt-10 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

<h2 className="text-xl font-bold text-amber-300 mb-5">

❌ दोष समाप्त होने के कारण

</h2>

<ul className="space-y-3">

{mangalDosh.cancellation.cancellationReason.map((item,index)=>(

<li
key={index}
className="bg-[#243454] rounded-lg p-4"
>

• {item}

</li>

))}

</ul>

</div>
<div className="mt-10 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

<h2 className="text-xl font-bold text-amber-300 mb-4">

📌 दोष बनने के कारण

</h2>

<p className="leading-8 text-white">

{mangalDosh.factors.lagna}

</p>

</div>
<div className="mt-10 bg-[#1A2742] rounded-xl border border-amber-400 p-6">

<h2 className="text-xl font-bold text-amber-300 mb-6">

🪔 उपाय

</h2>

<div className="space-y-4 text-white">

{mangalDosh.remedies.map((item,index)=>(

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

export default MangalDosh