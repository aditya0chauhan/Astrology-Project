import image from '../assets/images/pic.png'
import astro from '../assets/images/astro.png'
import vaastu from '../assets/images/astro-vastu.png'
import pooja from '../assets/images/kalash-pooja.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Services from '../utils/buttons/Services'
import { PremiumCard, Card2, Card3, Card4, Card5, Card6, Card7 } from '../utils/buttons/PremiumCard'
import { Whatsapp } from '../utils/buttons/Genrate'

const Maincontainer = () => {
  const { t } = useTranslation()

  return (
    <div className='w-full bg-[radial-gradient(circle_at_top_left,_#13203f,_#08122D_55%,_#030711)] pt-28'>
      <div className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8'>

        <section className='relative overflow-hidden rounded-[32px] border border-amber-300/20 bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#030711] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_45%)]' />
          <div className='relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
            <div className='max-w-2xl'>
              <div className='inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200'>
                Trusted Vedic guidance
              </div>
              <h1 className='mt-5 text-3xl font-semibold text-yellow-300 sm:text-4xl lg:text-5xl hover:scale-[1.08] duration-300'>
                {t('welcome')}
              </h1>
              <p className='mt-4 text-base leading-8 text-slate-200 sm:text-lg'>
                {t('hp')}
              </p>
              <div className='mt-6 flex flex-wrap gap-5'>
                <Link to='/account' className='rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 hover:scale-[1.10] duration-300'>
                  Open your account
                </Link>
                <Link to='/panchang' className='rounded-full border border-amber-300/30 bg-white/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-white/20 hover:scale-[1.10] duration-300'>
                  Today’s Panchang
                </Link>
              </div>
            </div>
            <div className='flex justify-center lg:justify-end'>
              <img
                src={image}
                alt='astrology'
                className='w-full max-w-sm rounded-full border border-amber-300/40 shadow-[0_20px_50px_rgba(251,191,36,0.24)] lg:w-[80%] hover:scale-[1.05] duration-300'
              />
            </div>
          </div>
        </section>

        <section className='my-10 overflow-hidden rounded-[24px] border border-amber-400/20 bg-[#0b1224]/70 px-3 py-3 shadow-[0_0_20px_rgba(251,191,36,0.15)]'>
          <div className='marquee'>
            <div className='marquee-content'>
              <span>
                🪶 जय श्री श्याम 🪶 | BL Vashisht — वशिष्ठ ऋषि परंपरा अनुसार संपूर्ण ज्योतिषीय परामर्श | हस्तलिखित जन्म कुंडली | कुंडली विश्लेषण | अंक ज्योतिष | बिना तोड़फोड़ संपूर्ण वास्तु दोष निवारण | वैदिक यंत्र | ऑनलाइन एवं ऑफलाइन यज्ञ, पूजन-अनुष्ठान की सुविधा उपलब्ध है।
              </span>
              <span>
                🪶 जय श्री श्याम 🪶 | BL Vashisht — वशिष्ठ ऋषि परंपरा अनुसार संपूर्ण ज्योतिषीय परामर्श | हस्तलिखित जन्म कुंडली | कुंडली विश्लेषण | अंक ज्योतिष | बिना तोड़फोड़ संपूर्ण वास्तु दोष निवारण | वैदिक यंत्र | ऑनलाइन एवं ऑफलाइन यज्ञ, पूजन-अनुष्ठान की सुविधा उपलब्ध है।
              </span>
            </div>
          </div>
        </section>

        <section className='relative rounded-[32px] border border-amber-300/20 bg-[radial-gradient(circle_at_100%_0,rgba(242,184,46,0.15),transparent_32%),linear-gradient(135deg,#761027_0%,#2e0715_52%,#0b1029_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8 my-5 hover:scale-[1.08] hover:my-8 duration-300'>
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='min-h-full max-w-2xl flex flex-col justify-around'>
              <span className='self-start text-amber-300 text-sm font-bold font-sans border border-[rgba(242, 184, 46, 0.29)] p-2 rounded-2xl'>
                <p>{t("limit")}
                </p> </span>
              <p className="text-amber-400 font-bold text-4xl my-5">{t('svp')}</p>
              <div className="">
                <p className="text-white font-semibold">{t('svd')}</p>
                <ul className='text-white font-semibold'>
                  <h1 className='my-3 text-xl font-semibold text-green-400'>{t("svh1")}</h1>
                  <li>🔱 {t("sv1")}</li>
                  <li>🔱 {t("sv2")}</li>
                  <li>🔱 {t("sv3")}</li>
                  <li>🔱 {t("sv4")}</li>
                </ul>
                <h1 className='my-3 text-xl font-semibold text-green-400'>{t("svh2")}</h1>

              </div>
            </div>
            <div className='flex justify-center lg:justify-end rounded-2xl'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpVyOOPK-8893sPfFwlvWX8-QXjqjhSUmu222-mik2ZZiFDuzqcpzabYg&s=10'
                alt='shiv'
                className='rounded-4xl lg:w-[80%] hover:scale-[1.05] duration-300'
              />
            </div>
          </div>
          <div className="w-[80%] flex items-center justify-between lg:justify-around">
            <p className="text-amber-300 font-semibold text-xl"> ₹-7100</p>
            <a
              href="https://wa.me/918882532259?text=🙏%20Namaste%20Pandit%20Ji,%0A%0AMujhe%20*Shravan%20Maas%20Shiv%20Pujan%20Rudrabhishek*%20ke%20baare%20mein%20jaankari%20chahiye.%0A%0AKripya%20mujhe%20is%20pooja%20ki%20poori%20jaankari%20de."
              target="_blank"
              rel="noopener noreferrer"
              className="..."
            >
              <Whatsapp />
            </a>
          </div>
        </section>


        {/* <section className='grid grid-cols-1 gap-6 pt-6 lg:grid-cols-3'>
          <Link to='/astrology' className='group flex min-h-full flex-col justify-between rounded-[24px] border border-amber-200/20 bg-gradient-to-br from-[#111827] to-[#060b16] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_12px_35px_rgba(251,191,36,0.16)]'>
            <div>
              <div className='mb-3 flex items-center gap-2'>
                <img src={astro} alt='astrology' className='h-10 w-10 rounded-full' />
                <h1 className='text-2xl font-bold text-amber-200'>{t('astrology')}</h1>
              </div>
              <h2 className='my-3 text-amber-200'>23+ {t('experiences')}</h2>
              <p className='text-white'>
                {t('vedic')}
              </p>
            </div>
            <span className='mt-4 flex items-center text-amber-200'>
              <Services />
            </span>
          </Link>

          <Link to='/vastu' className='group flex min-h-full flex-col justify-between rounded-[24px] border border-amber-200/20 bg-gradient-to-br from-[#111827] to-[#060b16] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_12px_35px_rgba(251,191,36,0.16)]'>
            <div>
              <div className='mb-3 flex items-center gap-2'>
                <img src={vaastu} alt='vaastu' className='h-10 w-10 rounded-full' />
                <h1 className='text-2xl font-bold text-amber-200'>{t('vaastu')}</h1>
              </div>
              <h2 className='my-3 text-amber-200'>21+ {t('experiences')}</h2>
              <p className='text-white'>
                {t('vastu')}
              </p>
            </div>
            <span className='mt-4 flex items-center text-amber-200'>
              <Services />
            </span>
          </Link>

          <Link to='/poojan' className='group flex min-h-full flex-col justify-between rounded-[24px] border border-amber-200/20 bg-gradient-to-br from-[#111827] to-[#060b16] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_12px_35px_rgba(251,191,36,0.16)]'>
            <div>
              <div className='mb-3 flex items-center gap-2'>
                <img src={pooja} alt='poojan' className='h-10 w-10 rounded-full' />
                <h1 className='text-2xl font-bold text-amber-200'>{t('poojan')}</h1>
              </div>
              <h2 className='my-3 text-amber-200'>27+ {t('experiences')}</h2>
              <p className='text-white'>
                {t('paath')}
              </p>
            </div>
            <span className='mt-4 flex items-center text-amber-200'>
              <Services />
            </span>
          </Link>
        </section> */}
      </div>
      <div className='my-5 p-5 flex flex-wrap justify-center gap-10'>
        <PremiumCard />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
    </div>
  )
}

export default Maincontainer