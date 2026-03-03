import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from '@/animations/variants'
import platformImage from '@/assets/platform.png'
import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import {
  ArrowRight,
  Check,
  Clock,
  Globe,
  Lock,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { motion, useInView } from 'motion/react'

export function PlatformPage() {
  const layoutRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  const PlatformHero = (
    <Hero
      className="items-center-safe justify-center-safe text-center text-white lg:flex-row"
      backgroundClassName="object-center"
      containerClassName="min-h-dvh h-fit pt-16 md:pt-none md:min-h-min"
      overlay
    >
      <div className="flex flex-col gap-8 lg:text-left">
        <div className="mx-auto flex h-fit w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md lg:mx-0">
          <Shield className="size-5" />
          <p className="text-sm">{t('platform.hero.badge')}</p>
        </div>
        <h1 className="text-5xl sm:text-6xl">
          <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
            {t('platform.hero.title_line1')}
          </span>{' '}
          {t('platform.hero.title_line2')}
        </h1>
        <p className="text-xl text-white/70">
          {t('platform.hero.description')}
        </p>
      </div>
      <Card className="p-2 hover:bg-white/10">
        <img
          src={platformImage}
          alt="Modelverse Platform"
          className="rounded-lg"
        />
      </Card>
    </Hero>
  )

  // Data
  const keyFeautres = (
    t('platform.key_features.items', { returnObjects: true }) as {
      img_tag: string
      title: string
      description: string
      improvement: string
    }[]
  ).map((item) => ({ ...item, icon: Shield }))

  const brokenDownFeatures = (
    t('platform.fingertips.breakdown_items', { returnObjects: true }) as {
      title: string
      description: string
    }[]
  ).map((item) => ({ ...item, icon: '🚨' }))

  const homeItems = (
    t('platform.fingertips.home_items', { returnObjects: true }) as {
      title: string
      description: string
    }[]
  ).map((item) => ({ ...item, icon: '🚨' }))

  const modules = (
    t('platform.fingertips.module_items', { returnObjects: true }) as {
      title: string
    }[]
  ).map((item) => ({ ...item, icon: '🛡️' }))

  const differentiatorIcons = [Sparkles, Zap, Target, Clock, Globe, Lock]
  const differentiators = (
    t('platform.differentiators.items', { returnObjects: true }) as {
      title: string
      description: string
    }[]
  ).map((item, index) => ({ ...item, icon: differentiatorIcons[index] }))

  const comparisonPoints = t('platform.comparison.points', {
    returnObjects: true,
  }) as string[]

  // Framer Motion
  const keyFeaturesRef = useRef<HTMLDivElement>(null)
  const brokenDownFeaturesRef = useRef<HTMLDivElement>(null)
  const diffsRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const keyFeaturesInView = useInView(keyFeaturesRef, {
    once: true,
    amount: 0.1,
  })
  const brokenDownFeaturesInView = useInView(brokenDownFeaturesRef, {
    once: true,
    amount: 0.1,
  })
  const diffsInView = useInView(diffsRef, { once: true, amount: 0.1 })
  const comparisonInView = useInView(comparisonRef, { once: true, amount: 0.1 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  return (
    <Layout platform={true} hero={PlatformHero} ref={layoutRef}>
      {/* Metadata */}
      <title>
        Modelverse Solutions | Risk & Compliance Management Platform
      </title>
      <meta
        name="description"
        content="View how leading enterprises reduced audit time and achieved 100% compliance using the Modelverse Risk & Compliance SaaS platform."
      />

      {/* Content */}
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="relative z-1 flex flex-col gap-32 px-4 py-16 text-white md:container md:mx-auto">
          {/* Key Features Showcase */}
          <div className="flex flex-col items-center-safe gap-8">
            <motion.div
              ref={keyFeaturesRef}
              initial="hidden"
              animate={keyFeaturesInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h1 className="text-4xl sm:text-5xl">
                {t('platform.key_features.title_line1')}{' '}
                <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                  {t('platform.key_features.title_line2')}
                </span>
              </h1>
              <p className="text-xl text-white/70">
                {t('platform.key_features.subtitle')}
              </p>
            </motion.div>
            <div className="flex flex-col md:gap-16">
              {keyFeautres.map((feature, index) => {
                const featureRef = useRef(null)
                const featureInView = useInView(featureRef, {
                  once: true,
                  amount: 0.4,
                })
                return (
                  <motion.div
                    ref={featureRef}
                    initial="hidden"
                    animate={featureInView ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    className={`md:min-h-none flex min-h-dvh flex-col justify-center-safe gap-4 md:min-h-min ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center-safe`}
                    key={`feature-${index}`}
                  >
                    <Card className="relative bg-white/5 p-2 transition-all duration-300 hover:border-lime-500/50 hover:bg-white/10 md:basis-1/2">
                      <div className="absolute -top-3 -right-3 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 text-xs font-semibold">
                        {feature.img_tag}
                      </div>
                      <img
                        src={platformImage}
                        alt="Modelverse Platform"
                        className="rounded-lg"
                      />
                    </Card>
                    <Card className="size-fit bg-white/5 transition-all duration-300 hover:border-lime-500/50 hover:bg-white/10 md:basis-1/2">
                      <div className="mb-4 flex w-fit items-center justify-center rounded-xl bg-linear-to-br from-lime-500 to-teal-500 p-2">
                        <feature.icon className="size-6" />
                      </div>
                      <h3 className="mb-2 text-xl">{feature.title}</h3>
                      <p className="mb-4 text-white/70">
                        {feature.description}
                      </p>
                      <div className="flex flex-row items-center-safe gap-2 text-xs font-semibold text-lime-500">
                        <TrendingUp className="size-4" />
                        <span>{feature.improvement}</span>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Dashboard Features Breakdown */}
          <motion.div
            ref={brokenDownFeaturesRef}
            initial="hidden"
            animate={brokenDownFeaturesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="flex flex-col items-center-safe gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h1 className="text-4xl sm:text-5xl">
                {t('platform.fingertips.title_line1')}{' '}
                <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                  {t('platform.fingertips.title_line2')}
                </span>
              </h1>
              <p className="text-xl text-white/70">
                {t('platform.fingertips.subtitle')}
              </p>
            </motion.div>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {brokenDownFeatures.map((item, index) => (
                <motion.div variants={fadeInUp} key={`fingertipItem-${index}`}>
                  <Card className="bg-white/5 transition-all duration-300 hover:border-lime-500/50 hover:bg-white/10">
                    <span className="mb-4 text-3xl">{item.icon}</span>
                    <h3 className="mb-2 text-xl">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
              {homeItems.map((item, index) => (
                <motion.div variants={fadeInUp} key={`homeItem-${index}`}>
                  <Card className="bg-white/5 transition-all duration-300 hover:border-lime-500/50 hover:bg-white/10">
                    <span className="mb-4 text-3xl">{item.icon}</span>
                    <h3 className="mb-2 text-xl">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div variants={staggerContainer} className="w-full">
              <Card className="items-center-safe justify-center-safe gap-4 border-lime-500/50 bg-lime-500/10 backdrop-blur-md hover:bg-lime-500/10">
                <h1>{t('platform.fingertips.modules')}</h1>
                <div className="grid w-full grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-9">
                  {modules.map((module, index) => (
                    <motion.div variants={scaleIn} key={`module-${index}`}>
                      <div className="flex flex-col items-center-safe justify-center-safe gap-2 rounded-xl bg-white/5 p-2 transition-all duration-300 hover:bg-white/10">
                        <span className="text-xl">{module.icon}</span>
                        <span>{module.title}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* What makes us different */}
          <motion.div
            ref={diffsRef}
            initial="hidden"
            animate={diffsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="flex flex-col items-center-safe gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h1 className="text-4xl sm:text-5xl">
                {t('platform.differentiators.title_line1')}{' '}
                <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                  {t('platform.differentiators.title_line2')}
                </span>
              </h1>
              <p className="text-xl text-white/70">
                {t('platform.differentiators.subtitle')}
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {differentiators.map((diff, index) => (
                <motion.div variants={fadeInUp} key={`diff-${index}`}>
                  <Card className="size-full bg-white/5 hover:border-lime-500/50 hover:bg-white/10">
                    <div className="mb-4 flex w-fit items-center justify-center rounded-xl bg-linear-to-br from-lime-500 to-teal-500 p-2">
                      <diff.icon className="size-6" />
                    </div>
                    <h3 className="mb-2 text-xl">{diff.title}</h3>
                    <p className="text-white/70">{diff.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Feature comparison */}
          <motion.div
            ref={comparisonRef}
            initial="hidden"
            animate={comparisonInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="flex flex-col items-center-safe gap-8 lg:flex-row"
          >
            <motion.div
              variants={staggerContainer}
              className="flex flex-col gap-4"
            >
              <motion.div
                variants={slideInLeft}
                className="flex w-full flex-col gap-4"
              >
                <h1 className="text-4xl sm:text-5xl">
                  {t('platform.comparison.title_line1')}{' '}
                  <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                    {t('platform.comparison.title_line2')}
                  </span>
                </h1>
                <p className="text-xl text-white/70">
                  {t('platform.comparison.subtitle')}
                </p>
              </motion.div>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 gap-2 md:grid-cols-2"
              >
                {comparisonPoints.map((point, index) => (
                  <motion.div
                    className="flex flex-row gap-2"
                    variants={slideInLeft}
                    key={`comparisonPoint-${index}`}
                  >
                    <div className="size-fit rounded-full bg-linear-to-r from-lime-500 to-teal-500 p-1">
                      <Check className="size-4 shrink-0 text-white" />
                    </div>
                    <span className="text-sm">{point}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div variants={slideInRight} className="">
              <Card className="p-2 hover:bg-white/10">
                <img
                  src={platformImage}
                  alt="Modelverse Platform"
                  className="rounded-lg"
                />
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden bg-linear-to-br from-lime-900/30 via-teal-900/30 to-slate-900">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-linear-to-br from-lime-500/20 to-teal-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-linear-to-br from-teal-500/20 to-emerald-500/20 blur-3xl" />

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
              {t('platform.cta.title_line1')}{' '}
              <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                {t('platform.cta.title_line2')}
              </span>
            </h1>
            <p className="text-xl">{t('platform.cta.subtitle')}</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <button
              className="group flex w-full cursor-pointer flex-row justify-center-safe gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
              onClick={() =>
                (window.location.href =
                  'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
              }
            >
              {t('platform.cta.button')}
              <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}
