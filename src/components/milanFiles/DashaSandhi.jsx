import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";


const DashaSandhi = ({ boyData, girlData }) => {
  const [dashaSandhi, setDashaSandhi] = useState(null);
  const [loading, setLoading] = useState(false);

  const sandhiMilan = async () => {
    try {
      setLoading(true)
      const boyDob = boyData.dob.replace(/-/g, "/");
      const girlDob = girlData.dob.replace(/-/g, "/");

      const response = await fetch(
        `${API_BASE}/astro/matching/dasha-sandhi?boy_dob=${boyDob}&boy_tob=${boyData.time}&boy_lat=${boyData.latitude}&boy_lon=${boyData.longitude}&boy_tz=5.5&girl_dob=${girlDob}&girl_tob=${girlData.time}&girl_lat=${girlData.latitude}&girl_lon=${girlData.longitude}&girl_tz=5.5&lang=hi`);

      const json = await response.json();
     
      setDashaSandhi(json.response)

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
      sandhiMilan();
    }
  }, [boyData.latitude, girlData.latitude]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!dashaSandhi) {
    return <div className="text-center text-red-400 mt-10">
      डेटा उपलब्ध नहीं है।
    </div>
  }

  return (
  <div className="mt-10 text-white">

    <div className="bg-[#1A2742] rounded-2xl border border-amber-400 p-6">

      <h1 className="text-3xl text-center font-bold text-amber-400">
        🪐 दशा संधि मिलान
      </h1>

      <div className="mt-8 bg-[#243454] rounded-xl p-6">

        <h2 className="text-2xl font-bold text-green-400">
          परिणाम
        </h2>

        <p className="mt-4 text-gray-300 text-lg">
          {dashaSandhi.verdict}
        </p>

      </div>

      <div className="mt-8 bg-[#243454] rounded-xl p-5 border border-purple-400">

        <h2 className="text-xl font-bold text-purple-300">
          ⏳ दशा अंतराल
        </h2>

        <p className="text-4xl mt-3 text-amber-400 font-bold">
          {dashaSandhi.gap_months}
        </p>

        <p className="text-gray-400">
          महीने का अंतर
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-[#243454] rounded-xl p-6 border border-blue-400">
          <h2 className="text-2xl font-bold text-blue-300">
            👦 वर दशा विवरण
          </h2>

          <div className="mt-5 space-y-3">
            <p>
              <span className="text-amber-400">
                वर्तमान दशा :
              </span>{" "}
              {dashaSandhi.boy_sandhi.current_dasha}
            </p>

            <p>
              <span className="text-amber-400">
                अगली दशा :
              </span>{" "}
              {dashaSandhi.boy_sandhi.next_dasha}
            </p>

            <p>
              <span className="text-amber-400">
                संधि प्रारंभ :
              </span>{" "}
              {dashaSandhi.boy_sandhi.sandhi_start}
            </p>

            <p>
              <span className="text-amber-400">
                संधि समाप्त :
              </span>{" "}
              {dashaSandhi.boy_sandhi.sandhi_end}
            </p>

          </div>
        </div>

        <div className="bg-[#243454] rounded-xl p-6 border border-pink-400">

          <h2 className="text-2xl font-bold text-pink-300">
            👧 वधू दशा विवरण
          </h2>

          <div className="mt-5 space-y-3">

            <p>
              <span className="text-amber-400">
                वर्तमान दशा :
              </span>{" "}
              {dashaSandhi.girl_sandhi.current_dasha}
            </p>

            <p>
              <span className="text-amber-400">
                अगली दशा :
              </span>{" "}
              {dashaSandhi.girl_sandhi.next_dasha}
            </p>

            <p>
              <span className="text-amber-400">
                संधि प्रारंभ :
              </span>{" "}
              {dashaSandhi.girl_sandhi.sandhi_start}
            </p>

            <p>
              <span className="text-amber-400">
                संधि समाप्त :
              </span>{" "}
              {dashaSandhi.girl_sandhi.sandhi_end}
            </p>


          </div>
        </div>
      </div>
    </div>
  </div>
)
};

export default DashaSandhi;