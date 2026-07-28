import kundali from '../assets/images/kundali-MA.png'
import poojan1 from '../assets/images/poojan-1.png'
import poojan2 from '../assets/images/poojan-3.jpeg'
import poojan3 from '../assets/images/poojan-4.png'
import poojan4 from '../assets/images/poojan-5.png'
import poojan5 from '../assets/images/poojan-6.png'
import poojan6 from '../assets/images/poojan-7.png'
import poojan7 from '../assets/images/poojan-8.png'
import banner from '../assets/images/banner.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Whatsapp } from '../utils/buttons/Genrate'

const PoojanCard = () => {
  const { t } = useTranslation()

  return (
    <div>

         <section className='mt-10 relative rounded-xl lg:rounded-[32px] border border-amber-300/20 bg-[radial-gradient(circle_at_100%_0,rgba(242,184,46,0.15),transparent_32%),linear-gradient(135deg,#761027_0%,#2e0715_52%,#0b1029_100%)] p-2 lg:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8 my-5'>
                <div className='flex flex-col'>
                  <div className='min-h-full flex flex-col justify-around'>
                    <a href='https://wa.me/918882532259?text=🙏%20नमस्ते%20मनोज%20शास्त्री%20जी,%0A%0Aमुझे%20श्रावण%202026%20स्पेशल%20पूजा%20के%20बारे%20में%20जानकारी%20चाहिए।%20कृपया%20ऑनलाइन%20पूजा,%20रुद्राभिषेक,%20कालसर्प%20शांति,%20वास्तु%20एवं%20अन्य%20सेवाओं%20की%20जानकारी%20साझा%20करें।%0A%0Aधन्यवाद।🙏'>
                     <img
                      src={banner}
                      alt='shiv'
                      className='rounded-xl lg:rounded-4xl hover:scale-[1.01] duration-300'
                    />
                    </a>
              </div>
                 <section >
          <div className='text-amber-200 text-xl lg:text-3xl font-semibold mt-3 lg:mt-5'>
            <marquee scrollamount="4" >
              <span>
                    🕉️  श्रावण मास 2026 महोत्सव | 29 जुलाई से 28 अगस्त 2026 | समस्त शिव भक्तों के लिए पूरे श्रावण मास में विशेष ऑनलाइन एवं ऑफलाइन रुद्राभिषेक, शिव पूजन एवं वैदिक अनुष्ठान | घर बैठे जुड़ें श्रावण के चारों सोमवार (3 अगस्त • 10 अगस्त • 17 अगस्त • 24 अगस्त) के दिव्य LIVE रुद्राभिषेक एवं पूजन में | 🐍 3 अगस्त एवं 17 अगस्त नागपंचमी विशेष –  🔱 10 अगस्त एवं 25 अगस्त प्रदोष व्रत विशेष - कालसर्प दोष, नाग दोष एवं पितृ दोष निवारण हेतु विशेष वैदिक ऑनलाइन पूजन | 📿 गुरुजी मनोज शास्त्री (B.L. Vashisth) के सान्निध्य में वैदिक विधि से पूजन | 🌍 अब स्थान या दूरी नहीं, आपकी श्रद्धा और भक्ति ही सबसे महत्वपूर्ण है – भारत, Dubai, USA, UK सहित विश्वभर से LIVE सहभागिता उपलब्ध | 🕉 आइए, इस पावन श्रावण में हम सभी एक साथ भगवान भोलेनाथ की आराधना करें और उनके दिव्य आशीर्वाद प्राप्त करें| एवं गुरुजी द्वारा प्राण प्रतिष्ठा किए गए, संपूर्ण श्रावण में 31 रुद्राभिषेक द्वारा सिद्ध किए हुए प्रतिष्ठित शिवलिंग अपने घर, व्यापार स्थल के लिए प्राप्त करें। |📲 अभी WhatsApp पर संपर्क कर अपना पूजन संकल्प सुरक्षित करें। 🔱
                  </span>
            </marquee>
          </div>
        </section>
                </div>
                 </section>

      <div
        className=' relative mt-10 min-h-[70vh] min-w-full overflow-hidden rounded-[32px] border border-amber-300/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] '
        style={{
          backgroundImage: `url(${kundali})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <div className=' absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-950/90 ' />
        <div className='relative z-10 flex min-h-[75vh] flex-col items-center justify-center px-6 py-16 text-center text-white sm:px-10 lg:px-16 '>
          <p className='rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200 hover:scale-[1.10] duration-300'>
            Anusthan
          </p>
          <h2 className='mt-5 text-3xl font-semibold text-amber-100 sm:text-4xl lg:text-5xl hover:scale-[1.10] duration-300'>
            {t('poojan')}
          </h2>
          <p className='hover:scale-[1.10] duration-300 mt-4 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg'>
          {t("det")}
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-3 hover:scale-[1.10] duration-300'>
            <Link
              to='/account'>
              {/* <Help /> */}
            </Link>
          </div>
        </div>
      </div>
                   
    <div className='w-full mt-20 flex flex-wrap gap-8'>
      <div className='group lg:w-[30%] rounded-[24px] border border-amber-400/20 bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_24px_50px_rgba(251,191,36,0.18)]'>
        <div className='flex flex-col gap-3 text-white p-2'>
          <img
            className=' rounded-2xl border border-white/10 bg-white/5 object-contain p-1 hover:scale-[1.07] duration-300'
            src={poojan1}
          />
          <p className='text-xl font-semibold text-amber-400'>{t('mdh')}</p>

          <div className='space-y-2'>
            <p className=' leading-6 text-gray-200'>{t('mdd')}</p>

            <div>
              <ul className='ml-4 flex list-disc flex-col gap-1 text-gray-200'>
                <li>{t('md1')}</li>
                <li>{t('md2')}</li>
              </ul>
              <p className='text-lg my-2 font-semibold text-amber-400'>{t('mdh2')}</p>
            </div>
          </div>
        </div>

        <div className='mt-5 flex items-center justify-center border-t border-white/10 py-3'>
        <a href="https://wa.me/918882532259?text=🙏%20नमस्ते%20मनोज%20शास्त्री%20जी,%0A%0Aमुझे%20*मंगल%20दोष%20निवारण%20एवं%20अनुष्ठान*%20के%20बारे%20में%20विस्तृत%20जानकारी%20चाहिए।%20कृपया%20पूजा%20की%20विधि,%20लाभ,%20आवश्यक%20सामग्री%20तथा%20बुकिंग%20प्रक्रिया%20बताएं%0A%0Aधन्यवाद।🙏" target='blank'>
        <button type='button'><Whatsapp /></button>
        </a>
          </div>
      </div>

      <div className='group lg:w-[30%] rounded-[24px] border border-amber-400/20 bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_24px_50px_rgba(251,191,36,0.18)]'>
        <div className='flex flex-col gap-3 text-white p-2'>
          <img
            className=' rounded-2xl border border-white/10 bg-white/5 object-contain p-1 hover:scale-[1.10] duration-300'
            src={poojan2}
            alt={t('pdh')}
          />
          <p className='text-xl font-semibold text-amber-400'>{t('pdh')}</p>

          <div className='space-y-2'>
            <p className=' leading-6 text-gray-200'>{t('pdd')}</p>

            <div>
              <h1 className='text-xl my-2 font-semibold text-amber-400'>{t('pdh2')}</h1>
              <ul className='ml-4 flex list-disc flex-col gap-4 text-gray-100'>
                <li>{t('pd2')}</li>
                <li>{t('pd1')}</li>
              </ul>
            <p className=' text-lg my-3 font-semibold text-amber-400'>{t("pda")}</p>
            </div>
          </div>
        </div>

      <div className='mt-5 flex items-center justify-center border-t border-white/10 py-3'>
        <a href="https://wa.me/918882532259?text=🙏%20नमस्ते%20मनोज%20शास्त्री%20जी,%0A%0Aमुझे%20*पितृदोष%20अनुष्ठान%20(पुष्कर)*%20के%20बारे%20में%20जानकारी%20चाहिए।%20कृपया%20पूजा%20की%20विधि,%20लाभ,%20समय%20एवं%20बुकिंग%20की%20जानकारी%20साझा%20करें।%0A%0Aधन्यवाद।🙏" target='blank'>
        <button type='button'><Whatsapp /></button>
        </a>
          </div>
      </div>

      <div className='group lg:w-[30%] rounded-[24px] border border-amber-400/20 bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_24px_50px_rgba(251,191,36,0.18)]'>
        <div className='flex flex-col gap-3 text-white p-2'>
          <img
            className=' rounded-2xl border border-white/10 bg-white/5 object-contain p-1 hover:scale-[1.10] duration-300'
            src={poojan3}
            alt={t('mmh')}
          />
          <p className='text-xl font-semibold text-amber-400'>{t('mmh')}</p>

          <div className='space-y-2'>
            <p className=' leading-6 text-gray-200'>{t('mmd')}</p>

            <div>
              <ul className='ml-4 flex list-disc flex-col gap-4 text-gray-100'>
                <li>{t('mm1')}</li>
                <li>{t('mm2')}</li>
                <li>{t('mm3')}</li>
              </ul>
          <h1 className='text-lg my-2 font-semibold text-amber-400'>{t('mmh2')}</h1>
            </div>
          </div>
        </div>

      <div className='mt-5 flex items-center justify-center border-t border-white/10 py-3'>
          <a href="https://wa.me/918882532259?text=🙏%20नमस्ते%20मनोज%20शास्त्री%20जी,%0A%0Aमुझे%20*महामृत्युंजय%20अनुष्ठान*%20के%20बारे%20में%20जानकारी%20चाहिए।%20कृपया%20इस%20अनुष्ठान%20की%20विधि,%20लाभ%20एवं%20बुकिंग%20प्रक्रिया%20बताएं।%0A%0Aधन्यवाद।🙏" target='blank'>
        <button type='button'><Whatsapp /></button>
        </a>
        </div>
      </div>

      <div className='group lg:w-[30%] rounded-[24px] border border-amber-400/20 bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_24px_50px_rgba(251,191,36,0.18)]'>
        <div className='flex flex-col gap-3 text-white p-2'>
          <img
            className=' rounded-2xl border border-white/10 bg-white/5 object-contain p-1 hover:scale-[1.10] duration-300'
            src={poojan4}
            alt={t('sph')}
          />
          <p className='text-xl font-semibold text-amber-400'>{t('sph')}</p>

          <div className='space-y-2'>
            <p className=' leading-6 text-gray-200'>{t('spd')}</p>

            <div>
              <ul className='ml-4 flex list-disc flex-col gap-4 text-gray-100'>
                <li>{t('sp1')}</li>
                <li>{t('sp2')}</li>
              </ul>
          <h1 className='text-lg my-3 font-semibold text-amber-400'>{t('sph1')}</h1>
            </div>
          </div>
        </div>

       <div className='mt-5 flex items-center justify-center border-t border-white/10 py-3'>
            <a href="https://wa.me/918882532259?text=🙏%20नमस्ते%20मनोज%20शास्त्री%20जी,%0A%0Aमुझे%20*संतान%20प्राप्ति%20गोपाल%20अनुष्ठान*%20के%20बारे%20में%20विस्तृत%20जानकारी%20चाहिए।%20कृपया%20इस%20अनुष्ठान%20की%20विधि,%20लाभ%20एवं%20बुकिंग%20प्रक्रिया%20बताएं।%0A%0Aधन्यवाद।🙏" target='blank'>
        <button type='button'><Whatsapp /></button>
        </a>
        </div>
      </div>

       <div className='group lg:w-[30%] rounded-[24px] border border-amber-400/20 bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_24px_50px_rgba(251,191,36,0.18)]'>
        <div className='flex flex-col gap-3 text-white p-2'>
          <img
            className=' rounded-2xl border border-white/10 bg-white/5 object-contain p-1 hover:scale-[1.10] duration-300'
            src={poojan5}
            alt={t('nph')}
          />
          <p className='text-xl font-semibold text-amber-400'>{t('nph')}</p>

          <div className='space-y-2'>
            <p className=' leading-6 text-gray-200'>{t('npd')}</p>

            <div>
              <ul className='ml-4 flex list-disc flex-col gap-4 text-gray-100'>
                <li>{t('np1')}</li>
                <li>{t('np2')}</li>
              </ul>
          <h1 className='text-lg my-3 font-semibold text-amber-400'>{t('nph1')}</h1>
            </div>
          </div>
        </div>

      <div className='mt-5 flex items-center justify-center border-t border-white/10 py-3'>
           <a href="https://wa.me/918882532259?text=🙏%20नमस्ते%20मनोज%20शास्त्री%20जी,%0A%0Aमुझे%20*उज्जैन%20नागबली%20पूजन*%20के%20बारे%20में%20जानकारी%20चाहिए।%20कृपया%20पूजा%20की%20विधि,%20लाभ,%20आवश्यक%20जानकारी%20एवं%20बुकिंग%20प्रक्रिया%20बताएं।%0A%0Aधन्यवाद।🙏" target='blank'>
        <button type='button'><Whatsapp /></button>
        </a>
        </div>
      </div>

       <div className='group lg:w-[30%] rounded-[24px] border border-amber-400/20 bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_24px_50px_rgba(251,191,36,0.18)]'>
        <div className='flex flex-col gap-3 text-white p-2'>
          <img
            className=' rounded-2xl border border-white/10 bg-white/5 object-contain p-1 hover:scale-[1.10] duration-300'
            src={poojan6}
            alt={t('vah')}
          />
          <p className='text-xl font-semibold text-amber-400'>{t('vah')}</p>

          <div className='space-y-2'>
            <p className=' leading-6 text-gray-200'>{t('sad')}</p>

            <div>
              <ul className='ml-4 flex list-disc flex-col gap-4 text-gray-100'>
                <li>{t('sa1')}</li>
                <li>{t('sa2')}</li>
                <li>{t('sa3')}</li>
              </ul>
          <h1 className='text-lg my-3 font-semibold text-amber-400'>{t('sah')}</h1>
            </div>
          </div>
        </div>

       <div className='mt-5 flex items-center justify-center border-t border-white/10 py-3'>
           <a href="https://wa.me/918882532259?text=🙏%20नमस्ते%20मनोज%20शास्त्री%20जी,%0A%0Aमुझे%20*शीघ्र%20विवाह%20अनुष्ठान*%20के%20बारे%20में%20जानकारी%20चाहिए।%20कृपया%20इस%20अनुष्ठान%20की%20विधि,%20लाभ%20एवं%20बुकिंग%20प्रक्रिया%20के%20बारे%20में%20मार्गदर्शन%20दें।%0A%0Aधन्यवाद।🙏" target='blank'>
        <button type='button'><Whatsapp /></button>
        </a>
        </div>
      </div>

       <div className='group lg:w-[30%] rounded-[24px] border border-amber-400/20 bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_24px_50px_rgba(251,191,36,0.18)]'>
        <div className='flex flex-col gap-3 text-white p-2'>
          <img
            className=' rounded-2xl border border-white/10 bg-white/5 object-contain p-1 hover:scale-[1.10] duration-300'
            src={poojan7}
            alt={t('ma')}
          />
          <p className='text-xl font-semibold text-amber-400'>{t('ma')}</p>

          <div className='space-y-2'>
            <p className=' leading-6 text-gray-200'>{t('mad')}</p>

            <div>
              <ul className='ml-4 flex list-disc flex-col gap-4 text-gray-100'>
                <li>{t('ma1')}</li>
                <li>{t('ma2')}</li>
                <li>{t('ma3')}</li>
              </ul>
          <h1 className='text-lg my-3 font-semibold text-amber-400'>{t('mah')}</h1>
            </div>
          </div>
        </div>

       <div className='mt-5 flex items-center justify-center border-t border-white/10 py-3'>
            <a href="https://wa.me/918882532259?text=🙏%20नमस्ते%20मनोज%20शास्त्री%20जी,%0A%0Aमुझे%20*मुकदमा%20विजय%20अनुष्ठान*%20के%20बारे%20में%20जानकारी%20चाहिए।%20कृपया%20इस%20अनुष्ठान%20की%20विधि,%20लाभ,%20उपयुक्त%20समय%20एवं%20बुकिंग%20प्रक्रिया%20बताएं।%0A%0Aधन्यवाद।🙏" target='blank'>
        <button type='button'><Whatsapp /></button>
        </a>
        </div>
      </div>
     
    </div>
    </div>
  )
}

const Poojan = () => {
  const { t } = useTranslation()

  return (
    <div className='mt-20 w-full bg-linear-to-r from-[#111827] to-[#0a0a0a]'>
      <button className='fixed flex w-full justify-center bg-amber-300 py-1'>
        <h1 className='mt-1 rounded-lg bg-amber-300 p-1 px-3 text-xl font-semibold text-red-700'>
          <a href='#poojan'>{t('poojanTitle')}</a>
        </h1>
      </button>
     
      <div className='my-5 flex flex-wrap justify-center gap-10 p-5'>
        <PoojanCard />
      </div>
    </div>
  )
}

export default Poojan