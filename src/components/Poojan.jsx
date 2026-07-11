import React from 'react'
import poojan1 from '../assets/images/poojan-1.png'
import poojan2 from '../assets/images/poojan-2.png'
import poojan3 from '../assets/images/poojan-3.jpeg'
import poojan4 from '../assets/images/poojan-4.png'
import poojan5 from '../assets/images/poojan-5.png'
import poojan6 from '../assets/images/poojan-6.png'
import poojan7 from '../assets/images/poojan-7.png'
import poojan8 from '../assets/images/poojan-8.png'
import { useTranslation } from 'react-i18next'

const Poojan = () => {
  const { t } = useTranslation()

  return (
    <div className='mt-16 md:mt-24 bg-gradient-to-r from-[#111827] to-[#0a0a0a] w-full'>
      <button className='fixed w-full bg-amber-300 py-1 flex justify-center'>
        <h1 className='text-xl font-semibold p-1 px-3 rounded-lg text-red-700 bg-amber-300 mt-1 '>
          <a href='#poojan'>{t('poojanTitle')}</a>
        </h1>
      </button>
      <div id='poojan' className='min-h-16'></div>
      <div className='w-full flex justify-evenly flex-wrap'>

        <div className='w-[90%] lg:w-[40%] p-5'>
          <a href='#poojan1'>
            <img src={poojan1}
              className='aspect-video rounded-lg border-2 border-amber-300'
            />
          </a>
        </div>

        <div className='w-[90%] lg:w-[40%] p-5'>
          <a href='#poojan5'>
            <img src={poojan5}
              className='aspect-video rounded-lg border-2 border-amber-300'
            />
          </a>
        </div>

        <div className='w-[90%] lg:w-[40%] p-5'>
          <a href='#poojan3'>
            <img src={poojan3}
              className='aspect-video rounded-lg border-2 border-amber-300'
            />
          </a>
        </div>

        <div className='w-[90%] lg:w-[40%] p-5'>
          <a href='#poojan4'>
            <img src={poojan4}
              className='aspect-video rounded-lg border-2 border-amber-300'
            />
          </a>
        </div>

        <div className='w-[90%] lg:w-[40%] p-5'>
          <a href='#poojan2'>
            <img src={poojan2}
              className='aspect-video rounded-lg border-2 border-amber-300'
            />
          </a>
        </div>

        <div className='w-[90%] lg:w-[40%] p-5'>
          <a href='#poojan7'>
            <img src={poojan7}
              className='aspect-video rounded-lg border-2 border-amber-300'
            />
          </a>
        </div>

           <div className='w-[90%] lg:w-[40%] p-5'>
          <a href='#poojan6'>
            <img src={poojan6}
              className='aspect-video rounded-lg border-2 border-amber-300'
            />
          </a>
        </div>

         <div className='w-[90%] lg:w-[40%] p-5'>
          <a href='#poojan8'>
            <img src={poojan8}
              className='aspect-video rounded-lg border-2 border-amber-300'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Poojan