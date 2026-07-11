import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";


const NameAnalysis = ({ userData }) => {
    const [data, setData] = useState(null);
    const [luckyData, setLuckyData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userData) {
            fetchData();
            fetchLuckyData();
        }
    }, [userData]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const response = await fetch(
                `https://api.jyotishamastroapi.com/api/numerology/name-analysis?name=${userData.name}&date=${formattedDate}&gender=${userData.gender}&lang=hi`,
                {
                    headers: {
                        key: import.meta.env.VITE_ASTRO_API_KEY
                    }
                }
            );

            const result = await response.json();
                setData(result.response);
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }

    }

    const fetchLuckyData = async()=>{
        setLoading(true);
        try {
            const [year, month, day] = userData.date.split("-");
            const formattedDate = `${day}/${month}/${year}`;

            const response = await fetch(
                `https://api.jyotishamastroapi.com/api/numerology/lucky-things?date=${formattedDate}&gender=${userData.gender}&lang=hi`,
                {
                    headers: {
                        key: import.meta.env.VITE_ASTRO_API_KEY
                    }
                }
            );

            const result = await response.json();
                setLuckyData(result.response);
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }

    }

    <div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
    </div>

    return (

<div className="mt-10 px-5 text-white min-h-screen flex flex-col justify-center items-center">

{
    loading && <Loader/>
}

{
    !loading && data && (

<div className="max-w-6xl mx-auto bg-[#050b20] border border-yellow-500 rounded-3xl p-8 ">

    <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10 ">
    🔤 Name Analysis
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 ">

    {
        [
            ["🔢 Name Number",data.nameNumber],
            ["✨ First Name Number",data.firstNameNumber],
            ["🌟 Suggested Number",data.suggestedNameNumber],
            ].map((item,index)=>(

    <div key={index} className=" border border-yellow-500 rounded-2xl p-5 text-center bg-[#020817] ">

        <p className="text-gray-300">
            {item[0]}
        </p>

        <h3 className="text-3xl text-yellow-400 font-bold mt-3 "> 
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


        <p className="text-gray-300 leading-8 ">
            {data.description}
        </p>

</div>

    <h3 className="text-2xl text-yellow-400 mb-5 ">
        ❤️ Name Compatibility
        </h3>

    <div className="grid md:grid-cols-2 gap-5 mb-8 ">

    {
        [
            data.firstNameCompatibilityAsPerBhagyank,
            data.firstNameCompatibilityAsPerMoolank,
            data.nameCompatibilityAsPerBhagyank,
            data.nameCompatibilityAsPerMoolank,
        ].map((item,index)=>(

    <div key={index} className=" border border-yellow-500 rounded-xl p-5 bg-[#020817] " >

        <p className="text-gray-300 leading-7 "> 
            {item}
        </p>

    </div>

))
}

</div>

    <div className="grid md:grid-cols-2 gap-5 mb-8 ">

    <div className="order border-yellow-500 rounded-xl p-5 text-center ">

        <h3 className="text-xl text-yellow-400 mb-2 ">
            🍀 Lucky Numbers
        </h3>

    <p className="text-2xl">
        {data.luckyNumbers}
    </p>

</div>

    <div className="border border-yellow-500 rounded-xl p-5 text-center "> 

        <h3 className="text-xl text-yellow-400 mb-2 ">
            ⚖️ Neutral Numbers
        </h3>

    <p className="text-2xl">
        {data.neutralNumbers}
    </p>

    </div>
</div>

        <h3 className="text-2xl text-yellow-400 mb-5 ">
            ✍️ Suggested Name Spellings
        </h3>

    <div className="space-y-5 ">

    {
        data.suggestedNameSpellings?.map((item,index)=>(
        Object.entries(item).map(([title,value])=>(

    <div key={title} className="border border-yellow-500 rounded-xl p-5 bg-[#020817] ">

        <h3 className="text-xl text-yellow-400 mb-3 ">
            {title}
        </h3>

    {
        value.map((text,i)=>(

    <p key={i} className=" text-gray-300 leading-7 ">

        ✅ {text}

    </p>

))
}

</div>
))
))
}

</div>

</div> 

)}

{
luckyData && (

    <div className="max-w-6xl mx-auto bg-[#050b20] border border-yellow-500 rounded-3xl p-8 my-10">

        <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10 ">
            🍀 Lucky Things
        </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 ">

    {
        [["☀️ राशि", luckyData.sunSign],
        ["🌍 तत्व", luckyData.luckyThings?.element],
        ["👑 ग्रह स्वामी",  luckyData.luckyThings?.ruler],
        ].map((item,index)=>(

    <div key={index} className="border border-yellow-500 rounded-2xl p-5 bg-[#020817] text-center">
        
        <h3 className="text-yellow-400 text-xl font-bold">
            {item[0]}
        </h3>

        <p className="text-gray-300 mt-3">
            {item[1]}
        </p>

</div>
))
}

</div>

    <div className="border border-yellow-500 rounded-2xl p-5 mb-6 bg-[#020817] ">

        <h3 className="text-2xl font-bold text-yellow-400 mb-4 "> 
            🔢 Lucky Numbers
        </h3>

    {
        Object.values(luckyData.luckyThings?.numbers || {})
        .map((item,index)=>(

    <div key={index} className="mb-3">
        <p className="text-yellow-400">{item.label}</p>
        <p className="text-gray-300">{item.value}</p>
</div>

))

}

</div>

    <div className="border border-yellow-500 rounded-2xl p-5 mb-6 bg-[#020817] "> 

        <h3 className="text-2xl font-bold text-yellow-400 mb-4 ">
            🎨 रंग और दिशा
        </h3>

    {
        Object.values(luckyData.luckyThings?.colors_directions || {})
        .map((item,index)=>(

    <div key={index} className="mb-3">

        <p className="text-yellow-400">{item.label}</p>
        <p className="text-gray-300">{item.value}</p>

    </div>

))
}

</div>

    <div className="border border-yellow-500 rounded-2xl p-5 mb-6 bg-[#020817] ">

        <h3 className="text-2xl font-bold text-yellow-400 mb-4 ">
            📅 शुभ दिन और तारीख
        </h3>

    {
        Object.values(luckyData.luckyThings?.dates_days || {})
        .map((item,index)=>(

    <div key={index} className="mb-3">
        <p className="text-yellow-400">{item.label}</p>
        <p className="text-gray-300">{item.value}</p>
    </div>

))

}

</div>

    <div className="border border-yellow-500 rounded-2xl p-5 mb-6 bg-[#020817] ">

        <h3 className="text-2xl font-bold text-yellow-400 mb-4 "> 
            ✨ शुभ समय       
        </h3>

    {
        luckyData.luckyThings?.favourable_periods?.map((item,index)=>(

        <p key={index} className="text-gray-300 mb-2">
            ✅ {item}
        </p>
))
}

</div>

    <div className="border border-yellow-500 rounded-2xl p-5 bg-[#020817]">

        <h3 className="text-2xl font-bold text-yellow-400 mb-4 ">
            🌟 गुण
        </h3>

    {
        luckyData.traits?.map((item,index)=>(
    <span key={index} className="inline-block border border-yellow-500 rounded-full px-5 py-2 m-2 text-yellow-400 " >
        {item}
    </span>

))
}
</div>

</div>

)
}
</div>

)
}

export default NameAnalysis;