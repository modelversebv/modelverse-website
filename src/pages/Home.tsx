import YoutubeEmbed from '@/components/app/embed/youtubeEmbed'
import { Card } from '@/components/app/misc/card'
import { Layout } from '@/components/layout'
import {
  ArrowRight,
  Brain,
  ChartNoAxesCombined,
  Check,
  CheckCircle2,
  Compass,
  Lock,
  Rocket,
  Search,
  Sparkles,
} from 'lucide-react'

// import { motion } from 'motion/react'

export function HomePage() {
  // const FADE_IN_VARIANTS = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.6, ease: 'easeOut' },
  //   },
  // } as const

  // const VIEWPORT_CONFIG = { once: true, amount: 0.2 }

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
    <Layout home={true}>
      {/* Metadata */}
      <title>Modelverse | Cybersecurity GRC Solutions</title>
      <meta
        name="description"
        content="Modelverse automates GRC and risk scoring, providing real-time compliance intelligence for leading enterprises in various industries."
      />

      {/* Landing Banner */}
      <div className="relative flex min-h-screen flex-col justify-center-safe p-4 text-white">
        {/* Background and Overlay */}
        <div className="absolute inset-0 bg-[url(/background-9-16.jpg)] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 via-slate-900/30 to-slate-900" />

        {/* Content */}
        <div className="relative z-1 flex flex-col gap-16 md:container md:mx-auto lg:flex-row">
          <div className="flex flex-col gap-8 lg:basis-1/2">
            {/* Badge */}
            <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
              <ChartNoAxesCombined className="size-5" />
              <p className="text-sm">Scalable Security</p>
            </div>

            {/* Title */}
            <div className="flex flex-col text-5xl drop-shadow-lg sm:text-6xl lg:text-7xl">
              <span>Modelverse</span>
              <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                Information Risk
              </span>
            </div>

            {/* Description */}
            <p className="text-xl text-white/90 drop-shadow-lg">
              Empowering organizations to effectively manage Risks and
              Compliance through intelligent automation.
            </p>

            {/* CTA Button */}
            <button
              className="group flex cursor-pointer flex-row gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
              onClick={() =>
                (window.location.href =
                  'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
              }
            >
              Request a Demo
              <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
            </button>

            {/* Cards */}
            <div className="flex flex-row flex-wrap gap-4">
              <Card>
                <h1 className="text-3xl whitespace-nowrap">6</h1>
                <p className="w-full text-sm text-white/90">Risk Domains</p>
              </Card>
              <Card>
                <h1 className="text-3xl whitespace-nowrap">30+</h1>
                <p className="w-full text-sm text-white/90">Standards</p>
              </Card>
              <Card>
                <h1 className="text-3xl whitespace-nowrap">7</h1>
                <p className="w-full text-sm text-white/90">
                  Country Footprints
                </p>
              </Card>
            </div>
          </div>
          <div className="flex items-center-safe justify-center-safe lg:basis-1/2">
            <Card className="hidden p-2 hover:bg-white/10 lg:flex">
              <img
                src="/images/misc/modelverse_platform.png"
                alt="Modelverse Platform"
                className="rounded-xl"
              />
            </Card>
          </div>
        </div>

        {/* Bouncing Icon bottom */}
        <div className="absolute right-0 bottom-4 left-0 flex animate-bounce justify-center-safe">
          <div className="flex flex-col items-center-safe justify-center-safe gap-2">
            <Sparkles className="size-6 text-lime-500" />
            <span className="text-sm text-white/70">Explore More</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900" />
        <div className="relative z-1 flex flex-col gap-64 px-4 pt-16 pb-32 text-white md:container md:mx-auto">
          {/* Features */}
          <div className="flex flex-col gap-8 text-white md:container md:mx-auto">
            <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
              <h1 className="text-4xl sm:text-5xl">
                Everything You Need to Manage Risks and Compliance
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group relative shadow-md transition-all duration-300 hover:border-lime-500/70 hover:shadow-lime-500/70"
                >
                  <div className="absolute inset-0 rounded-lg bg-linear-to-br group-hover:from-lime-500/10 group-hover:to-teal-500/10" />
                  <div className="relative z-1 flex flex-col gap-2">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-lime-500 to-teal-500">
                      <feature.icon className="size-6" />
                    </div>
                    <h3 className="mb-2 text-xl">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-col gap-8 text-white md:container md:mx-auto lg:flex-row">
            <div className="flex items-center-safe justify-center-safe lg:basis-1/2">
              <Card className="hidden p-2 hover:bg-white/10 lg:flex">
                <img
                  src="/images/team/Team - web.jpg"
                  alt="Modelverse Platform"
                  className="rounded-xl"
                />
              </Card>
            </div>
            <div className="flex flex-col gap-8 lg:basis-1/2 lg:justify-center-safe">
              <div className="flex max-w-4xl flex-col gap-4">
                <h1 className="text-4xl sm:text-5xl">
                  We Secure. You Succeed!
                </h1>
                <p className="text-xl text-white/70">
                  Whether you're a 10-person startup or a 10,000-employee
                  enterprise, Modelverse scales with your needs.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="flex-row gap-2">
                    <CheckCircle2 className="size-6 shrink-0 text-lime-500" />
                    <p>{benefit}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-8 text-white md:container md:mx-auto">
            <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
              <h1 className="text-4xl sm:text-5xl">Hear From Our Customers</h1>
              <p className="text-xl text-white/70">
                See how leaders are transforming their organizations with
                Modelverse
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card
                  className="p-0 transition-all duration-300 hover:shadow-lime-500/70"
                  key={index}
                >
                  <YoutubeEmbed
                    videoId={testimonial.video}
                    className="rounded-t-xl"
                  />
                  <div className="flex grow flex-col justify-between gap-4 p-4">
                    <p className="text-lg text-white/70">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col">
                      <p>{testimonial.name}</p>
                      <p className="text-white/90">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA (Call to action) */}
      <div className="relative overflow-hidden bg-linear-to-br from-slate-900 via-teal-900 to-slate-900 p-4 py-16 text-white">
        {/* Gradient balls */}

        {/* Content */}
        <Card className="relative z-1 items-center-safe gap-4 text-center hover:bg-white/10 md:container md:mx-auto lg:max-w-3xl">
          <div className="absolute top-0 left-0 size-16 rounded-full bg-lime-500 blur-3xl" />
          <div className="absolute right-0 bottom-0 size-16 rounded-full bg-lime-500 blur-3xl" />

          <div className="relative z-1 flex flex-col items-center-safe justify-center-safe gap-4">
            {/* Badge */}
            <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
              <Rocket className="size-5" />
              <p className="text-sm">Launch Your Security Journey</p>
            </div>

            {/* Text */}
            <h1 className="text-4xl sm:text-5xl">
              Ready to secure your future?
            </h1>
            <p className="text-xl text-white/90">
              Join the organizations that trust Modelverse to manage their risks
              today.
            </p>

            {/* Button */}
            <button
              className="group flex cursor-pointer flex-row gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
              onClick={() =>
                (window.location.href =
                  'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
              }
            >
              Get Started
              <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}
