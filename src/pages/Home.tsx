// import { useRef } from 'react'
import { useRef } from 'react'

import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from '@/animations/variants'
import teamImage from '@/assets/team/Team - web.jpg'
import YoutubeEmbed from '@/components/app/embed/youtubeEmbed'
import { Card, MotionCard } from '@/components/app/misc/card'
import { Layout } from '@/components/layout'
import {
  ArrowRight,
  Brain,
  Check,
  CheckCircle2,
  Compass,
  Lock,
  Rocket,
  Search,
  Sparkles,
} from 'lucide-react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

export function HomePage() {
  const layoutRef = useRef<HTMLDivElement>(null)

  // Data
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

  // Framer Motion
  // Refs for scroll-triggered animations
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  // Track visibility for animations
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  // Hero Responsive scroll animation
  const { scrollYProgress: heroScrollProgress } = useScroll({
    container: layoutRef,
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.7], [1, 0])
  const heroScale = useTransform(heroScrollProgress, [0, 0.7], [1, 0.95])

  return (
    <Layout home={true} ref={layoutRef}>
      {/* Metadata */}
      <title>Modelverse | Cybersecurity GRC Solutions</title>
      <meta
        name="description"
        content="Modelverse automates GRC and risk scoring, providing real-time compliance intelligence for leading enterprises in various industries."
      />

      {/* Landing Banner */}
      <div className="relative flex min-h-screen flex-col justify-center-safe p-4 text-white">
        {/* Background and Overlay */}
        <img
          src="/images/heroes/home.avif"
          fetchPriority="high"
          alt=""
          className="absolute inset-0 size-full object-cover object-[74%_center] md:object-[85%_center] lg:object-[70%_center]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 via-slate-900/30 to-slate-900" />

        {/* Content */}
        <motion.div
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-1 flex flex-col gap-16 py-20 md:container md:mx-auto lg:flex-row"
        >
          <div className="flex flex-col gap-8 lg:basis-1/2">
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md"
            >
              <Sparkles className="size-5" />
              <p className="text-sm">We secure. You succeed!</p>
            </motion.div>

            {/* Title */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col text-5xl drop-shadow-lg sm:text-6xl lg:text-7xl"
            >
              <span>Modelverse</span>
              <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                Information Risk
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/90 drop-shadow-lg"
            >
              Empowering organizations to effectively manage Risks and
              Compliance through intelligent automation.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <button
                className="group flex w-full cursor-pointer flex-row justify-center-safe gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
                onClick={() =>
                  (window.location.href =
                    'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
                }
              >
                Request a Demo
                <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Cards */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-row flex-wrap gap-4"
            >
              <MotionCard variants={scaleIn}>
                <h1 className="text-3xl whitespace-nowrap">6</h1>
                <p className="w-full text-sm text-white/90">Risk Domains</p>
              </MotionCard>
              <MotionCard variants={scaleIn}>
                <h1 className="text-3xl whitespace-nowrap">30+</h1>
                <p className="w-full text-sm text-white/90">Standards</p>
              </MotionCard>
              <MotionCard variants={scaleIn}>
                <h1 className="text-3xl whitespace-nowrap">7</h1>
                <p className="w-full text-sm text-white/90">
                  Country Footprints
                </p>
              </MotionCard>
            </motion.div>
          </div>
          {/* <div className="flex items-center-safe justify-center-safe lg:basis-1/2">
            <Card className="hidden p-2 hover:bg-white/10 lg:flex">
              <img
                src="/images/misc/modelverse_platform.png"
                alt="Modelverse Platform"
                className="rounded-lg"
              />
            </Card>
          </div> */}
        </motion.div>

        {/* Bouncing Icon bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute right-0 bottom-4 left-0 flex animate-bounce justify-center-safe"
        >
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="flex flex-col items-center-safe justify-center-safe gap-2"
          >
            <Sparkles className="size-6 text-lime-500" />
            <span className="text-sm text-white/70">Explore More</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900" />
        <div className="relative z-1 flex flex-col gap-32 px-4 py-16 text-white md:container md:mx-auto">
          {/* Features */}
          <motion.div
            ref={featuresRef}
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="flex flex-col gap-8 text-white md:container md:mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h1 className="text-4xl sm:text-5xl">
                Everything You Need to Manage Risks and Compliance
              </h1>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, index) => (
                <motion.div variants={scaleIn}>
                  <Card
                    key={index}
                    className="group relative size-full shadow-md hover:border-lime-500/70 hover:shadow-lime-500/70"
                  >
                    <div className="absolute inset-0 rounded-lg bg-linear-to-br group-hover:from-lime-500/10 group-hover:to-teal-500/10" />
                    <div className="relative z-1 flex flex-col gap-2">
                      <div className="mb-4 flex w-fit items-center justify-center rounded-xl bg-linear-to-br from-lime-500 to-teal-500 p-2">
                        <feature.icon className="size-6" />
                      </div>
                      <h3 className="mb-2 text-xl">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            ref={benefitsRef}
            initial="hidden"
            animate={benefitsInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-8 text-white md:container md:mx-auto lg:flex-row"
          >
            <motion.div
              variants={slideInLeft}
              className="flex items-center-safe justify-center-safe lg:basis-1/2"
            >
              <Card className="hidden p-2 hover:bg-white/10 lg:flex">
                <img
                  src={teamImage}
                  alt="Modelverse Team"
                  className="rounded-lg"
                />
              </Card>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="flex flex-col gap-8 lg:basis-1/2 lg:justify-center-safe"
            >
              <motion.div
                variants={fadeInUp}
                className="flex max-w-4xl flex-col gap-4"
              >
                <h1 className="text-4xl sm:text-5xl">
                  We Secure. You Succeed!
                </h1>
                <p className="text-xl text-white/70">
                  Whether you're a 10-person startup or a 10,000-employee
                  enterprise, Modelverse scales with your needs.
                </p>
              </motion.div>
              <motion.div
                variants={staggerContainer}
                className="flex flex-col gap-4"
              >
                {benefits.map((benefit, index) => (
                  <motion.div variants={slideInRight}>
                    <Card
                      key={index}
                      className="flex-row gap-2 hover:translate-x-2"
                    >
                      <CheckCircle2 className="size-6 shrink-0 text-lime-500" />
                      <p>{benefit}</p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            ref={testimonialsRef}
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="flex flex-col gap-8 text-white md:container md:mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h1 className="text-4xl sm:text-5xl">Hear From Our Customers</h1>
              <p className="text-xl text-white/70">
                See how leaders are transforming their organizations with
                Modelverse
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div variants={scaleIn}>
                  <Card
                    className="size-full bg-white/5 p-0 transition-all duration-300 hover:border-lime-500/50 hover:bg-white/10"
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA (Call to action) */}
      <div className="relative overflow-hidden bg-linear-to-br from-slate-900 via-teal-900 to-slate-900 p-4 py-16 text-white">
        {/* Gradient balls */}
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-linear-to-br from-lime-500/20 to-teal-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-linear-to-br from-teal-500/20 to-emerald-500/20 blur-3xl" />

        {/* Content */}
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <Card className="relative z-1 items-center-safe gap-4 text-center hover:bg-white/10 md:container md:mx-auto lg:max-w-3xl">
            <div className="relative z-1 flex flex-col items-center-safe justify-center-safe gap-4">
              {/* Badge */}
              <motion.div
                variants={scaleIn}
                className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md"
              >
                <Rocket className="size-5" />
                <p className="text-sm">Launch Your Security Journey</p>
              </motion.div>

              {/* Text */}
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl">
                Ready to secure your future?
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-white/90">
                Join the organizations that trust Modelverse to manage their
                risks today.
              </motion.p>

              {/* Button */}
              <motion.div variants={fadeInUp}>
                <button
                  className="group flex cursor-pointer flex-row justify-between gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
                  onClick={() =>
                    (window.location.href =
                      'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
                  }
                >
                  Get Started
                  <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Layout>
  )
}
