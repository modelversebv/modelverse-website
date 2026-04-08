import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  staggerContainer,
} from '@/animations/variants'
import platformImage from '@/assets/platform.png'
import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import {
  ArrowRight,
  BookOpen,
  ChartLine,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileText,
  Layers,
  ListRestart,
  Lock,
  type LucideIcon,
  Map,
  Rocket,
  ScrollText,
  Shield,
  ShieldCheck,
  Sprout,
  Stamp,
  TrendingUp,
  TriangleAlert,
  Ungroup,
  Users,
  Wrench,
} from 'lucide-react'
import { motion, useInView } from 'motion/react'

// --- Static Constants ---

const featureShowcaseIcons = [Sprout, Layers, ChartLine]

const moduleColours = [
  { bgColour: 'bg-red-500', hoverColour: 'hover:bg-red-700' },
  { bgColour: 'bg-emerald-500', hoverColour: 'hover:bg-emerald-700' },
  { bgColour: 'bg-cyan-500', hoverColour: 'hover:bg-cyan-700' },
  { bgColour: 'bg-gray-500', hoverColour: 'hover:bg-gray-600' },
  { bgColour: 'bg-pink-500', hoverColour: 'hover:bg-pink-700' },
  { bgColour: 'bg-green-500', hoverColour: 'hover:bg-green-700' },
  { bgColour: 'bg-blue-500', hoverColour: 'hover:bg-blue-700' },
  { bgColour: 'bg-indigo-500', hoverColour: 'hover:bg-indigo-700' },
  { bgColour: 'bg-amber-500', hoverColour: 'hover:bg-amber-700' },
]

const moduleIcons = [
  ShieldCheck,
  Layers,
  Map,
  FileText,
  Stamp,
  Lock,
  ClipboardCheck,
  Users,
  BookOpen,
]

const problemIcons = [ListRestart, Wrench, Ungroup]

const implementationIcons = [
  Map,
  Eye,
  Shield,
  TriangleAlert,
  ScrollText,
  Rocket,
]

// --- Sub-components ---

function FeatureShowcaseItem({
  feature,
  index,
}: {
  feature: {
    img_tag: string
    img_id: string
    title: string
    description: string
    improvement: string
    icon: LucideIcon
  }
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={`md:min-h-none flex flex-col justify-center-safe gap-4 max-md:pb-24 md:min-h-min ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center-safe`}
    >
      <Card className="relative max-w-lg bg-white/5 p-4 transition-all duration-300 hover:border-lime-500/50 hover:bg-white/10 md:basis-1/2">
        <div className="absolute -top-3 -right-3 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 text-xs font-semibold">
          {feature.img_tag}
        </div>
        <img
          src={feature.img_id}
          alt={feature.title}
          className="size-200/100 rounded-lg"
        />
      </Card>
      <Card className="size-fit bg-white/5 transition-all duration-300 hover:border-lime-500/50 hover:bg-white/10 md:basis-1/2">
        <div className="mb-4 flex w-fit items-center justify-center rounded-xl bg-linear-to-br from-lime-500 to-teal-500 p-2">
          <feature.icon className="size-6" />
        </div>
        <h3 className="mb-2 text-xl">{feature.title}</h3>
        <p className="mb-4 text-white/70">{feature.description}</p>
        <div className="flex flex-row items-center-safe gap-2 text-xs font-semibold text-lime-500">
          <TrendingUp className="size-4" />
          <span>{feature.improvement}</span>
        </div>
      </Card>
    </motion.div>
  )
}

function ImplementationStepItem({
  step,
  index,
}: {
  step: {
    title: string
    description: string
    icon: LucideIcon
  }
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className="flex flex-col items-center-safe justify-center-safe"
    >
      {index !== 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden h-24 w-0.5 bg-linear-to-b from-lime-500/50 to-teal-500/50 md:block"
        />
      )}
      <div
        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative items-center-safe gap-4 max-md:pt-8 md:gap-12`}
      >
        <div className="relative z-10 shrink-0">
          <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-9xl font-bold text-transparent">
            {String(index + 1)}
          </span>
        </div>
        <Card className="flex flex-col gap-4 bg-white/5 p-6 hover:border-lime-500/50 hover:bg-white/10">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-lime-500 to-teal-500">
              <step.icon className="size-6" />
            </div>
            <h3 className="text-xl">{step.title}</h3>
          </div>
          <p className="text-white/90">{step.description}</p>
        </Card>
      </div>
    </motion.div>
  )
}

function PlatformHero() {
  const { t } = useTranslation()
  return (
    <Hero
      className="items-center-safe justify-center-safe text-center text-white xl:flex-row"
      backgroundClassName="object-center"
      containerClassName="min-h-dvh h-fit pt-16 md:pt-none md:min-h-auto"
      backgroundImg="/images/heroes/platform.avif"
      overlay
    >
      <div className="flex max-w-3xl flex-col gap-8 xl:text-left">
        <div className="mx-auto flex h-fit w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md xl:mx-0">
          <Shield className="size-5" />
          <p className="text-sm">{t('platform.hero.badge')}</p>
        </div>
        <h1 className="text-5xl leading-tight sm:text-6xl">
          {t('platform.hero.title_line1')}{' '}
          <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
            {t('platform.hero.title_line2')}
          </span>
        </h1>
        <p className="text-xl text-white/70">
          {t('platform.hero.description')}
        </p>
      </div>
<<<<<<< HEAD
      <Card className="p-2 hover:bg-white/10 lg:max-w-4xl xl:w-500">
=======
      <Card className="p-2 hover:bg-white/10">
>>>>>>> origin/main
        <img
          src={platformImage}
          alt="Modelverse Platform"
          className="rounded-lg"
        />
      </Card>
    </Hero>
  )
<<<<<<< HEAD
}

// --- Page component ---

export function PlatformPage() {
  const layoutRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  // Merging translation items with static constants arrays
  const featureShowcase = (
    t('platform.feature_showcase.items', { returnObjects: true }) as {
      img_tag: string
      img_id: string
=======

  // Data
  const keyFeautres = (
    t('platform.key_features.items', { returnObjects: true }) as {
      img_tag: string
>>>>>>> origin/main
      title: string
      description: string
      improvement: string
    }[]
<<<<<<< HEAD
  ).map((item, index) => ({ ...item, icon: featureShowcaseIcons[index] }))

  const moduleItems = (
    t('platform.fingertips.module_items', { returnObjects: true }) as {
      title: string
    }[]
  ).map((item, index) => ({
    ...item,
    icon: moduleIcons[index],
    colour: moduleColours[index],
  }))

  const problems = (
    t('platform.problems.items', { returnObjects: true }) as {
      title: string
      description: string
    }[]
  ).map((item, index) => ({ ...item, icon: problemIcons[index] }))
=======
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
>>>>>>> origin/main

  const comparisonPoints = t('platform.comparison.points', {
    returnObjects: true,
  }) as string[]

<<<<<<< HEAD
  const implementationTrack = (
    t('platform.implementation_track.step', { returnObjects: true }) as {
      title: string
      description: string
    }[]
  ).map((item, index) => ({ ...item, icon: implementationIcons[index] }))

  // Framer Motion animation refs (must stay in the component (hooks))
  const problemsRef = useRef<HTMLDivElement>(null)
  const keyFeaturesRef = useRef<HTMLDivElement>(null)
  const modulesRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)
  const implementationRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const problemsInView = useInView(problemsRef, { once: true, amount: 0.1 })
=======
  // Framer Motion
  const keyFeaturesRef = useRef<HTMLDivElement>(null)
  const brokenDownFeaturesRef = useRef<HTMLDivElement>(null)
  const diffsRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

>>>>>>> origin/main
  const keyFeaturesInView = useInView(keyFeaturesRef, {
    once: true,
    amount: 0.1,
  })
<<<<<<< HEAD
  const modulesInView = useInView(modulesRef, {
    once: true,
    amount: 0.1,
  })
  const comparisonInView = useInView(comparisonRef, { once: true, amount: 0.1 })
  const implementationInView = useInView(implementationRef, {
    once: true,
    amount: 0.1,
  })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  return (
    <Layout platform={true} hero={<PlatformHero />} ref={layoutRef}>
      {/* Metadata */}
      <title>{t('platform.metadata.title')}</title>
      <meta name="description" content={t('platform.metadata.description')} />

      {/* Page content */}
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="relative z-1 flex flex-col gap-32 px-4 py-16 text-white md:container md:mx-auto">
          {/* Problems Solved */}
          <motion.div
            ref={problemsRef}
            initial="hidden"
            animate={problemsInView ? 'visible' : 'hidden'}
=======
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
>>>>>>> origin/main
            variants={staggerContainer}
            className="flex flex-col items-center-safe gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h1 className="text-4xl sm:text-5xl">
<<<<<<< HEAD
                {t('platform.problems.title_line1')}{' '}
                <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                  {t('platform.problems.title_line2')}
                </span>
              </h1>
              <p className="text-xl text-white/70">
                {t('platform.problems.subtitle')}
=======
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
>>>>>>> origin/main
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
<<<<<<< HEAD
              className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-3"
            >
              {problems.map((diff, index) => (
                <motion.div
                  variants={fadeInUp}
                  key={`diff-${index}`}
                  className="flex justify-center md:col-span-2 md:last:col-start-2 lg:col-span-1 lg:last:col-start-auto"
                >
=======
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {differentiators.map((diff, index) => (
                <motion.div variants={fadeInUp} key={`diff-${index}`}>
>>>>>>> origin/main
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

<<<<<<< HEAD
          {/* Modules at Your Fingertips */}
          <motion.div
            ref={modulesRef}
            initial="hidden"
            animate={modulesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="flex flex-col items-center-safe gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h1 className="text-4xl sm:text-5xl">
                {t('platform.fingertips.title_line1')}
                <br />
                <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                  {t('platform.fingertips.title_line2')}
                </span>
              </h1>
              <p className="text-xl text-white/70">
                {t('platform.fingertips.subtitle')}
              </p>
            </motion.div>
            <motion.div variants={staggerContainer} className="w-full">
              <Card className="items-center-safe justify-center-safe gap-4 border-white/20 bg-white/5 backdrop-blur-md hover:border-lime-500/50 hover:bg-white/10">
                <h1>{t('platform.fingertips.modules')}</h1>
                <div className="grid w-full grid-cols-4 gap-4 md:grid-cols-10 xl:grid-cols-9">
                  {moduleItems.map((module, index) => (
                    <motion.div
                      variants={scaleIn}
                      key={`module-${index}`}
                      className="flex justify-center max-xl:col-span-2 max-md:last:col-start-2 md:nth-6:col-start-2 xl:col-span-1 xl:nth-6:col-start-auto"
                    >
                      <div
                        className={`flex w-full flex-col items-center-safe justify-center-safe gap-2 rounded-xl ${module.colour.bgColour} p-2 transition-all duration-300 ${module.colour.hoverColour}`}
                      >
                        <module.icon className="size-6" />
                        <span>{module.title}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

=======
>>>>>>> origin/main
          {/* Feature comparison */}
          <motion.div
            ref={comparisonRef}
            initial="hidden"
            animate={comparisonInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
<<<<<<< HEAD
            className="flex flex-col items-center-safe gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h1 className="text-4xl sm:text-5xl">
                {t('platform.comparison.title_line1')}
                <br />
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
              className="grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {comparisonPoints.map((point, index) => (
                <motion.div
                  variants={slideInLeft}
                  key={`comparisonPoint-${index}`}
                >
                  <Card className="flex-row gap-2 hover:translate-x-2">
                    <CheckCircle2 className="size-6 shrink-0 text-lime-500" />
                    <p>{point}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

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
                {t('platform.feature_showcase.title_line1')}
                <br />
                <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                  {t('platform.feature_showcase.title_line2')}
                </span>
              </h1>
              <p className="text-xl text-white/70">
                {t('platform.feature_showcase.subtitle')}
              </p>
            </motion.div>
            <div className="flex flex-col md:gap-16">
              {featureShowcase.map((feature, index) => (
                <FeatureShowcaseItem
                  key={index}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Implementation Text */}
          <div className="flex flex-col items-center-safe justify-center-safe gap-8 md:container md:mx-auto md:max-w-4xl">
            <motion.div
              ref={implementationRef}
              initial="hidden"
              animate={implementationInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="flex flex-col items-center-safe gap-8 md:container md:mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl">
                {t('platform.implementation.title_line1')}{' '}
                <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                  {t('platform.implementation.title_line2')}
                </span>
              </h1>
              <p className="text-center text-xl text-white/70">
                {t('platform.implementation.subtitle')}
              </p>
            </motion.div>

            {/* Implementation Steps */}
            <div className="mx-auto flex max-w-4xl flex-col items-center-safe justify-center-safe">
              {implementationTrack.map((step, index) => (
                <ImplementationStepItem key={index} step={step} index={index} />
              ))}
            </div>
          </div>
=======
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
>>>>>>> origin/main
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
<<<<<<< HEAD
            className="flex flex-col items-center-safe gap-4 text-center md:container md:mx-auto"
=======
            className="flex flex-col gap-4 text-center md:container md:mx-auto"
>>>>>>> origin/main
          >
            <h1 className="text-4xl sm:text-5xl">
              {t('platform.cta.title_line1')}{' '}
              <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
                {t('platform.cta.title_line2')}
              </span>
            </h1>
<<<<<<< HEAD
            <p className="max-w-4xl text-xl">{t('platform.cta.subtitle')}</p>
=======
            <p className="text-xl">{t('platform.cta.subtitle')}</p>
>>>>>>> origin/main
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
