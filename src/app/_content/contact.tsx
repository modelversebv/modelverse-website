'use client'

import { useRef } from 'react'

import { Accordion } from '@/components/common/accordion'
import { Card } from '@/components/common/card'
import { Hero } from '@/components/common/hero'
import { GoogleMapEmbed } from '@/components/embed/google-map-embed'
import { Layout } from '@/components/layout/page-layout'
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animation-variants'
import { ArrowRight, Clock, Mail, MapPin, Phone, Shield } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useTranslations } from 'next-intl'

// --- Sub-components ---

function ContactHero() {
  const t = useTranslations()
  return (
    <Hero
      className="items-center-safe justify-center-safe text-center text-white md:max-w-4xl"
      backgroundClassName="object-[center_80%]"
      backgroundImg="/images/heroes/contact.avif"
      backgroundAlt="Contact Modelverse"
      overlay
    >
      <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
        <Shield className="size-5" />
        <p className="text-sm">{t('contact.hero.badge')}</p>
      </div>
      <h1 className="text-5xl sm:text-6xl">
        {t('contact.hero.title_line1')}{' '}
        <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
          {t('contact.hero.title_line2')}
        </span>
      </h1>
      <p className="text-xl text-white/70">{t('contact.hero.description')}</p>
    </Hero>
  )
}

// --- Page ---

export function ContactContent() {
  const layoutRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      primary: t('contact.info.email.primary'),
      secondary: t('contact.info.email.secondary'),
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      primary: t('contact.info.phone.primary'),
      secondary: t('contact.info.phone.secondary'),
    },
    {
      icon: MapPin,
      title: t('contact.info.office.title'),
      primary: t('contact.info.office.primary'),
      secondary: t('contact.info.office.secondary'),
    },
    {
      icon: Clock,
      title: t('contact.info.support.title'),
      primary: t('contact.info.support.primary'),
      secondary: t('contact.info.support.secondary'),
    },
  ]

  const faqItems = t.raw('contact.faq.items') as {
    question: string
    answer: string
  }[]

  const detailsRef = useRef<HTMLDivElement>(null)
  const questionsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const detailsInView = useInView(detailsRef, { once: true, amount: 0.2 })
  const questionsInView = useInView(questionsRef, { once: true, amount: 0.2 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 })

  return (
    <Layout hero={<ContactHero />} ref={layoutRef}>
      {/* Content */}
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="flex flex-col justify-center-safe gap-32 px-4 py-16 md:container md:mx-auto">
          <motion.div
            ref={detailsRef}
            className="grid grid-cols-1 gap-4 lg:grid-cols-2"
            initial="hidden"
            animate={detailsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {contactInfo.map((contact, index) => (
                <motion.div variants={scaleIn} key={index}>
                  <Card className="size-full bg-white/5 hover:border-lime-500/50 hover:bg-white/10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-lime-500 to-teal-500">
                      <contact.icon className="size-6" />
                    </div>
                    <h3 className="mb-2 text-xl">{contact.title}</h3>
                    <p className="text-white/90">{contact.primary}</p>
                    <p className="text-white/70">{contact.secondary}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center-safe gap-4 lg:basis-1/2">
              <motion.div variants={scaleIn} className="size-full">
                <Card className="size-full bg-white/5 p-0 hover:border-lime-500/50 hover:bg-white/10">
                  <GoogleMapEmbed className="grow border-0" />
                </Card>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            ref={questionsRef}
            initial="hidden"
            animate={questionsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="flex max-w-4xl flex-col gap-8 md:mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-center text-4xl">
              {t('contact.faq.title')}
            </motion.h2>

            <Accordion items={faqItems} />
          </motion.div>
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
              <div className="relative z-1 flex flex-col items-center-safe justify-center-safe gap-6">
                <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl">
                  {t('contact.cta.title')}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-white/90">
                  {t('contact.cta.subtitle')}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <button
                    className="group flex cursor-pointer flex-row justify-between gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
                    onClick={() =>
                      (window.location.href =
                        'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
                    }
                  >
                    {t('contact.cta.button')}
                    <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
