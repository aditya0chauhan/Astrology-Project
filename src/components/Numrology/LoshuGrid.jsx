import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";

const LoshuGrid = ({ userData }) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userData) {
            fetchData();
        }
    }, [userData]);


  const fetchData = async () => {

    setLoading(true);

    try {

        const [year, month, day] = userData.date.split("-");
        const formattedDate = `${day}/${month}/${year}`;

        const response = await fetch(
            `/.netlify/functions/proxy/api/numerology/loshu-grid?date=${formattedDate}&gender=${userData.gender}&lang=hi`);

        const result = await response.json();

        setData(result.response);

    }

    catch(error){

        console.log(error);

    }

    finally{

        setLoading(false);

    }

}


    const gridOrder = [4,9,2,3,5,7,8,1,6];

if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
            
        );
    }
   return (

<div className="min-h-screen py-10 px-5 text-white">


<h2 className="text-center text-4xl font-bold text-yellow-400 mb-10">
✨ Manoj Astro Lo Shu Grid ✨
</h2>


{
!loading && data &&  (

<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">


{/* Grid Card */}

<div className="bg-[#050b20] border border-yellow-500 rounded-2xl p-8 shadow-xl">


<h3 className="text-center text-2xl text-yellow-400 mb-6">
Numerology Chart
</h3>


<div className="grid grid-cols-3 mx-auto w-80 h-80 border-2 border-yellow-500">


{
gridOrder.map((num)=>(


<div
key={num}
className="border border-yellow-500 flex items-center justify-center text-4xl font-bold"
>


<span className={
data?.loshuGrid?.[num]
?
"text-yellow-400"
:
"text-red-500"
}>

{
data?.loshuGrid?.[num] || num
}


</span>


</div>


))
}


</div>


</div>



{/* Details */}


<div className="bg-[#050b20] border border-yellow-500 rounded-2xl p-8">


<h3 className="text-2xl text-yellow-400 mb-5">
Your Numerology Details
</h3>



<div className="space-y-4 text-lg">


<p>
🟢 Available Numbers :
<span className="text-yellow-400">
 {data.availableNumbers}
</span>
</p>


<p>
🔴 Missing Numbers :
<span className="text-red-400">
 {data.missingNumbers}
</span>
</p>



<p>
⭐ Life Path Number :
<span className="text-yellow-400">
 {data.lifePathNumber}
</span>
</p>


<p>
🌙 Destiny Number :
<span className="text-yellow-400">
 {data.destinyNumber}
</span>
</p>


<p>
🔱 Kua Number :
<span className="text-yellow-400">
 {data.kuaNumber}
</span>
</p>


</div>


</div>


</div>


)

}


</div>

)
}


export default LoshuGrid;