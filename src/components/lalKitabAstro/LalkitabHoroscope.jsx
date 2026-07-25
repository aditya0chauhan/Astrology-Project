import {useEffect, useState} from 'react'
import Loader from '../../utils/buttons/Loader';

const LalkitabHoroscope = ({userData}) => {
    const [horoscope, setHoroscope] = useState(null);
        const [loading, setLoading] = useState(false);
        useEffect(() => {
                if (userData) {
                    fetchHoroscope();
                }
            },[userData]);
        
        
    const fetchHoroscope  = async()=>{
        setLoading(true);
        try {
            const [year, month, day] = userData.dob.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const response = await fetch(
                `/.netlify/functions/proxy/api/lalKitab/horoscope?date=${formattedDate}&time=${userData.time}&latitude=${userData.latitude}&longitude=${userData.longitude}&tz=5.5&lang=hi`);

            const result = await response.json();
            setHoroscope(result.response);
            
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

        <div className="mt-10 px-5 text-white">
    {
        horoscope && (

    <div className="max-w-6xl mx-auto bg-[#050b20] border border-orange-500 rounded-3xl p-8 ">

        <h2 className="text-center text-3xl font-bold text-orange-400 mb-10 "> 
            ग्रहों की स्थिति
        </h2>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {
        horoscope.map((item,index)=>(

    <div key={index} className="bg-[#111827] border border-orange-500 rounded-2xl p-5 hover:scale-105 duration-300 ">

        <h3 className="text-2xl font-bold text-yellow-400 mb-4 "> 
            ♈ {item.sign_name}
        </h3>

    <div className="mb-3">

        <p className="text-orange-400 font-semibold">
            ग्रह :
        </p>

    {
        item.planet.length > 0 ?
        item.planet.map((planet,i)=>(

    <span key={i} className="inline-block bg-orange-500 text-black px-3 py-1 rounded-full mr-2 mt-2 ">
        {planet}
    </span>

))
    :
    <p className="text-gray-400">कोई ग्रह नहीं</p>
}

</div>

<div>

    <p className="text-orange-400 font-semibold">छोटे ग्रह :</p>

    {
        item.planet_small.length > 0 ?
        item.planet_small.map((planet,i)=>(

    <span key={i} className="inline-block border border-yellow-400 text-yellow-400 px-3 py-1 rounded-full mr-2 mt-2 ">

        {planet}

    </span>
))

    :

<p className="text-gray-400">कोई नहीं</p>
}

</div>

</div>

))}

</div>
</div>

)}

</div>

)}

export default LalkitabHoroscope