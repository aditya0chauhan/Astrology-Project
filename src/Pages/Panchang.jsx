import { useEffect, useState } from "react";
import Loader from "../utils/buttons/Loader";
import ChoghadiyaCard from "./ChoghadiyaCard";
import { API_BASE } from "../config/api";

const Panchang = () => {
  const [panchang, setPanchang] = useState(null);
  const [loading, setLoading] = useState(false);
  const [choghadiya, setChoghadiya] = useState(null);
  const [location, setLocation] = useState({
    latitude: 28.6139,
    longitude: 77.2090,
  });

  const getDateTime = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours())
      .padStart(2, "0");

    const minutes = String(now.getMinutes())
      .padStart(2, "0");


    return {

      date: `${year}/${month}/${day}`,

      time: `${hours}:${minutes}`
    };
  };

  const getTimezone = () => {

    const timezone =
      -new Date().getTimezoneOffset() / 60;
    return timezone;
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      console.log("Location not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(

      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },

      (error) => {
        console.log(
          "Location Permission Denied"
        );
      }
    );
  };

  const getPanchang = async (latitude, longitude) => {
    try {
      setLoading(true);
      const { date, time } = getDateTime();
      const timezone = getTimezone();

      const response = await fetch(
        `${API_BASE}/astro/panchang/panchang?date=${date}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=${timezone}&lang=hi`);
      const data = await response.json();
      setPanchang(data);
    }

    catch (error) {
      console.log(error);
    }

    finally {
      setLoading(false);
    }
  };

  const getchoghadiya = async (latitude, longitude) => {
    const { date, time } = getDateTime();
    const API_BASE =
      import.meta.env.VITE_API_URL || "http://localhost:5000/api";
    const timezone = getTimezone();
    const response = await fetch(
      `${API_BASE}/astro/panchang/choghadiya-muhurta?date=${date}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=${timezone}&lang=hi`
    );
    const data = await response.json();
    setChoghadiya(data);
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {

    if (!navigator.geolocation) {
      getPanchang(
        28.6139,
        77.2090
      );

      getchoghadiya(
        28.6139,
        77.2090
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        getPanchang(
          lat,
          lon
        );
        getchoghadiya(
          lat,
          lon
        );
      },
      (error) => {
        getPanchang(
          28.6139,
          77.2090
        );

        getchoghadiya(
          28.6139,
          77.2090
        );
      }
    )
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#0a0a0a]">
        <Loader />
      </div>
    )
  }

  return (

    <div
      className="mt-24 min-h-screen bg-gradient-to-b from-[#111827] to-[#0a0a0a] text-white px-5 py-10 "
    >

      <h1
        className="text-center text-3xl font-bold text-yellow-400 mb-8"
      >
        🌞 दैनिक पंचांग
      </h1>

      {
        panchang?.response && (

          <div
            className="max-w-3xl mx-auto bg-white/10 backdrop-blur rounded-2xl p-6 shadow-xl space-y-5 border-2 border-green-200">

            <h2 className="text-center text-xl text-green-300 font-semibold">

              {panchang.response.day.name}

            </h2>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-black/30 p-4 rounded-xl">

                🌅 सूर्योदय

                <p className="text-yellow-300">
                  {panchang.response.advanced_details.sun_rise}
                </p>
              </div>

              <div className="bg-black/30 p-4 rounded-xl">
                🌇 सूर्यास्त
                <p className="text-yellow-300">
                </p>
              </div>

            </div>

            <div className="bg-black/30 p-4 rounded-xl space-y-2">
              <p>
                📅 विक्रम संवत :
                <span className="text-yellow-300 ml-2">
                  {panchang.response.advanced_details.years.vikram_samvaat}
                </span>
              </p>

              <p>
                🗓 महीना :
                <span className="text-yellow-300 ml-2">
                  {panchang.response.advanced_details.masa.purnimanta_name}
                </span>
              </p>

              <p>
                🌕 पक्ष :
                <span className="text-yellow-300 ml-2">
                  {panchang.response.advanced_details.masa.paksha}
                </span>

              </p>
            </div>

            <Card

              title="🌙 तिथि"

              name={panchang.response.tithi.name}

              start={panchang.response.tithi.start}

              end={panchang.response.tithi.end}

              special={panchang.response.tithi.special}

              summary={panchang.response.tithi.meaning}
            />

            <Card

              title="⭐ नक्षत्र"

              name={panchang.response.nakshatra.name}

              start={panchang.response.nakshatra.start}

              end={panchang.response.nakshatra.end}

              special={panchang.response.nakshatra.special}

              summary={panchang.response.nakshatra.summary}
            />


            <Card

              title="🪐 योग"

              name={panchang.response.yoga.name}

              start={panchang.response.yoga.start}

              end={panchang.response.yoga.end}

              special={panchang.response.yoga.special}

            />

            <Card
              title="🔥 करण"

              name={panchang.response.karana.name}

              start={panchang.response.karana.start}

              end={panchang.response.karana.end}

              special={panchang.response.karana.special}

            />
            <div className="bg-black/30 p-4 rounded-xl">


              🌙 चन्द्र राशि :

              <span className="text-yellow-300 ml-2">

                {panchang.response.rasi.name}

              </span>


            </div>

            <div className="bg-black/30 p-4 rounded-xl space-y-2">

              <h2 className="text-yellow-300">
                🕉 शुभ अशुभ समय
              </h2>


              <p>
                राहुकाल :
                {panchang.response.rahukaal}
              </p>


              <p>
                गुलिक काल :
                {panchang.response.gulika}
              </p>


              <p>
                यमघंट :
                {panchang.response.yamakanta}
              </p>


            </div>

            <Card
              title="🕉 अभिजीत मुहूर्त"
              name="शुभ समय"
              start={
                panchang.response.advanced_details.abhijitMuhurta.start
              }
              end={
                panchang.response.advanced_details.abhijitMuhurta.end
              } />

            {
              choghadiya?.response && (

                <div className="max-w-3xl mx-auto mt-10 bg-black/30 backdrop-blur rounded-2xl p-6 shadow-xl space-y-5">

                  <h1 className="text-center text-2xl text-green-400 font-bold">
                    🕉 चौघड़िया मुहूर्त
                  </h1>


                  <h2 className="text-green-200 text-xl font-semibold">
                    ☀️ दिन का चौघड़िया
                  </h2>

                  {
                    choghadiya.response.day.map((item, index) => (
                      <ChoghadiyaCard
                        key={index}
                        data={item}
                      />
                    ))
                  }

                  <h2 className="text-blue-400 font-semibold text-xl">
                    🌙 रात का चौघड़िया
                  </h2>

                  {
                    choghadiya.response.night.map((item, index) => (
                      <ChoghadiyaCard
                        key={index}
                        data={item}
                      />

                    ))
                  }
                </div>
              )}
          </div>
        )}
    </div>
  )
}

const Card = ({
  title,
  name,
  start,
  end,
  special,
  summary
}) => {


  return (

    <div className="bg-black/30 p-4 rounded-xl space-y-2 ">

      <h2 className="text-green-600 text-xl font-semibold ">

        {title}

      </h2>


      <p>
        {name}
      </p>



      {
        start &&

        <p> <strong className="text-green-500">
          🕐 प्रारंभ :
        </strong>{start}
        </p>

      }



      {
        end &&

        <p><strong className="text-green-500">
          ⏳ समाप्त : </strong> {end}
        </p>

      }



      {
        special &&

        <p className="font-semibold text-amber-600">
          ✨ {special}
        </p>

      }



      {
        summary &&

        <p className="text-white">

          {summary}

        </p>

      }



    </div>

  )

}
export default Panchang;