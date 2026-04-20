<<<<<<< HEAD:src/components/footer/footer.tsx
'use client'

import { useLocale } from '@/providers/IntlProvider'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { BuildNumber } from './build-number'

type FooterProps = {
  onManagePrivacy: (value: boolean) => void
}

export function Footer({ onManagePrivacy }: FooterProps) {
  const currentDate = new Date()
  const t = useTranslations()
  const { locale } = useLocale()

  const prefix = locale === 'en' ? '' : `/${locale}`

  const footerLinks = {
    [t('footer.sections.company.title')]: [
      { name: t('footer.sections.company.about'), href: `${prefix}/about` },
      { name: t('footer.sections.company.blog'), href: `${prefix}/news` },
      { name: t('footer.sections.company.contact'), href: `${prefix}/contact` },
    ],
    [t('footer.sections.legal.title')]: [
      {
        name: t('footer.sections.legal.privacy_policy'),
        href: `${prefix}/legal/privacy_policy`,
      },
      {
        name: t('footer.sections.legal.terms_of_service'),
        href: `${prefix}/legal/terms_of_service`,
      },
      {
        name: t('footer.sections.legal.cookie_policy'),
        href: `${prefix}/legal/cookie_policy`,
      },
    ],
  }

  return (
    <div className="shrink-0 bg-slate-950 text-white">
      <div className="flex flex-col gap-8 px-4 py-8 md:container md:mx-auto md:px-8 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center-safe gap-2 text-lg">
              <img src="/icon.png" alt="Modelverse" className="size-8" />
              <span>Modelverse B.V.</span>
            </div>
            <p className="text-lime-500 italic">{t('footer.tagline')}</p>
            <p className="text-sm text-gray-400">{t('footer.description')}</p>

            <div className="flex flex-row gap-4 text-white">
              <a
                href="https://www.linkedin.com/company/modelverse/"
                className="flex w-fit items-center justify-center rounded-xl bg-slate-800 p-2 transition-colors duration-300 hover:bg-slate-700"
              >
                <Linkedin className="size-6" />
              </a>
              <Link
                href={`${prefix}/contact`}
                className="flex w-fit items-center justify-center rounded-xl bg-slate-800 p-2 transition-colors duration-300 hover:bg-slate-700"
              >
                <Mail className="size-6" />
              </Link>
              <a
                href="https://github.com/modelversebv/modelverse-website/?tab=readme-ov-file#readme"
                className="flex w-fit items-center justify-center rounded-xl bg-slate-800 p-2 transition-colors duration-300 hover:bg-slate-700"
              >
                <Github className="size-6" />
              </a>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-8 md:ml-auto md:flex-row md:items-center-safe">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-2">
                <p className="font-bold">{section}</p>
                <ul className="text-gray-300">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="transition-all duration-300 hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px w-full shrink-0 bg-gray-800" />
        <div className="flex flex-col gap-4">
          <h4 className="text-sm text-gray-400">
            {t('footer.security_compliance')}
          </h4>
          <div className="flex flex-row flex-wrap items-end gap-2 py-2">
            <img
              src="/images/badges/iso-27001-badge-resized.png"
              alt="ISO 27001 Certification"
              className="max-h-32 rounded-md border-2 border-white"
            />
            <div className="flex flex-col justify-center gap-2">
              <img
                src="/images/badges/ms-badge.png"
                alt="Microsoft for Startups partnership badge"
                className="max-h-20"
              />
              <img
                src="/images/badges/embed-badge-websitetest.svg"
                alt="Email Test: 100%"
                className="max-h-9"
              />
            </div>
            <img
              src="/images/badges/embed-badge-emailtest.svg"
              alt="Email Test: 100%"
              className="max-h-9"
            />
          </div>
        </div>
        <div className="h-px w-full shrink-0 bg-gray-800" />
        <div className="flex flex-col justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>
            © {currentDate.getFullYear()}. Modelverse B.V.{' '}
            {t('footer.copyright')}
            <br />
            CoC - 89447476
            <br />
            VAT - NL864985800B01
            <br />
            build - (<BuildNumber />)
          </p>

          <div className="flex flex-col text-right">
            <p
              className="cursor-pointer hover:text-white"
              onClick={() => onManagePrivacy(true)}
            >
              {t('footer.privacy')}
            </p>
            <Link
              href="https://modelverse-1.statuspage.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {t('footer.status')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
=======
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import emailBadge from '@/assets/badges/email-test-badge.png'
import isoBadge from '@/assets/badges/iso-27001-badge-resized.png'
import msBadge from '@/assets/badges/ms-badge.png'
import { BuildNumber } from '@/components/buildNumber'
import { Github, Linkedin, Mail } from 'lucide-react'

type FooterProps = {
  onManagePrivacy: (value: boolean) => void
}

export function Footer({ onManagePrivacy }: FooterProps) {
  const currentDate = new Date()
  const { t } = useTranslation()

  const footerLinks = {
    [t('footer.sections.company.title')]: [
      { name: t('footer.sections.company.about'), href: '/about' },
      { name: t('footer.sections.company.blog'), href: '/news' },
      { name: t('footer.sections.company.contact'), href: '/contact' },
    ],
    [t('footer.sections.legal.title')]: [
      {
        name: t('footer.sections.legal.privacy_policy'),
        href: '/legal/privacy_policy',
      },
      {
        name: t('footer.sections.legal.terms_of_service'),
        href: '/legal/terms_of_service',
      },
      {
        name: t('footer.sections.legal.cookie_policy'),
        href: '/legal/cookie_policy',
      },
    ],
  }

  return (
    <div className="shrink-0 bg-slate-950 text-white">
      <div className="flex flex-col gap-8 px-4 py-8 md:container md:mx-auto md:px-8 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center-safe gap-2 text-lg">
              <img src="/icon.png" alt="Modelverse" className="size-8" />
              <span>Modelverse B.V.</span>
            </div>
            <p className="text-lime-500 italic">{t('footer.tagline')}</p>
            <p className="text-sm text-gray-400">{t('footer.description')}</p>

            <div className="flex flex-row gap-4 text-white">
              <a
                href="https://www.linkedin.com/company/modelverse/"
                className="flex w-fit items-center justify-center rounded-xl bg-slate-800 p-2 transition-colors duration-300 hover:bg-slate-700"
              >
                <Linkedin className="size-6" />
              </a>
              <Link
                to="/contact"
                className="flex w-fit items-center justify-center rounded-xl bg-slate-800 p-2 transition-colors duration-300 hover:bg-slate-700"
              >
                <Mail className="size-6" />
              </Link>
              <a
                href="https://github.com/modelversebv/modelverse-website/?tab=readme-ov-file#readme"
                className="flex w-fit items-center justify-center rounded-xl bg-slate-800 p-2 transition-colors duration-300 hover:bg-slate-700"
              >
                <Github className="size-6" />
              </a>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-8 md:ml-auto md:flex-row md:items-center-safe">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-2">
                <h1 className="font-bold">{section}</h1>
                <ul className="text-gray-300">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="transition-all duration-300 hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px w-full shrink-0 bg-gray-800" />
        <div className="flex flex-col gap-4">
          <h4 className="text-sm text-gray-400">
            {t('footer.security_compliance')}
          </h4>
          <div className="flex flex-row gap-2 py-2">
            <img
              src={isoBadge}
              alt="ISO 27001 Certification"
              className="max-h-32"
            />
            <div className="flex flex-col justify-center gap-2">
              <img
                src={emailBadge}
                alt="Email Test: 100%"
                className="max-h-9"
              />
              <img
                src={msBadge}
                alt="Microsoft for Startups partnership badge"
                className="max-h-20"
              />
            </div>
          </div>
        </div>
        <div className="h-px w-full shrink-0 bg-gray-800" />
        <div className="flex flex-col justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>
            © {currentDate.getFullYear()}. Modelverse B.V.{' '}
            {t('footer.copyright')}
            <br />
            CoC - 89447476
            <br />
            VAT - NL864985800B01
            <br />
            build - (<BuildNumber />)
          </p>

          <p
            className="cursor-pointer hover:text-white"
            onClick={() => onManagePrivacy(true)}
          >
            {t('footer.privacy')}
          </p>
        </div>
      </div>
    </div>
  )
}
>>>>>>> 1d2c16e ((fix): badges footer):src/components/app/footer/footer.tsx
