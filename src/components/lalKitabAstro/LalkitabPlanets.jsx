import { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';
import { API_BASE } from "../../config/api";

const LalkitabPlanets = ({ userData }) => {
    const [planets, setPlantes] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (userData) {
            fetchPlanets();
        }
    }, [userData]);


    const fetchPlanets = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.dob.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const response = await fetch(
                `${API_BASE}/astro/lalKitab/planets?date=${formattedDate}&time=${userData.time}&latitude=${userData.latitude}&longitude=${userData.longitude}&tz=5.5&lang=hi`);

            const result = await response.json();
            setPlantes(result.response);

        }
        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }

    }


    if (loading) return (
      <div className='min-h-[50vh] w-full flex justify-center items-center mt-10 rounded-xl bg-[#0f172a] p-6'>
        <Loader />
      </div>
    )
return (

<div className="mt-10 max-w-6xl mx-auto px-4">

{

planets && planets.map((item,index)=>(

<div
key={index}
className="
bg-[#111827]
border border-orange-500
rounded-2xl
p-6
mb-6
shadow-xl
text-white
"
>


{/* Planet Name */}


<h2 className="text-2xl font-bold text-orange-400 mb-5">

🪐 {item.planet}

</h2>



<div className="grid md:grid-cols-2 gap-5">


{/* Rashi */}


<div className="bg-[#020817] p-4 rounded-xl">

<p className="text-yellow-400 font-semibold">
🌌 राशि
</p>

<p className="mt-2">
{item.rashi}
</p>

</div>





{/* Position */}


<div className="bg-[#020817] p-4 rounded-xl">

<p className="text-yellow-400 font-semibold">
📍 स्थिति
</p>

<p className="mt-2">
{item.position}
</p>

</div>





{/* Nature */}


<div className="bg-[#020817] p-4 rounded-xl">

<p className="text-yellow-400 font-semibold">
⚡ स्वभाव
</p>

<p className={`
mt-2 font-bold
${item.nature === "शुभ" ? "text-green-400" : "text-red-400"}
`}>

{item.nature}

</p>

</div>





{/* Soya */}


<div className="bg-[#020817] p-4 rounded-xl">

<p className="text-yellow-400 font-semibold">
💤 सोया ग्रह
</p>


<p className={`
mt-2 font-bold
${item.soya ? "text-red-400" : "text-green-400"}
`}>

{
item.soya ? "हाँ" : "नहीं"
}

</p>

</div>


</div>


</div>

))

}

</div>

)

}

export default LalkitabPlanets