import { useEffect, useState } from 'react'
import Loader from '../../utils/buttons/Loader';
import { useTranslation } from 'react-i18next'

const Person = ({userData}) => {
    const { t } = useTranslation()
     const [person, setPerson] = useState(null);
        const [loading, setLoading] = useState(false);
         useEffect(() => {
        if (!userData) return;

        const { formattedDate, time, latitude, longitude } = userData;

        const personDetails = async () => {
            try {
                setLoading(true);

                const data = await fetch(
                    `https://api.jyotishamastroapi.com/api/prediction/panchang?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=hi`,
                    {
                        headers: { key: import.meta.env.VITE_ASTRO_API_KEY },
                    }
                )

                const json = await data.json();
             
                setPerson(json.response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        personDetails();
    }, [userData]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (!person) {
        return <div className="text-center text-red-400 mt-10">
            डेटा उपलब्ध नहीं है।
        </div>
    }
  return (
  <div className="space-y-8 text-white">

    {/* Explanation */}

    <div className="bg-[#1A2742] p-4 border border-amber-400 rounded-xl">

      <h2 className="text-2xl font-bold text-amber-400 mb-5">
        🧑‍💼 व्यक्ति विवरण
      </h2>

      {userData && (

        <div className="bg-[#1A2742] p-4">
          <div>
            <p className='font-semibold text-lg'><strong className='text-green-300 '> {t('nameLabel')} :</strong> {userData.name}</p>

            <p className='font-semibold text-lg'><strong className='text-green-300 '> {t('dobLabel')} :</strong> {userData.dob}</p>

            <p className='font-semibold text-lg'><strong className='text-green-300 '> {t('birthTimeLabel')} :</strong> {userData.time}</p>

            <p className='font-semibold text-lg'><strong className='text-green-300 '>{t('placeLabel')} :</strong> {userData.place}</p>
          </div>
        </div>

      )}

      <p className="leading-8 text-gray-200">
        {person.explanation}
      </p>

    </div>


    {/* Panchang Details */}

    <div className="grid md:grid-cols-2 gap-6">

      {[
        {
          title: "📅 वार",
          data: person.weekday,
        },
        {
          title: "🌙 तिथि",
          data: person.tithi,
        },
        {
          title: "⭐ नक्षत्र",
          data: person.nakshatra,
        },
        {
          title: "🪔 योग",
          data: person.yoga,
        },
        {
          title: "🙏 करण",
          data: person.karan,
        },
      ].map((item, index) => (

        <div
          key={index}
          className="bg-[#1A2742] border border-amber-400 rounded-xl p-6"
        >

          <h2 className="text-xl font-bold text-amber-300 mb-4">
            {item.title}
          </h2>

          <div className="space-y-4">

            <div>

              <p className="text-gray-400">
                नाम
              </p>

              <p className="text-white text-lg font-semibold">
                {item.data.name}
              </p>

            </div>

            <div>

              <p className="text-gray-400">
                भविष्यवाणी
              </p>

              <p className="text-green-300 leading-8">
                {item.data.prediction}
              </p>

            </div>

          </div>

        </div>

      ))}

    </div>
    

  </div>
);
}

export default Person