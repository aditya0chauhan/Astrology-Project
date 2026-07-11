import { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';

const LalkitabRemidies = ({ userData }) => {
    const [remidies, setRemidies] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (userData) {
            fetchRemidies();
        }
    }, [userData]);


    const fetchRemidies = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.dob.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const response = await fetch(
                `https://api.jyotishamastroapi.com/api/lalKitab/remedies?date=${formattedDate}&time=${userData.time}&latitude=${userData.latitude}&longitude=${userData.longitude}&tz=5.5&lang=hi`,
                {
                    headers: {
                        key: import.meta.env.VITE_ASTRO_API_KEY
                    }
                }
            );

            const result = await response.json();
            setRemidies(result.response);

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
    remidies && Object.values(remidies).map((item,index)=>(

    <div key={index} className="bg-[#111827] border border-orange-500 rounded-2xl p-6 mb-6 shadow-xl text-white ">

    <h2 className="text-2xl font-bold text-orange-400 mb-5">🪐 {item.planet}</h2>

<div className="grid md:grid-cols-2 gap-5">

    <div className="bg-[#020817] p-4 rounded-xl">
        <p className="text-yellow-400 font-semibold">🏠 घर</p>
        <p className="mt-2">{item.house}</p>
    </div>

</div>

<div className="mt-5 bg-[#020817] p-4 rounded-xl">
    <p className="text-yellow-400 font-semibold mb-2">📜 प्रभाव</p>
    <p className="leading-8">{item.effects}</p>
</div>

    {
        item.remedies?.length > 0 && (

<div className="mt-5">

    <h3 className="text-green-400 font-semibold text-lg mb-3">🙏 उपाय</h3>

<div className="space-y-3">

    {
        item.remedies.map((remedy,i)=>(

    <div key={i} className="bg-green-950 border border-green-600 rounded-xl p-3 ">
    {remedy}</div>

))

}

</div>

</div>

)}

</div>

))

}

</div>

)

}

export default LalkitabRemidies