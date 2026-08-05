import logo from '../assets/images/pic.png'
import { useState } from 'react'
import Language from '../utils/buttons/Language'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Menu from '../utils/buttons/Menu'
import RashiLists from '../utils/buttons/RashiLists'

const Header = () => {
  const [hover, setHover] = useState(false)
  const { t } = useTranslation()

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/astrology', label: t('astrology') },
    { to: '/numerology', label: t('numerology') },
    { to: '/vastu', label: t('vaastu') },
    { to: '/panchang', label: t('panchang') },
    // { to: '/report', label: t('rep') },
    { to: '/contact', label: t('contact') },
    { to: '/account', label: t('account') },
    { to: '/poojan', label: t('pujan') },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#D4A646]/70 bg-[#08002D]/95 backdrop-blur-xl">
      <div className="mx-auto flex items-center justify-between gap-2 px-3 py-3 sm:px-4 lg:px-5">
        <a href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src={logo} alt="logo" className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12 hover:scale-[1.20] duration-300 " />
          <div className=" min-w-0 flex-col sm:flex">
            <p className="text-[10px] font-bold text-yellow-500">{t('head1')}</p>
            <p className="text-[10px] font-semibold text-amber-200">{t('head2')}</p>
          </div>
        </a>

        <div className="hidden flex-1 items-center justify-end gap-4 text-[13px] font-semibold text-yellow-300 lg:flex xl:gap-5">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="transition hover:text-amber-600 hover:scale-[1.10] duration-300">
              {link.label}
            </Link>
          ))}

          <div
            className="relative hover:scale-[1.08] duration-300"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <span className="cursor-pointer transition hover:text-amber-600 ">{t('rashifal')}</span>
            {hover && (
              <div className=" absolute right-0 top-6 z-50 w-52  rounded-xl p-4">
                <RashiLists />
              </div>
            )}
          </div>

          <span className="shrink-0">
            <Language />
          </span>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="shrink-0">
            <Language />
          </div>
          <div className="shrink-0">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;