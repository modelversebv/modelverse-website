import { GoogleMapEmbed } from '@/components/app/embed/googleMapEmbed'
import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const ContactHero = (
  <Hero className="items-center-safe justify-center-safe text-center md:max-w-4xl">
    <h1 className="text-5xl sm:text-6xl">Get in Touch</h1>
    <p className="text-xl text-gray-600">
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
    <Layout contact={true} hero={ContactHero}>
      <div className="bg-gray-50">
        <div className="flex flex-col justify-center-safe gap-16 px-4 py-16 md:container md:mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-white">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500/10 to-teal-500/10">
                  <contact.icon className="size-6 text-amber-500" />
                </div>
                <h3 className="mb-2 text-xl text-gray-900">{contact.title}</h3>
                <p className="text-gray-900">{contact.primary}</p>
                <p className="text-gray-600">{contact.secondary}</p>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* <Card className="gap-4 bg-white">
              <div className="flex flex-row gap-2">
                <MessageSquare className="size-6 self-center text-amber-500" />
                <h1 className="text-xl">Send us a Message</h1>
              </div>
              <FormInput
                type="text"
                id={'firstName'}
                label={'First Name *'}
                placeholder="First Name"
              />
              <FormInput
                type="text"
                id={'lastName'}
                label={'Last Name *'}
                placeholder="Last Name"
              />
              <FormInput
                type="email"
                id={'email'}
                label={'Email *'}
                placeholder="example@email.com"
              />
              <FormInput
                type="text"
                id={'company'}
                label={'Company'}
                placeholder="Your Company Name"
              />
              <FormTextArea
                id={'message'}
                label={'Message *'}
                placeholder="Tell us about your needs..."
              />
              <button className="flex flex-row justify-center-safe gap-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500 px-3 py-1 font-semibold text-white">
                Send Message
                <Send className="size-4 self-center" />
              </button>
            </Card> */}

            <div className="flex flex-col gap-8">
              <h1 className="text-center text-4xl">
                Frequently Asked Questions
              </h1>
              <div className="flex flex-col gap-4">
                <Card className="gap-4 bg-white">
                  <h1 className="text-lg">
                    What is your response time for inquiries?
                  </h1>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24 hours during
                    business days. Enterprise customers receive priority support
                    with faster response times.
                  </p>
                </Card>
                <Card className="gap-4 bg-white">
                  <h1 className="text-lg">Do you offer personalized demos?</h1>
                  <p className="text-gray-600">
                    Yes! We provide customized demos tailored to your
                    organization's specific needs and use cases. Simply select
                    "Book a meeting" in the top navigation bar.
                  </p>
                </Card>
                {/* <Card className="gap-4 bg-white">
                  <h1 className="text-lg">
                    Can I schedule a call with your sales team?
                  </h1>
                  <p className="text-gray-600">
                    Absolutely. After submitting the form, our sales team will
                    reach out to schedule a convenient time for a call or video
                    meeting.
                  </p>
                </Card> */}
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
