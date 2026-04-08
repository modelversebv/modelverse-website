import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Dropdown } from './dropdown'
import { DropdownLink } from './dropdownLink'
import { NavLink } from './navlink'

type NavBarProps = {
  home: boolean
  news: boolean
  cases: boolean
  platform: boolean
  services: boolean
  about: boolean
  layoutRef: React.RefObject<HTMLDivElement>
}

const LANGUAGES = [
  { code: 'nl-NL', label: 'Dutch', short: 'NL', flagCode: 'nl' },
  { code: 'en-US', label: 'English', short: 'EN', flagCode: 'gb' },
]
  cases = false,
  platform = false,
  services = false,
  about = false,
  layoutRef,
}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()

  const scrollToTop = () => {
    if (!home || !layoutRef) return

    const offset = -96

    if ((window as any).lenis) {
      ;(window as any).lenis.scrollTo(0, {
        offset,
      })
      return
    }

    // Native scroll (mobile or fallback)
    if (layoutRef.current) {
      layoutRef.current.scrollTo({
        top: 0 + offset,
        behavior: 'smooth',
      })
    }
  }

  // Toggling language
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const currentLang = LANGUAGES.find((lang) => lang.code === i18n.language)

  const LanguageToggler = (
    <div className="inline-flex flex-row items-center-safe justify-center-safe font-semibold">
      <span className={`fi fi-${currentLang?.flagCode} mr-2`} />
      <span className="md:hidden">{currentLang?.label}</span>
      <span className="hidden md:inline-block">{currentLang?.short} </span>
    </div>
  )

  return (
    <div
      className={`fixed top-0 right-0 left-0 flex flex-col gap-4 overflow-hidden border-b border-white/20 bg-black/10 p-4 text-white backdrop-blur-md transition-all duration-300 md:h-fit md:flex-row ${isOpen ? 'h-dvh' : 'h-16'} z-100 md:overflow-visible`}
    >
      <div className="flex shrink-0 flex-row items-center-safe justify-between md:container md:mx-auto md:w-full">
        <div
          className="flex cursor-pointer flex-row items-center-safe gap-2"
          onClick={() => {
            navigate('/')
            scrollToTop()
          }}
        >
          <img src="/icon.png" alt="Modelverse" className="size-8" />
          <span className="text-lg font-semibold">Modelverse</span>
          {/* <span className="text-xs text-red-500">{i18n.language}</span> */}
        </div>
        <div className="hidden flex-row items-center-safe gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold md:flex md:text-xs lg:gap-8 lg:text-base">
          <NavLink active={home} to="/">
            {t('navbar.home')}
          </NavLink>
          <Dropdown
            childrenClassname="w-57 left-0 pt-2"
            title="Solutions"
            active={platform || services}
          >
            <DropdownLink to="/platform" title="Platform" active={platform}>
              Risk & Compliance Management
            </DropdownLink>
            <DropdownLink
              to="/services"
              title="Consultancy Services"
              active={services}
            >
              Service Packages
            </DropdownLink>
          </Dropdown>
          <NavLink active={cases} to="/cases">
            {t('navbar.cases')}
          </NavLink>
          <NavLink active={news} to="/news">
            {t('navbar.news')}
          </NavLink>
          <NavLink active={about} to="/about">
            {t('navbar.about')}
          </NavLink>
        </div>
        <div className="hidden flex-row items-center gap-4 md:flex">
          <button
            className="cursor-pointer rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:text-xs lg:text-base"
            onClick={() => navigate('/contact')}
          >
            {t('navbar.contact')}
          </button>

          <Dropdown
            classname="bg-white/5 border border-white/10 rounded-full px-4 py-2 md:text-xs lg:text-base"
            childrenClassname="w-20 right-0"
            title={LanguageToggler}
          >
            {LANGUAGES.filter((lang) => lang.code !== i18n.language).map(
              (lang) => (
                <button
                  key={`desktop-${lang.code}`}
                  className="cursor-pointer px-4 py-2 transition-all duration-300 hover:bg-white/20"
                  onClick={() => changeLanguage(lang.code)}
                >
                  <span className={`fi fi-${lang.flagCode} mr-2`} />
                  <span className="font-semibold">{lang.short}</span>
                </button>
              )
            )}
          </Dropdown>
        </div>
        <div
          className="relative size-6 cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`absolute top-0 bottom-0 m-auto h-1 w-full rounded-full bg-white transition-all duration-200 ${!isOpen ? '-translate-y-1' : '-rotate-45'}`}
          />
          <div
            className={`absolute top-0 bottom-0 m-auto h-1 w-full rounded-full bg-white transition-all duration-200 ${!isOpen ? 'translate-y-1' : 'rotate-45'}`}
          />
        </div>
      </div>
      <div className="flex grow flex-col gap-4 overflow-scroll md:hidden">
        <div className="flex flex-col gap-4 border-t border-white/20 pt-4 font-semibold">
          <NavLink active={home} to="/">
            {t('navbar.home')}
          </NavLink>
          <Dropdown title="Solutions" active={platform || services}>
            <DropdownLink to="/platform" title="Platform" active={platform}>
              Risk & Compliance Management
            </DropdownLink>
            <DropdownLink to="/services" title="Services" active={services}>
              Service Packages
            </DropdownLink>
          </Dropdown>
          <NavLink active={cases} to="/cases">
            {t('navbar.cases')}
          </NavLink>
          <NavLink active={news} to="/news">
            {t('navbar.news')}
          </NavLink>
          <NavLink active={about} to="/about">
            {t('navbar.about')}
          </NavLink>
        </div>
        <div className="flex flex-col border-t border-white/20 pt-4">
          <button
            className="rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg"
            onClick={() => navigate('/contact')}
          >
            {t('navbar.contact')}
          </button>
        </div>
        <div className="flex flex-col border-t border-white/20 pt-4">
          <Dropdown title={LanguageToggler}>
            {LANGUAGES.filter((lang) => lang.code !== i18n.language).map(
              (lang) => (
                <button
                  key={`mobile-${lang.code}`}
                  className="ml-1 text-left text-white/90 hover:text-white"
                  onClick={() => changeLanguage(lang.code)}
                >
                  <span className={`fi fi-${lang.flagCode} mr-1`} />
                  {lang.label}
                </button>
              )
            )}
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
