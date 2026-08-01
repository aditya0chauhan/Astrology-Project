import { useEffect, useState } from "react";
import Loader from "../../utils/buttons/Loader";
import { API_BASE } from "../../config/api";

const Astakvarga = ({ userData }) => {
  const [astakvarga, setAstakvarga] = useState(null);
  const [astakvargaChart, setAstakvargaChart] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userData) return;

    const { formattedDate, time, latitude, longitude } = userData;

    const fetchAstakvarga = async () => {
      try {
        setLoading(true);

        const data = await fetch(
          `${API_BASE}/astro/horoscope/ashtakvarga?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`);

        const json = await data.json();
        setAstakvarga(json.response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchAstakvargaChart = async () => {
      try {
        setLoading(true);

        const data = await fetch(
          `${API_BASE}/astro/horoscope/ashtakvarga_chart?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`);
        const svg = await data.text();
        const cleanSvg = svg
          .replace(/^"/, "")
          .replace(/"$/, "")
          .replace(/\\"/g, '"')
          .replace(/\\n/g, "")

          // stroke attribute
          .replaceAll('stroke="black"', 'stroke="#FBBF24"')

          // stroke inside style
          .replaceAll("stroke:black", "stroke:#FBBF24")

          // Big numbers
          .replaceAll("fill:#000000", "fill:#ffffff")

          // Small numbers
          .replaceAll("fill:#1a0d00", "fill:#22C55E")
          ;
       
        setAstakvargaChart(cleanSvg);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAstakvarga();
    fetchAstakvargaChart()
  }, [userData]);
  if (loading) {

    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!astakvarga) {
    return (
      <div className="text-center text-red-400 mt-10">
        डेटा उपलब्ध नहीं है।
      </div>
    );
  }
  const rashi = [
    "मेष",
    "वृष",
    "मिथुन",
    "कर्क",
    "सिंह",
    "कन्या",
    "तुला",
    "वृश्चिक",
    "धनु",
    "मकर",
    "कुम्भ",
    "मीन",
  ];
  return (
    <div className="mt-24 text-white">

      <h1 className="text-3xl font-bold text-center text-amber-400 mb-10">
        अष्टकवर्ग
      </h1>

      <div className="rounded-2xl border border-amber-400 bg-[#1A2742] p-2 md:p-5 shadow-xl">

        <table className="w-full table-fixed border-collapse text-[9px] sm:text-[11px] md:text-sm lg:text-base">

          <thead>

            <tr className="bg-amber-400 text-black">

              <th className="border border-amber-500 font-bold">
                ग्रह
              </th>

              {rashi.map((item, index) => (

                <th
                  key={index}
                  className="border border-amber-500 py-3 px-1 font-bold"
                >

                  {/* Mobile */}

                  <span className="md:hidden">
                    {item.substring(0, 2)}
                  </span>

                  {/* Desktop */}

                  <span className="hidden md:inline">
                    {item}
                  </span>

                </th>

              ))}

            </tr>

          </thead>

          <tbody>

            {astakvarga.ashtakvarga_order.map((planet, rowIndex) => (

              <tr
                key={planet}
                className="hover:bg-[#243454] transition"
              >

                <td className="border border-gray-700 py-3 font-bold Text-amber-300 md:text-base leading-tight break-words text-center">
                  {planet}

                </td>

                {astakvarga.ashtakvarga_points[rowIndex].map((point, colIndex) => (

                  <td
                    key={colIndex}
                    className={`text-center border border-gray-700 py-3 px-1 font-bold

                  ${point >= 6
                        ? "text-green-400"
                        : point >= 4
                          ? "text-yellow-300"
                          : point >= 2
                            ? "text-orange-400"
                            : "text-red-400"
                      }`}
                  >

                    {point}

                  </td>

                ))}

              </tr>

            ))}

            <tr className="bg-amber-400 text-black font-bold">

              <td className="border border-amber-500 py-3 px-1">
                कुल
              </td>

              {astakvarga.ashtakvarga_total.map((item, index) => (

                <td
                  key={index}
                  className="text-center border border-amber-500 py-3 px-1"
                >

                  {item}

                </td>

              ))}

            </tr>

          </tbody>

        </table>

      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs md:text-sm">

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <span>0–1 कमजोर</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-400"></div>
          <span>2–3 सामान्य</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
          <span>4–5 अच्छा</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <span>6+ श्रेष्ठ</span>
        </div>

      </div>

      <div className="mt-14">

        <h2 className="text-2xl font-bold text-center text-amber-400 mb-8">
          अष्टकवर्ग चार्ट
        </h2>

        {/* 👇 Ye wrapper add karna hai */}
        <div className="max-w-xl mx-auto">

          <div className="bg-[#1A2742] rounded-2xl border border-amber-400 p-6 flex justify-center items-center">
            {astakvargaChart && (
              <div
                className="w-full max-w-md"
                dangerouslySetInnerHTML={{
                  __html: astakvargaChart,
                }}
              />
            )}

          </div>

        </div>

      </div>

    </div >
  );
};

export default Astakvarga;