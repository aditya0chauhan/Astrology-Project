import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";


const Papasamaya = ({ boyData, girlData }) => {
  const [papasamaya, setPapasamaya] = useState(null);
  const [loading, setLoading] = useState(false);

  const papasamyaMilan = async () => {
    try {
      setLoading(true)
      const boyDob = boyData.dob.replace(/-/g, "/");
      const girlDob = girlData.dob.replace(/-/g, "/");

      const response = await fetch(
        `/.netlify/functions/proxy/api/matching/papasamaya-match?boy_dob=${boyDob}&boy_tob=${boyData.time}&boy_lat=${boyData.latitude}&boy_lon=${boyData.longitude}&boy_tz=5.5&girl_dob=${girlDob}&girl_tob=${girlData.time}&girl_lat=${girlData.latitude}&girl_lon=${girlData.longitude}&girl_tz=5.5&lang=hi`);

      const json = await response.json();
      setPapasamaya(json.response)

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
      papasamyaMilan();
    }
  }, [boyData.latitude, girlData.latitude]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!papasamaya) {
    return <div className="text-center text-red-400 mt-10">
      डेटा उपलब्ध नहीं है।
    </div>
  }

  return (
    <div className="mt-10 text-white">

      <div className="bg-[#1A2742] border border-amber-400 rounded-2xl p-6">

        <h1 className="text-3xl text-center font-bold text-amber-400">
          🪐 पापसाम्य मिलान
        </h1>

        <div className="mt-8 bg-[#243454] rounded-xl p-6">

          <h2 className="text-2xl font-bold text-green-400">
            परिणाम
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            {papasamaya.verdict}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-[#243454] p-5 rounded-xl border border-blue-400">

            <h2 className="text-xl text-blue-300 font-bold">
              👦 वर
            </h2>

            <p className="text-4xl mt-3 text-amber-400 font-bold">

              {papasamaya.boy.total_papam}

            </p>

            <p className="text-gray-400">
              कुल पाप अंक
            </p>

          </div>


          <div className="bg-[#243454] p-5 rounded-xl border border-pink-400">

            <h2 className="text-xl text-pink-300 font-bold">
              👧 वधू
            </h2>

            <p className="text-4xl mt-3 text-amber-400 font-bold">

              {papasamaya.girl.total_papam}

            </p>

            <p className="text-gray-400">
              कुल पाप अंक
            </p>

          </div>

        </div>

        <h2 className="text-2xl mt-10 mb-5 text-blue-300 font-bold">
          👦 वर ग्रह दोष विवरण
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {papasamaya.boy.papam_table.map((item, index) => (

            <div
              key={index}
              className="bg-[#243454] p-5 rounded-xl border border-gray-600"
            >

              <h3 className="text-xl text-amber-400 font-bold">

                {item.planet}

              </h3>

              <p>
                लग्न से : {item.from_ascendant.papam}
              </p>

              <p>
                चंद्र से : {item.from_moon.papam}
              </p>

              <p>
                शुक्र से : {item.from_venus.papam}
              </p>

            </div>

          ))}

        </div>

        <h2 className="text-2xl mt-10 mb-5 text-pink-300 font-bold">
          👧 वधू ग्रह दोष विवरण
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {papasamaya.girl.papam_table.map((item, index) => (

            <div
              key={index}
              className="bg-[#243454] p-5 rounded-xl border border-gray-600"
            >

              <h3 className="text-xl text-amber-400 font-bold">

                {item.planet}

              </h3>

              <p>
                लग्न से : {item.from_ascendant.papam}
              </p>

              <p>
                चंद्र से : {item.from_moon.papam}
              </p>

              <p>
                शुक्र से : {item.from_venus.papam}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
};

export default Papasamaya;