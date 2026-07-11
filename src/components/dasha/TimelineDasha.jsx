import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";

const TimelineDasha = ({ userData }) => {
  const [timeDasha, setTimeDasha] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userData) return;
    const { formattedDate, time, latitude, longitude } = userData;
    const fetchTimelineDasha = async () => {
       try {
        setLoading(true);

        const data = await fetch(
          `https://api.jyotishamastroapi.com/api/dasha/mahadasha?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`,
          {
            headers: { key: import.meta.env.VITE_ASTRO_API_KEY },
          }
        )

        const dasha = await data.json();
        setTimeDasha(dasha.response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchTimelineDasha()
  }, [userData])

  if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

  if (!timeDasha) {
    return <div className="text-center text-red-400 mt-10">
      डेटा उपलब्ध नहीं है।
    </div>
  }
return (
  <div className="mt-24 text-white">

    <h1 className="text-3xl font-bold text-center text-amber-400">
      महादशा क्रम (Timeline)
    </h1>

    <p className="text-center text-gray-300 mt-3">
      जन्म के बाद ग्रहों की महादशाओं का क्रम
    </p>

    {/* Top Info */}

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="bg-[#1A2742] border border-amber-400 rounded-xl p-5">
        <p className="text-gray-400">
          महादशा प्रारम्भ
        </p>

        <h2 className="text-xl font-bold text-amber-300 mt-2">
          {timeDasha.dasha_start_date}
        </h2>
      </div>

      <div className="bg-[#1A2742] border border-amber-400 rounded-xl p-5">
        <p className="text-gray-400">
          जन्म के समय शेष महादशा
        </p>

        <h2 className="text-xl font-bold text-green-300 mt-2">
          {timeDasha.dasha_remaining_at_birth}
        </h2>
      </div>

    </div>

    {/* Timeline */}

    <div className="mt-12 relative">

      <div className="absolute left-5 top-0 bottom-0 w-1 bg-amber-400 rounded-full"></div>

      <div className="space-y-8">

        {timeDasha.mahadasha.map((planet, index) => (

          <div
            key={index}
            className="relative pl-16"
          >

            <div className="absolute left-[11px] top-3 h-5 w-5 rounded-full bg-amber-400 border-4 border-[#111827]"></div>

            <div className="bg-[#1A2742] border border-amber-400 rounded-xl p-5 hover:scale-[1.02] transition">

              <h2 className="text-2xl font-bold text-amber-300">
                {planet}
              </h2>

              <p className="mt-3 text-green-300">
                प्रारम्भ :
                <span className="text-white ml-2">
                  {timeDasha.mahadasha_order[index]}
                </span>
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>
);
}

export default TimelineDasha