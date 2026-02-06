import { useRef } from 'react'

import {
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from '@/animations/variants'
import { GoogleMapEmbed } from '@/components/app/embed/googleMapEmbed'
import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Clock, Mail, MapPin, Phone, Shield } from 'lucide-react'
import { motion, useInView } from 'motion/react'

const ContactHero = (
  <Hero
    className="items-center-safe justify-center-safe text-center text-white md:max-w-4xl"
    backgroundClassName="object-[center_80%]"
    backgroundImg="/images/heroes/contact.avif"
    overlay
  >
    <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
      <Shield className="size-5" />
      <p className="text-sm">We secure. You succeed!</p>
    </div>
    <h1 className="text-5xl sm:text-6xl">
      Get in{' '}
      <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
        Touch
      </span>
    </h1>
    <p className="text-xl text-white/70">
      Have questions about Modelverse? Our team is here to help. Reach out and
      we'll respond within 24 hours.
    </p>
  </Hero>
)

export function ContactPage() {
  const layoutRef = useRef<HTMLDivElement>(null)

  // Data
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      primary: 'partners@modelverse.online',
      secondary: 'support@modelverse.online',
    },
    {
      icon: Phone,
      title: 'Phone',
      primary: '+31 6 27612498',
      secondary: 'Mon-Fri, 9:00-18:00 CET',
    },
    {
      icon: MapPin,
      title: 'Office',
      primary: 'Wilhelmina van Pruisenweg 104',
      secondary: '2595 AN The Hague',
    },
    {
      icon: Clock,
      title: 'Support Hours',
      primary: '24/7 for Enterprise Agreements',
      secondary: 'Mon-Fri, 9:00-18:00 CET for Standard',
    },
  ]

  // Framer Motion
  // Refs for scroll-triggered animations
  const detailsRef = useRef<HTMLDivElement>(null)
  const questionsRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  // Track visibility for animations
  const detailsInView = useInView(detailsRef, { once: true, amount: 0.2 })
  const questionsInView = useInView(questionsRef, {
    once: true,
    amount: 0.2,
  })
  const mapsInView = useInView(mapRef, { once: true, amount: 0.2 })

  return (
    <Layout hero={ContactHero} ref={layoutRef}>
      {/* Metadata */}
      <title>Modelverse | Contact Us</title>
      <meta
        name="description"
        content="Ready to simplify your GRC? Contact the Modelverse team to schedule a personalized demo, get pricing information, or request technical support."
      />

      {/* Content */}
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="flex flex-col justify-center-safe gap-32 px-4 py-16 md:container md:mx-auto">
          <motion.div
            ref={detailsRef}
            initial="hidden"
            animate={detailsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
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
          </motion.div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <motion.div
              ref={questionsRef}
              initial="hidden"
              animate={questionsInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="flex flex-col gap-4"
            >
              <motion.h1 variants={fadeInUp} className="text-center text-4xl">
                Frequently Asked Questions
              </motion.h1>
              <motion.div
                variants={staggerContainer}
                className="flex flex-col gap-4"
              >
                <motion.div variants={slideInLeft}>
                  <Card className="gap-4 bg-white/5 p-8 hover:border-lime-500/50 hover:bg-white/10">
                    <h1 className="text-lg">
                      What is your response time for inquiries?
                    </h1>
                    <p className="text-white/70">
                      We typically respond to all inquiries within 24 hours
                      during business days. Enterprise customers receive
                      priority support with faster response times.
                    </p>
                  </Card>
                </motion.div>
                <motion.div variants={slideInLeft}>
                  <Card className="gap-4 bg-white/5 p-8 hover:border-lime-500/50 hover:bg-white/10">
                    <h1 className="text-lg">
                      Do you offer personalized demos?
                    </h1>
                    <p className="text-white/70">
                      Yes! We provide customized demos tailored to your
                      organization's specific needs and use cases. Simply select
                      "Book a meeting" in the top navigation bar.
                    </p>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              ref={mapRef}
              initial="hidden"
              animate={mapsInView ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="flex flex-col items-center-safe gap-4 lg:basis-1/2"
            >
              <motion.h1 variants={fadeInUp} className="text-center text-4xl">
                Directions
              </motion.h1>
              <motion.div
                variants={slideInRight}
                className="h-full min-h-[300px] w-full lg:min-h-0"
              >
                <Card className="size-full bg-white/5 p-0 hover:border-lime-500/50 hover:bg-white/10">
                  <GoogleMapEmbed className="grow border-0" />
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
