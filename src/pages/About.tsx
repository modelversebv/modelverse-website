// Importing pfps
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from '@/animations/variants'
import benImage from '@/assets/team/Ben - web.jpg'
import bozhenaImage from '@/assets/team/Bozhena - web.jpg'
import daanImage from '@/assets/team/Daan - web.jpg'
import liliImage from '@/assets/team/Lili - web.jpg'
import mariaImage from '@/assets/team/Maria - web.jpg'
import marionaImage from '@/assets/team/Mariona - web.jpg'
import mateiImage from '@/assets/team/Matei - web.jpg'
import reshmaImage from '@/assets/team/Reshma - web.jpg'
import sjorsImage from '@/assets/team/Sjors - web.jpg'
import teamImage from '@/assets/team/Team minus Michel - web.jpg'
import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Book,
  Eye,
  Linkedin,
  Mail,
  PencilLine,
  Shield,
  User,
} from 'lucide-react'
import { motion, useInView } from 'motion/react'

export function AboutPage() {
  const layoutRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  const AboutHero = (
    <Hero
      className="items-center-safe justify-center-safe text-center text-white md:max-w-4xl"
      backgroundClassName="object-[center_70%]"
      backgroundImg="/images/heroes/about.avif"
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

  // Data
  const values = [
    { icon: User, key: 'customer_first' },
    { icon: Shield, key: 'security_by_design' },
    { icon: Eye, key: 'transparency' },
    { icon: Book, key: 'continuous_learning' },
  ]

  const teamMembers = [
    {
      name: 'Ben Krutzen',
      role: 'CEO & CTO | Co-Founder',
      bio: t('about.team.members.0.bio'),
      image: benImage,
      linkedin: 'https://www.linkedin.com/in/benkrutzen/',
      mail: 'mailto:ben@modelverse.online',
    },
    {
      name: 'Reshma Pandohi Mishre',
      role: 'Partner | Co-Founder',
      bio: t('about.team.members.1.bio'),
      image: reshmaImage,
      linkedin: 'https://www.linkedin.com/in/reshmapandohi/',
      mail: 'mailto:reshma@modelverse.online',
    },
    {
      name: 'Daan Loyens',
      role: 'CFO & COO | Co-Founder',
      bio: t('about.team.members.2.bio'),
      image: daanImage,
      linkedin: 'https://www.linkedin.com/in/dl11235813213456/',
      mail: 'mailto:daan@modelverse.online',
    },
    {
      name: 'Lili Guo',
      role: 'Partner | CISO',
      bio: t('about.team.members.3.bio'),
      image: liliImage,
      linkedin: 'https://www.linkedin.com/in/lili-guo-3941b126/',
      mail: 'mailto:Lili@modelverse.online',
    },
    {
      name: 'Bozhena Kovtun',
      role: 'Office Manager',
      bio: t('about.team.members.4.bio'),
      image: bozhenaImage,
      linkedin: 'https://www.linkedin.com/in/bozhena-kovtun-0a106619b/',
      mail: 'mailto:bozhena@valuetracks.io',
    },
    {
      name: 'Mariona Fortuny Jané',
      role: 'Risk Consultant',
      bio: t('about.team.members.5.bio'),
      image: marionaImage,
      linkedin: 'https://www.linkedin.com/in/mariona-fortuny-jan%C3%A9/',
      mail: 'mailto:mariona@modelverse.online',
    },
    {
      name: 'Sjors de Natris',
      role: 'Risk Consultant & Security Engineer',
      bio: t('about.team.members.6.bio'),
      image: sjorsImage,
      linkedin: 'https://www.linkedin.com/in/sjors-de-natris-470a51198/',
      mail: 'mailto:sjors@modelverse.online',
    },
    {
      name: 'Matei Avram',
      role: 'Software Engineer',
      bio: t('about.team.members.7.bio'),
      image: mateiImage,
      linkedin: 'https://www.linkedin.com/in/matei-avram-919771251/',
      mail: 'mailto:matei@modelverse.online',
    },
    {
      name: 'Maria Litvinova',
      role: 'Risk Consultant',
      bio: t('about.team.members.8.bio'),
      image: mariaImage,
      linkedin: 'https://www.linkedin.com/in/maria-litvinova-370063317/',
      mail: 'mailto:maria@modelverse.online',
    },
  ]

  const ambassadors = [
    {
      name: 'Jan-Willem Klerkx',
      role: 'Co-Founder & CEO, BonCode',
      linkedin: 'https://www.linkedin.com/in/jwklerkx/',
      bio: t('about.ambassadors.items.0.bio'),
      image: 'images/ambassadors/jan-willem.jpg',
    },
    {
      name: 'Gordon Muehl',
      role: 'Founder & Managing Director, MuehlCyberConsulting',
      linkedin: 'https://www.linkedin.com/in/gordonmuehl/',
      bio: t('about.ambassadors.items.1.bio'),
      image: 'images/ambassadors/gordon.png',
    },
    {
      name: 'Dennis Mulder',
      role: 'Co-Founder & CTO, Full Circle IT NL',
      linkedin: 'https://www.linkedin.com/in/dennismulder/',
      bio: t('about.ambassadors.items.2.bio'),
      image: 'images/ambassadors/dennis.jpg',
    },
    {
      name: 'Oskar Brink',
      role: 'Independent Cyber Security and Risk Manager',
      linkedin: 'https://www.linkedin.com/in/oskarbrink/',
      bio: t('about.ambassadors.items.3.bio'),
      image: 'images/ambassadors/oskar.jpg',
    },
    {
      name: 'Robert Bals',
      role: 'Lead Auditor ISO 27001 & Data Protection Officer, IsoSecure',
      linkedin: 'https://www.linkedin.com/in/rbals/',
      bio: t('about.ambassadors.items.4.bio'),
      image: 'images/ambassadors/robert.jpg',
    },
    {
      name: 'Alexandra Roger-Machart',
      role: 'Independent Communications & Media Relations Advisor',
      linkedin:
        'https://www.linkedin.com/in/alexandra-roger-machart-senior-manager-corporate-communications/',
      bio: t('about.ambassadors.items.5.bio'),
      image: 'images/ambassadors/alexandra.jpg',
    },
  ]

  // Framer Motion
  // Refs for scroll-triggered animations
  const storyRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const ambassadorsRef = useRef<HTMLDivElement>(null)

  // Track visibility for animations
  const storyInView = useInView(storyRef, { once: true, amount: 0.2 })
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 })
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' })
  const ambassadorsInView = useInView(ambassadorsRef, {
    once: true,
    margin: '-100px',
  })

  return (
    <Layout about={true} hero={AboutHero} ref={layoutRef}>
      {/* Metadata */}
      <title>Modelverse | About Us</title>
      <meta
        name="description"
        content="Learn about the Modelverse team, our mission to simplify GRC, and our commitment to building the future of enterprise risk management software."
      />

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
              <motion.h1
                variants={slideInLeft}
                className="text-4xl sm:text-5xl"
              >
                {t('about.story.title')}
              </motion.h1>
              <motion.div
                variants={staggerContainer}
                className="flex flex-col gap-4 text-lg text-white/70"
              >
                {(
                  t('about.story.paragraphs', {
                    returnObjects: true,
                  }) as string[]
                ).map((paragraph, index) => (
                  <motion.p key={index} variants={slideInLeft}>
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              variants={slideInRight}
              className="relative flex items-center-safe justify-center-safe lg:basis-1/2"
            >
              <Card className="flex p-2 hover:bg-white/10">
                <img
                  src={teamImage}
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
              <h1 className="text-4xl sm:text-5xl">
                {t('about.values.title')}
              </h1>
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

          {/* Maybe add Milestones */}

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
              <h1 className="text-4xl sm:text-5xl">{t('about.team.title')}</h1>
              <p className="text-xl text-white/70">
                {t('about.team.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid max-w-7xl grid-cols-1 gap-4 self-center sm:grid-cols-2 lg:grid-cols-3"
            >
              {teamMembers.map((member, index) => (
                <motion.div variants={scaleIn} key={index}>
                  <Card className="size-full bg-white/5 p-0 hover:border-lime-500/50 hover:bg-white/10">
                    <img src={member.image} className="rounded-t-xl" alt="" />
                    <div className="flex grow flex-col p-4">
                      <h1 className="mb-2 text-xl">{member.name}</h1>
                      <h1 className="mb-4 bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text font-semibold text-transparent">
                        {member.role}
                      </h1>
                      <p className="mb-4 text-left text-white/70">
                        {member.bio}
                      </p>
                      <div className="flex grow flex-row items-end gap-2">
                        <a
                          href={member.linkedin}
                          className="flex w-fit items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors duration-300 hover:bg-white/20"
                        >
                          <Linkedin className="size-6" />
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
              <h1 className="text-4xl sm:text-5xl">
                {t('about.ambassadors.title')}
              </h1>
              <p className="text-xl text-white/70">
                {t('about.ambassadors.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 gap-4 lg:grid-cols-2"
            >
              {ambassadors.map((ambassador, index) => (
                <motion.div
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  key={index}
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
                          <h1 className="text-xl">{ambassador.name}</h1>
                          <h1 className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text font-semibold text-transparent">
                            {ambassador.role}
                          </h1>
                        </div>
                        <a
                          href={ambassador.linkedin}
                          className="flex size-fit items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors duration-300 hover:bg-white/20"
                        >
                          <Linkedin className="size-6" />
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
