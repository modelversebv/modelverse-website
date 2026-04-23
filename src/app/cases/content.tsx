'use client'

import { useRef } from 'react'

import eighteenZeroOneImage from '@/assets/new_logos/1801.jpg'
import andersenImage from '@/assets/new_logos/andersen.jpg'
import fellowmindImage from '@/assets/new_logos/fellowmind.jpg'
import leydenjarImage from '@/assets/new_logos/leydan-jar.jpg'
import nedatoImage from '@/assets/new_logos/nedato.jpg'
import newforrestImage from '@/assets/new_logos/newForrest.jpg'
import npiImage from '@/assets/new_logos/npi.jpg'
import pharmapartnersImage from '@/assets/new_logos/pharma-partners.jpg'
import provincieImage from '@/assets/new_logos/provincie-flevoland.jpg'
import thebeImage from '@/assets/new_logos/thebe.jpg'
import { Card } from '@/components/common/card'
import { Hero } from '@/components/common/hero'
import { Layout } from '@/components/layout/page-layout'
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from '@/lib/animation-variants'
import { ArrowRight, Info, Shield, TrendingUp } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useTranslations } from 'next-intl'

// --- Constants ---

type CaseStudy = {
  name: string
  about: string
  case: string
  url: string
}

const logos = [
  fellowmindImage,
  provincieImage,
  andersenImage,
  nedatoImage,
  newforrestImage,
  eighteenZeroOneImage,
  pharmapartnersImage,
  thebeImage,
  npiImage,
  leydenjarImage,
]

// --- Sub-components ---

function CasesHero() {
  const t = useTranslations()
  return (
    <Hero
      className="items-center-safe justify-center-safe text-center text-white md:max-w-4xl"
      backgroundClassName="object-[center_40%]"
      backgroundImg="/images/heroes/cases.avif"
      overlay
    >
      <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
        <Shield className="size-5" />
        <p className="text-sm">{t('cases.hero.badge')}</p>
      </div>
      <h1 className="text-5xl sm:text-6xl">
        {t('cases.hero.title_line1')}
        <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
          <br />
          {t('cases.hero.title_line2')}
        </span>
      </h1>
      <p className="text-xl text-white/70">{t('cases.hero.description')}</p>
    </Hero>
  )
}

function CaseStudyItem({ study, index }: { study: CaseStudy; index: number }) {
  const t = useTranslations()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={index % 2 == 0 ? slideInLeft : slideInRight}
    >
      <Card className="group grid grid-cols-1 overflow-hidden bg-white/5 p-0 text-white hover:border-lime-500/50 hover:bg-white/10 lg:grid-cols-2">
        <div
          className={`relative flex h-[300px] items-center-safe justify-center-safe overflow-hidden lg:h-auto lg:basis-1/2 ${index % 2 != 0 && 'lg:order-last'}`}
        >
          <img
            src={logos[index].src}
            alt=""
            className={`size-full rounded-t-lg object-cover transition-all duration-300 lg:rounded-t-none ${index % 2 != 0 ? 'lg:rounded-r-lg' : 'lg:rounded-l-lg'} lg:absolute lg:inset-0`}
          />
        </div>
        <div className="flex flex-col gap-4 p-4 lg:basis-1/2 lg:justify-center-safe">
          <h1 className="text-3xl">{study.name}</h1>
          <div className="flex flex-col justify-center-safe gap-2">
            <div className="flex w-fit flex-row gap-2 text-lg text-lime-500">
              <Info className="size-5 self-center" />
              {t('cases.labels.about')}
            </div>
            <p className="text-white/70">{study.about}</p>
          </div>
          <div className="flex flex-col justify-center-safe gap-2">
            <div className="flex w-fit flex-row gap-2 text-lg text-teal-500">
              <TrendingUp className="size-5 self-center" />
              {t('cases.labels.improvements')}
            </div>
            <p className="text-white/70">{study.case}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

// --- Page ---

export function CasesContent() {
  // Framer Motion animation refs (must stay in the component (hooks))
  const layoutRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()

  const caseStudies = t.raw('cases.items') as CaseStudy[]

  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  return (
    <Layout cases={true} hero={<CasesHero />} ref={layoutRef}>
      {/* Content */}
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="flex flex-col gap-4 px-4 py-16 md:container md:mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudyItem key={index} study={study} index={index} />
          ))}
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
            <h1 className="text-4xl sm:text-5xl">{t('cases.cta.title')}</h1>
            <p className="text-xl text-white/70">{t('cases.cta.subtitle')}</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <button
              className="group flex w-full cursor-pointer flex-row justify-center-safe gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
              onClick={() =>
                (window.location.href =
                  'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
              }
            >
              {t('cases.cta.button')}
              <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}
