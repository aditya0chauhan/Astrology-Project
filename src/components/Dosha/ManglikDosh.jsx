import  { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';

const ManglikDosh = ({userData}) => {
    const [manglik, setManglik] = useState(null);
        const [loading, setLoading] = useState(false);
    
        useEffect(() => {
            if (!userData) return;
    
            const { formattedDate, time, latitude, longitude } = userData;
    
            const manglikDosh = async () => {
                try {
                    setLoading(true);
    
                    const data = await fetch(
                        `https://api.jyotishamastroapi.com/api/dosha/manglik-dosh?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`,
                        {
                            headers: { key: import.meta.env.VITE_ASTRO_API_KEY },
                        }
                    )
    
                    const dosha = await data.json();
                    setManglik(dosha.response);
                } catch (err) {
                    console.log(err);
                } finally {
                    setLoading(false);
                }
            };
    
            manglikDosh();
        }, [userData]);
    
        if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }
    
        if (!manglik) {
            return <div className="text-center text-red-400 mt-10">
                डेटा उपलब्ध नहीं है।
            </div>
        }
  return (
    <div>
       <div className="space-y-8 text-white">

  <div className="rounded-xl border border-amber-400 bg-[#1A2742] p-6">

    <h2 className="text-2xl font-bold text-amber-400 mb-6">
      🔥 मांगलिक दोष रिपोर्ट
    </h2>

    <div className="grid md:grid-cols-2 gap-5">

      <div className="bg-[#243454] rounded-lg p-4">
        <p className="text-gray-300">स्कोर</p>
        <p className="text-3xl font-bold text-amber-300">
          {manglik.score}%
        </p>
      </div>

      <div className="bg-[#243454] rounded-lg p-4">
        <p className="text-gray-300">ज्योतिष निष्कर्ष</p>
        <p className="text-lg text-green-300">
          {manglik.bot_response}
        </p>
      </div>

    </div>

  </div>


  <div className="rounded-xl border border-amber-400 bg-[#1A2742] p-6">

    <h2 className="text-xl font-bold text-amber-300 mb-5">
      📊 दोष की स्थिति
    </h2>

    <div className="grid md:grid-cols-3 gap-5">

      <div className="bg-[#243454] rounded-lg p-4">

        <p>मंगल से</p>

        <p className={`font-bold text-xl ${
          manglik.manglik_by_mars
            ? "text-red-400"
            : "text-green-400"
        }`}>

          {manglik.manglik_by_mars ? "हाँ" : "नहीं"}

        </p>

      </div>

      <div className="bg-[#243454] rounded-lg p-4">

        <p>राहु-केतु से</p>

        <p className={`font-bold text-xl ${
          manglik.manglik_by_rahuketu
            ? "text-red-400"
            : "text-green-400"
        }`}>

          {manglik.manglik_by_rahuketu ? "हाँ" : "नहीं"}

        </p>

      </div>

      <div className="bg-[#243454] rounded-lg p-4">

        <p>शनि से</p>

        <p className={`font-bold text-xl ${
          manglik.manglik_by_saturn
            ? "text-red-400"
            : "text-green-400"
        }`}>

          {manglik.manglik_by_saturn ? "हाँ" : "नहीं"}

        </p>

      </div>

    </div>

  </div>


  <div className="rounded-xl border border-amber-400 bg-[#1A2742] p-6">

    <h2 className="text-xl font-bold text-amber-300 mb-5">
      📌 मांगलिक दोष बनने के कारण
    </h2>

    <div className="space-y-4">

      {manglik.factors.map((item, index) => (

        <div
          key={index}
          className="bg-[#243454] rounded-lg p-4"
        >

          {item}

        </div>

      ))}

    </div>

  </div>

  

  <div className="rounded-xl border border-amber-400 bg-[#1A2742] p-6">

    <h2 className="text-xl font-bold text-amber-300 mb-5">
      🔭 ग्रहों की स्थिति
    </h2>

    <div className="space-y-4">

      {manglik.aspects.map((item, index) => (

        <div
          key={index}
          className="flex gap-4 bg-[#243454] rounded-lg p-5"
        >

          <div className="h-8 w-8 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold">

            {index + 1}

          </div>

          <p>{item}</p>

        </div>

      ))}

    </div>

  </div>

</div>
    </div>
  )
}

export default ManglikDosh