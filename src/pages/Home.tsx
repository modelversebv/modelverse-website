import YoutubeEmbed from '@/components/app/embed/youtubeEmbed'
import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import {
  Brain,
  Check,
  CheckCircle2,
  Compass,
  Lock,
  Rocket,
  Search,
  Shield,
} from 'lucide-react'

const HomeHero = (
  <Hero className="lg:flex-row">
    <div className="flex flex-col gap-8 lg:basis-1/2 lg:justify-center-safe">
      <div className="flex flex-col gap-4">
        <div className="flex w-fit flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 px-4 py-2 font-semibold text-amber-500">
          <Shield className="size-4" />
          <p className="text-sm">Enterprise-Grade Security</p>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl">Modelverse</h1>
        <p className="max-w-xl text-xl text-gray-600">
          Empowering organizations to effectively manage Risks and Compliance
          through intelligent automation.
        </p>
      </div>
      <button
        className="cursor-pointer rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/50 sm:w-fit"
        onClick={() =>
          (window.location.href =
            'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
        }
      >
        Request a Demo
      </button>
      <div className="flex items-center-safe justify-center-safe gap-4 sm:justify-start">
        <div className="flex basis-1/5 flex-col items-center-safe justify-center-safe">
          <h1 className="text-3xl whitespace-nowrap">6</h1>
          <p className="text-sm text-wrap text-gray-600">Risk Domains</p>
        </div>
        <div className="h-12 w-px shrink-0 bg-gray-300" />
        <div className="flex basis-1/5 flex-col items-center-safe justify-center-safe">
          <h1 className="text-3xl whitespace-nowrap">30+</h1>
          <p className="text-sm text-wrap text-gray-600">Standards</p>
        </div>
        <div className="h-12 w-px shrink-0 bg-gray-300" />
        <div className="flex basis-1/5 flex-col items-center-safe justify-center-safe">
          <h1 className="text-3xl whitespace-nowrap">7</h1>
          <p className="text-sm text-wrap text-gray-600">Country Footprints</p>
        </div>
      </div>
    </div>

    <div className="relative flex items-center-safe justify-center-safe lg:basis-1/2">
      <img
        src="/images/misc/modelverse_platform.png"
        alt=""
        className="aspect-video rounded-lg border shadow-lg"
      />
    </div>
  </Hero>
)

export function HomePage() {
  const features = [
    {
      icon: Compass,
      title: 'Strategic Risk Management',
      description:
        'We help you manage risks — and opportunities — across three levels: organization, assets, and findings. This layered approach brings clarity and efficiency. Say goodbye to bloated risk registers with hundreds of vague entries.',
    },
    {
      icon: Brain,
      title: 'Real-World Capabilities',
      description:
        'Our proprietary Capability Models reflect modern IT and business realities. They focus on what actually reduces risk, giving you a clear view of how well your organization is equipped to manage it.',
    },
    {
      icon: Rocket,
      title: 'Actionable Roadmaps',
      description:
        'We generate prioritized backlogs based on Capability scores, so you know exactly where to invest in mitigation. Each item links directly to a Capability, enabling you to track progress and confidently plan ahead.',
    },
    {
      icon: Lock,
      title: 'Smart Compliance Automation',
      description:
        'We generate tailored Policies, Procedures, and Controls using curated libraries built on real-world experience. Many Controls are automated, and our platform manages the full plan-do-check-act cycle — keeping you continuously audit-ready.',
    },
    {
      icon: Search,
      title: 'Integrated Audit Intelligence',
      description:
        'Audits and pen tests are essential for ongoing risk mitigation. We capture findings and link them directly to your compliance framework, so they roll up into organization-level risks with full traceability.',
    },
    {
      icon: Check,
      title: 'Effortless Multi-Standard Assurance',
      description:
        "Whether you're navigating regulations or meeting client demands, we streamline compliance across multiple standards. Our automated mapping links your Policies, Procedures, and Controls to any framework — and generates the reports you need.",
    },
  ]

  const benefits = [
    'Scale your risk management team without hiring',
    'Reduce security incidents',
    'Be continuously audit-ready',
    'Save time on compliance reporting',
    'Single pane of glass',
    'Control automation',
    'Interfacing to your systems',
  ]

  const testimonials = [
    {
      quote:
        'Modelverse has transformed our approach to cybersecurity risk management.',
      name: 'David Warnink',
      role: 'CIO',
      company: 'Fellowmind',
      video: 'XEPf418PJFU',
    },
    {
      quote: 'Reshma and the Team has helped us close our security gaps.',
      name: 'Christiaan Rood',
      role: 'CEO',
      company: 'LeydenJar Technologies',
      video: 'KO0yNnQ8zbQ',
    },
  ]

  return (
    <Layout home={true} hero={HomeHero}>
      {/* Features */}
      <div className="flex flex-col gap-8 px-4 py-16 md:container md:mx-auto">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
          <h1 className="text-4xl sm:text-5xl">
            Everything You Need to Manage Risks and Compliance
          </h1>
          {/* <p className="text-xl text-gray-600">
            A complete platform designed for small to medium-sized organizations
            to take control of their information security.
          </p> */}
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
              <h3 className="mb-2 text-xl">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefirts */}
      <div className="bg-gray-50">
        <div className="flex flex-col gap-8 px-4 py-16 md:container md:mx-auto lg:flex-row">
          <div className="flex items-center-safe justify-center-safe lg:basis-1/2">
            {/* <img
              src="/images/misc/organization-unsplash.jpg"
              alt=""
              className="aspect-video rounded-lg border object-cover shadow-lg"
            /> */}
            <img
              src="/images/team/Team minus Michel - web.jpg"
              alt=""
              className="aspect-video rounded-lg border object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-8 lg:basis-1/2 lg:justify-center-safe">
            <div className="flex max-w-4xl flex-col gap-4">
              <h1 className="text-4xl sm:text-5xl">We Secure. You Succeed!</h1>
              <p className="text-xl text-gray-600">
                Whether you're a 10-person startup or a 10,000-employee
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
            {/* <div className="flex flex-col gap-2">
              <p className="text-lg text-gray-600 italic">
                "Modelverse is truly a gamechanger. It is a robust platform
                supporting my clients."
              </p>
              <div className="flex flex-col">
                <p>Chris Hazewinkel</p>
                <p className="text-gray-600">CIO, NewForrest BV</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="flex flex-col gap-8 px-4 py-16 md:container md:mx-auto">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
          <h1 className="text-4xl sm:text-5xl">Hear From Our Customers</h1>
          <p className="text-xl text-gray-600">
            See how leaders are transforming their organizations with Modelverse
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              className="flex flex-col rounded-lg border bg-white"
              key={index}
            >
              <YoutubeEmbed
                videoId={testimonial.video}
                className="rounded-t-lg"
              />
              <div className="flex grow flex-col justify-between gap-4 p-4">
                <p className="text-lg text-gray-600">"{testimonial.quote}"</p>
                <div className="flex flex-col">
                  <p>{testimonial.name}</p>
                  <p className="text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA (Call to action) */}
      <div className="flex flex-col gap-8 bg-gradient-to-r from-green-500 to-teal-500 px-4 py-16 text-white sm:items-center-safe">
        <div className="flex flex-col gap-4 text-center md:container md:mx-auto">
          <h1 className="text-4xl sm:text-5xl">Ready to secure your future?</h1>
          <p className="text-xl">
            Join the organizations that trust Modelverse to manage their risks
            today.
          </p>
        </div>
        <button
          className="cursor-pointer rounded-full bg-white px-4 py-2 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/50 sm:w-fit"
          onClick={() =>
            (window.location.href =
              'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
          }
        >
          <div className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
            Request a Demo
          </div>
        </button>
      </div>
    </Layout>
  )
}
