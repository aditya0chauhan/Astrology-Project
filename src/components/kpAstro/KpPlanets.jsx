import { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';
import { API_BASE } from "../../config/api";

const KpPlanets = ({ userData }) => {
    const [planets, setPlanets] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const fetchPlanets = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `${API_BASE}/astro/kp/planet_details?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`)

                const response = await data.json();
                setPlanets(response.response.planets);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPlanets();
    }, [userData]);

     if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!planets) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }
    return (

<div className="mt-10 max-w-6xl mx-auto px-4">

{
planets && planets.map((planet,index)=>(

<div 
key={index}
className="
bg-[#111827]
border
border-amber-400
rounded-2xl
p-6
mb-6
shadow-xl
text-white
"
>

<h2 className="
text-2xl
font-bold
text-amber-400
mb-5
">
🪐 {planet.name}
</h2>


<div className="grid md:grid-cols-2 gap-5">


<div className="bg-[#020817] p-4 rounded-xl">
<p className="text-yellow-400 font-semibold">
♈ राशि
</p>

<p className="mt-2">
{planet.sign}
</p>
</div>



<div className="bg-[#020817] p-4 rounded-xl">
<p className="text-yellow-400 font-semibold">
⭐ नक्षत्र
</p>

<p className="mt-2">
{planet.nakshatra}
</p>
</div>



<div className="bg-[#020817] p-4 rounded-xl">
<p className="text-yellow-400 font-semibold">
👑 राशि स्वामी
</p>

<p className="mt-2">
{planet.signLord}
</p>
</div>



<div className="bg-[#020817] p-4 rounded-xl">
<p className="text-yellow-400 font-semibold">
🌟 नक्षत्र स्वामी
</p>

<p className="mt-2">
{planet.nakshatraLord}
</p>
</div>



<div className="bg-[#020817] p-4 rounded-xl">
<p className="text-yellow-400 font-semibold">
🔹 Sub Lord
</p>

<p className="mt-2">
{planet.subLord}
</p>
</div>



<div className="bg-[#020817] p-4 rounded-xl">
<p className="text-yellow-400 font-semibold">
🔸 Sub Sub Lord
</p>

<p className="mt-2">
{planet.subSubLord}
</p>
</div>



<div className="bg-[#020817] p-4 rounded-xl">
<p className="text-yellow-400 font-semibold">
📍 अंश
</p>

<p className="mt-2">
{planet.longitude_dms}
</p>
</div>



<div className="bg-[#020817] p-4 rounded-xl">
<p className="text-yellow-400 font-semibold">
🚀 गति
</p>

<p className="mt-2">
{planet.speed}
</p>
</div>


</div>

</div>

))

}

</div>

)
}

export default KpPlanets