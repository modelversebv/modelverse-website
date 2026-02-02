import { Link } from 'react-router-dom'

import { BuildNumber } from '@/components/buildNumber'
import { Github, Linkedin, Mail } from 'lucide-react'

type FooterProps = {
  onManagePrivacy: (value: boolean) => void
}

export function Footer({ onManagePrivacy }: FooterProps) {
  const currentDate = new Date()

  const footerLinks = {
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/news' },
      { name: 'Contact', href: '/contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/legal/privacy_policy' },
      { name: 'Terms of Service', href: '/legal/terms_of_service' },
      { name: 'Cookie Policy', href: '/legal/cookie_policy' },
      // { name: 'GDPR', href: '' },
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
            <p className="text-lime-500 italic">We secure. You Succeed!</p>
            <p className="text-sm text-gray-400">
              Empowering organizations to manage risks and compliance with
              confidence.
            </p>

            <div className="flex flex-row gap-4 text-white">
              <a
                href="https://www.linkedin.com/company/modelverse/"
                className="flex size-10 items-center justify-center rounded-lg bg-gray-800 transition-colors duration-300 hover:bg-gray-700"
              >
                <Linkedin className="size-6" />
              </a>
              <Link
                to="/contact"
                className="flex size-10 items-center justify-center rounded-lg bg-gray-800 transition-colors duration-300 hover:bg-gray-700"
              >
                <Mail className="size-6" />
              </Link>
              <a
                href="https://github.com/modelversebv/modelverse-website/?tab=readme-ov-file#readme"
                className="flex size-10 items-center justify-center rounded-lg bg-gray-800 transition-colors duration-300 hover:bg-gray-700"
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
          <h4 className="text-sm text-gray-400">Security & Compliance</h4>
          <div className="flex flex-wrap gap-2">
            <img
              src="/images/badges/email-test-badge.png"
              alt="Email Test: 100%"
              className="w-32"
            />
          </div>
        </div>
        <div className="h-px w-full shrink-0 bg-gray-800" />
        <div className="flex flex-col justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>
            © {currentDate.getFullYear()}. Modelverse B.V. All rights reserved.
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
            Manage Privacy Preferences
          </p>
        </div>
      </div>
    </div>
  )
}
