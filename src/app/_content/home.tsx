'use client'

import { useEffect, useRef, useState } from 'react'

import { Card, MotionCard } from '@/components/common/card'
import YoutubeEmbed from '@/components/embed/youtube-embed'
import { Layout } from '@/components/layout/page-layout'
import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from '@/lib/animation-variants'
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ClipboardList,
  Compass,
  Merge,
  Rocket,
  Route,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { useTranslations } from 'next-intl'

const features = [
  { icon: Compass, key: 'card1' },
  { icon: Route, key: 'card2' },
  { icon: Brain, key: 'card3' },
  { icon: ClipboardList, key: 'card4' },
  { icon: Merge, key: 'card5' },
  { icon: Users, key: 'card6' },
]

export function HomeContent() {
  const layoutRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()

  const benefits = t.raw('home.benefits.items') as string[]
  const testimonials = t.raw('home.testimonials.items') as {
    quote: string
    name: string
    role: string
    company: string
    video: string
  }[]

  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  const { scrollYProgress: heroScrollProgress } = useScroll({
    container: layoutRef,
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.7], [1, 0])
  const heroScale = useTransform(heroScrollProgress, [0, 0.7], [1, 0.95])

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <Layout home={true} ref={layoutRef}>
      {/* Landing Banner */}
      <div className="relative flex min-h-screen flex-col justify-center-safe p-4 text-white">
        <img
          src="/images/heroes/home.avif"
          fetchPriority="high"
          alt=""
          className="absolute inset-0 size-full object-cover object-[45%_center] md:object-[35%_center] lg:object-[40%_center]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 via-slate-900/30 to-slate-900" />

        <motion.div
          ref={heroRef}
          style={mounted ? { opacity: heroOpacity, scale: heroScale } : {}}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-1 gap-16 py-20 md:container md:mx-auto lg:flex-row"
        >
          <div className="flex flex-col gap-8 md:w-xl xl:w-4xl">
            <motion.div
              variants={fadeInUp}
              className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md"
            >
              <Shield className="size-5" />
              <p className="text-sm">{t('home.hero.badge')}</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col text-5xl drop-shadow-lg sm:text-6xl lg:text-7xl"
            >
              <span>Modelverse</span>
              <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text pb-3 text-transparent">
                {t('home.hero.title_line2')}
              </span>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="max-w-xl text-xl text-white/90 drop-shadow-lg"
            >
              {t('home.hero.description')}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <button
                className="group flex w-full cursor-pointer flex-row justify-center-safe gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
                onClick={() =>
                  (window.location.href =
                    'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
                }
              >
                {t('home.hero.cta')}
                <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="flex flex-row flex-wrap gap-4 text-center"
            >
              <MotionCard variants={scaleIn} className="md:w-[30%] xl:w-[20%]">
                <h1 className="pb-1 text-center text-3xl whitespace-nowrap">
                  30+
                </h1>
                <p className="w-full text-sm text-white/90">
                  {t('home.hero.stats.standards')}
                </p>
              </MotionCard>
              <MotionCard variants={scaleIn} className="md:w-[30%] xl:w-[20%]">
                <h1 className="pb-1 text-center text-3xl whitespace-nowrap">
                  7
                </h1>
                <p className="w-full text-sm text-white/90">
                  {t('home.hero.stats.country_footprints')}
                </p>
              </MotionCard>
              <MotionCard variants={scaleIn} className="md:w-[30%] xl:w-[20%]">
                <h1 className="pb-1 text-center text-3xl whitespace-nowrap">
                  125+
                </h1>
                <p className="w-full text-sm text-white/90">
                  {t('home.hero.stats.risk_domains')}
                </p>
              </MotionCard>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute right-0 bottom-4 left-0 flex animate-bounce justify-center-safe"
        >
          <motion.div
            style={mounted ? { opacity: heroOpacity, scale: heroScale } : {}}
            className="flex flex-col items-center-safe justify-center-safe gap-2"
          >
            <Sparkles className="size-6 text-lime-500" />
            <span className="text-sm text-white/70">
              {t('home.hero.explore')}
            </span>
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
              className="mx-auto flex max-w-4xl flex-col text-center"
            >
              <h1 className="text-4xl sm:text-5xl">
                {t('home.features.title')}
              </h1>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, index) => (
                <motion.div variants={scaleIn} key={index}>
                  <Card className="group relative size-full shadow-md hover:border-lime-500/70 hover:shadow-lime-500/70">
                    <div className="absolute inset-0 rounded-lg bg-linear-to-br group-hover:from-lime-500/10 group-hover:to-teal-500/10" />
                    <div className="relative z-1 flex flex-col gap-2">
                      <div className="mb-4 flex w-fit items-center justify-center rounded-xl bg-linear-to-br from-lime-500 to-teal-500 p-2">
                        <feature.icon className="size-6" />
                      </div>
                      <h3 className="mb-2 text-xl">
                        {t(`home.features.items.${feature.key}.title`)}
                      </h3>
                      <p className="text-white/70">
                        {t(`home.features.items.${feature.key}.description`)}
                      </p>
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
                  src="/images/team/team.jpg"
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
                  {t('home.benefits.title')}
                </h1>
                <p className="text-xl text-white/70">
                  {t('home.benefits.subtitle')}
                </p>
              </motion.div>
              <motion.div
                variants={staggerContainer}
                className="flex flex-col gap-4"
              >
                {benefits.map((benefit, index) => (
                  <motion.div variants={slideInRight} key={index}>
                    <Card className="flex-row gap-2 hover:translate-x-2">
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
              <h1 className="text-4xl sm:text-5xl">
                {t('home.testimonials.title')}
              </h1>
              <p className="text-xl text-white/70">
                {t('home.testimonials.subtitle')}
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div variants={scaleIn} key={index}>
                  <Card className="size-full bg-white/5 p-0 transition-all duration-300 hover:border-lime-500/50 hover:bg-white/10">
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

      {/* CTA */}
      <div className="relative overflow-hidden bg-linear-to-br from-slate-900 via-teal-900 to-slate-900 p-4 py-16 text-white">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-linear-to-br from-lime-500/20 to-teal-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-linear-to-br from-teal-500/20 to-emerald-500/20 blur-3xl" />

        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <Card className="relative z-1 items-center-safe gap-4 text-center hover:bg-white/10 md:container md:mx-auto lg:max-w-3xl">
            <div className="relative z-1 flex flex-col items-center-safe justify-center-safe gap-4">
              <motion.div
                variants={scaleIn}
                className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-black/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md"
              >
                <Rocket className="size-5" />
                <p className="text-sm">{t('home.cta.badge')}</p>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl">
                {t('home.cta.title')}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-white/90">
                {t('home.cta.subtitle')}
              </motion.p>
              <motion.div variants={fadeInUp}>
                <button
                  className="group flex cursor-pointer flex-row justify-between gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
                  onClick={() =>
                    (window.location.href =
                      'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
                  }
                >
                  {t('home.cta.button')}
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
