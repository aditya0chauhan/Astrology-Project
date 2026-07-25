import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../../utils/buttons/Loader";

const Subdasha = ({ userData }) => {
  const { t, i18n } = useTranslation();
  const [subDasha, setSubDasha] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userData) return;
    const { formattedDate, time, latitude, longitude } = userData;

    const fetchSubDasha = async () => {
      try {
        setLoading(true);

        const data = await fetch(
          `/.netlify/functions/proxy/api/dasha/specific-sub-dasha?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=${i18n.language === "hi" ? "hi" : "en"}`
        )

        const dasha = await data.json();
        setSubDasha(dasha.response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchSubDasha()
  }, [userData, i18n.language])
  
 if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

  if (!subDasha) {
    return <div className="text-center text-red-400 mt-10">
      {t("noDataAvailable")}
    </div>
  }

  return (
    <div>
      <div className="space-y-8 text-white">

        <div className="bg-[#1A2742] rounded-xl  p-6">

          <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">
            🌙 {t("specificSubDasha")}
          </h2>

          <div className="space-y-5">

            {subDasha.mahadasha.map((item, index) => (

              <div
                key={index}
                className="flex gap-5 bg-[#243454] rounded-xl p-5 border border-amber-500/20 border-2 border-amber-200 transition"
              >

                {/* Number */}

                <div className="flex flex-col items-center">

                  <div className="h-12 w-12 rounded-full bg-amber-400 text-black flex justify-center items-center font-bold text-lg">
                    {index + 1}
                  </div>

                  {index !== subDasha.mahadasha.length - 1 && (
                    <div className="w-1 flex-1 bg-amber-400 mt-2 rounded-full"></div>
                  )}

                </div>


                {/* Data */}

                <div className="flex-1">

                  <div className="flex justify-between items-center flex-wrap gap-2">

                    <h3 className="text-2xl font-bold text-white">
                      {item.name}
                    </h3>

                    <span className="bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {item.key}
                    </span>

                  </div>

                  <div className="mt-4 grid md:grid-cols-2 gap-4">

                    <div className="bg-[#1A2742] rounded-lg p-4">

                      <p className="text-gray-400">
                        {t("start")}
                      </p>

                      <p className="text-green-300 font-semibold mt-2">
                        {item.start}
                      </p>

                    </div>

                    <div className="bg-[#1A2742] rounded-lg p-4">

                      <p className="text-gray-400">
                        {t("end")}
                      </p>

                      <p className="text-red-300 font-semibold mt-2">
                        {item.end}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  )
}

export default Subdasha