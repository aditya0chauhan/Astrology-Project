import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";

const AsthakootMilan = ({ boyData, girlData }) => {
  const [milanData, setMilanData] = useState(null);
  const [loading, setLoading] = useState(false);

  const asthakoot = async () => {
    try {
      setLoading(true)
      const boyDob = boyData.dob.replace(/-/g, "/");
      const girlDob = girlData.dob.replace(/-/g, "/");

      const response = await fetch(
        `/.netlify/functions/proxy/api/matching/ashtakoot-astro?boy_dob=${boyDob}&boy_tob=${boyData.time}&boy_lat=${boyData.latitude}&boy_lon=${boyData.longitude}&boy_tz=5.5&girl_dob=${girlDob}&girl_tob=${girlData.time}&girl_lat=${girlData.latitude}&girl_lon=${girlData.longitude}&girl_tz=5.5&lang=hi`);

      const json = await response.json();
      setMilanData(json.response)

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
      asthakoot();
    }
  }, [boyData, girlData]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!milanData) {
    return <div className="text-center text-red-400 mt-10">
      डेटा उपलब्ध नहीं है।
    </div>
  }

  return (
    <div className="mt-10 text-white">

      <div className="bg-[#1A2742] rounded-xl border border-amber-400 p-6">

        <h1 className="text-3xl text-amber-400 font-bold text-center">
          अष्टकूट मिलान
        </h1>

        <div className="mt-10 bg-[#243454] rounded-xl p-6">

          <h2 className="text-2xl text-green-400 font-bold">
            कुल स्कोर
          </h2>

          <p className="text-5xl font-bold mt-3 text-amber-400">

            {milanData.score} / 36

          </p>

          <p className="mt-5 text-gray-300">

            {milanData.bot_response}

          </p>

        </div>

      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Varna */}

        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">
          <h3 className="text-amber-400 font-bold text-xl">
            वर्ण
          </h3>

          <p className="mt-3">
            <b>वर :</b> {milanData.varna.boy_varna}
          </p>

          <p>
            <b>वधू :</b> {milanData.varna.girl_varna}
          </p>

          <p className="text-green-400 mt-2">
            {milanData.varna.varna} / {milanData.varna.full_score}
          </p>

          <p className="text-sm text-gray-300 mt-2">
            {milanData.varna.description}
          </p>
        </div>

        {/* Vashya */}

        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">
          <h3 className="text-amber-400 font-bold text-xl">
            वश्य
          </h3>

          <p><b>वर :</b> {milanData.vasya.boy_vasya}</p>

          <p><b>वधू :</b> {milanData.vasya.girl_vasya}</p>

          <p className="text-green-400 mt-2">
            {milanData.vasya.vasya} / {milanData.vasya.full_score}
          </p>

          <p className="text-sm text-gray-300 mt-2">
            {milanData.vasya.description}
          </p>
        </div>

        {/* Tara */}

        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">
          <h3 className="text-amber-400 font-bold text-xl">
            तारा
          </h3>

          <p><b>नाम :</b> {milanData.tara.name}</p>

          <p className="text-green-400 mt-2">
            {milanData.tara.tara} / {milanData.tara.full_score}
          </p>

          <p className="text-sm text-gray-300 mt-2">
            {milanData.tara.description}
          </p>
        </div>

        {/* Yoni */}

        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">
          <h3 className="text-amber-400 font-bold text-xl">
            योनि
          </h3>

          <p><b>वर :</b> {milanData.yoni.boy_yoni}</p>

          <p><b>वधू :</b> {milanData.yoni.girl_yoni}</p>

          <p className="text-green-400 mt-2">
            {milanData.yoni.yoni} / {milanData.yoni.full_score}
          </p>

          <p className="text-sm text-gray-300 mt-2">
            {milanData.yoni.description}
          </p>
        </div>

      </div>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Graha Maitri */}

        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">
          <h3 className="text-amber-400 font-bold text-xl">
            ग्रह मैत्री
          </h3>

          <p><b>वर :</b> {milanData.grahamaitri.boy_lord}</p>

          <p><b>वधू :</b> {milanData.grahamaitri.girl_lord}</p>

          <p className="text-green-400 mt-2">
            {milanData.grahamaitri.grahamaitri} / {milanData.grahamaitri.full_score}
          </p>

          <p className="text-sm text-gray-300 mt-2">
            {milanData.grahamaitri.description}
          </p>
        </div>

        {/* Gana */}

        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">
          <h3 className="text-amber-400 font-bold text-xl">
            गण
          </h3>

          <p><b>वर :</b> {milanData.gana.boy_gana}</p>

          <p><b>वधू :</b> {milanData.gana.girl_gana}</p>

          <p className="text-green-400 mt-2">
            {milanData.gana.gana} / {milanData.gana.full_score}
          </p>

          <p className="text-sm text-gray-300 mt-2">
            {milanData.gana.description}
          </p>
        </div>

        {/* Bhakoot */}

        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">
          <h3 className="text-amber-400 font-bold text-xl">
            भकूट
          </h3>

          <p><b>वर :</b> {milanData.bhakoot.boy_rasi_name}</p>

          <p><b>वधू :</b> {milanData.bhakoot.girl_rasi_name}</p>

          <p className="text-green-400 mt-2">
            {milanData.bhakoot.bhakoot} / {milanData.bhakoot.full_score}
          </p>

          <p className="text-sm text-gray-300 mt-2">
            {milanData.bhakoot.description}
          </p>
        </div>

        {/* Nadi */}

        <div className="bg-[#243454] rounded-xl p-5 border border-amber-400">
          <h3 className="text-amber-400 font-bold text-xl">
            नाड़ी
          </h3>

          <p><b>वर :</b> {milanData.nadi.boy_nadi}</p>

          <p><b>वधू :</b> {milanData.nadi.girl_nadi}</p>

          <p className="text-green-400 mt-2">
            {milanData.nadi.nadi} / {milanData.nadi.full_score}
          </p>

          <p className="text-sm text-gray-300 mt-2">
            {milanData.nadi.description}
          </p>
        </div>

      </div>

    </div>
  );
};

export default AsthakootMilan;