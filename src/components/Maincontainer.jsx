import React from 'react'
import image from '../assets/headerlogo.png'
import astro from '../assets/astro.png'
import vaastu from '../assets/astro-vastu.png'
import pooja from '../assets/kalash-pooja.png'
import { FaArrowRight } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Maincontainer = () => {
    const {t} = useTranslation()
  return (
    <div className='pt-28 w-full bg-[#08122D] lg:flex flex-wrap justify-between  lg:items-center'>
        <div className='m-5 pt-10 lg:w-[50%] lg:ml-10'>
        <h1 className='text-3xl lg:text-5xl font-semibold text-yellow-300'>
            {t("welcome")}
        </h1>
        <p className='text-white text-lg mt-3'>{t("description")}.</p>
        </div>
        <div className=' flex justify-end items-center W-full lg:w-[30%] mr-10 pl-5 lg:pl-auto mt-5'>
            <img
            src={image}
            className=' rounded-full border border-amber-300 h-[20%] lg:w-[70%]  '
            />
        </div>

        <div className='w-full flex justify-between lg:justify-evenly pt-10 lg:m-0 px-2'>

        <div className='cursor-pointer border border-amber-200 bg-gradient-to-r from-[#111827] to-[#0a0a0a] lg:p-4 rounded-lg p-4'>

            <h1 className=' lg:font-semibold text-amber-300 lg:text-2xl text-center lg:px-16 '>23+ {t("years")}</h1>
            <p className='text-slate-400 text-center'>{t("astrology")}</p>
        </div>

            <div className='bg-gradient-to-r from-[#111827] to-[#0a0a0a] border border-amber-300 lg:p-4 rounded-lg p-4'>

            <h1 className=' lg:font-semibold text-amber-300 lg:text-2xl text-center lg:px-16'>21+ {t("years")}</h1>
            <p className='text-slate-400 text-center'>{t("vaastu")} </p>
        </div>


            <div className='bg-gradient-to-r from-[#111827] to-[#0a0a0a] border border-amber-300 lg:p-4 rounded-lg p-4'>

            <h1 className=' lg:font-semibold text-amber-300 lg:text-2xl text-center lg:px-16'>27+ {t("years")}</h1>

            <p className='text-slate-400 text-center'>{t("poojan")}</p>
        </div>
        </div>

        <div className=' w-full flex flex-wrap py-16 lg:my-10'>
            <div className='bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-8 w-full lg:w-[30.5%] border border-amber-200 m-4 flex flex-col rounded-lg'>
                <div className='my-3 flex'>
                <img
                src={astro} 
                className='w-[10%] rounded-full'/>
                <h1 className=' text-amber-200 font-bold text-2xl ml-1'>{t("astrology")}</h1>
                </div>
            <h2 className='text-amber-200 my-3'>23+ {t("experiences")}</h2>
            <p className='text-white'>{t("vedic")}
               <Link to={"/astrology"}> <span className='flex items-center text-amber-200 mt-2'>{t("view")} <FaArrowRight className='text-yellow-200 ml-2' /></span></Link>
                </p>
            </div>
            
             <div className='bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-8 w-full lg:w-[30.5%] border border-amber-200 m-4 flex flex-col rounded-lg'>
                <div className='my-3 flex'>
                <img
                src={vaastu} 
                className='w-[10%] rounded-full'/>
                <h1 className=' text-amber-200 font-bold text-2xl ml-1'>{t("vaastu")}</h1>
                </div>
            <h2 className='text-amber-200 my-3'>21+ {t("experiences")}</h2>
            <p className='text-white'> {t("vastu")}
            <Link to={"/vastu"}><span className='flex items-center text-amber-200 mt-2'>{t("view")} <FaArrowRight className='text-yellow-200 ml-2' /></span> </Link>
                </p>
            </div>

             <div className='bg-gradient-to-r from-[#111827] to-[#0a0a0a] p-8 w-full lg:w-[30.5%] border border-amber-200 m-4 flex flex-col rounded-lg'>
                <div className='my-3 flex items-center'>
                <img
                src={pooja} 
                className='w-[10%] rounded-full'/>
                <h1 className=' text-amber-200 font-bold text-2xl ml-1'>{t("poojan")}</h1>
                </div>
            <h2 className='text-amber-200 my-3'>27+ {t("experiences")}</h2>
            <p className='text-white'> {t("paath")}
             <Link to={"/poojan"}><span className='flex items-center text-amber-200 mt-2'> {t("view")} <FaArrowRight className='text-yellow-200 ml-2' /></span> </Link>   
                </p>
            </div>
        </div>

        <nav>
            <ul></ul>
        </nav>
        
    </div>
  )
}

export default Maincontainer