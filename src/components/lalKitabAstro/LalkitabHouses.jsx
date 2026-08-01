import { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';
import { API_BASE } from "../../config/api";

const LalkitabHouses = ({ userData }) => {
    const [houses, setHouses] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (userData) {
            fetchHouses();
        }
    }, [userData]);


    const fetchHouses = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.dob.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const response = await fetch(
                `${API_BASE}/astro/lalKitab/houses?date=${formattedDate}&time=${userData.time}&latitude=${userData.latitude}&longitude=${userData.longitude}&tz=5.5&lang=hi`);

            const result = await response.json();
            setHouses(result.response);

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
        houses && houses.map((item,index)=>(

<div key={index} className="bg-[#111827] border border-orange-500 rounded-2xl p-6 mb-6 shadow-xl text-white ">

        <h2 className="text-2xl font-bold text-orange-400 mb-5">
            🏠 खाना नंबर {item.khana_number}
        </h2>

<div className="grid md:grid-cols-2 gap-5">

    <div className="bg-[#020817] p-4 rounded-xl">
        <p className="text-yellow-400 font-semibold">👑 मालिक</p>
        <p className="mt-2">{item.maalik}</p>
    </div>

<div className="bg-[#020817] p-4 rounded-xl">
    <p className="text-yellow-400 font-semibold">🏡 पक्का घर</p>
    <p className="mt-2">{item.pakka_ghar}</p>
</div>

<div className="bg-[#020817] p-4 rounded-xl">
    <p className="text-yellow-400 font-semibold">✨ किस्मत ग्रह</p>
    <p className="mt-2">{item.kismat}</p>
</div>

<div className="bg-[#020817] p-4 rounded-xl">
    <p className="text-yellow-400 font-semibold">💤 सोया</p>
    <p className={`mt-2 font-bold ${item.soya ? "text-red-400" : "text-green-400"}`}>
    {item.soya ? "हाँ" : "नहीं"}
</p>

</div>
    </div>

   {
        Array.isArray(item.exalt) && item.exalt.length > 0 && (

<div className="mt-5">

<h3 className="text-green-400 font-semibold mb-2">⬆️ उच्च ग्रह</h3>

<div className="flex gap-3 flex-wrap">

    {
        item.exalt.map((planet,i)=>(
    <span key={i} className="px-4 py-2 bg-green-900 rounded-xl">{planet}</span>
    ))
    }
</div>
</div>

)
}

    {
        Array.isArray(item.debilitated) && item.debilitated.length > 0 && (

<div className="mt-5">
<h3 className="text-red-400 font-semibold mb-2">⬇️ नीच ग्रह</h3>

<div className="flex gap-3 flex-wrap">
    {
        item.debilitated.map((planet,i)=>(

    <span key={i} className="px-4 py-2 bg-red-900 rounded-xl">{planet}</span>

))
}

</div>

</div>

)
}

</div>

))
}

</div>

)

}

export default LalkitabHouses