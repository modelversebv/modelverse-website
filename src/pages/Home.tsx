import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  FileCheck,
  Lock,
  Shield,
  Users,
} from 'lucide-react'

const HomeHero = (
  <Hero className="lg:flex-row">
    <div className="flex flex-col gap-8 lg:basis-1/2 lg:justify-center-safe">
      <div className="flex flex-col gap-4">
        <div className="flex w-fit flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 px-4 py-2 font-semibold text-amber-500">
          <Shield className="size-4" />
          <p className="text-sm">Enterprise-Grade Security</p>
        </div>
        <h1 className="text-4xl">Modelverse</h1>
        <p className="text-lg">
          Empowering organizations with up to 10,000 employees to effectively
          manage cybersecurity risks and regulatory compliance through
          intelligent automation.
        </p>
      </div>
      <button className="rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white sm:w-fit">
        Request a Demo
      </button>
      <div className="flex items-center-safe justify-center-safe gap-4 sm:justify-start">
        <div className="flex basis-1/5 flex-col items-center-safe justify-center-safe">
          <h1 className="text-3xl whitespace-nowrap">10K+</h1>
          <p className="text-sm text-wrap">Employees Supported</p>
        </div>
        <div className="h-12 w-px shrink-0 bg-gray-300" />
        <div className="flex basis-1/5 flex-col items-center-safe justify-center-safe">
          <h1 className="text-3xl whitespace-nowrap">99.9%+</h1>
          <p className="text-sm text-wrap">Uptime SLA</p>
        </div>
        <div className="h-12 w-px shrink-0 bg-gray-300" />
        <div className="flex basis-1/5 flex-col items-center-safe justify-center-safe">
          <h1 className="text-3xl whitespace-nowrap">24/7</h1>
          <p className="text-sm text-wrap">Support</p>
        </div>
      </div>
    </div>

    <div className="flex items-center-safe justify-center-safe lg:basis-1/2">
      <div className="aspect-video w-full rounded-lg bg-black" />
    </div>
  </Hero>
)

export function HomePage() {
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

  return (
    <Layout home={true} hero={HomeHero}>
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
            <Card
              key={index}
              className="transition-all duration-300 hover:border-green-500 hover:shadow-lg"
            >
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
    </Layout>
  )
}
