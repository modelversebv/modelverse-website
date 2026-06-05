'use client'

import { Fragment, useRef } from 'react'

import { Card } from '@/components/common/card'
import { Hero } from '@/components/common/hero'
import { Layout } from '@/components/layout/page-layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from '@/lib/animation-variants'
import {
  Book,
  Eye,
  LinkedinIcon,
  Mail,
  PencilLine,
  Shield,
  User,
} from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useTranslations } from 'next-intl'

// --- Constants ---

const values = [
  { icon: User, key: 'customer_first' },
  { icon: Shield, key: 'security_by_design' },
  { icon: Eye, key: 'transparency' },
  { icon: Book, key: 'continuous_learning' },
]

// --- Sub-components ---

function AboutHero() {
  const t = useTranslations()
  return (
    <Hero
      className="items-center-safe justify-center-safe text-center text-white md:max-w-4xl"
      backgroundClassName="object-[center_70%]"
      backgroundImg="/images/heroes/about.avif"
      backgroundAlt="About Modelverse"
      overlay
    >
      <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
        <Shield className="size-5" />
        <p className="text-sm">{t('about.hero.badge')}</p>
      </div>
      <h1 className="text-5xl sm:text-6xl">
        {t('about.hero.title_line1')}{' '}
        <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
          {t('about.hero.title_line2')}
        </span>
      </h1>
      <p className="text-xl text-white/70">{t('about.hero.description')}</p>
    </Hero>
  )
}

// --- Page ---

export function AboutContent() {
  const layoutRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()

  const teamMembers = (
    t.raw('about.team.members') as {
      name: string
      role: string
      bio: string
      linkedin: string
      mail: string
    }[]
  ).map((member) => ({
    ...member,
    image:
      (
        {
          Ben: '/images/team/ben.jpg',
          Bozhena: '/images/team/bozhena.jpg',
          Daan: '/images/team/daan.jpg',
          Lili: '/images/team/lili.jpg',
          Maria: '/images/team/maria.jpg',
          Mariona: '/images/team/mariona.jpg',
          Michel: '/images/team/michel.jpg',
          Matei: '/images/team/matei.jpg',
          Reshma: '/images/team/reshma.jpg',
          Sjors: '/images/team/sjors.jpg',
        } as Record<string, string>
      )[member.name.split(' ')[0]] ?? '',
  }))

  const ambassadors = [
    {
      name: 'Reshma Pandohi Mishre',
      role: 'Co-Founder of Modelverse & Independent Security Executive',
      linkedin: 'https://www.linkedin.com/in/reshmapandohi/',
      bio: t('about.ambassadors.items.0.bio'),
      image: '/images/ambassadors/reshma.jpg',
    },
    {
      name: 'Jan-Willem Klerkx',
      role: 'Co-Founder & CEO, BonCode',
      linkedin: 'https://www.linkedin.com/in/jwklerkx/',
      bio: t('about.ambassadors.items.1.bio'),
      image: '/images/ambassadors/jan-willem.jpg',
    },
    {
      name: 'Gordon Muehl',
      role: 'Founder & Managing Director, MuehlCyberConsulting',
      linkedin: 'https://www.linkedin.com/in/gordonmuehl/',
      bio: t('about.ambassadors.items.2.bio'),
      image: '/images/ambassadors/gordon.png',
    },
    {
      name: 'Dennis Mulder',
      role: 'Co-Founder & CTO, Full Circle IT NL',
      linkedin: 'https://www.linkedin.com/in/dennismulder/',
      bio: t('about.ambassadors.items.3.bio'),
      image: '/images/ambassadors/dennis.jpg',
    },
    {
      name: 'Oskar Brink',
      role: 'Independent Cyber Security and Risk Manager',
      linkedin: 'https://www.linkedin.com/in/oskarbrink/',
      bio: t('about.ambassadors.items.4.bio'),
      image: '/images/ambassadors/oskar.jpg',
    },
    {
      name: 'Robert Bals',
      role: 'Lead Auditor ISO 27001 & Data Protection Officer, IsoSecure',
      linkedin: 'https://www.linkedin.com/in/rbals/',
      bio: t('about.ambassadors.items.5.bio'),
      image: '/images/ambassadors/robert.jpg',
    },
    // { // This text will need to be updated before it goes live again
    //   name: 'Alexandra Roger-Machart',
    //   role: 'Independent Communications & Media Relations Advisor',
    //   linkedin:
    //     'https://www.linkedin.com/in/alexandra-roger-machart-senior-manager-corporate-communications/',
    //   bio: t('about.ambassadors.items.5.bio'),
    //   image: '/images/ambassadors/alexandra.jpg',
    // },
  ]

  const storyRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const ambassadorsRef = useRef<HTMLDivElement>(null)

  const storyInView = useInView(storyRef, { once: true, amount: 0.2 })
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 })
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' })
  const ambassadorsInView = useInView(ambassadorsRef, {
    once: true,
    margin: '-100px',
  })

  return (
    <Layout about={true} hero={<AboutHero />} ref={layoutRef}>
      {/* Content */}
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="flex flex-col justify-center-safe gap-32 px-4 py-16 md:container md:mx-auto">
          {/* Our Story */}
          <motion.div
            ref={storyRef}
            initial="hidden"
            animate={storyInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            <motion.div
              variants={staggerContainer}
              className="flex flex-col gap-4 md:justify-center-safe"
            >
              <motion.h2
                variants={slideInLeft}
                className="text-4xl sm:text-5xl"
              >
                {t('about.story.title')}
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                className="flex flex-col gap-4 text-lg text-white/70"
              >
                {(t.raw('about.story.paragraphs') as string[]).map(
                  (paragraph, index) => (
                    <motion.p key={index} variants={slideInLeft}>
                      {paragraph}
                    </motion.p>
                  )
                )}
              </motion.div>
            </motion.div>
            <motion.div
              variants={slideInRight}
              className="relative flex items-center-safe justify-center-safe lg:basis-1/2"
            >
              <Card className="flex p-2 hover:bg-white/10">
                <img
                  src="/images/team/new-team.jpg"
                  alt="Modelverse team of eight members, photographed together in their bright, modern office headquarters."
                  className="aspect-video rounded-lg object-cover"
                />
              </Card>
            </motion.div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            ref={valuesRef}
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h2 className="text-4xl sm:text-5xl">
                {t('about.values.title')}
              </h2>
              <p className="text-xl text-white/70">
                {t('about.values.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {values.map((value, index) => (
                <motion.div variants={scaleIn} key={index}>
                  <Card className="group relative size-full shadow-md transition-all duration-300 hover:border-lime-500/70 hover:shadow-lime-500/70">
                    <div className="absolute inset-0 rounded-lg bg-linear-to-br group-hover:from-lime-500/10 group-hover:to-teal-500/10" />
                    <div className="relative z-1 flex flex-col gap-2">
                      <div className="mb-4 flex w-fit items-center justify-center rounded-xl bg-linear-to-br from-lime-500 to-teal-500 p-2">
                        <value.icon className="size-6" />
                      </div>
                      <h3 className="mb-2 text-xl">
                        {t(`about.values.items.${value.key}.title`)}
                      </h3>
                      <p className="text-white/70">
                        {t(`about.values.items.${value.key}.description`)}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Team */}
          <motion.div
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="flex flex-col gap-8 text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h2 className="text-4xl sm:text-5xl">{t('about.team.title')}</h2>
              <p className="text-xl text-white/70">
                {t('about.team.subtitle')}
              </p>
            </motion.div>

            {/* Old version */}
            {/* <motion.div
              variants={staggerContainer}
              className="grid max-w-7xl grid-cols-1 gap-4 self-center md:grid-cols-3 lg:grid-cols-10"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  variants={scaleIn}
                  key={index}
                  className="lg:col-span-2 lg:nth-1:col-start-2"
                >
                  <Card className="size-full bg-white/5 p-0 hover:border-lime-500/50 hover:bg-white/10">
                    <img
                      src={member.image}
                      className="rounded-t-xl"
                      alt={member.name}
                    />
                    <div className="flex grow flex-col p-4">
                      <h3 className="mb-2 text-lg">{member.name}</h3>
                      <p className="mb-4 bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text font-semibold text-transparent">
                        {member.role}
                      </p>
                      <p className="mb-4 text-left text-white/70">
                        {member.bio}
                      </p>
                      <div className="flex grow flex-row items-end gap-2">
                        <a
                          href={member.linkedin}
                          className="flex w-fit items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors duration-300 hover:bg-white/20"
                        >
                          <LinkedinIcon className="size-6" />
                        </a>
                        <a
                          href={member.mail}
                          className="flex w-fit items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors duration-300 hover:bg-white/20"
                        >
                          <Mail className="size-6" />
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div> */}

            {/* New version */}
            <motion.div
              variants={staggerContainer}
              className="max-w-8xl mx-auto flex flex-wrap justify-center gap-4"
            >
              {teamMembers.map((member, index) => (
                <Fragment key={index}>
                  <motion.div variants={scaleIn} className="max-w-64">
                    <Card className="size-full bg-white/5 p-0 hover:border-lime-500/50 hover:bg-white/10">
                      <img
                        src={member.image}
                        className="rounded-t-xl"
                        alt={member.name}
                      />
                      <div className="flex grow flex-col p-4">
                        <h3 className="mb-2 text-lg">{member.name}</h3>
                        <p className="mb-4 bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text font-semibold text-transparent">
                          {member.role}
                        </p>
                        <p className="mb-4 text-left text-white/70">
                          {member.bio}
                        </p>
                        <div className="flex grow flex-row items-end gap-2">
                          <a
                            href={member.linkedin}
                            className="flex w-fit items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors duration-300 hover:bg-white/20"
                          >
                            <LinkedinIcon className="size-6" />
                          </a>
                          <a
                            href={member.mail}
                            className="flex w-fit items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors duration-300 hover:bg-white/20"
                          >
                            <Mail className="size-6" />
                          </a>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  {index === 2 && <div className="hidden w-full lg:block" />}
                </Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* Ambassadors */}
          <motion.div
            ref={ambassadorsRef}
            initial="hidden"
            animate={ambassadorsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="flex flex-col gap-8 text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto flex max-w-4xl flex-col gap-4 text-center"
            >
              <h2 className="text-4xl sm:text-5xl">
                {t('about.ambassadors.title')}
              </h2>
              <p className="text-xl text-white/70">
                {t('about.ambassadors.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 gap-4 lg:grid-cols-4"
            >
              {ambassadors.map((ambassador, index) => (
                <motion.div
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  key={index}
                  className="lg:col-span-2"
                >
                  <Card className="size-full gap-4 overflow-hidden bg-white/5 p-0 text-left hover:border-lime-500/50 hover:bg-white/10">
                    <div className="flex flex-col gap-4 px-4 pt-4 sm:flex-row sm:items-center-safe">
                      <Avatar className="size-48 shrink-0 self-center md:size-38">
                        <AvatarImage
                          src={ambassador.image}
                          className="object-cover object-center"
                        />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                      <div className="flex size-full grow flex-row justify-between gap-4">
                        <div className="flex flex-col justify-center-safe gap-2">
                          <h3 className="text-xl">{ambassador.name}</h3>
                          <p className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text font-semibold text-transparent">
                            {ambassador.role}
                          </p>
                        </div>
                        <a
                          href={ambassador.linkedin}
                          className="flex size-fit items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors duration-300 hover:bg-white/20"
                        >
                          <LinkedinIcon className="size-6" />
                        </a>
                      </div>
                    </div>
                    <div className="flex grow flex-col gap-4 bg-lime-500/10 p-4 sm:flex-row">
                      <PencilLine className="hidden size-6 shrink-0 text-lime-500 opacity-50 sm:block" />
                      <div>
                        {ambassador.bio.split('\n').map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="mb-4 text-sm text-white/70"
                          >
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
