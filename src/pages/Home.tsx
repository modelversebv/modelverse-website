import { Banner } from '@/components/app/misc/banner'
import { Card } from '@/components/app/misc/card'
import { ContentSection } from '@/components/app/misc/contentSection'

const homeBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">We Secure - You Succeed</h1>
    <p className="text-lg">
      Manage Security, Safety and Sustainability with the unique, modern
      Modelverse Solution.
    </p>
    <button
      className="size-fit cursor-pointer self-center rounded-full bg-black font-semibold shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/50"
      onClick={() =>
        (window.location.href =
          'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
      }
    >
      <div className="size-fit rounded-full bg-gradient-to-r from-green-500/60 to-teal-500/60 px-4 py-2">
        Book a Demo
      </div>
    </button>
  </Banner>
)

export function Home() {
  return (
    <div className="relative mb-12">
      {homeBanner}
      <ContentSection>
        <div className="flex flex-col items-center-safe justify-center-safe gap-8">
          <h1 className="text-center text-4xl font-bold">Why Modelverse?</h1>
          <div className="flex flex-col gap-4 md:flex-row">
            <Card className="basis-1/3">
              <h1 className="text-center text-2xl font-semibold text-amber-500">
                Strategic Risks & Opportunities
              </h1>
              <p>
                Decide what's important, establish a clear roadmap for your
                organisation and achieve your security goals.
              </p>
            </Card>
            <Card className="basis-1/3">
              <h1 className="text-center text-2xl font-semibold text-amber-500">
                Efficient Control and Assurance
              </h1>
              <p>
                Use automation and AI to ensure operational control and
                assurance success.
              </p>
            </Card>
            <Card className="basis-1/3">
              <h1 className="text-center text-2xl font-semibold text-amber-500">
                Seamless Integration
              </h1>
              <p>
                Leverage the robust Azure, Power Platform and AI Modelverse
                features to integrate with your systems of choice.
              </p>
            </Card>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
