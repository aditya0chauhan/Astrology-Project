import { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';

const KpSanketStatus = ({ userData }) => {
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const fetchSanketStatus = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `/.netlify/functions/proxy/api/kp/planet_signification?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`)

                const response = await data.json();
                setStatus(response.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSanketStatus();
    }, [userData]);

     if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!status) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }
  return (

<div className="mt-10 max-w-6xl mx-auto px-4">

{
status && Object.entries(status).map(([planet, houses], index)=>(

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

<h2 className="
text-2xl
font-bold
text-amber-400
mb-5
">
🪐 {planet}
</h2>


<div className="flex flex-wrap gap-3">

{
houses.map((house, i)=>(

<span
key={i}
className="
bg-[#020817]
border
border-orange-500
px-5
py-3
rounded-xl
text-lg
font-semibold
"
>

🏠 भाव {house}

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

export default KpSanketStatus