import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";

const SadeSati = ({ userData }) => {
    const [sadeSati, setSadeSati] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;
        const { formattedDate, time, latitude, longitude } = userData;
        const fetchSadeSati = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `https://api.jyotishamastroapi.com/api/extended_horoscope/current_sadesati?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`,
                    {
                        headers: { key: import.meta.env.VITE_ASTRO_API_KEY },
                    }
                )

                const dosha = await data.json();
                setSadeSati(dosha.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchSadeSati()
    }, [userData])

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!sadeSati) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }

    return (

<div className="mt-10 px-5 text-white">


{
loading && <Loader/>
}


{
!loading && sadeSati && (


<div className="
max-w-5xl
mx-auto
bg-[#050b20]
border
border-yellow-500
rounded-3xl
p-8
shadow-xl
">


<h2 className="
text-center
text-3xl
font-bold
text-yellow-400
mb-8
">
🪐 शनि साढ़े साती रिपोर्ट
</h2>



{/* Status Card */}

<div className="
border
border-yellow-500
rounded-2xl
p-6
mb-6
text-center
">


<h3 className="text-xl text-gray-300">
साढ़े साती स्थिति
</h3>


<p className="
text-3xl
font-bold
text-yellow-400
mt-3
">

{
sadeSati.is_sade_sati_period
?
"चल रही है"
:
"नहीं चल रही"
}

</p>


</div>






<div className="
grid
md:grid-cols-3
gap-5
mb-8
">


<div className="border border-yellow-500 rounded-xl p-5 text-center">

<p className="text-gray-300">
Age
</p>

<h3 className="text-3xl text-yellow-400">
{sadeSati.age}
</h3>

</div>

<div className="border border-yellow-500 rounded-xl p-5 text-center">

<p className="text-gray-300">
Shani Period
</p>

<h3 className="text-xl text-yellow-400">
{sadeSati.shani_period_type}
</h3>

</div>


</div>





{/* Description */}


<div className="
border
border-yellow-500
rounded-2xl
p-6
mb-8
">


<h3 className="
text-2xl
text-yellow-400
mb-3
">
📜 विवरण
</h3>


<p className="
text-gray-300
leading-8
">

{sadeSati.description}

</p>


</div>







{/* Remedies */}



<div>


<h3 className="
text-2xl
text-yellow-400
mb-5
">
🙏 उपाय
</h3>



<div className="space-y-4">


{
sadeSati.remedies?.map((item,index)=>(


<div

key={index}

className="
border
border-yellow-500
rounded-xl
p-4
bg-[#020817]
"

>


<span className="text-yellow-400">

{index+1}.

</span>


{" "}


{item}


</div>


))
}


</div>


</div>



</div>


)

}


</div>

)
    
}

export default SadeSati