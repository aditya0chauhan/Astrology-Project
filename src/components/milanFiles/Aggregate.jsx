import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";


const Aggregate = ({ boyData, girlData }) => {
    const [aggregate, setAggregate] = useState(null);
    const [loading, setLoading] = useState(false);

    const aggregateMilan = async () => {
        try {
            setLoading(true)
            const boyDob = boyData.dob.replace(/-/g, "/");
            const girlDob = girlData.dob.replace(/-/g, "/");

            const response = await fetch(
                `https://api.jyotishamastroapi.com/api/matching/aggregate-match?boy_dob=${boyDob}&boy_tob=${boyData.time}&boy_lat=${boyData.latitude}&boy_lon=${boyData.longitude}&boy_tz=5.5&girl_dob=${girlDob}&girl_tob=${girlData.time}&girl_lat=${girlData.latitude}&girl_lon=${girlData.longitude}&girl_tz=5.5&lang=hi`,
                {
                    headers: {
                        key: import.meta.env.VITE_ASTRO_API_KEY,
                    },
                }
            );

            const json = await response.json();
            setAggregate(json.response)

        } catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (
            boyData.latitude &&
            girlData.latitude
        ) {
            aggregateMilan();
        }
    }, [boyData.latitude, girlData.latitude]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!aggregate) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }

    return (
  <div className="mt-10 text-white">

    <div className="bg-[#1A2742] rounded-xl border border-amber-400 p-6">

      <h1 className="text-3xl font-bold text-center text-amber-400">
        💞 समग्र कुंडली मिलान
      </h1>


      {/* Score Section */}

      <div className="grid md:grid-cols-3 gap-5 mt-10">


        <div className="bg-[#243454] p-5 rounded-xl text-center border border-blue-400">

          <h2 className="text-xl text-blue-300 font-bold">
            अष्टकूट स्कोर
          </h2>

          <p className="text-4xl text-amber-400 mt-3 font-bold">
            {aggregate.ashtakoot_score}
          </p>

        </div>


        <div className="bg-[#243454] p-5 rounded-xl text-center border border-pink-400">

          <h2 className="text-xl text-pink-300 font-bold">
            दशाकूट स्कोर
          </h2>

          <p className="text-4xl text-amber-400 mt-3 font-bold">
            {aggregate.dashkoot_score}
          </p>

        </div>


        <div className="bg-[#243454] p-5 rounded-xl text-center border border-green-400">

          <h2 className="text-xl text-green-300 font-bold">
            कुल स्कोर
          </h2>

          <p className="text-4xl text-amber-400 mt-3 font-bold">
            {aggregate.score}
          </p>

        </div>

      </div>



      {/* Result */}

      <div className="bg-[#243454] mt-8 rounded-xl p-5">

        <h2 className="text-2xl text-amber-400 font-bold">
          📜 मिलान परिणाम
        </h2>


        <p className="mt-4 text-gray-200 leading-8">
          {aggregate.bot_response}
        </p>


        <p className="mt-4 text-gray-300 leading-8">
          {aggregate.extended_response}
        </p>

      </div>




      {/* Dosh Section */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">


        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">

          <h3 className="text-xl text-amber-400 font-bold">
            🔥 मंगल दोष
          </h3>

          <p className="mt-3">
            स्थिति : {aggregate.mangaldosh ? "है" : "नहीं है"}
          </p>

          <p className="mt-2 text-gray-300">
            {aggregate.mangaldosh_response}
          </p>

        </div>



        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">

          <h3 className="text-xl text-amber-400 font-bold">
            🐍 कालसर्प दोष
          </h3>

          <p className="mt-3">
            स्थिति : {aggregate.kaalsarpdosh ? "है" : "नहीं है"}
          </p>

          <p className="mt-2 text-gray-300">
            {aggregate.kaalsarpdosh_response}
          </p>

        </div>




        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">

          <h3 className="text-xl text-amber-400 font-bold">
            🪔 पितृ दोष
          </h3>

          <p className="mt-3">
            स्थिति : {aggregate.pitradosh ? "है" : "नहीं है"}
          </p>

          <p className="mt-2 text-gray-300">
            {aggregate.pitradosh_response}
          </p>

        </div>



        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">

          <h3 className="text-xl text-amber-400 font-bold">
            🌙 रज्जु दोष
          </h3>

          <p>
            स्थिति : {aggregate.rajjudosh ? "है" : "नहीं है"}
          </p>

        </div>




        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">

          <h3 className="text-xl text-amber-400 font-bold">
            ⭐ वेध दोष
          </h3>

          <p>
            स्थिति : {aggregate.vedhadosh ? "है" : "नहीं है"}
          </p>

        </div>


      </div>


    </div>


  </div>
);
};

    export default Aggregate;