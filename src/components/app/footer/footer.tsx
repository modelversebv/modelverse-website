import { Link } from 'react-router-dom'

import { BuildNumber } from '@/components/buildNumber'
import { Linkedin, Mail, Shield } from 'lucide-react'

type FooterProps = {
  onManagePrivacy: (value: boolean) => void
}

export function Footer({ onManagePrivacy }: FooterProps) {
  const footerLinks = {
    // Product: [
    //   { name: 'Features', href: '#' },
    //   { name: 'Pricing', href: '#' },
    //   { name: 'Security', href: '#' },
    //   { name: 'Roadmap', href: '#' },
    // ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/news' },
      // { name: 'Careers', href: '#' },
      { name: 'Contact', href: '/contact' },
    ],
    // Resources: [
    //   { name: 'Documentation', href: '#' },
    //   { name: 'Help Center', href: '#' },
    //   { name: 'API Reference', href: '#' },
    //   { name: 'Compliance', href: '#' },
    // ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy_policy' },
      { name: 'Terms of Service', href: '/terms_of_service' },
      { name: 'Cookie Policy', href: '/cookie_policy' },
      // { name: 'GDPR', href: '' },
    ],
  }

  return (
    <div className="shrink-0 bg-gray-900 text-white">
      <div className="flex flex-col gap-8 px-4 py-8 md:container md:mx-auto md:px-8 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center-safe gap-2 text-lg">
              <Shield className="size-8 text-amber-500" />
              <span>Modelverse B.V.</span>
            </div>

            <p className="text-sm text-gray-400">
              Empowering organizations to manage cyber risks and regulatory
              compliance with confidence.
            </p>

            <div className="flex flex-row gap-4 text-amber-500">
              <a
                href="https://www.linkedin.com/company/modelverse/"
                className="flex size-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-gray-700"
              >
                <Linkedin className="size-6" />
              </a>
              <Link
                to="/contact"
                className="flex size-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-gray-700"
              >
                <Mail className="size-6" />
              </Link>
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
        <div className="flex flex-col justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>
            © 2025. Modelverse B.V. All rights reserved. (<BuildNumber />)
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
