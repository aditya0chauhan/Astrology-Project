import { FaWhatsapp } from "react-icons/fa";
import vastu1 from "../assets/images/vastu-1.png";
import vastu2 from "../assets/images/vastu-2.png";
import vastu3 from "../assets/images/vastu-3.png";
import vastu4 from "../assets/images/vastu-4.png";
import vastu5 from "../assets/images/vastu-5.png";
import vastu6 from "../assets/images/vastu-6.png";
import vastu7 from "../assets/images/vastu-7.png";
import vastu8 from "../assets/images/vastu-8.png";
import { useTranslation } from "react-i18next";
import { MdCall } from "react-icons/md";

const Vaastu = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-14 w-full bg-[#08122D]">
      <div className="h-10" id="vastuhome"></div>
      <div className="w-full">
        <button className="fixed left-0 right-0 top-16 flex items-center justify-center bg-amber-300 p-1 text-xl font-semibold text-red-700">
          <a href="#vastuhome">
            <span>{t("vastuHome")}</span>
          </a>

          
        </button>
        
      </div>
      

      <div className="mx-auto max-w-7xl px-3 pb-10 sm:px-5">
        <div className="grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2">

          <a href="#v1" className="overflow-hidden rounded-xl border border-amber-200">
            <img src={vastu1} alt="vastu 1" className="h-full w-full object-cover" />
          </a>


          <a href="#v2" className="overflow-hidden rounded-xl border border-amber-200">
            <img src={vastu2} alt="vastu 2" className="h-full w-full object-cover" />
          </a>

          <a href="#v3" className="overflow-hidden rounded-xl border border-amber-200">
            <img src={vastu4} alt="vastu 4" className="h-full w-full object-cover" />
          </a>

          <a href="#v4" className="overflow-hidden rounded-xl border border-amber-200">
            <img src={vastu3} alt="vastu 3" className="h-full w-full object-cover" />
          </a>

          <a href="#v5" className="overflow-hidden rounded-xl border border-amber-200">
            <img src={vastu5} alt="vastu 5" className="h-full w-full object-cover" />
          </a>

          <a href="#v6" className="overflow-hidden rounded-xl border border-amber-200">
            <img src={vastu6} alt="vastu 6" className="h-full w-full object-cover" />
          </a>

          <a href="#v7" className="overflow-hidden rounded-xl border border-amber-200">
            <img src={vastu7} alt="vastu 7" className="h-full w-full object-cover" />
          </a>

          <a href="#v8" className="overflow-hidden rounded-xl border border-amber-200">
            <img src={vastu8} alt="vastu 8" className="h-full w-full object-cover" />
          </a>
        </div>


        

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div id="v1" className="rounded-lg border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-3 text-amber-200">
            <img src={vastu1} alt="vastu details" className="mb-5 aspect-video w-full rounded-lg border border-amber-200 object-center" />
            <h1 className="my-3 text-xl font-semibold text-amber-200">
              {t("gharvastu")}  :-
            </h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li1")} </li>
              <li className="my-3 font-semibold text-white">{t("li2")} </li>
              <li className="my-3 font-semibold text-white">{t("li3")} </li>
              <li className="my-3 font-semibold text-white">{t("li4")} </li>
              <li className="my-3 font-semibold text-white">{t("li5")} </li>
            </ol>

            <h1 className="my-5 text-xl font-semibold text-amber-200">{t("h1")} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t('li6')} </li>
              <li className="my-3 font-semibold text-white">{t('li7')}</li>
              <li className="my-3 font-semibold text-white">{t('li8')} </li>
              <li className="my-3 font-semibold text-white">{t('li9')}</li>
            </ol>
            <h1 className="my-5 text-xl font-semibold text-amber-200">{t('h2')} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li10")}</li>
              <li className="my-3 font-semibold text-white">{t("li11")} </li>
              <li className="my-3 font-semibold text-white">{t("li12")}</li>
              <li className="my-3 font-semibold text-white">{t("li13")}</li>
            </ol>
            <h1 className="my-3 text-lg font-semibold text-amber-200">{t('h3')} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li14")} </li>
              <li className="my-3 font-semibold text-white">{t("li15")} </li>
              <li className="my-3 font-semibold text-white">{t("li16")}</li>
              <li className="my-3 font-semibold text-white">{t("li17")} </li>
            </ol>
            <h1 className="my-3 text-lg font-semibold text-amber-200">{t('h4')} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li18")}</li>
              <li className="my-3 font-semibold text-white">{t("li19")}</li>
              <li className="my-3 font-semibold text-white">{t("li20")}</li>
              <li className="my-3 font-semibold text-white">{t("li21")}</li>
              <li className="my-3 font-semibold text-white">{t("li22")}</li>
            </ol>
            <div className="font-bold text-red-500 text-xl">
              <h1 className="pb-5">{t("soul1")}</h1>
              <div className="flex justify-around items-center">
                <span className='bg-yellow-500 text-black p-2 px-3 rounded-lg my-5'>Price - 3100₹</span>
                <a href="https://wa.me/918882532259?text=Hello%20I%20want%20to%20Remedy%20vastu%20defects%20using%20yantras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 p-2 rounded-lg text-white"
                ><FaWhatsapp className="text-2xl mr-2" />Whatsapp
                </a>
              </div>
            </div>
          </div>

          <div id="v2" className="rounded-lg border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-3 text-amber-200">
            <img src={vastu2} alt="vastu wallet tips" className="mb-5 aspect-video w-full rounded-lg border border-amber-200" />
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t('h5')} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t('li23')}</li>
              <li className="my-3 font-semibold text-white">{t('li24')}</li>
              <li className="my-3 font-semibold text-white">{t('li25')}</li>
              <li className="my-3 font-semibold text-white">{t('li26')}</li>
              <li className="my-3 font-semibold text-white">{t('li27')}</li>
              <li className="my-3 font-semibold text-white">{t('li28')}</li>
              <li className="my-3 font-semibold text-white">{t('li29')}</li>
              <li className="my-3 font-semibold text-white">{t('li30')} </li>
              <li className="my-3 font-semibold text-white">{t('li31')}</li>
              <li className="my-3 font-semibold text-white">{t('li32')}</li>
            </ol>
            <h1 className="my-5 text-xl font-semibold text-amber-200">{t('h6')} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li33")}</li>
              <li className="my-3 font-semibold text-white">{t("li34")}</li>
              <li className="my-3 font-semibold text-white">{t("li35")}</li>
              <li className="my-3 font-semibold text-white">{t("li36")}</li>
              <li className="my-3 font-semibold text-white">{t("li37")}</li>
              <li className="my-3 font-semibold text-white">{t("li38")}</li>
              <li className="my-3 font-semibold text-white">{t("li39")}</li>
              <li className="my-3 font-semibold text-white">{t("li40")}</li>
              <li className="my-3 font-semibold text-white">{t("li41")}</li>
              <li className="my-3 font-semibold text-white">{t("li42")}</li>
            </ol>
            <h1 className="my-5 text-xl font-semibold text-amber-200">
              {t('h7')} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t('li43')}</li>
              <li className="my-3 font-semibold text-white">{t('li44')}</li>
              <li className="my-3 font-semibold text-white">{t('li45')}</li>
            </ol>
            <div className="font-bold text-red-500 text-xl mt-8">
              <h1 className="pb-5">{t("soul2")}</h1>

              <div className="flex justify-around items-center mt-10">
                <a href="tel:+91 88825 32259" className="bg-[#E8F0FE] p-2 rounded-lg flex items-center text-blue-700"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>
                <a href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20would%20like%20to%20get%20a%20consultation%20regarding%20Wallet%20Vastu.%20Please%20guide%20me%20with%20effective%20Vastu%20remedies%20for%20attracting%20wealth,%20improving%20savings,%20financial%20stability,%20and%20prosperity.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 p-2 rounded-lg text-white"
                ><FaWhatsapp className="text-2xl mr-2" />Whatsapp
                </a>
              </div>
            </div>

          </div>

          <div id="v3" className="rounded-lg border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-3 text-amber-200">
            <img src={vastu4} alt="Mulank ka ghar ka vastu" className="mb-5 aspect-video w-full rounded-lg border border-amber-200" />
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h8")} :-</h1>

            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("li46")} 1 (1, 10, 19, 28)</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li47")} </li>
              <li className="my-3 font-semibold text-white">{t("li48")} </li>
            </ol>

            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("li46")} 2 (2, 11, 20, 29) :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li49")} </li>
              <li className="my-3 font-semibold text-white">{t("li50")}</li>
            </ol>
            <h1 className="my-5 text-xl font-semibold text-amber-200">{t("li46")} 3 (3, 12, 21, 30) :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li51")}</li>
              <li className="my-3 font-semibold text-white">{t("li52")}</li>
            </ol>

            <h1 className="my-5 text-xl font-semibold text-amber-200">{t("li46")} 4 (4, 13, 22, 31) :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li53")}</li>
              <li className="my-3 font-semibold text-white">{t("li54")}</li>
            </ol>
            <h1 className="my-5 text-xl font-semibold text-amber-200">{t("li46")} 5 (5, 14, 23) :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li55")}</li>
              <li className="my-3 font-semibold text-white">{t("li56")}</li>
            </ol>
            <h1 className="my-5 text-xl font-semibold text-amber-200">{t("li46")} 6 (6, 15, 24) :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li57")} </li>
              <li className="my-3 font-semibold text-white">{t("li58")}</li>
            </ol>
            <h1 className="my-5 text-xl font-semibold text-amber-200">{t("li46")} 7 (7, 16, 25) :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li59")}</li>
              <li className="my-3 font-semibold text-white">{t("li60")}</li>
            </ol>

            <h1 className="my-5 text-xl font-semibold text-amber-200">{t("li46")} 8 (8, 17, 26) :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li61")}</li>
              <li className="my-3 font-semibold text-white"> {t("li62")}</li>
            </ol>
            <h1 className="my-5 text-xl font-semibold text-amber-200">{t("li46")} 9 (9, 18, 27) :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li63")}</li>
              <li className="my-3 font-semibold text-white">{t("li64")}</li>
            </ol>

            <div className="font-bold text-red-500 text-xl mt-8">
              <h1 className="pb-5">{t("soul3")}</h1>

              <div className="flex justify-around items-center mt-10">
                <a href="tel:+91 88825 32259" className="bg-[#E8F0FE] p-2 rounded-lg flex items-center text-blue-700"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>
                <a href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20would%20like%20to%20know%20the%20auspicious%20directions,%20suitable%20items%20to%20keep%20at%20home%20and%20Vastu%20remedies%20according%20to%20my%20Mulank%20%20Please%20guide%20me%20with%20personalized%20recommendations%20for%20prosperity,%20positivity,%20and%20success.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 p-2 rounded-lg text-white"
                ><FaWhatsapp className="text-2xl mr-2" />Whatsapp
                </a>
              </div>
            </div>
          </div>
          <div id="v4" className="rounded-lg border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-3 text-amber-200">
            <img src={vastu3} alt="Mulank ka ghar ka vastu" className="mb-5 aspect-video w-full rounded-lg border border-amber-200" />
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h9")} :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li65")}</li>
              <li className="my-3 font-semibold text-white">{t("li66")} </li>
              <li className="my-3 font-semibold text-white">{t("li67")} </li>
              <li className="my-3 font-semibold text-white">{t("li68")}</li>
              <li className="my-3 font-semibold text-white">{t("li69")}</li>
              <li className="my-3 font-semibold text-white">{t("li70")}</li>
              <li className="my-3 font-semibold text-white">{t("li71")}</li>
              <li className="my-3 font-semibold text-white">{t("li72")}</li>
              <li className="my-3 font-semibold text-white">{t("li73")}</li>
              <li className="my-3 font-semibold text-white">{t("li74")}</li>
            </ol>

            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h10")} :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white"> ✔{t("li75")} </li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li76")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li77")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li78")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li79")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li80")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li81")} </li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li82")} </li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li83")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li84")}</li>
            </ol>
            <div className="font-bold text-red-500 text-xl mt-8">
              <h1 className="pb-5">{t("soul5")}</h1>

              <div className="flex justify-around items-center mt-10">
                <a href="tel:+91 88825 32259" className="bg-[#E8F0FE] p-2 rounded-lg flex items-center text-blue-700"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>
                <a href="https://wa.me/918882532259?text=Hello%20Manoj%20Guru%20Ji,%0A%0AI%20would%20like%20to%20get%20guidance%20regarding%20the%20correct%20Vastu%20direction%20for%20placing%20family%20photographs%20in%20my%20home.%20Please%20suggest%20the%20best%20placement%20and%20Vastu%20remedies%20to%20improve%20family%20harmony,%20happiness,%20and%20positive%20energy.%0A%0AThank%20you.."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 p-2 rounded-lg text-white"
                ><FaWhatsapp className="text-2xl mr-2" />Whatsapp
                </a>
              </div>
            </div>
          </div>

          <div id="v5" className="rounded-lg border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-3 text-amber-200">
            <img src={vastu5} alt="Mulank ka ghar ka vastu" className="mb-5 aspect-video w-full rounded-lg border border-amber-200" />
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h11")} :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white"> {t("li85")}</li>
              <li className="my-3 font-semibold text-white"> {t("li86")}</li>
              <li className="my-3 font-semibold text-white"> {t("li86")}</li>
              <li className="my-3 font-semibold text-white">{t("li87")}</li>
              <li className="my-3 font-semibold text-white">{t("li88")}</li>
              <li className="my-3 font-semibold text-white">{t("li89")}</li>

              <li className="my-3 font-semibold text-white">{t("li90")}</li>
              <li className="my-3 font-semibold text-white">{t("li91")}</li>
              <li className="my-3 font-semibold text-white">{t("li92")}</li>
              <li className="my-3 font-semibold text-white">{t("li93")}</li>
            </ol>

            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h12")} :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white"> {t("li94")}</li>
              <li className="my-3 font-semibold text-white"> {t("li95")}</li>
              <li className="my-3 font-semibold text-white">{t("li96")}</li>
              <li className="my-3 font-semibold text-white"> {t("li97")}</li>
              <li className="my-3 font-semibold text-white">{t("li103")} </li>

            </ol>
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h13")} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white"> ✔ {t("li98")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li99")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li100")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li101")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li102")}</li>
            </ol>
            <div className="font-bold text-red-500 text-xl mt-8">
              <h1 className="pb-5">{t("soul6")}</h1>

              <div className="flex justify-around items-center mt-10">
                <a href="tel:+91 88825 32259" className="bg-[#E8F0FE] p-2 rounded-lg flex items-center text-blue-700"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>
                <a
                  href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20am%20planning%20to%20purchase%20a%20flat%20and%20would%20like%20a%20Vastu%20consultation%20before%20making%20the%20final%20decision.%20Please%20guide%20me%20regarding%20the%20Vastu%20suitability%20of%20the%20property%20and%20any%20important%20points%20I%20should%20consider.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 p-2 rounded-lg text-white"
                ><FaWhatsapp className="mr-3" />  Whatsapp</a></div>
            </div>
          </div>

          <div id="v6" className="rounded-lg border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-3 text-amber-200">
            <img src={vastu6} alt="Mulank ka ghar ka vastu" className="mb-5 aspect-video w-full rounded-lg border border-amber-200" />
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h14")} :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li104")} </li>
              <li className="my-3 font-semibold text-white"> {t("li105")}</li>
              <li className="my-3 font-semibold text-white"> {t("li106")}</li>
              <li className="my-3 font-semibold text-white">{t("li107")}</li>
            </ol>

            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h15")} :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white"> {t("li108")}</li>
              <li className="my-3 font-semibold text-white"> {t("li109")}</li>
              <li className="my-3 font-semibold text-white"> {t("li110")}</li>
              <li className="my-3 font-semibold text-white"> {t("li111")}</li>
              <li className="my-3 font-semibold text-white"> {t("li112")}</li>

            </ol>
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h16")} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li113")}</li>
              <li className="my-3 font-semibold text-white"> {t("li114")}</li>
              <li className="my-3 font-semibold text-white">{t("li115")}</li>
              <li className="my-3 font-semibold text-white"> {t("li116")}</li>
              <li className="my-3 font-semibold text-white"> {t("li117")}</li>
            </ol>
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h17")} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white"> ✔ {t("li118")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li119")}</li>
              <li className="my-3 font-semibold text-white">✔ {t("li120")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li121")}
              </li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li122")}</li>
            </ol>
              <div className="font-bold text-red-500 text-xl mt-8">
              <h1 className="pb-5">{t("soul7")}</h1>

              <div className="flex justify-around items-center mt-10">
                <a href="tel:+91 88825 32259" className="bg-[#E8F0FE] p-2 rounded-lg flex items-center text-blue-700"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>
                <a
                  href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20would%20like%20a%20Vastu%20consultation%20regarding%20the%20effects%20of%20broken%20utensils,%20octagonal%20mirrors,%20and%20other%20household%20Vastu%20factors.%20Please%20guide%20me%20with%20suitable%20remedies%20to%20improve%20positive%20energy,%20prosperity,%20and%20harmony%20in%20my%20home.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 p-2 rounded-lg text-white"
                ><FaWhatsapp className="mr-3" /> Whatsapp</a></div>
            </div>
          </div>

          <div id="v7" className="rounded-lg border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-3 text-amber-200">
            <img src={vastu7} alt="Mulank ka ghar ka vastu" className="mb-5 aspect-video w-full rounded-lg border border-amber-200" />
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h18")} :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li123")}</li>
              <li className="my-3 font-semibold text-white">{t("li124")}</li>
              <li className="my-3 font-semibold text-white">{t("li125")}</li>
              <li className="my-3 font-semibold text-white">{t("li126")}</li>
              <li className="my-3 font-semibold text-white">{t("li127")}</li>
              <li className="my-3 font-semibold text-white">{t("li128")} </li>
            </ol>

            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h19")}:-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li129")}</li>
              <li className="my-3 font-semibold text-white"> {t("li130")}</li>
              <li className="my-3 font-semibold text-white"> {t("li131")}</li>
              <li className="my-3 font-semibold text-white"> {t("li132")}</li>
              <li className="my-3 font-semibold text-white"> {t("li133")}</li>
              <li className="my-3 font-semibold text-white"> {t("li134")}</li>

            </ol>

            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h20")} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white"> {t("li135")} </li>
              <li className="my-3 font-semibold text-white"> {t("li136")}</li>
              <li className="my-3 font-semibold text-white">{t("li137")}</li>
              <li className="my-3 font-semibold text-white"> {t("li138")}</li>
              <li className="my-3 font-semibold text-white"> {t("li139")}</li>
              <li className="my-3 font-semibold text-white"> {t("li140")}</li>
            </ol>
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h21")} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white"> ✔ {t("li141")} </li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li142")}</li>
              <li className="my-3 font-semibold text-white">✔ {t("li143")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li144")}</li>
              <li className="my-3 font-semibold text-white"> ✔ {t("li145")}</li>
            </ol>
             <div className="font-bold text-red-500 text-xl mt-8">
              <h1 className="pb-5">{t("soul8")}</h1>

              <div className="flex justify-around items-center mt-10">
                <a href="tel:+91 88825 32259" className="bg-[#E8F0FE] p-2 rounded-lg flex items-center text-blue-700"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>
                <a
                  href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20am%20facing%20challenges%20related%20to%20career%20growth,%20mental%20stress,%20and%20personal%20relationships.%20I%20would%20like%20to%20get%20a%20detailed%20consultation%20and%20suitable%20remedies%20based%20on%20my%20situation.%0A%0APlease%20guide%20me.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 p-2 rounded-lg text-white"
                ><FaWhatsapp className="mr-3" />  Whatsapp</a></div>
            </div>
          </div>

          <div id="v8" className="rounded-lg border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-3 text-amber-200">
            <img src={vastu8} alt="Mulank ka ghar ka vastu" className="mb-5 aspect-video w-full rounded-lg border border-amber-200" />
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h22")} :-</h1>

            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li146")} </li>
              <li className="my-3 font-semibold text-white">{t("li147")}</li>
              <li className="my-3 font-semibold text-white">{t("li148")}</li>
              <li className="my-3 font-semibold text-white">{t("li149")}</li>
            </ol>
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h23")} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li150")} </li>
              <li className="my-3 font-semibold text-white">{t("li151")} </li>
              <li className="my-3 font-semibold text-white">{t("li152")} </li>
              <li className="my-3 font-semibold text-white">{t("li153")} </li>
            </ol>
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h24")} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li154")} </li>
              <li className="my-3 font-semibold text-white">{t("li155")} </li>
              <li className="my-3 font-semibold text-white">{t("li156")} </li>
              <li className="my-3 font-semibold text-white">{t("li157")} </li>
              <li className="my-3 font-semibold text-white">{t("li158")} </li>
              <li className="my-3 font-semibold text-white">{t("li159")} </li>
              <li className="my-3 font-semibold text-white">{t("li160")} </li>
              <li className="my-3 font-semibold text-white">{t("li161")} </li>
            </ol>
            <h1 className="my-3 text-xl font-semibold text-amber-200">{t("h25")} :-</h1>
            <ol className="my-5 list-decimal pl-6 text-lg font-bold text-amber-600">
              <li className="my-3 font-semibold text-white">{t("li162")} </li>
              <li className="my-3 font-semibold text-white">{t("li163")} </li>
              <li className="my-3 font-semibold text-white">{t("li164")} </li>
              <li className="my-3 font-semibold text-white">{t("li165")} </li>
              <li className="my-3 font-semibold text-white">{t("li166")} </li>

            </ol>
            <div className="font-bold text-red-500 text-xl mt-8">
              <h1 className="pb-5">{t("soul4")}</h1>

              <div className="flex justify-around items-center mt-5">
                <a href="tel:+91 88825 32259" className="bg-[#E8F0FE] p-2 rounded-lg flex items-center text-blue-700"><MdCall className="text-2xl mr-3" /> Call Manoj Pandit</a>
                <a href="https://wa.me/918882532259?text=Hello%20Guru%20Ji,%0A%0AI%20would%20like%20a%20consultation%20regarding%20Window%20and%20Home%20Vastu%20for%20my%20home.%20Please%20guide%20me%20about%20the%20correct%20directions,%20placement,%20and%20effective%20Vastu%20remedies%20for%20windows%20to%20improve%20positive%20energy,%20prosperity,%20and%20harmony%20in%20my%20house.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 p-2 rounded-lg text-white"
                ><FaWhatsapp className="text-2xl mr-2" />Whatsapp
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