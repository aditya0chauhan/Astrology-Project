import { FaWhatsapp } from "react-icons/fa";
import vastu1 from "../assets/images/vastu-1.png";
import vastu2 from "../assets/images/vastu-2.png";
import vastu3 from "../assets/images/vastu-3.png";
import vastu4 from "../assets/images/vastu-4.png";
import vastu5 from "../assets/images/vastu-5.png";
import vastu6 from "../assets/images/vastu-6.png";
import vastu7 from "../assets/images/vastu-7.png";
import vastu8 from "../assets/images/vastu-8.png";
import banner from '../assets/images/banner.png'
import { useTranslation } from "react-i18next";
import { MdCall } from "react-icons/md";

const Vaastu = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-5 w-full bg-[#08122D]">
      <div className="h-10" id="vastuhome"></div>
      <div className="w-full">
        <button className="fixed left-0 right-0 top-16 flex items-center justify-center bg-amber-300 p-1 text-xl font-semibold text-red-700">
          <a href="#vastuhome">
            <span>{t("vastuHome")}</span>
          </a>


        </button>

        <section className='mt-20 relative rounded-xl lg:rounded-[32px] border border-amber-300/20 bg-[radial-gradient(circle_at_100%_0,rgba(242,184,46,0.15),transparent_32%),linear-gradient(135deg,#761027_0%,#2e0715_52%,#0b1029_100%)] p-2 lg:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8 my-5'>
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


      </div>


      <div className="mx-auto  px-3 pb-10 sm:px-5 mt-8">

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-4">

          <a href="#v1" className="group overflow-hidden rounded-2xl border border-amber-300/20 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_15px_35px_rgba(251,191,36,0.25)]">
            <img src={vastu1} alt="Ghar Vastu" className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="p-4 flex flex-col items-center justify-center">
              <h2 className="text-lg font-bold text-amber-300">🏡 {t('gv')}</h2>
              <p className="mt-2 text-sm text-slate-300">{t('gv1')}</p>
            </div>
          </a>

          <a href="#v2" className="group overflow-hidden rounded-2xl border border-amber-300/20 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_15px_35px_rgba(251,191,36,0.25)]">
            <img src={vastu2} alt="Wallet Vastu" className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-amber-300">👛 {t("gv2")}</h2>
              <p className="mt-2 text-sm text-slate-300">{t("gv3")}</p>
            </div>
          </a>

          <a href="#v3" className="group overflow-hidden rounded-2xl border border-amber-300/20 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_15px_35px_rgba(251,191,36,0.25)]">
            <img src={vastu4} alt="Mulank Vastu" className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-amber-300">🔢 {t("mulankTitle")} </h2>
              <p className="mt-2 text-sm text-slate-300">{t("mulankDesc")}</p>
            </div>
          </a>

          <a href="#v4" className="group overflow-hidden rounded-2xl border border-amber-300/20 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_15px_35px_rgba(251,191,36,0.25)]">
            <img src={vastu3} alt="Family Photo Vastu" className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-amber-300">🖼️ {t("familyTitle")}</h2>
              <p className="mt-2 text-sm text-slate-300">{t("familyDesc")}</p>
            </div>
          </a>

          <a href="#v5" className="group overflow-hidden rounded-2xl border border-amber-300/20 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_15px_35px_rgba(251,191,36,0.25)]">
            <img src={vastu5} alt="Flat Vastu" className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-amber-300">🏢 {t("flatTitle")}</h2>
              <p className="mt-2 text-sm text-slate-300">{t("flatDesc")}</p>
            </div>
          </a>

          <a href="#v6" className="group overflow-hidden rounded-2xl border border-amber-300/20 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_15px_35px_rgba(251,191,36,0.25)]">
            <img src={vastu6} alt="Home Remedies" className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-amber-300">✨ {t("homeTitle")}</h2>
              <p className="mt-2 text-sm text-slate-300">{t("homeDesc")}</p>
            </div>
          </a>

          <a href="#v7" className="group overflow-hidden rounded-2xl border border-amber-300/20 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_15px_35px_rgba(251,191,36,0.25)]">
            <img src={vastu7} alt="Consultation" className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-amber-300">📿 {t("consultTitle")}</h2>
              <p className="mt-2 text-sm text-slate-300">{t("consultDesc")}</p>
            </div>
          </a>

          <a href="#v8" className="group overflow-hidden rounded-2xl border border-amber-300/20 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_15px_35px_rgba(251,191,36,0.25)]">
            <img src={vastu8} alt="Window Vastu" className="h-52 w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-amber-300">🪟 {t("windowTitle")}</h2>
              <p className="mt-2 text-sm text-slate-300">{t("windowDesc")}</p>
            </div>
          </a>

        </div>


        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div id="v1" className="group overflow-hidden rounded-[28px] border-amber-400/20  bg-[#111827] p-6 text-amber-200 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)] ">
            <img src={vastu1} alt="vastu details" className="mb-6 h-72 w-full rounded-2xl object-cover border border-amber-400/20 transition-all duration-500 group-hover:scale-[1.03]" />
            <h1 className="mb-5 text-3xl font-bold text-amber-300">
              🏡 {t("gharvastu")}
            </h1>

            <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li1")} </li>
              <li className="font-medium">{t("li2")} </li>
              <li className="font-medium">{t("li3")} </li>
              <li className="font-medium">{t("li4")} </li>
              <li className="font-medium">{t("li5")} </li>
            </ol>

            <h1 className="my-6 text-xl font-bold text-amber-300">{t("h1")} :-</h1>
            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400">
              <li className="font-medium">{t('li6')} </li>
              <li className="font-medium">{t('li7')}</li>
              <li className="font-medium">{t('li8')} </li>
              <li className="font-medium">{t('li9')}</li>
            </ol>
            <h1 className="my-6 text-xl font-bold text-amber-300">{t('h2')} :-</h1>
            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400">
              <li className="font-medium">{t("li10")}</li>
              <li className="font-medium">{t("li11")} </li>
              <li className="font-medium">{t("li12")}</li>
              <li className="font-medium">{t("li13")}</li>
            </ol>
            <h1 className="my-6 text-xl font-bold text-amber-300">{t('h3')} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li14")} </li>
              <li className="my-3 font-semibold text-white">{t("li15")} </li>
              <li className="my-3 font-semibold text-white">{t("li16")}</li>
              <li className="my-3 font-semibold text-white">{t("li17")} </li>
            </ol>
            <h1 className="my-6 text-xl font-bold text-amber-300">{t('h4')} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li18")}</li>
              <li className="my-3 font-semibold text-white">{t("li19")}</li>
              <li className="my-3 font-semibold text-white">{t("li20")}</li>
              <li className="my-3 font-semibold text-white">{t("li21")}</li>
              <li className="my-3 font-semibold text-white">{t("li22")}</li>
            </ol>
            <div className="mt-10 rounded-2xl border border-amber-400/20 bg-black/20 p-5">

  <h2 className="mb-5 text-center text-xl font-bold text-red-400">
    {t("soul1")}
  </h2>

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    <a href="tel:+91 88825 32259" className="bg-blue-700 p-2 rounded-lg flex justify-center items-center text-[#E8F0FE] transition-all duration-300 hover:scale-105"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>

    <a
      href="https://wa.me/918882532259?text=Hello%20I%20want%20to%20Remedy%20vastu%20defects%20using%20yantras"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-300
        hover:scale-105
        hover:bg-green-500
      "
    >
      <FaWhatsapp className="mr-2 text-2xl" />
      WhatsApp Now
    </a>

  </div>

</div>
          </div>

          <div id="v2" className="group overflow-hidden rounded-[28px] border-amber-400/20  bg-[#111827] p-6 text-amber-200 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)] ">
            <img src={vastu2} alt="vastu wallet tips" className="mb-6 h-72 w-full rounded-2xl object-cover border border-amber-400/20 transition-all duration-500 group-hover:scale-[1.03]" />
            <h1 className="mb-5 text-3xl font-bold text-amber-300">
              {t("h5")}
            </h1>

            <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li23")} </li>
              <li className="font-medium">{t("li24")} </li>
              <li className="font-medium">{t("li25")} </li>
              <li className="font-medium">{t("li26")} </li>
              <li className="font-medium">{t("li27")} </li>
              <li className="font-medium">{t("li28")} </li>
              <li className="font-medium">{t("li29")} </li>
              <li className="font-medium">{t("li30")} </li>
              <li className="font-medium">{t("li31")} </li>
              <li className="font-medium">{t("li32")} </li>
            </ol>

            <h1 className="my-6 text-xl font-bold text-amber-300">{t("h6")} :-</h1>
            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400">
              <li className="font-medium">{t('li33')} </li>
              <li className="font-medium">{t('li34')} </li>
              <li className="font-medium">{t('li35')} </li>
              <li className="font-medium">{t('li36')} </li>
              <li className="font-medium">{t('li37')} </li>
              <li className="font-medium">{t('li38')} </li>
              <li className="font-medium">{t('li39')} </li>
              <li className="font-medium">{t('li40')} </li>
              <li className="font-medium">{t('li41')} </li>
              <li className="font-medium">{t('li42')} </li>
            
            </ol>
            <h1 className="my-6 text-xl font-bold text-amber-300">{t('h7')} :-</h1>
            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400">
              <li className="font-medium">{t("li43")}</li>
              <li className="font-medium">{t("li44")}</li>
              <li className="font-medium">{t("li45")}</li>
               </ol>
          
            <div className="mt-10 rounded-2xl border border-amber-400/20 bg-black/20 p-5 flex flex-col justify-end">

  <h2 className="mb-5 text-center text-xl font-bold text-red-400">
    {t("soul2")}
  </h2>

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

     <a href="tel:+91 88825 32259" className="bg-blue-700 p-2 rounded-lg flex justify-center items-center text-[#E8F0FE] transition-all duration-300
        hover:scale-105"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>

    <a href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20would%20like%20to%20get%20a%20consultation%20regarding%20Wallet%20Vastu.%20Please%20guide%20me%20with%20effective%20Vastu%20remedies%20for%20attracting%20wealth,%20improving%20savings,%20financial%20stability,%20and%20prosperity.%0A%0AThank%20you."

      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-300
        hover:scale-105
        hover:bg-green-500
      "
    >
      <FaWhatsapp className="mr-2 text-2xl" />
      WhatsApp Now
    </a>

  </div>

</div>
          </div>

           <div id="v3" className="group overflow-hidden rounded-[28px] border-amber-400/20  bg-[#111827] p-6 text-amber-200 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)] ">
            <img src={vastu4} alt="vastu wallet tips" className="mb-6 h-72 w-full rounded-2xl object-cover border border-amber-400/20 transition-all duration-500 group-hover:scale-[1.03]" />
            <h1 className="mb-5 text-3xl font-bold text-amber-300">
              {t("h8")}
            </h1>

            <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

             <h1 className="my-6 text-xl font-bold text-amber-300">{t("li46")} 1 (1, 10, 19, 28) :- </h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li47")} </li>
              <li className="font-medium">{t("li48")} </li>
              </ol>

              <h1 className="my-6 text-xl font-bold text-amber-300">{t("li46")}  2 (2, 11, 20, 29) :-</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li49")} </li>
              <li className="font-medium">{t("li50")} </li>
              </ol>

              
              <h1 className="my-6 text-xl font-bold text-amber-300">{t("li46")}  3 (3, 12, 21, 30) :-</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li51")} </li>
              <li className="font-medium">{t("li52")} </li>
              </ol>

                <h1 className="my-6 text-xl font-bold text-amber-300">{t("li46")}  4 (4, 13, 22, 31) :-</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li53")} </li>
              <li className="font-medium">{t("li54")} </li>
              </ol>

              <h1 className="my-6 text-xl font-bold text-amber-300">{t("li46")}  5 (5, 14, 23) :-</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li55")} </li>
              <li className="font-medium">{t("li56")} </li>
              </ol>

               <h1 className="my-6 text-xl font-bold text-amber-300">{t("li46")}  6 (6, 15, 24) :-</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li57")} </li>
              <li className="font-medium">{t("li58")} </li>
              </ol>

          <h1 className="my-6 text-xl font-bold text-amber-300">{t("li46")}  7 (7, 16, 25) :-</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li59")} </li>
              <li className="font-medium">{t("li60")} </li>
              </ol>

                <h1 className="my-6 text-xl font-bold text-amber-300">{t("li46")} 8 (8, 17, 26) :-</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li61")} </li>
              <li className="font-medium">{t("li62")} </li>
              </ol>

                <h1 className="my-6 text-xl font-bold text-amber-300">{t("li46")} 9 (9, 18, 27) :-</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li63")} </li>
              <li className="font-medium">{t("li64")} </li>
              </ol>
                      
            <div className="mt-10 rounded-2xl border border-amber-400/20 bg-black/20 p-5">

  <h2 className="mb-5 text-center text-xl font-bold text-red-400">{t("soul3")}
  </h2>

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

     <a href="tel:+91 88825 32259" className="bg-blue-700 p-2 rounded-lg flex justify-center items-center text-[#E8F0FE] transition-all duration-300 hover:scale-105"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>

    <a href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20would%20like%20to%20know%20the%20auspicious%20directions,%20suitable%20items%20to%20keep%20at%20home%20and%20Vastu%20remedies%20according%20to%20my%20Mulank%20%20Please%20guide%20me%20with%20personalized%20recommendations%20for%20prosperity,%20positivity,%20and%20success.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 p-2 rounded-lg text-white transition-all duration-300
        hover:scale-105"
                > <FaWhatsapp className="mr-2 text-2xl" />
      WhatsApp Now
    </a>

  </div>

</div>
          </div>


          <div id="v4" className="group overflow-hidden rounded-[28px] border-amber-400/20  bg-[#111827] p-6 text-amber-200 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)] ">
            <img src={vastu3} alt="vastu wallet tips" className="mb-6 h-72 w-full rounded-2xl object-cover border border-amber-400/20 transition-all duration-500 group-hover:scale-[1.03]" />
            <h1 className="mb-5 text-3xl font-bold text-amber-300">
              {t("h9")}
            </h1>

            <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li65")} </li>
              <li className="font-medium">{t("li66")} </li>
              <li className="font-medium">{t("li67")} </li>
              <li className="font-medium">{t("li68")} </li>
              <li className="font-medium">{t("li69")} </li>
              <li className="font-medium">{t("li70")} </li>
              <li className="font-medium">{t("li71")} </li>
              <li className="font-medium">{t("li72")} </li>
              <li className="font-medium">{t("li73")} </li>
              <li className="font-medium">{t("li74")} </li>
              </ol>

              <h1 className="my-6 text-xl font-bold text-amber-300">{t("h10")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> ✔{t("li75")} </li>
              <li className="font-medium"> ✔{t("li76")} </li>
              <li className="font-medium"> ✔{t("li77")} </li>
              <li className="font-medium"> ✔{t("li78")} </li>
              <li className="font-medium"> ✔{t("li79")} </li>
              <li className="font-medium"> ✔{t("li80")} </li>
              <li className="font-medium"> ✔{t("li81")} </li>
              <li className="font-medium"> ✔{t("li82")} </li>
              <li className="font-medium"> ✔{t("li83")} </li>
              <li className="font-medium"> ✔{t("li84")} </li>
              </ol>

              
            
                      
            <div className="mt-10 rounded-2xl border border-amber-400/20 bg-black/20 p-5">

  <h2 className="mb-5 text-center text-xl font-bold text-red-400">{t("soul5")}
  </h2>

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

     <a href="tel:+91 88825 32259" className="bg-blue-700 p-2 rounded-lg flex justify-center items-center text-[#E8F0FE] transition-all duration-300 hover:scale-105"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>

    <a href="https://wa.me/918882532259?text=Hello%20Manoj%20Guru%20Ji,%0A%0AI%20would%20like%20to%20get%20guidance%20regarding%20the%20correct%20Vastu%20direction%20for%20placing%20family%20photographs%20in%20my%20home.%20Please%20suggest%20the%20best%20placement%20and%20Vastu%20remedies%20to%20improve%20family%20harmony,%20happiness,%20and%20positive%20energy.%0A%0AThank%20you.."
        target="_blank" rel="noopener noreferrer"
    className="flex items-center bg-green-500 p-2 rounded-lg text-white transition-all duration-300
        hover:scale-105"><FaWhatsapp className="mr-2 text-2xl" />
      WhatsApp Now
    </a>

  </div>

</div>
          </div>

           <div id="v5" className="group overflow-hidden rounded-[28px] border-amber-400/20  bg-[#111827] p-6 text-amber-200 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)] ">
            <img src={vastu5} alt="vastu wallet tips" className="mb-6 h-72 w-full rounded-2xl object-cover border border-amber-400/20 transition-all duration-500 group-hover:scale-[1.03]" />
            <h1 className="mb-5 text-3xl font-bold text-amber-300">
              {t("h11")}
            </h1>

            <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li85")} </li>
              <li className="font-medium">{t("li86")} </li>
              <li className="font-medium">{t("li87")} </li>
              <li className="font-medium">{t("li88")} </li>
              <li className="font-medium">{t("li89")} </li>
              <li className="font-medium">{t("li90")} </li>
              <li className="font-medium">{t("li91")} </li>
              <li className="font-medium">{t("li92")} </li>
             
              </ol>

              <h1 className="my-6 text-xl font-bold text-amber-300">{t("h12")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> ✔{t("li94")} </li>
              <li className="font-medium"> ✔{t("li95")} </li>
              <li className="font-medium"> ✔{t("li96")} </li>
              <li className="font-medium"> ✔{t("li97")} </li>
              <li className="font-medium"> ✔{t("li103")} </li>
              </ol>

              <h1 className="my-6 text-xl font-bold text-amber-300">{t("h13")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> ✔{t("li98")} </li>
              <li className="font-medium"> ✔{t("li99")} </li>
              <li className="font-medium"> ✔{t("li100")} </li>
              <li className="font-medium"> ✔{t("li101")} </li>
              <li className="font-medium"> ✔{t("li102")} </li>
              </ol>
          
            <div className="mt-10 rounded-2xl border border-amber-400/20 bg-black/20 p-5">

  <h2 className="mb-5 text-center text-xl font-bold text-red-400">{t("soul6")}
  </h2>

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

     <a href="tel:+91 88825 32259" className="bg-blue-700 p-2 rounded-lg flex justify-center items-center text-[#E8F0FE] transition-all duration-300 hover:scale-105"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>

    <a href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20am%20planning%20to%20purchase%20a%20flat%20and%20would%20like%20a%20Vastu%20consultation%20before%20making%20the%20final%20decision.%20Please%20guide%20me%20regarding%20the%20Vastu%20suitability%20of%20the%20property%20and%20any%20important%20points%20I%20should%20consider.%0A%0AThank%20you."
        target="_blank" rel="noopener noreferrer"
    className="flex items-center bg-green-500 p-2 rounded-lg text-white transition-all duration-300
        hover:scale-105"><FaWhatsapp className="mr-2 text-2xl" />
      WhatsApp Now
    </a>

  </div>

</div>
          </div>

         <div id="v6" className="group overflow-hidden rounded-[28px] border-amber-400/20  bg-[#111827] p-6 text-amber-200 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)] ">
            <img src={vastu5} alt="vastu wallet tips" className="mb-6 h-72 w-full rounded-2xl object-cover border border-amber-400/20 transition-all duration-500 group-hover:scale-[1.03]" />
            <h1 className="mb-5 text-3xl font-bold text-amber-300">
              {t("h14")}
            </h1>

            <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li104")} </li>
              <li className="font-medium">{t("li105")} </li>
              <li className="font-medium">{t("li106")} </li>
              <li className="font-medium">{t("li107")} </li>  
              </ol>

              <h1 className="my-6 text-xl font-bold text-amber-300">{t("h15")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> ✔{t("li108")} </li>
              <li className="font-medium"> ✔{t("li109")} </li>
              <li className="font-medium"> ✔{t("li110")} </li>
              <li className="font-medium"> ✔{t("li111")} </li>
              <li className="font-medium"> ✔{t("li112")} </li>
              </ol>

              <h1 className="my-6 text-xl font-bold text-amber-300">{t("h16")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> ✔{t("li113")} </li>
              <li className="font-medium"> ✔{t("li114")} </li>
              <li className="font-medium"> ✔{t("li115")} </li>
              <li className="font-medium"> ✔{t("li116")} </li>
              <li className="font-medium"> ✔{t("li117")} </li>
              </ol>

               <h1 className="my-6 text-xl font-bold text-amber-300">{t("h17")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> ✔{t("li118")} </li>
              <li className="font-medium"> ✔{t("li119")} </li>
              <li className="font-medium"> ✔{t("li120")} </li>
              <li className="font-medium"> ✔{t("li121")} </li>
              <li className="font-medium"> ✔{t("li122")} </li>
              </ol>
          
            <div className="mt-10 rounded-2xl border border-amber-400/20 bg-black/20 p-5">

  <h2 className="mb-5 text-center text-xl font-bold text-red-400">{t("soul7")}
  </h2>

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

     <a href="tel:+91 88825 32259" className="bg-blue-700 p-2 rounded-lg flex justify-center items-center text-[#E8F0FE] transition-all duration-300 hover:scale-105"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>

    <a href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20would%20like%20a%20Vastu%20consultation%20regarding%20the%20effects%20of%20broken%20utensils,%20octagonal%20mirrors,%20and%20other%20household%20Vastu%20factors.%20Please%20guide%20me%20with%20suitable%20remedies%20to%20improve%20positive%20energy,%20prosperity,%20and%20harmony%20in%20my%20home.%0A%0AThank%20you."

        target="_blank" rel="noopener noreferrer"
    className="flex items-center bg-green-500 p-2 rounded-lg text-white transition-all duration-300
        hover:scale-105"><FaWhatsapp className="mr-2 text-2xl" />
      WhatsApp Now
    </a>

  </div>

</div>
          </div>

          <div id="v7" className="group overflow-hidden rounded-[28px] border-amber-400/20  bg-[#111827] p-6 text-amber-200 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)] ">
            <img src={vastu7} alt="vastu wallet tips" className="mb-6 h-72 w-full rounded-2xl object-cover border border-amber-400/20 transition-all duration-500 group-hover:scale-[1.03]" />
            <h1 className="mb-5 text-3xl font-bold text-amber-300">
              {t("h18")}
            </h1>

            <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li123")} </li>
              <li className="font-medium">{t("li124")} </li>
              <li className="font-medium">{t("li125")} </li>
              <li className="font-medium">{t("li126")} </li>  
              <li className="font-medium">{t("li127")} </li>  
              <li className="font-medium">{t("li128")} </li>  
              </ol>

              <h1 className="my-6 text-xl font-bold text-amber-300">{t("h19")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> {t("li129")} </li>
              <li className="font-medium"> {t("li130")} </li>
              <li className="font-medium"> {t("li131")} </li>
              <li className="font-medium"> {t("li132")} </li>
              <li className="font-medium"> {t("li133")} </li>
              <li className="font-medium"> {t("li134")} </li>
              </ol>

              <h1 className="my-6 text-xl font-bold text-amber-300">{t("h20")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> {t("li135")} </li>
              <li className="font-medium"> {t("li136")} </li>
              <li className="font-medium"> {t("li137")} </li>
              <li className="font-medium"> {t("li138")} </li>
              <li className="font-medium"> {t("li139")} </li>
              <li className="font-medium"> {t("li140")} </li>
             </ol>

               <h1 className="my-6 text-xl font-bold text-amber-300">{t("h21")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> ✔{t("li141")} </li>
              <li className="font-medium"> ✔{t("li142")} </li>
              <li className="font-medium"> ✔{t("li143")} </li>
              <li className="font-medium"> ✔{t("li144")} </li>
              <li className="font-medium"> ✔{t("li145")} </li>
              </ol>
          
            <div className="mt-10 rounded-2xl border border-amber-400/20 bg-black/20 p-5">

  <h2 className="mb-5 text-center text-xl font-bold text-red-400">{t("soul8")}
  </h2>

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

     <a href="tel:+91 88825 32259" className="bg-blue-700 p-2 rounded-lg flex justify-center items-center text-[#E8F0FE] transition-all duration-300 hover:scale-105"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>

    <a href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20am%20facing%20challenges%20related%20to%20career%20growth,%20mental%20stress,%20and%20personal%20relationships.%20I%20would%20like%20to%20get%20a%20detailed%20consultation%20and%20suitable%20remedies%20based%20on%20my%20situation.%0A%0APlease%20guide%20me.%0A%0AThank%20you."


        target="_blank" rel="noopener noreferrer"
    className="flex items-center bg-green-500 p-2 rounded-lg text-white transition-all duration-300
        hover:scale-105"><FaWhatsapp className="mr-2 text-2xl" />
      WhatsApp Now
    </a>

  </div>

</div>
          </div>

          <div id="v8" className="group overflow-hidden rounded-[28px] border-amber-400/20  bg-[#111827] p-6 text-amber-200 shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_60px_rgba(251,191,36,0.18)] ">
            <img src={vastu8} alt="vastu wallet tips" className="mb-6 h-72 w-full rounded-2xl object-cover border border-amber-400/20 transition-all duration-500 group-hover:scale-[1.03]" />
            <h1 className="mb-5 text-3xl font-bold text-amber-300">
              {t("h22")}
            </h1>

            <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium">{t("li146")} </li>
              <li className="font-medium">{t("li147")} </li>
              <li className="font-medium">{t("li148")} </li>
              <li className="font-medium">{t("li149")} </li>  
              </ol>

              <h1 className="my-6 text-xl font-bold text-amber-300">{t("h23")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> {t("li150")} </li>
              <li className="font-medium"> {t("li151")} </li>
              <li className="font-medium"> {t("li152")} </li>
              <li className="font-medium"> {t("li153")} </li>
              </ol>

              <h1 className="my-6 text-xl font-bold text-amber-300">{t("h24")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> {t("li154")} </li>
              <li className="font-medium"> {t("li155")} </li>
              <li className="font-medium"> {t("li156")} </li>
              <li className="font-medium"> {t("li157")} </li>
              <li className="font-medium"> {t("li158")} </li>
              <li className="font-medium"> {t("li159")} </li>
              <li className="font-medium"> {t("li160")} </li>
              <li className="font-medium"> {t("li161")} </li>
             </ol>

               <h1 className="my-6 text-xl font-bold text-amber-300">{t("h25")}</h1>

            <ol className="space-y-4 list-decimal pl-6 text-white leading-8 marker:text-amber-400 ">
              <li className="font-medium"> {t("li162")} </li>
              <li className="font-medium"> {t("li163")} </li>
              <li className="font-medium"> {t("li164")} </li>
              <li className="font-medium"> {t("li165")} </li>
              <li className="font-medium"> {t("li166")} </li>
              
              </ol>
          
            <div className="mt-10 rounded-2xl border border-amber-400/20 bg-black/20 p-5">

  <h2 className="mb-5 text-center text-xl font-bold text-red-400">{t("soul4")}
  </h2>

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

     <a href="tel:+91 88825 32259" className="bg-blue-700 p-2 rounded-lg flex justify-center items-center text-[#E8F0FE] transition-all duration-300 hover:scale-105"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>

    <a href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20would%20like%20a%20consultation%20regarding%20Window%20and%20Home%20Vastu%20for%20my%20home.%20Please%20guide%20me%20about%20the%20correct%20directions,%20placement,%20and%20effective%20Vastu%20remedies%20for%20windows%20to%20improve%20positive%20energy,%20prosperity,%20and%20harmony%20in%20my%20house.%0A%0AThank%20you."


        target="_blank" rel="noopener noreferrer"
    className="flex items-center bg-green-500 p-2 rounded-lg text-white transition-all duration-300
        hover:scale-105"><FaWhatsapp className="mr-2 text-2xl" />
      WhatsApp Now
    </a>

  </div>

</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaastu;   