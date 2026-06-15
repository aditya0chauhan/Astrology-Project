import { FaHome } from "react-icons/fa";
import logo from "../assets/headerlogo.png";
import { MdAccountCircle, MdContactPhone } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false)
    const {t , i18n} = useTranslation()

  const changeLanguage = ()=>{
    if(i18n.language === 'en'){
      i18n.changeLanguage('hi')
    }else{
      i18n.changeLanguage("en")
    }
  }
    return (
    <header className="z-10 w-full bg-[#08002D] border-b-2 border-[#D4A646] flex justify-between items-center px-5 h-[10vh] lg:h-[15vh] fixed top-0 ">

          <img
            src={logo}
            alt="logo"
            className="h-16"
          />

        <div className="w-[80%] flex justify-end items-center gap-8 text-yellow-300 font-semibold">
          <span onClick={changeLanguage} className="flex flex-col items-center mr-3">
        <IoLanguage className="cursor-pointer text-2xl lg:text-4xl text-yellow-300" />
        {t("language")}</span>
       
      <Link to="/"  className="hidden lg:flex flex-col items-center ">
      <FaHome className="text-xl lg:text-4xl text-yellow-500" /> 
      {t("home")}
        </Link>
     
     <Link to={"/contact"} className="hidden lg:flex flex-col items-center">
     <MdContactPhone className="text-xl lg:text-4xl text-yellow-500" /> 
     {t("contact")}
     </Link>  


     <Link to={"/account"} className="hidden lg:flex flex-col items-center">
        <MdAccountCircle className="text-xl lg:text-4xl text-yellow-500"/> 
        {t("account")}
          </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-yellow-300"
          >
            <HiMenuAlt3 className="text-2xl lg:text-4xl text-yellow-300 " /><p className="font-semibold">{t("menu")}</p>
          </button>
             {open && (
        <div className="md:hidden bg-slate-800 text-amber-200 absolute right-0 top-10 w-full mt-10">

          <ul className="flex justify-around gap-8 p-3 items-center">

          <Link to={'/'} className="flex flex-col items-center font-semibold text-lg">
            <FaHome className="text-2xl lg:text-6xl text-amber-200" /><li>{t("home")}
            </li></Link>
          
          <Link to={'/contact'} className="flex flex-col items-center font-semibold text-lg"><MdContactPhone className="text-2xl lg:text-6xl text-amber-200" />
            <li>{t("contact")}
              </li></Link>
          
          <Link to={"/account"} className="flex flex-col items-center font-semibold text-lg"><MdAccountCircle className="text-2xl lg:text-6xl text-amber-200"/>
            <li>{t("account")}
              </li></Link>
            </ul>

        </div>
      )}

    </header>
  );
};

export default Header;