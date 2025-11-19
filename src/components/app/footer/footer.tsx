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
    <div className="bg-gray-900 text-white">
      <div className="flex flex-col gap-8 px-4 py-16 md:container md:mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center-safe gap-2 text-lg">
              <Shield className="size-8 text-amber-500" />
              <span>Modelverse B.V.</span>
            </div>
            <p className="text-sm">
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

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-2">
              <h1 className="font-bold">{section}</h1>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>{link.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px w-full shrink-0 bg-gray-300" />
        <div className="flex flex-col gap-4 text-center">
          <div className="flex flex-col gap-2 text-sm">
            <p>
              © 2023 - 2025. Modelverse B.V. CoC - 89447476. (<BuildNumber />)
            </p>
            <p>All rights reserved.</p>
          </div>
          <div
            className="cursor-pointer text-sm"
            onClick={() => onManagePrivacy(true)}
          >
            Manage Privacy Preferences
          </div>
        </div>
      </div>
    </div>
  )
}
