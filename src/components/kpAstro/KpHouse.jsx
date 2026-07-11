import { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';

const KpHouse = ({ userData }) => {
    const [house, setHouse] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const fetchHouse = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `https://api.jyotishamastroapi.com/api/kp/house_significators?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`,
                    {
                        headers: { key: import.meta.env.VITE_ASTRO_API_KEY },
                    }
                )

                const response = await data.json();
                setHouse(response.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchHouse();
    }, [userData]);

     if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!house) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }
  return (

<div className="mt-10 max-w-6xl mx-auto px-4">

{
house && Object.entries(house).map(([houseNo, planets], index)=>(

<div
key={index}
className="
bg-[#111827]
border
border-amber-400
rounded-2xl
p-6
mb-5
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
🏠 भाव {houseNo}
</h2>


<div className="flex flex-wrap gap-3">

{
planets.map((planet,i)=>(

<span
key={i}
className="
bg-[#020817]
border
border-orange-500
px-5
py-3
rounded-xl
font-semibold
text-lg
"
>

🪐 {planet}

</span>

))

}

</div>


</div>


))

}

</div>

)
}

export default KpHouse