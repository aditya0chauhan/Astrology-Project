import React from 'react'
import { Link } from 'react-router-dom'
import dainikRashifal from '../assets/images/dainikRashifal.png'
import masikRashifal from '../assets/images/masikrashifal.png'

const Rashifal = () => {
  return (
    <div className='mt-24 p-10'>
      <div className='mt-5 w-full lg:w-[40%] flex flex-col justify-between p-3 rounded-lg border-2 border-amber-300 text-white text-center bg-gradient-to-r from-[#111827] to-[#0a0a0a]'>
        <Link to={"/dainik_rashifal"}><img src={dainikRashifal}
          className='rounded-lg border-2 border-amber-100' />
          <h1 className='text-2xl font-semibold text-center my-5 underline text-amber-200'>Dainik Rashifal</h1>
          आज की ग्रह स्थिति के अनुसार राशिफल शुभ-अशुभ संकेतों के साथ दिनभर का सटीक मार्गदर्शन करियर, धन, स्वास्थ्य और प्रेम जीवन का विश्लेषण अनुभवी मनोज एस्ट्रो परामर्श के साथ सटीक मार्गदर्शन |</Link>
      </div>
      <div className='mt-5 w-full lg:w-[40%] flex flex-col justify-between p-3 rounded-lg border-2 border-amber-300 text-white text-center bg-gradient-to-r from-[#111827] to-[#0a0a0a]'>
        <Link to={"/masik_rashifal"}><img src={masikRashifal}
          className='rounded-lg border-2 border-amber-100' />
          <h1 className='text-2xl font-semibold text-center my-5 underline text-amber-200'>Masik Rashifal</h1>
          इस महीने आपके जीवन में आने वाले बदलावों को जानें। ग्रहों की चाल, शुभ-अशुभ योग, करियर, व्यापार, स्वास्थ्य और रिश्तों से जुड़ी महत्वपूर्ण भविष्यवाणियां प्राप्त करें।
          Manoj Astro के साथ पाएं सही ज्योतिषीय मार्गदर्शन और अपने महीने को बेहतर बनाने की दिशा। 🔱</Link>
      </div>

    </div>
  )
}

export default Rashifal