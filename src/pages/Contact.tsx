import { GoogleMapEmbed } from '@/components/app/embed/googleMapEmbed'
import { Banner } from '@/components/app/misc/banner'
import { Card } from '@/components/app/misc/card'
import { ContentSection } from '@/components/app/misc/contentSection'

const contactBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">Contact Us</h1>
    <p className="text-lg">
      We are here to help you connect, collaborate and co-create
    </p>
  </Banner>
)

export function Contact() {
  const email: string = 'partners@modelverse.online'

  return (
    <div className="relative mb-12">
      {contactBanner}
      <ContentSection bottom={true}>
        <div className="mx-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card>
            <h1 className="text-2xl font-bold text-amber-500">Get in Touch</h1>
            <div>
              Email:{' '}
              <a href={`mailto:${email}`} className="text-teal-500 underline">
                {email}
              </a>
            </div>
            <p>
              Our office is located in the Hague, the international city of
              Peace and Justice. Visit us at the HSD Campus – the heart of Dutch
              cybersecurity innovation:
            </p>
            <ul>
              <li>HSD Campus, 7th floor</li>
              <li>Wilhelmina van Pruisenweg 104</li>
              <li>2595 AN The Hague</li>
              <li>The Netherlands</li>
            </ul>
            <p>
              The HSD Campus is easily accessible by car and public transport.
              From Den Haag Laan van NOI train station, it’s a 10-minute walk or
              a short tram ride via line 2.
            </p>
          </Card>
          <Card>
            <h1 className="text-2xl font-bold text-amber-500">Directions</h1>
            <GoogleMapEmbed />
            <div>
              Parking options: limited space is available in the underground HSD
              Campus garage upon request. Alternatively, nearby garages are:{' '}
              <a
                href="https://maps-web.parkbee.com/nl/pages/garage-details/2281d136-a100-45f6-85a1-9475799c362e"
                className="text-teal-500 underline"
              >
                Parkbee
              </a>
              ,{' '}
              <a
                href="https://www.q-park.nl/nl-nl/parkeren/den-haag/p-r-laan-van-noi/"
                className="text-teal-500 underline"
              >
                Parking P+R Laan van NOI
              </a>{' '}
              or at{' '}
              <a
                href="https://www.interparking.nl/nl-NL/find-parking/WTCTheHague/"
                className="text-teal-500 underline"
              >
                WTC building/NH Hotel.
              </a>
            </div>
          </Card>
        </div>
      </ContentSection>
    </div>
  )
}
