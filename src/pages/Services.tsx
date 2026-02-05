import { useRef } from 'react'

import { fadeInUp, scaleIn, staggerContainer } from '@/animations/variants'
import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import {
  ArrowRight,
  Award,
  Check,
  Eye,
  Map,
  Rocket,
  ScrollText,
  Shield,
} from 'lucide-react'
import { motion, useInView } from 'motion/react'

const ServicesHero = (
  <Hero
    className="items-center-safe justify-center-safe text-center text-white md:max-w-4xl"
    backgroundClassName="object-[center_65%]"
    backgroundImg="/images/heroes/services.avif"
    overlay
  >
    <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
      <p className="text-sm">Our Services</p>
    </div>
    <h1 className="text-5xl sm:text-6xl">Security Services</h1>
    <p className="text-xl text-white/70">
      Comprehensive security services designed to mature your organization's
      cybersecurity posture. Choose the packages you need and select the
      implementation tier that matches your pace and requirements.
    </p>
  </Hero>
)

export function ServicesPage() {
  const layoutRef = useRef<HTMLDivElement>(null)

  // Data
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
      gradient: 'from-lime-500 to-emerald-500',
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
      gradient: 'from-green-500 to-teal-500',
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
      gradient: 'from-emerald-500 to-cyan-500',
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
      gradient: 'from-cyan-500 to-emerald-500',
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
      gradient: 'from-teal-500 to-green-500',
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
      gradient: 'from-emerald-500 to-lime-500',
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

  // Framer Motion
  // Refs for scroll-triggered animations
  const servicesRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  // Track visibility for animations
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  return (
    <Layout services={true} hero={ServicesHero} ref={layoutRef}>
      {/* Metadata */}
      <title>Modelverse Solutions | Security Services</title>
      <meta
        name="description"
        content="View how leading enterprises reduced audit time and achieved 100% compliance using the Modelverse Risk & Compliance SaaS platform."
      />

      {/* Content */}
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="relative z-1 flex flex-col gap-32 px-4 py-16 text-white md:container md:mx-auto">
          <motion.div
            ref={servicesRef}
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="flex flex-col items-center-safe gap-8 md:container md:mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h1 className="text-4xl sm:text-5xl">Your Security Journey</h1>
              <p className="text-xl text-white/70">
                Our packages follow a logical progression to build a
                comprehensive security program. Start where you need and scale
                as your organization matures.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="flex max-w-sm flex-col gap-4 lg:max-w-4xl lg:flex-row lg:flex-wrap lg:justify-center-safe 2xl:max-w-none"
            >
              {services.map((value, index) => (
                <motion.div
                  variants={scaleIn}
                  className="flex flex-row gap-4 lg:max-w-3xs lg:flex-col 2xl:max-w-59"
                >
                  <div className="flex flex-col items-center-safe gap-4 pt-8 lg:translate-x-30 lg:flex-row lg:pt-0 2xl:translate-x-28">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={servicesInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.15 }}
                      className="size-4 shrink-0 rounded-full bg-lime-500"
                    />
                    {index != services.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={servicesInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + index * 0.15,
                        }}
                        className={`w-0.5 grow bg-white/20 lg:h-0.5 ${index == 2 && 'lg:hidden 2xl:block'}`}
                      />
                    )}
                  </div>
                  <motion.div variants={fadeInUp} className="size-full">
                    <Card className="size-full grow overflow-hidden bg-white/5 p-0 transition-all duration-300 hover:border-lime-500/50 hover:bg-white/10 lg:hover:-translate-y-2">
                      <div
                        className={`flex flex-col gap-2 bg-linear-to-br p-4 ${value.gradient}`}
                      >
                        <div className="w-fit rounded-xl bg-white/30 p-2">
                          <value.icon className="size-6" />
                        </div>
                        <h3 className="text-xl">{value.title}</h3>
                        <p className="text-white/70">{value.description}</p>
                      </div>
                      <div className="flex flex-col gap-2 p-4">
                        {value.points.map((point) => (
                          <div className="flex flex-row gap-2">
                            <Check className="size-6 shrink-0 text-lime-500" />
                            <p className="text-white/80">{point}</p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden bg-linear-to-br from-lime-900/30 via-teal-900/30 to-slate-900">
        {/* Gradients */}
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-linear-to-br from-lime-500/20 to-teal-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-linear-to-br from-teal-500/20 to-emerald-500/20 blur-3xl" />

        {/* Content */}
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="relative z-1 flex flex-col gap-8 px-4 py-16 text-white sm:items-center-safe"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 text-center md:container md:mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl">
              Ready to Start Your Security Journey?
            </h1>
            <p className="text-xl">
              Our team will help you select the right packages and tier for your
              organization's unique needs and maturity level.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <button
              className="group flex w-full cursor-pointer flex-row justify-center-safe gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
              onClick={() =>
                (window.location.href =
                  'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
              }
            >
              Schedule Consultation
              <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}
