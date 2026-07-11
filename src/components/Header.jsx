import logo from '../assets/images/headerlogo.png'
import { useState } from "react";
import Language from '../utils/buttons/Language'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Menu from '../utils/buttons/Menu';
import RashiLists from '../utils/buttons/RashiLists'


const Header = () => {

  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)

  const { t } = useTranslation()


  return (
    <header className="z-50 w-full bg-[#08002D] border-b-2 border-[#D4A646] flex justify-center items-center lg:px-5 py-3 fixed top-0">


      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="w-32 aspect-square"
        />
      </a>


      <div className="ml-2 w-full flex flex-col font-bold text-[11px]">

        <p className="text-yellow-500">
          {t('head1')}
        </p>

        <p className="text-amber-200">
          {t('head2')}
        </p>

      </div>

      <div className="w-[80%] flex justify-end items-center gap-8 text-yellow-300 font-semibold cursor-pointer">

        <Link
          to="/"
          className="hidden lg:flex hover:text-amber-600">
          {t("home")}
        </Link>

        <Link
          to="/astrology"
          className="hidden lg:flex hover:text-amber-600">
          {t("astrology")}
        </Link>

        <Link
          to="/numerology"
          className="hidden lg:flex hover:text-amber-600">
          {t("numerology")}
        </Link>

        <Link
          to="/vastu"
          className="hidden lg:flex hover:text-amber-600">
          {t("vaastu")}
        </Link>


        <Link
          to="/panchang"
          className="hidden lg:flex hover:text-amber-600">
          {t("panchang")}
        </Link>

        <div className="relative hidden lg:flex"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>

          <span className="lg:hover:text-amber-600">
            {t("rashifal")}
          </span>
          {
            hover && (
          <div className="absolute top-6 right-0 rounded-xl p-4 w-52 shadow-xl z-50">

                <RashiLists />

              </div>

            )

          }


        </div>

          <Link
          to="/poojan"
          className="hidden lg:flex hover:text-amber-600">
          Reports
        </Link>

        <Link
          to="/contact"
          className="hidden lg:flex hover:text-amber-600">

          {t("contact")}

        </Link>



        <Link
          to="/account"
          className="hidden lg:flex hover:text-amber-600">

          {t("account")}

        </Link>



        <span>

          <Language />

        </span>


      </div>



      <button

        onClick={() => setOpen(!open)}

        className="md:hidden text-yellow-300"

      >

        <Menu />

      </button>



    </header>

  )
}


export default Header;