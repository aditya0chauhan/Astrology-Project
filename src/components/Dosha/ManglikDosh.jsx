import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Loader from '../../utils/buttons/Loader';
import { API_BASE } from "../../config/api";
import PremiumLock from "../Premium/PremiumLock";
import { hasSilverAccess } from "../../utils/premiumAccess";

const ManglikDosh = ({ userData }) => {
  const { t, i18n } = useTranslation();
  const [manglik, setManglik] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userData) return;

    const { formattedDate, time, latitude, longitude } = userData;

    const manglikDosh = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("astro-token");

        const data = await fetch(
          `${API_BASE}/astro/dosha/manglik-dosh?date=${formattedDate}&time=${time}&latitude=${latitude}&longitude=${longitude}&tz=5.5&lang=${i18n.language === 'hi' ? 'hi' : 'en'}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const dosha = await data.json();
        setManglik(dosha.response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    manglikDosh();
  }, [userData, i18n.language]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!manglik) {
    return <div className="text-center text-red-400 mt-10">
      {t('noDataAvailable')}
    </div>
  }

  const user = JSON.parse(
    localStorage.getItem("astro-user") || "null"
  );

  const isPremium = hasSilverAccess(user);

  return (
    <div>
      <div className="space-y-8 text-white">

        <div className="rounded-xl border border-amber-400 bg-[#1A2742] p-6">

          <h2 className="text-2xl font-bold text-amber-400 mb-6">
            🔥 {t('manglikDoshReport')}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-[#243454] rounded-lg p-4">
              <p className="text-gray-300">{t('score')}</p>
              <p className="text-3xl font-bold text-amber-300">
                {manglik.score}%
              </p>
            </div>

            <div className="bg-[#243454] rounded-lg p-4">
              <p className="text-gray-300">{t('astrologyConclusion')}</p>
              <p className="text-lg text-green-300">
                {manglik.bot_response}
              </p>
            </div>

          </div>

        </div>
        {!isPremium && (
          <div className="mt-6">
            <PremiumLock title={`${t("manglikDoshReport")} की पूरी जानकारी के लिए`} />
          </div>
        )}

        {isPremium && (
          <div className="mt-6">




            <div className="rounded-xl border border-amber-400 bg-[#1A2742] p-6">

              <h2 className="text-xl font-bold text-amber-300 mb-5">
                📊 {t('doshaStatus')}
              </h2>

              <div className="grid md:grid-cols-3 gap-5">

                <div className="bg-[#243454] rounded-lg p-4">

                  <p>{t('fromMars')}</p>

                  <p className={`font-bold text-xl ${manglik.manglik_by_mars
                    ? "text-red-400"
                    : "text-green-400"
                    }`}>

                    {manglik.manglik_by_mars ? t('yes') : t('no')}

                  </p>

                </div>

                <div className="bg-[#243454] rounded-lg p-4">

                  <p>{t('fromRahuKetu')}</p>

                  <p className={`font-bold text-xl ${manglik.manglik_by_rahuketu
                    ? "text-red-400"
                    : "text-green-400"
                    }`}>

                    {manglik.manglik_by_rahuketu ? t('yes') : t('no')}

                  </p>

                </div>

                <div className="bg-[#243454] rounded-lg p-4">

                  <p>{t('fromSaturn')}</p>

                  <p className={`font-bold text-xl ${manglik.manglik_by_saturn
                    ? "text-red-400"
                    : "text-green-400"
                    }`}>

                    {manglik.manglik_by_saturn ? t('yes') : t('no')}

                  </p>

                </div>

              </div>

            </div>


            <div className="rounded-xl border border-amber-400 bg-[#1A2742] p-6">

              <h2 className="text-xl font-bold text-amber-300 mb-5">
                📌 {t('reasonsForManglikDosha')}
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
                🔭 {t('planetPositions')}
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
        )}
      </div>
    </div>
  )
}

export default ManglikDosh

