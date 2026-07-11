import image from '../assets/images/headerlogo.png'
import astro from '../assets/images/astro.png'
import vaastu from '../assets/images/astro-vastu.png'
import pooja from '../assets/images/kalash-pooja.png'
import { FaArrowRight } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Services from '../utils/buttons/Services'
import PremiumCard from '../utils/buttons/PremiumCard'

const Maincontainer = () => {
  const { t } = useTranslation()

  return (
    <div className='w-full bg-[#08122D] pt-28'>
      <div className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8'>
        <section className='flex flex-col gap-8 py-8 lg:flex-row lg:items-center lg:justify-between'>
          <div className='max-w-2xl'>
            <h1 className='text-3xl font-semibold text-yellow-300 sm:text-4xl lg:text-5xl'>
              {t("welcome")}
            </h1>
            <p className='mt-3 text-base text-white sm:text-lg'>{t("description")}</p>
          </div>
          <div className='flex justify-center lg:justify-end'>
            <img
              src={image}
              alt='astrology'
              className='w-full lg:w-[80%] max-w-sm rounded-full border border-amber-300'
            />
          </div>
        </section>


        <section className="overflow-hidden rounded-lg shadow-[0_0_15px_rgba(251,191,36,0.3)] my-10 px-3">

          <div className="marquee">

            <div className="marquee-content">

              <span>
                🪶 जय श्री श्याम 🪶 | BL Vashisht — वशिष्ठ ऋषि परंपरा अनुसार संपूर्ण ज्योतिषीय परामर्श | हस्तलिखित जन्म कुंडली | कुंडली विश्लेषण | अंक ज्योतिष | बिना तोड़फोड़ संपूर्ण वास्तु दोष निवारण | वैदिक यंत्र | ऑनलाइन एवं ऑफलाइन यज्ञ, पूजन-अनुष्ठान की सुविधा उपलब्ध है।
              </span>


              <span>
                🪶 जय श्री श्याम 🪶 | BL Vashisht — वशिष्ठ ऋषि परंपरा अनुसार संपूर्ण ज्योतिषीय परामर्श | हस्तलिखित जन्म कुंडली | कुंडली विश्लेषण | अंक ज्योतिष | बिना तोड़फोड़ संपूर्ण वास्तु दोष निवारण | वैदिक यंत्र | ऑनलाइन एवं ऑफलाइन यज्ञ, पूजन-अनुष्ठान की सुविधा उपलब्ध है।
              </span>


            </div>

          </div>

        </section>

        <section className='pt-10 grid grid-cols-1 gap-10 lg:grid-cols-3'>
          <div className='flex min-h-full flex-col justify-between rounded-lg border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-6'>
            <Link to={'/astrology'}><div className='mb-3 flex items-center gap-2'>
              <img src={astro} alt='astrology' className='h-10 w-10 rounded-full' />
              <h1 className='text-2xl font-bold text-amber-200'>{t("astrology")}</h1>
            </div>
              <h2 className='my-3 text-amber-200'>23+ {t("experiences")}</h2>
              <p className='text-white'>
                {t("vedic")}
                <span className='mt-2 flex items-center text-amber-200'>
                  <Services />
                </span>
              </p></Link>
          </div>

          <Link to={'/vastu'}>  <div className='flex min-h-full flex-col justify-between rounded-lg border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-6'>
            <div className='mb-3 flex items-center gap-2'>
              <img src={vaastu} alt='vaastu' className='h-10 w-10 rounded-full' />
              <h1 className='text-2xl font-bold text-amber-200'>{t("vaastu")}</h1>
            </div>
            <h2 className='my-3 text-amber-200'>21+ {t("experiences")}</h2>
            <p className='text-white'>
              {t("vastu")}

              <span className='mt-2 flex items-center text-amber-200'>
                <Services />
              </span>
            </p>
          </div>
          </Link>

          <Link to={'/poojan'}><div className='flex min-h-full flex-col rounded-lg border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-6'>
            <div className='mb-3 flex items-center gap-2'>
              <img src={pooja} alt='poojan' className='h-10 w-10 rounded-full' />
              <h1 className='text-2xl font-bold text-amber-200'>{t("poojan")}</h1>
            </div>
            <h2 className='my-3 text-amber-200'>27+ {t("experiences")}</h2>
            <p className='text-white'>
              {t("paath")}

              <span className='mt-2 flex items-center text-amber-200'>
                <Services />
              </span>
            </p>
          </div>
          </Link>
        </section>
      </div>
      {/* <PremiumCard /> */}
    </div>
  )
}

export default Maincontainer