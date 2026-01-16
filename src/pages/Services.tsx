import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Badge } from '@/components/ui/badge'
import {
  Award,
  Check,
  Eye,
  Map,
  Rocket,
  ScrollText,
  Shield,
} from 'lucide-react'

const ServicesHero = (
  <Hero className="items-center-safe justify-center-safe text-center md:max-w-4xl">
    <div className="flex w-fit flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-linear-to-r from-green-500/20 to-teal-500/20 px-3 py-1 font-semibold text-amber-500">
      <p className="text-sm">Our Services</p>
    </div>
    <h1 className="text-5xl sm:text-6xl">Security Services</h1>
    <p className="text-xl text-gray-600">
      Comprehensive security services designed to mature your organization's
      cybersecurity posture. Choose the packages you need and select the
      implementation tier that matches your pace and requirements.
    </p>
  </Hero>
)

export function ServicesPage() {
  const services = [
    {
      icon: Map,
      badge: 'SecStrat',
      title: 'Strategy',
      description: 'Build a solid foundation for your security program',
      points: [
        'Understanding your cyber risks',
        'Assess your current security posture',
        'Articulate your investment opportunities',
      ],
    },
    {
      icon: Award,
      badge: 'SecCert',
      title: 'Certification',
      description: 'Achieve and maintain compliance certifications',
      points: [
        'Get a head start with our quality libraries',
        'Supports for all certification frameworks',
        'Benefit from innovative automation',
      ],
    },
    {
      icon: ScrollText,
      badge: 'SecGov',
      title: 'Governance',
      description: 'Establish clear accountability and risk ownership',
      points: [
        'Define roles and responsibilities',
        'Implement effective decision-making processes',
        'Align security with business objectives',
      ],
    },
    {
      icon: Rocket,
      badge: 'SecProg',
      title: 'Programme',
      description: 'Drive organization-wide security adoptation',
      points: [
        'Leverage executive support',
        'Embed security practices',
        'Promote a strong security culture',
      ],
    },
    {
      icon: Eye,
      badge: 'SecOps',
      title: 'Operations',
      description: 'Proactively prevent and detect security incidents',
      points: [
        'Monitor threats in real-time',
        'Detect anomalies and potential breaches',
        'Respond to incidents quickly and effectively',
      ],
    },
    {
      icon: Shield,
      badge: 'SecRes',
      title: 'Resilience',
      description: 'Prepare for and respond to security incidents',
      points: [
        'Prepare for potential incidents',
        'Minimise fallout from attacks',
        'Maintain business continuity',
      ],
    },
  ]

  // const packages = [
  //   {
  //     title: 'Compliance Ready',
  //     description: 'Perfect for organizations wanting certification',
  //     badges: ['SecStrat', 'SecCert'],
  //     goal: 'Build your foundation and achieve certification',
  //   },
  //   {
  //     title: 'Security Governance',
  //     description: 'Begin serious about securing your organization',
  //     badges: ['SecStrat', 'SecGov', 'SecProg'],
  //     goal: 'Build your foundation and achieve certification',
  //   },
  //   {
  //     title: 'Complete Security Program',
  //     description: 'End-to-end security transformation',
  //     badges: ['All 6 packages'],
  //     goal: 'Full journey from strategy to resilience',
  //   },
  // ]

  return (
    <Layout services={true} hero={ServicesHero}>
      {/* Metadata */}
      <title>Modelverse Services</title>
      <meta
        name="description"
        content="View how leading enterprises reduced audit time and achieved 100% compliance using the Modelverse Risk & Compliance SaaS platform."
      />

      {/* Content */}
      <div className="bg-gray-50">
        <div className="flex flex-col items-center-safe gap-8 px-4 py-16 md:container md:mx-auto">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
            <h1 className="text-4xl sm:text-5xl">Your Security Journey</h1>
            <p className="text-xl text-gray-600">
              Our packages follow a logical progression to build a comprehensive
              security program. Start where you need and scale as your
              organization matures.
            </p>
          </div>

          <div className="flex max-w-sm flex-col gap-4 lg:max-w-4xl lg:flex-row lg:flex-wrap lg:justify-center-safe 2xl:max-w-none">
            {services.map((value, index) => (
              <div className="flex flex-row gap-4 lg:max-w-3xs lg:flex-col 2xl:max-w-59">
                <div className="flex flex-col items-center-safe gap-4 pt-8 lg:translate-x-30 lg:flex-row lg:pt-0 2xl:translate-x-28">
                  <div className="size-4 shrink-0 rounded-full bg-green-500" />
                  {index != services.length - 1 && (
                    <div
                      className={`w-0.5 grow bg-gray-300 lg:h-0.5 ${index == 2 && 'lg:hidden 2xl:block'}`}
                    />
                  )}
                </div>
                <Card className="w-full grow gap-4 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-lg/20">
                  <div className="flex flex-row gap-4 lg:flex-col lg:items-center-safe">
                    <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-linear-to-r from-green-500/10 to-teal-500/10 lg:rounded-full">
                      <value.icon className="size-6 text-amber-500" />
                    </div>
                    <div className="flex flex-col gap-2 lg:items-center-safe">
                      <Badge className="">
                        {index + 1}. {value.badge}
                      </Badge>
                      <h3 className="text-xl text-gray-900">{value.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                  <div className="flex flex-col  gap-2">
                    {value.points.map((point) => (
                      <div className="flex flex-row gap-2">
                        <Check className="size-6 shrink-0 text-green-500" />
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA (Call to action) */}
      <div className="flex flex-col gap-8 bg-linear-to-r from-green-500 to-teal-500 px-4 py-16 text-white sm:items-center-safe">
        <div className="flex flex-col gap-4 text-center md:container md:mx-auto">
          <h1 className="text-4xl sm:text-5xl">
            Ready to Start Your Security Journey?
          </h1>
          <p className="text-xl">
            Our team will help you select the right packages and tier for your
            organization's unique needs and maturity level.
          </p>
        </div>
        <button
          className="cursor-pointer rounded-full bg-white px-4 py-2 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/50 sm:w-fit"
          onClick={() =>
            (window.location.href =
              'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
          }
        >
          <div className="bg-linear-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
            Schedule Consultation
          </div>
        </button>
      </div>
    </Layout>
  )
}
