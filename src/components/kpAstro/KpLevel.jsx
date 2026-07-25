import { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';

const KpLevel = ({ userData }) => {
    const [level, setLevel] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const fetchLevel = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `/.netlify/functions/proxy/api/kp/planet_signification_level_wise?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`)

                const response = await data.json();
                console.log(response)
                setLevel(response.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchLevel();
    }, [userData]);

     if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!level) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }
  return (

<div className="mt-10 max-w-6xl mx-auto px-4">

{
level && Object.entries(level).map(([planet, levels], index)=>(

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

<h2
className="
text-2xl
font-bold
text-amber-400
mb-5
"
>
🪐 {planet}
</h2>


<div className="grid md:grid-cols-2 gap-5">

{
Object.entries(levels).map(([levelName, houses], i)=>(

<div
key={i}
className="
bg-[#020817]
border
border-orange-500
rounded-xl
p-5
"
>

<h3 className="
text-xl
font-semibold
text-orange-400
mb-3
">
📊 {levelName}
</h3>


<div className="flex flex-wrap gap-3">

{
houses.length > 0 ? (

houses.map((house,idx)=>(

<span
key={idx}
className="
px-4
py-2
rounded-lg
bg-[#111827]
border
border-amber-400
"
>

🏠 भाव {house}

</span>

))

)

:

(

<p className="text-gray-400">
कोई डेटा नहीं
</p>

)

}

</div>


</div>

))

}


</div>


</div>

))

}

</div>

)
}

export default KpLevel