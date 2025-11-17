import { useState } from 'react'

import { Card } from '@/components/app/misc/card'
import { NavLink } from '@/components/app/navigation/navlink'
import { BuildNumber } from '@/components/buildNumber'
import { Layout } from '@/components/layout'
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  FileCheck,
  Home,
  Link,
  Linkedin,
  Lock,
  Mail,
  Menu,
  Shield,
  Users,
} from 'lucide-react'

export function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: Shield,
      title: 'Comprehensive Risk Assessment',
      description:
        'Identify, analyze, and prioritize cyber risks across your entire organization with automated scanning and intelligent reporting.',
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description:
        'Stay compliant with ISO 27001 and other frameworks with automated tracking and evidence collection.',
    },
    {
      icon: AlertTriangle,
      title: 'Real-Time Threat Monitoring',
      description:
        'Continuous monitoring of your security posture with instant alerts for emerging threats and vulnerabilities.',
    },
    {
      icon: BarChart3,
      title: 'Executive Dashboards',
      description:
        'Clear, actionable insights for leadership with customizable dashboards and automated reporting.',
    },
    {
      icon: Lock,
      title: 'Policy Management',
      description:
        'Centralized policy creation, distribution, and acknowledgment tracking to ensure organizational compliance.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Seamless collaboration tools for security teams, with role-based access and workflow automation.',
    },
  ]

  const benefits = [
    'Reduce security incidents',
    'Save time on compliance reporting',
    'Get audit-ready in minutes, not weeks',
    'Scale security operations without hiring',
    'Unified view of all cyber risks',
    'Automated evidence collection',
  ]

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Roadmap', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  }

  return (
    <Layout>
      <div className="sticky top-0 z-50 w-full border-b bg-white py-4">
        <div className="mx-4 flex flex-col gap-4 md:container md:mx-auto md:flex-row md:items-center-safe md:justify-between md:px-4">
          <div className="flex flex-row items-center-safe justify-between">
            <img src="/icon.png" className="size-12 md:size-16" />
            <button
              className="cursor-pointer p-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="size-8 text-amber-500" />
            </button>
          </div>
          <div
            className={`flex-col gap-4 ${mobileMenuOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:items-center-safe md:justify-end-safe`}
          >
            <div className="h-px w-full bg-gray-300 md:hidden" />
            <div className="flex flex-col gap-2 md:mr-auto md:flex-row">
              <NavLink active>
                <Home className="size-6 text-amber-500" />
                <p>Home</p>
              </NavLink>
              <NavLink>
                <Link className="size-6 text-amber-500" />
                <p>Link</p>
              </NavLink>
              <NavLink>
                <Link className="size-6 text-amber-500" />
                <p>Link</p>
              </NavLink>
              <NavLink>
                <Link className="size-6 text-amber-500" />
                <p>Link</p>
              </NavLink>
            </div>
            <div className="h-px w-full bg-gray-300 md:h-12 md:w-px" />
            <div className="flex flex-col gap-2">
              <button className="rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white">
                Book a meeting
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10">
        <div className="bg-gradient-to-b from-transparent to-white">
          <div className="flex flex-col gap-8 px-4 py-16 md:container md:mx-auto lg:flex-row">
            <div className="flex flex-col gap-8 lg:basis-1/2 lg:justify-center-safe">
              <div className="flex flex-col gap-4">
                <div className="flex w-fit flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 px-4 py-2 font-semibold text-amber-500">
                  <Shield className="size-4" />
                  <p className="text-sm">Enterprise-Grade Security</p>
                </div>
                <h1 className="text-4xl">Modelverse</h1>
                <p className="text-lg">
                  Empowering organizations with up to 10,000 employees to
                  effectively manage cyber risks and regulatory compliance
                  through intelligent automation.
                </p>
              </div>
              <button className="rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white sm:w-fit">
                Request a Demo
              </button>
              <div className="flex items-center justify-center gap-4 sm:justify-start">
                <div className="flex basis-1/5 flex-col items-center-safe justify-center-safe">
                  <h1 className="text-2xl">10K+</h1>
                  <p className="text-sm text-wrap">Employees Supported</p>
                </div>
                <div className="h-12 w-px shrink-0 bg-gray-300" />
                <div className="flex basis-1/5 flex-col items-center-safe justify-center-safe">
                  <h1 className="text-2xl">99.9%+</h1>
                  <p className="text-sm text-wrap">Uptime SLA</p>
                </div>
                <div className="h-12 w-px shrink-0 bg-gray-300" />
                <div className="flex basis-1/5 flex-col items-center-safe justify-center-safe">
                  <h1 className="text-2xl">24/7</h1>
                  <p className="text-sm text-wrap">Support</p>
                </div>
              </div>
            </div>

            <div className="flex items-center-safe justify-center-safe lg:basis-1/2">
              <div className="aspect-video w-full rounded-lg bg-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-4 py-16 md:container md:mx-auto">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl">
            Everything You Need to Manage Cyber Security Risks
          </h1>
          <p className="text-lg">
            A complete platform designed for small to medium-sized organizations
            to take control of their information security.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500/10 to-teal-500/10">
                <feature.icon className="size-6 text-amber-500" />
              </div>
              <h3 className="mb-2 text-xl text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="flex flex-col gap-8 px-4 py-16 md:container md:mx-auto lg:flex-row">
          <div className="flex items-center-safe justify-center-safe lg:basis-1/2">
            <div className="aspect-video w-full rounded-lg bg-black" />
          </div>
          <div className="flex flex-col gap-8 lg:basis-1/2 lg:justify-center-safe">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl">We Secure. You Succeed!</h1>
              <p className="text-lg">
                Whether you're a 100-person startup or a 10,000-employee
                enterprise, Modelverse scales with your needs.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="size-6 text-green-500" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl">Testimonials</h1>
              <p className="text-lg">TO-DO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 bg-gradient-to-r from-green-500 to-teal-500 px-4 py-16 text-white sm:items-center-safe">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl">Ready to secure your future?</h1>
          <p className="text-lg">
            Join the many organizations that trust Modelverse to protect their
            digital assets today.
          </p>
        </div>
        <button className="rounded-full bg-white px-4 py-2 font-semibold sm:w-fit">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
            Request a Demo
          </div>
        </button>
      </div>

      <div className="bg-gray-900 text-white">
        <div className="flex flex-col gap-8 px-4 py-16 md:container md:mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
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
                  href="#"
                  className="flex size-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-gray-700"
                >
                  <Linkedin className="size-6" />
                </a>
                <a
                  href="#"
                  className="flex size-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-gray-700"
                >
                  <Mail className="size-6" />
                </a>
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
                © 2023 - 2025. Modelverse B.V. CoC - 89447476. (<BuildNumber />
                )
              </p>
              <p>All rights reserved.</p>
            </div>
            <div
              className="cursor-pointer text-sm"
              // onClick={() => onManagePrivacy(true)}
            >
              Manage Privacy Preferences
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
