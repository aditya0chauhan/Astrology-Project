import { useState, useRef, useEffect } from "react";
import MilanNavbar from "../components/milanFiles/MilanNavbar";
import AsthakootMilan from "../components/milanFiles/AsthakootMilan";
import { useTranslation } from "react-i18next";
import Coordinates from "../utils/Coordinates";
import Dashkoot from "../components/milanFiles/Dashkoot";
import Aggregate from "../components/milanFiles/Aggregate";
import Western from "../components/milanFiles/Papasamaya";
import Papasamaya from "../components/milanFiles/Papasamaya";
import DashaSandhi from "../components/milanFiles/DashaSandhi";
import { GenrateMilan } from "../utils/buttons/Genrate";

const KundaliMilan = () => {
  const { t } = useTranslation();
  const chartRef = useRef(null);
  const formRef = useRef(null);
  const [showForm, setShowForm] = useState(true);
  const [loading, setLoading] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState("paramparik");
  const [boySuggestion, setBoySuggestion] = useState([]);
  const [girlSuggestion, setGirlSuggestion] = useState([]);
  const [boyData, setBoyData] = useState({
    name: "",
    dob: "",
    time: "",
    place: "",
    latitude: "",
    longitude: "",
  });

  const [girlData, setGirlData] = useState({
    name: "",
    dob: "",
    time: "",
    place: "",
    latitude: "",
    longitude: "",
  });


  useEffect(() => {
    if ((loading || showNavbar) && chartRef.current) {
      chartRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [loading, showNavbar]);

  const searchPlace = async (value, type) => {

    if (type === "boy") {
      setBoyData({
        ...boyData,
        place: value,
      });
    } else {
      setGirlData({
        ...girlData,
        place: value,
      });
    }

    if (value.length < 3) {

      if (type === "boy") {
        setBoySuggestion([]);
      } else {
        setGirlSuggestion([]);
      }

      return;
    }

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${value}&format=json&addressdetails=1&limit=5`
    );

    const data = await response.json();

    if (type === "boy") {
      setBoySuggestion(data);
    } else {
      setGirlSuggestion(data);
    }

  };

  const handleMilan = async () => {
    try {
      setLoading(true);
      const boyCoordinates = await Coordinates(boyData.place);
      const girlCoordinates = await Coordinates(girlData.place);

      const updatedBoyData = {
        ...boyData,
        latitude: boyCoordinates.latitude,
        longitude: boyCoordinates.longitude,
      };

      const updatedGirlData = {
        ...girlData,
        latitude: girlCoordinates.latitude,
        longitude: girlCoordinates.longitude,
      };

      // State Update
      setBoyData(updatedBoyData);
      setGirlData(updatedGirlData);
      setShowNavbar(true);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const milanComponents = {
    paramparik:(
       <AsthakootMilan 
       boyData={boyData} girlData={girlData} />),

    dashkoot : (
      <Dashkoot 
      boyData={boyData} girlData={girlData} />
    ),
    aggregate:(
      <Aggregate
      boyData={boyData} girlData={girlData} />
    ),
   papasamya:(
    <Papasamaya 
    boyData={boyData} girlData={girlData} />
   ),
   sandhi : (
    <DashaSandhi
    boyData={boyData} girlData={girlData} />
   )
  }

  return (
    <div className="mt-24 bg-[#08122D] min-h-screen px-4 py-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-amber-400 mb-3">

          💞 कुंडली मिलान

        </h1>

        <div className="grid lg:grid-cols-2 gap-8 mt-5">

          <div className="bg-[#1A2742] rounded-2xl border border-blue-400 p-8">

            <h2 className="text-2xl font-bold text-blue-300 mb-6 text-center">

              👦 लड़का

            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="पूरा नाम"
                value={boyData.name}
                onChange={(e) =>
                  setBoyData({
                    ...boyData,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-lg bg-[#243454] p-4 text-white border border-gray-600"
              />

              <input
                type="date"
                value={boyData.dob}
                onChange={(e) =>
                  setBoyData({
                    ...boyData,
                    dob: e.target.value,
                  })
                }
                className="w-full rounded-lg bg-[#243454] p-4 text-white border border-gray-600"
              />

              <input
                type="time"
                value={boyData.time}
                onChange={(e) =>
                  setBoyData({
                    ...boyData,
                    time: e.target.value,
                  })
                }
                className="w-full rounded-lg bg-[#243454] p-4 text-white border border-gray-600"
              />

              <input
                type="text"
                placeholder="जन्म स्थान"
                value={boyData.place}
                onChange={(e) => searchPlace(e.target.value, "boy")}
                className="w-full rounded-lg bg-[#243454] p-4 text-white border border-gray-600"
              />

              {boySuggestion.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setBoyData({
                      ...boyData,
                      place: item.display_name,
                    });

                    setBoySuggestion([]);
                  }}
                  className="p-3 text-white border-b border-gray-600 cursor-pointer hover:bg-[#3B4D73]"
                >
                  {item.display_name}
                </div>
              ))}

            </div>

          </div>

          <div className="bg-[#1A2742] rounded-2xl border border-pink-400 p-8">

            <h2 className="text-2xl font-bold text-pink-300 mb-6 text-center">

              👧 लड़की

            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="पूरा नाम"
                value={girlData.name}
                onChange={(e) =>
                  setGirlData({
                    ...girlData,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-lg bg-[#243454] p-4 text-white border border-gray-600"
              />

              <input
                type="date"
                value={girlData.dob}
                onChange={(e) =>
                  setGirlData({
                    ...girlData,
                    dob: e.target.value,
                  })
                }
                className="w-full rounded-lg bg-[#243454] p-4 text-white border border-gray-600"
              />

              <input
                type="time"
                value={girlData.time}
                onChange={(e) =>
                  setGirlData({
                    ...girlData,
                    time: e.target.value,
                  })
                }
                className="w-full rounded-lg bg-[#243454] p-4 text-white border border-gray-600"
              />

              <input
                type="text"
                placeholder="जन्म स्थान"
                value={girlData.place}
                onChange={(e) => searchPlace(e.target.value, "girl")}
                className="w-full rounded-lg bg-[#243454] p-4 text-white border border-gray-600"
              />
              {girlSuggestion.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setGirlData({
                      ...girlData,
                      place: item.display_name,
                    });

                    setGirlSuggestion([]);
                  }}
                  className="p-3 text-white border-b border-gray-600 cursor-pointer hover:bg-[#3B4D73]"
                >
                  {item.display_name}
                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="text-center mt-12">

          <button
            onClick={handleMilan}
          >

            <GenrateMilan />
          </button>

        </div>

      </div>
      {showNavbar && (
        <>
          <MilanNavbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div ref={chartRef} className="mt-30">
            {milanComponents[activeTab]}
          </div>
        </>
      )}

    </div>
  );
};

export default KundaliMilan;