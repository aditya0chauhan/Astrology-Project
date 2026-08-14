import image from '../assets/images/pic.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { PremiumCard, Card2, Card3, Card4, Card5, Card6 } from '../utils/buttons/PremiumCard'
import { Book } from '../utils/buttons/Genrate'
import banner from '../assets/images/banner.png'

const Maincontainer = () => {
  const { t } = useTranslation()

  return (
    <div className='w-full bg-[radial-gradient(circle_at_top_left,_#13203f,_#08122D_55%,_#030711)] pt-20'>
        <section className='rounded-xl lg:rounded-[32px] border border-amber-300/20 bg-[radial-gradient(circle_at_100%_0,rgba(242,184,46,0.15),transparent_32%),linear-gradient(135deg,#761027_0%,#2e0715_52%,#0b1029_100%)] p-2 lg:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8 my-5'>
                    <div className='flex flex-col'>
                      <div className='min-h-full flex flex-col lg:flex-row'>
                        <a className='mb-5' href='https://wa.me/918882532259?text=🙏%20नमस्ते%20मनोज%20शास्त्री%20जी,%0A%0Aमुझे%20श्रावण%202026%20स्पेशल%20पूजा%20के%20बारे%20में%20जानकारी%20चाहिए।%20कृपया%20ऑनलाइन%20पूजा,%20रुद्राभिषेक,%20कालसर्प%20शांति,%20वास्तु%20एवं%20अन्य%20सेवाओं%20की%20जानकारी%20साझा%20करें।%0A%0Aधन्यवाद।🙏'>
                         <img
                          src={banner}
                          alt='shiv'
                          className='rounded-xl lg:rounded-4xl  border border-amber-400'
                        />
                        </a>
                  </div>
                  
                     <section >
              <div className='text-amber-200 text-xl lg:text-3xl font-semibold mt-3 lg:mt-5'>
                <marquee scrollamount="6" >
                  <span>
                    🕉️  श्रावण मास 2026 महोत्सव | 29 जुलाई से 28 अगस्त 2026 | समस्त शिव भक्तों के लिए पूरे श्रावण मास में विशेष ऑनलाइन एवं ऑफलाइन रुद्राभिषेक, शिव पूजन एवं वैदिक अनुष्ठान | घर बैठे जुड़ें श्रावण के चारों सोमवार (3 अगस्त • 10 अगस्त • 17 अगस्त • 24 अगस्त) के दिव्य LIVE रुद्राभिषेक एवं पूजन में | 🐍 3 अगस्त एवं 17 अगस्त नागपंचमी विशेष –  🔱 10 अगस्त एवं 25 अगस्त प्रदोष व्रत विशेष - कालसर्प दोष, नाग दोष एवं पितृ दोष निवारण हेतु विशेष वैदिक ऑनलाइन पूजन | 📿 गुरुजी मनोज शास्त्री (B.L. Vashisth) के सान्निध्य में वैदिक विधि से पूजन | 🌍 अब स्थान या दूरी नहीं, आपकी श्रद्धा और भक्ति ही सबसे महत्वपूर्ण है – भारत, Dubai, USA, UK सहित विश्वभर से LIVE सहभागिता उपलब्ध | 🕉 आइए, इस पावन श्रावण में हम सभी एक साथ भगवान भोलेनाथ की आराधना करें और उनके दिव्य आशीर्वाद प्राप्त करें| एवं गुरुजी द्वारा प्राण प्रतिष्ठा किए गए, संपूर्ण श्रावण में 31 रुद्राभिषेक द्वारा सिद्ध किए हुए प्रतिष्ठित शिवलिंग अपने घर, व्यापार स्थल के लिए प्राप्त करें। |📲 अभी WhatsApp पर संपर्क कर अपना पूजन संकल्प सुरक्षित करें। 🔱
                  </span>
                </marquee>
              </div>
            </section>
                    </div>
                     </section>     

                   
      <div className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 '>
              <section className='relative overflow-hidden rounded-[32px] border border-amber-300/20 bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#030711] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8 mt-10'>
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
            

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        

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

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
           <section className='relative rounded-[32px] border border-amber-300/20 bg-[radial-gradient(circle_at_100%_0,rgba(242,184,46,0.15),transparent_32%),linear-gradient(135deg,#761027_0%,#2e0715_52%,#0b1029_100%)] p-6  sm:p-8 my-5 hover:scale-[1.08] hover:my-10 duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all'>
          <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='min-h-full max-w-2xl flex flex-col justify-around'>
              <span className='self-start text-amber-300 text-xs lg:text-sm font-bold font-sans border border-[rgba(242, 184, 46, 0.29)] p-2 rounded-2xl'>
                <p>{t("limit")}
                </p> </span>
              <p className="text-amber-400 font-bold text-xl lg:text-4xl my-5">{t('svp')}</p>
              <div className="">
                <p className="text-white font-semibold text-md">{t('svd')}</p>
                <ul className='text-white font-semibold text-md'>
                  <h1 className='my-3 text-lg font-semibold text-green-400'>{t("svh1")}</h1>
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
          <div className="w-full lg:w-[80%] flex items-center justify-start mt-5 lg:mt-1">
            <a
              href="https://wa.me/918882532259?text=🙏%20Namaste%20Pandit%20Ji,%0A%0AMujhe%20*Shravan%20Maas%20Shiv%20Pujan%20Rudrabhishek*%20ke%20baare%20mein%20jaankari%20chahiye.%0A%0AKripya%20mujhe%20is%20pooja%20ki%20poori%20jaankari%20de."
              target="_blank"
              rel="noopener noreferrer"
              className="..."
            >
              <Link to="/appointment" 
            state={{service: "Handwritten Kundali"}}><Book /></Link>
            </a>
          </div>
        </section>
      </div>
      
    </div>
  )
}

export default Maincontainer