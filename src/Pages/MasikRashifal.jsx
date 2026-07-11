import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../utils/buttons/Loader";


const MasikRashifal = () => {
    const { rashi } = useParams();
    const [rashifal, setRashifal] = useState(null);
    const [loading, setLoading] = useState(false);

    const zodiacMap = {
        mesh: 1,
        vrishabh: 2,
        mithun: 3,
        kark: 4,
        singh: 5,
        kanya: 6,
        tula: 7,
        vrishchik: 8,
        dhanu: 9,
        makar: 10,
        kumbh: 11,
        meen: 12
    }

    const rashiCards = [

        {
            name: "मेष",
            path: "mesh",
            icon: "♈"
        },

        {
            name: "वृषभ",
            path: "vrishabh",
            icon: "♉"
        },

        {
            name: "मिथुन",
            path: "mithun",
            icon: "♊"
        },

        {
            name: "कर्क",
            path: "kark",
            icon: "♋"
        },

        {
            name: "सिंह",
            path: "singh",
            icon: "♌"
        },

        {
            name: "कन्या",
            path: "kanya",
            icon: "♍"
        },

        {
            name: "तुला",
            path: "tula",
            icon: "♎"
        },

        {
            name: "वृश्चिक",
            path: "vrishchik",
            icon: "♏"
        },

        {
            name: "धनु",
            path: "dhanu",
            icon: "♐"
        },

        {
            name: "मकर",
            path: "makar",
            icon: "♑"
        },

        {
            name: "कुंभ",
            path: "kumbh",
            icon: "♒"
        },

        {
            name: "मीन",
            path: "meen",
            icon: "♓"
        }

    ]

    const getRashifal = async () => {
        try {
            setLoading(true);
            const zodicNumber = zodiacMap[rashi];
            const response = await fetch(
                `https://api.jyotishamastroapi.com/api/prediction/monthly?zodiac=${zodicNumber}&day=today&lang=hi`,
                {
                    headers: {
                        key: import.meta.env.VITE_ASTRO_API_KEY
                    }
                }
            );

            const data = await response.json();
             setRashifal(data);
        }
        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (rashi) {
            getRashifal();
        }
    }, [rashi])

    if (loading) {

        return (

            <div className="min-h-screen flex justify-center items-center bg-[#0a0a0a]">
                <Loader />
            </div>
        )
    }

    if (!rashi) {

        return (

         <div className="mt-24 min-h-screen bg-[#0a0a0a] text-white px-5 py-10">

            <h1 className="text-center text-3xl text-yellow-400 font-bold mb-8">
                    🌞 मासिक राशिफल
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
                    {
                        rashiCards.map((item) => (

             <Link key={item.path} to={`/masik_rashifal/${item.path}`}
                className="bg-white/10 rounded-xl p-6 text-center border border-yellow-500 hover:scale-105 duration-300 ">

                   <h2 className="text-4xl">
                      {item.icon}
                     </h2>

                  <p className="text-yellow-300 mt-3 text-xl">
                    {item.name}
                         </p>
                            </Link>
                        ))
                    }

                </div>
            </div>
        )
    }
    return (
        <div className="mt-24 min-h-screen bg-[#0a0a0a] text-white px-5 py-10">
             {
                rashifal?.response && (
                   
            <div className="max-w-3xl mx-auto bg-white/10 p-6 rounded-2xl space-y-5">
               <h1 className="text-3xl text-yellow-400 font-bold text-center">
                 {rashi} राशिफल
                 </h1>

                   <p>
                  📅 {rashifal.response.month}
                        </p>

               <div>
                  <h2 className="text-green-400 text-xl">मासिक राशिफल</h2>

                  <p>{rashifal.response.horoscope_data}
                      </p></div>

            <div className="grid grid-cols-2 gap-4">
                <Card
                    title="❤️ प्रेम"
                    value={rashifal.response.love}/>
                <Card
                    title="👑 Career"
                    value={rashifal.response.career}/>

                <Card
                    title="⭐ परिवार"
                    value={rashifal.response.family}/>

                <Card
                    title="🏥 स्वास्थ्य"
                    value={rashifal.response.health}/>

                <Card
                    title="🫱🫲 चुनौतीपूर्ण दिन"
                    value={rashifal.response.challenging_days}/>
                    
                    </div>
                    </div>
                )
            }
        </div>
    )
}

const Card = ({ title, value }) => {
    return (

        <div className="bg-black/30 rounded-xl p-4">

            <h2 className="text-yellow-400">
                {title}
            </h2>

            <p>{value}</p>
        </div>

    )
}

export default MasikRashifal;