import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";

const Gem = ({ userData }) => {
    const [gem, setGem] = useState(null);
    const [rudraksha, setRudraksha] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userData) return;
        const { formattedDate, time, latitude, longitude } = userData;
        const fetchGem = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `/.netlify/functions/proxy/api/extended_horoscope/gem_suggestion?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`)

                const response = await data.json();
                setGem(response.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        const fetchRudraksha = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `/.netlify/functions/proxy/api/extended_horoscope/rudraksh_suggestion?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`)

                const response = await data.json();
                setRudraksha(response.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchGem()
        fetchRudraksha()
    }, [userData])

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!gem) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }

    return (

        <div className="mt-10 px-5 text-white">

            {
                loading && <Loader />
            }


            {
                !loading && gem && (

                    <div className="max-w-6xl mx-auto bg-[#050b20] border border-yellow-500 rounded-3xl p-8">


                        <h2 className="text-center text-3xl font-bold text-yellow-400 mb-8 ">
                            💎 रत्न सुझाव
                        </h2>

                        <div className="border border-yellow-500 rounded-2xl p-6 text-center mb-8 ">


                            <h3 className="text-5xl font-bold text-yellow-400 ">

                                {gem.name}

                            </h3>


                            <p className="text-xl mt-3">
                                Gem : {gem.gem}
                            </p>


                            <p className="text-gray-300 mt-2">

                                Planet : {gem.planet}

                            </p>


                        </div>

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 ">
            {
              [
               ["🎨 रंग", gem.color],
               ["📅 दिन", gem.day],
               ["👉 उंगली", gem.finger],
               ["🪐 धातु", gem.metal],
               ["💎 Lucky Stone", gem.lucky_stone],
               ["🔮 Life Stone", gem.life_stone],

                    ].map((item, index) => (


                <div key={index} 
                className=" border border-yellow-500 rounded-xl p-5 text-center ">


                <p className="text-gray-300">
                {item[0]}
                </p>


                <h3 className="text-xl text-yellow-400 font-bold mt-2">
                   {item[1]}
                </h3>

            </div>


            ))
              }
               </div>

            <div className="border border-yellow-500 rounded-2xl p-5 mb-8 ">


               <h3 className="text-2xl text-yellow-400 mb-3 ">
                     📜 विवरण
                        </h3>


               <p className="leading-8 text-gray-300">
                   {gem.description}
                            </p>
                        </div>

                <h3 className="text-2xl text-yellow-400 mb-4 ">
                    ✨ फायदे
                     </h3>



           <div className="grid md:grid-cols-2 gap-4 mb-8">
               {
                gem.good_results?.map((item, index) => (
            <div key={index} className="border border-yellow-500 rounded-xl p-4 bg-[#020817]">

                     ✅ {item}

                </div>

            ))
              }
               </div>

             <h3 className="text-2xl text-yellow-400 mb-4">
                   ⚠️ किन समस्याओं में सहायक
                        </h3>


            <div className="space-y-3 mb-8">
              {
                 gem.flaw_results?.map((item, index) => (
                    <div key={index} 
                className="border border-yellow-500 rounded-xl p-4 ">


                                        <span className="text-red-400">
                                            {item.flaw_type}
                                        </span>


                                        <br />


                                        <span className="text-gray-300">

                                            {item.flaw_effects}

                                        </span>


                                    </div>


                                ))

                            }


                        </div>





                        {/* Mantra */}



                        <div className="
border
border-yellow-500
rounded-2xl
p-5
text-center
">


                            <h3 className="
text-2xl
text-yellow-400
">
                                🕉 मंत्र
                            </h3>


                            <p className="
mt-3
text-xl
">

                                {gem.mantra}

                            </p>


                        </div>




                    </div>

                )

            }

            {
rudraksha && (

<div className="
max-w-6xl
mx-auto
bg-[#050b20]
border
border-yellow-500
rounded-3xl
p-8
mt-10
">


<h2 className="
text-center
text-3xl
font-bold
text-yellow-400
mb-8
">
📿 रुद्राक्ष सुझाव
</h2>


{/* Main Card */}

<div className="
border
border-yellow-500
rounded-2xl
p-6
text-center
mb-8
">


<h3 className="
text-4xl
font-bold
text-yellow-400
">

{
rudraksha.name?.join(" + ")
}

</h3>


<p className="
text-gray-300
mt-4
leading-8
">

{rudraksha.personalized_response}

</p>


</div>





{/* Rudraksha List */}


<h3 className="
text-2xl
text-yellow-400
mb-4
">
📿 धारण करने योग्य रुद्राक्ष
</h3>



<div className="
grid
md:grid-cols-2
gap-5
mb-8
">


{
rudraksha.rudraksh?.map((item,index)=>(


<div
key={index}

className="
border
border-yellow-500
rounded-xl
p-5
bg-[#020817]
text-center
"
>

<p className="
text-2xl
font-bold
text-yellow-400
">

{item}

</p>


</div>


))
}


</div>





{/* Qualities */}



<h3 className="
text-2xl
text-yellow-400
mb-4
">
✨ विशेष गुण
</h3>


<div className="
grid
md:grid-cols-2
gap-4
mb-8
">


{
rudraksha.qualities?.map((item,index)=>(


<div
key={index}
className="
border
border-yellow-500
rounded-xl
p-4
"
>


✅ {item}


</div>


))
}

</div>







{/* Mantra */}



<h3 className="
text-2xl
text-yellow-400
mb-4
">
🕉 मंत्र
</h3>


<div className="space-y-3 mb-8">


{
rudraksha.mantra?.map((item,index)=>(


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


{item}


</div>


))
}


</div>





{/* Wearing */}



<div className="
border
border-yellow-500
rounded-2xl
p-5
mb-8
">


<h3 className="
text-2xl
text-yellow-400
mb-3
">
🙏 पहनने की विधि
</h3>


<p className="text-gray-300">

{rudraksha.how_to_wear}

</p>


</div>





{/* Time */}


<div className="
border
border-yellow-500
rounded-2xl
p-5
text-center
">


<h3 className="
text-xl
text-yellow-400
">
⏰ शुभ समय
</h3>


<p className="mt-3">

{rudraksha.time_to_wear}

</p>


</div>



</div>


)
}

        </div>

    )
}

export default Gem;