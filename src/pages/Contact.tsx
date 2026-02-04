import { GoogleMapEmbed } from '@/components/app/embed/googleMapEmbed'
import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const ContactHero = (
  <Hero
    className="items-center-safe justify-center-safe text-center text-white md:max-w-4xl"
    backgroundClassName="object-[center_80%]"
    backgroundImg="/images/heroes/contact.avif"
    overlay
  >
    <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
      <p className="text-sm">Contact Us</p>
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

  return (
    <Layout hero={ContactHero}>
      {/* Metadata */}
      <title>Modelverse | Contact Us</title>
      <meta
        name="description"
        content="Ready to simplify your GRC? Contact the Modelverse team to schedule a personalized demo, get pricing information, or request technical support."
      />

      {/* Content */}
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="flex flex-col justify-center-safe gap-32 px-4 py-16 md:container md:mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="bg-white/5 hover:border-lime-500/50 hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-lime-500 to-teal-500">
                  <contact.icon className="size-6" />
                </div>
                <h3 className="mb-2 text-xl">{contact.title}</h3>
                <p className="text-white/90">{contact.primary}</p>
                <p className="text-white/70">{contact.secondary}</p>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <h1 className="text-center text-4xl">
                Frequently Asked Questions
              </h1>
              <div className="flex flex-col gap-4">
                <Card className="gap-4 bg-white/5 p-8 hover:border-lime-500/50 hover:bg-white/10">
                  <h1 className="text-lg">
                    What is your response time for inquiries?
                  </h1>
                  <p className="text-white/70">
                    We typically respond to all inquiries within 24 hours during
                    business days. Enterprise customers receive priority support
                    with faster response times.
                  </p>
                </Card>
                <Card className="gap-4 bg-white/5 p-8 hover:border-lime-500/50 hover:bg-white/10">
                  <h1 className="text-lg">Do you offer personalized demos?</h1>
                  <p className="text-white/70">
                    Yes! We provide customized demos tailored to your
                    organization's specific needs and use cases. Simply select
                    "Book a meeting" in the top navigation bar.
                  </p>
                </Card>
              </div>
            </div>

            <div className="flex flex-col items-center-safe justify-center-safe gap-8 lg:basis-1/2">
              <h1 className="text-center text-4xl">Directions</h1>
              <GoogleMapEmbed className="grow" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
