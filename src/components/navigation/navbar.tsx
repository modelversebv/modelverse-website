'use client'

import { useState } from 'react'

import { useLocale } from '@/providers/IntlProvider'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

import { Dropdown } from './dropdown'
import { DropdownLink } from './dropdown-link'
import { NavLink } from './nav-link'

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
  { code: 'nl', label: 'Dutch', short: 'NL', flagCode: 'nl' },
  { code: 'en', label: 'English', short: 'EN', flagCode: 'gb' },
  { code: 'es', label: 'Spanish', short: 'ES', flagCode: 'es' },
] as const

export function NavBar({
  home = false,
  news = false,
  cases = false,
  platform = false,
  services = false,
  about = false,
  layoutRef,
}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations()
  const { locale } = useLocale()

  const prefix = locale === 'en' ? '' : `/${locale}`

  const scrollToTop = () => {
    if (!home || !layoutRef) return

    const offset = -96

    if ((window as any).lenis) {
      ;(window as any).lenis.scrollTo(0, { offset })
      return
    }

    if (layoutRef.current) {
      layoutRef.current.scrollTo({ top: 0 + offset, behavior: 'smooth' })
    }
  }

  const changeLanguage = (lang: (typeof LANGUAGES)[number]['code']) => {
    const nonEnCodes = LANGUAGES.map((l) => l.code).filter((c) => c !== 'en')
    const localePrefix = new RegExp(`^/(${nonEnCodes.join('|')})(?=/|$)`)
    const basePath = pathname.replace(localePrefix, '') || '/'

    router.push(lang === 'en' ? basePath : `/${lang}${basePath}`)
  }

  const currentLang = LANGUAGES.find((lang) => lang.code === locale)

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
            router.push(prefix || '/')
            scrollToTop()
          }}
        >
          <img src="/icon.png" alt="Modelverse" className="size-8" />
          <span className="text-lg font-semibold">Modelverse</span>
        </div>
        <div className="hidden flex-row items-center-safe gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold md:flex md:text-xs lg:gap-8 lg:text-base">
          <NavLink active={home} href={prefix || '/'}>
            {t('navbar.home')}
          </NavLink>
          <Dropdown
            childrenClassname="w-57 left-0 pt-2"
            title={t('navbar.solutions')}
            active={platform || services}
          >
            <DropdownLink
              href={`${prefix}/platform`}
              title={t('navbar.dropdown.platform.title')}
              active={platform}
            >
              {t('navbar.dropdown.platform.description')}
            </DropdownLink>
            <DropdownLink
              href={`${prefix}/services`}
              title={t('navbar.dropdown.services.title')}
              active={services}
            >
              {t('navbar.dropdown.services.description')}
            </DropdownLink>
          </Dropdown>
          <NavLink active={cases} href={`${prefix}/cases`}>
            {t('navbar.cases')}
          </NavLink>
          <NavLink active={news} href={`${prefix}/news`}>
            {t('navbar.news')}
          </NavLink>
          <NavLink active={about} href={`${prefix}/about`}>
            {t('navbar.about')}
          </NavLink>
        </div>
        <div className="hidden flex-row items-center gap-4 md:flex">
          <button
            className="cursor-pointer rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:text-xs lg:text-base"
            onClick={() => router.push(`${prefix}/contact`)}
          >
            {t('navbar.contact')}
          </button>

          <Dropdown
            classname="bg-white/5 border border-white/10 rounded-full px-4 py-2 md:text-xs lg:text-base"
            childrenClassname="w-20 right-0"
            title={LanguageToggler}
          >
            {LANGUAGES.filter((lang) => lang.code !== locale).map((lang) => (
              <button
                key={`desktop-${lang.code}`}
                className="cursor-pointer px-4 py-2 transition-all duration-300 hover:bg-white/20"
                onClick={() => changeLanguage(lang.code)}
              >
                <span className={`fi fi-${lang.flagCode} mr-2`} />
                <span className="font-semibold">{lang.short}</span>
              </button>
            ))}
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
          <NavLink active={home} href={prefix || '/'}>
            {t('navbar.home')}
          </NavLink>
          <Dropdown title={t('navbar.solutions')} active={platform || services}>
            <DropdownLink
              href={`${prefix}/platform`}
              title={t('navbar.dropdown.platform.title')}
              active={platform}
            >
              {t('navbar.dropdown.platform.description')}
            </DropdownLink>
            <DropdownLink
              href={`${prefix}/services`}
              title={t('navbar.dropdown.services.title_mobile')}
              active={services}
            >
              {t('navbar.dropdown.services.description')}
            </DropdownLink>
          </Dropdown>
          <NavLink active={cases} href={`${prefix}/cases`}>
            {t('navbar.cases')}
          </NavLink>
          <NavLink active={news} href={`${prefix}/news`}>
            {t('navbar.news')}
          </NavLink>
          <NavLink active={about} href={`${prefix}/about`}>
            {t('navbar.about')}
          </NavLink>
        </div>
        <div className="flex flex-col border-t border-white/20 pt-4">
          <button
            className="rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg"
            onClick={() => router.push(`${prefix}/contact`)}
          >
            {t('navbar.contact')}
          </button>
        </div>
        <div className="flex flex-col border-t border-white/20 pt-4">
          <Dropdown title={LanguageToggler}>
            {LANGUAGES.filter((lang) => lang.code !== locale).map((lang) => (
              <button
                key={`mobile-${lang.code}`}
                className="ml-1 text-left text-white/90 hover:text-white"
                onClick={() => changeLanguage(lang.code)}
              >
                <span className={`fi fi-${lang.flagCode} mr-1`} />
                {lang.label}
              </button>
            ))}
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
