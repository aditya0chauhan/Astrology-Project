import kundali from '../assets/images/kundali-MA.png'
import kun from '../assets/images/kundali.png'
import kundaliMilan from '../assets/images/kundaliMilan-MA.png'
import hastlikhit from '../assets/images/hastlikhit-MA.png'
import lalkitab from '../assets/images/lalkitab-MA.png'
import rashifal from '../assets/images/rashifal.png'
import panchang from '../assets/images/panchang.png'
import kp from '../assets/images/kpastro.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// import { Help} from '../utils/buttons/Genrate'

const Astrology = () => {
  const { t } = useTranslation()
  return (
    <div className='mt-16 w-full '>
   
      <button className='w-full p-2 text-center bg-amber-300 fixed font-semibold'>
        <a href='#astrology' >
        🪐  {t("as")} 🪐
        </a>
      </button>
      <div id='astrology'></div>
      
      <div className='flex justify-evenly flex-wrap p-5 '>
           <div
              className=' relative my-10 min-h-[70vh] min-w-full overflow-hidden rounded-[32px] border border-amber-300/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)]'
              style={{
                backgroundImage: `url(${kun})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/90 to-slate-950/90' />
              <div className='relative z-10 flex min-h-[75vh] flex-col items-center justify-center text-center text-white sm:px-10 lg:px-16'>
                <p className='rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200'>
                  Astrology
                </p>
                <h2 className='mt-5 text-3xl font-semibold text-amber-100 sm:text-4xl lg:text-5xl hover:scale-[1.05] duration-300'>
                  {t('as')}
                </h2>
                <p className='mt-4 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg hover:scale-[1.05] duration-300'>
                {t("asdet")}
                </p>
                <div className='mt-8 flex flex-wrap justify-center gap-3 hover:scale-[1.05] duration-300'>
                  <Link
                    to='/account'>
                    {/* <Help /> */}
                  </Link>
                </div>
              </div>
            </div>

    <div className='mt-5 w-full lg:w-[40%] flex flex-col justify-between p-3 rounded-lg border-2 border-amber-300 text-center text-white bg-gradient-to-r from-[#111827] to-[#0a0a0a] hover:scale-[1.05] duration-300'>
        <Link to={"/kundali"}><img src={kundali}
          className='rounded-lg border-2 border-amber-100'/>
          <h1 className='text-2xl font-semibold text-center my-5 underline text-amber-200'>Kundali</h1>
            <p>अपनी जन्म कुंडली के रहस्य जानें।</p>
            <p>जन्म कुंडली का विस्तृत विश्लेषण।</p>
            <p>ग्रहों की स्थिति, योग, दोष और भविष्य की संभावनाओं का विस्तृत अध्ययन।</p></Link>
        </div>    

      <div className='mt-5 w-full lg:w-[40%] flex flex-col justify-between p-3 rounded-lg border-2 border-amber-300 text-white text-center bg-gradient-to-r from-[#111827] to-[#0a0a0a] hover:scale-[1.05] duration-300'>
        <Link to={'/kundaliMilan'}><img src={kundaliMilan}
          className='rounded-lg border-2 border-amber-100'/>
          <h1 className='text-2xl font-semibold text-center my-5 underline text-amber-200'>Kundali Milan</h1>
            <p>36 गुण मिलान, मांगलिक दोष एवं वैवाहिक सुख का गहन विश्लेषण।</p>
            <p>विवाह से पूर्व गुण मिलान एवं ग्रहों की अनुकूलता का विश्लेषण।</p>
            <p>वैवाहिक जीवन की संभावनाओं की विस्तृत विश्लेषण अनुभवी मनोज एस्ट्रो परामर्श के साथ।</p></Link>
        </div>  


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
        
         <div className='mt-5 w-full lg:w-[40%] flex flex-col justify-between p-3 rounded-lg border-2 border-amber-300 text-white text-center bg-gradient-to-r from-[#111827] to-[#0a0a0a] hover:scale-[1.05] duration-300'>
       <Link to={'/lalKitab'}><img src={lalkitab}
          className='rounded-lg border-2 border-amber-100'/>
          <h1 className='text-2xl font-semibold text-center my-5 underline text-amber-200'>lalkitab Kundali</h1>
            <p>लाल किताब के गूढ़ रहस्यों और ग्रहों के प्रभाव को जानें।</p>
            <p>जीवन की समस्याओं के कारण एवं उनके सरल उपाय जानें।</p>
            <p>सरल एवं प्रभावी लाल किताब उपायों के साथ अनुभवी मनोज एस्ट्रो परामर्श के साथ सटीक मार्गदर्शन एवं प्रभावी उपाय।</p></Link>   
        </div>

        <div className='mt-5 w-full lg:w-[40%] flex lg:hidden flex-col justify-between p-3 rounded-lg border-2 border-amber-300 text-white text-center bg-gradient-to-r from-[#111827] to-[#0a0a0a] hover:scale-[1.05] duration-300'>
       <Link to={"/rashifal"}><img src={rashifal}
          className='rounded-lg border-2 border-amber-100'/>
          <h1 className='text-2xl font-semibold text-center my-5 underline text-amber-200'>Rashifal</h1>
            <p> ग्रह स्थिति के अनुसार राशिफल शुभ-अशुभ संकेतों के साथ दिनभर का सटीक मार्गदर्शन करियर, धन, स्वास्थ्य और प्रेम जीवन का विश्लेषण अनुभवी मनोज एस्ट्रो परामर्श के साथ सटीक मार्गदर्शन | </p></Link>   
        </div>

         <div className='mt-5 w-full lg:w-[40%] flex flex-col justify-between p-3 rounded-lg border-2 border-amber-300 text-white text-center bg-gradient-to-r from-[#111827] to-[#0a0a0a] hover:scale-[1.05] duration-300'>
      <Link to={"/panchang"}><img src={panchang}
          className='rounded-lg border-2 border-amber-100'/>
          <h1 className='text-2xl font-semibold text-center my-5 underline text-amber-200'>Dainik Panchang</h1>
            <p>शुभ मुहूर्त एवं राहुकाल का समय</p>
            <p>अभिजीत मुहूर्त और चौघड़िया विवरण</p>
            <p>व्रत, त्योहार और विशेष पर्व की जानकारी</p>
            <p>दैनिक शुभ-अशुभ समय का मार्गदर्शन</p>
            <p> आज की तिथि, वार, नक्षत्र मनोज एस्ट्रो की दैनिक पंचांग के साथ। </p></Link>    
        </div>
         <div className='mt-5 w-full lg:w-[40%] flex flex-col justify-between p-3 rounded-lg border-2 border-amber-300 text-white text-center bg-gradient-to-r from-[#111827] to-[#0a0a0a] hover:scale-[1.05] duration-300'>
      <Link to={"/kpAstrology"}><img src={kp}
          className='rounded-lg border-2 border-amber-100'/>
          <h1 className='text-2xl font-semibold text-center my-5 underline text-amber-200'>KP Astrology</h1>
            <p>सटीक भविष्यवाणी की आधुनिक ज्योतिष पद्धति</p>
            <p>KP Chart और राशि चार्ट की सम्पूर्ण जानकारी</p>
            <p>ग्रहों की शक्ति एवं स्थिति का गहन अध्ययन</p>
            <p>ग्रहों के संकेतक का अध्ययन</p>
            <p>जीवन की घटनाओं का Level Wise विश्लेषण मनोज एस्ट्रो के साथ। </p>
            </Link>    
        </div>

      

        </div>
    </div>
  )
}

export default Astrology
