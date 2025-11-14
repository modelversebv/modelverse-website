import { Banner } from '@/components/app/misc/banner'
import { Card } from '@/components/app/misc/card'
import { ContentSection } from '@/components/app/misc/contentSection'

const aboutBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">About Us</h1>
    <p className="text-lg">
      We aim to empower organizations to navigate (cyber) security and
      sustainability risks with confidence and clarity.
    </p>
  </Banner>
)

export function About() {
  return (
    <div className="relative mb-12">
      {aboutBanner}
      <ContentSection>
        <div className="flex flex-col items-center-safe justify-center-safe gap-8">
          <h1 className="text-center text-4xl font-bold">
            Secure Your Future!
          </h1>
          <div className="flex flex-col gap-4 md:flex-row">
            <Card className="basis-1/3">
              <h1 className="text-center text-2xl font-semibold text-amber-500">
                Our Mission
              </h1>
              <p>
                At Modelverse, our mission is to make organisations more secure.
                We strive to deliver an efficient and effective platform that is
                both powerful and user-friendly, enabling organizations to
                protect their (digital) assets and maintain trust with their
                stakeholders.
              </p>
            </Card>
            <Card className="basis-1/3">
              <h1 className="text-center text-2xl font-semibold text-amber-500">
                Our Team
              </h1>
              <p>
                We are experienced professionals from diverse backgrounds,
                including cybersecurity, software development, and business
                strategy. Together, we are dedicated to create Modelverse that
                addresses the evolving challenges of the digital landscape.
              </p>
              <button>More..</button>
            </Card>
            <Card className="basis-1/3">
              <h1 className="text-center text-2xl font-semibold text-amber-500">
                Why Choose Us
              </h1>
              <ul className="list-disc pl-5">
                <li>
                  <span className="font-bold">Expertise:</span> Deep knowledge
                  in cybersecurity, IT, AI, risk management and business
                  sectors.
                </li>
                <li>
                  <span className="font-bold">Innovation:</span> Cutting-edge
                  platform tailored to modern business needs.
                </li>
                <li>
                  <span className="font-bold">Customer Focus:</span> Commitment
                  to exceptional service and support.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
