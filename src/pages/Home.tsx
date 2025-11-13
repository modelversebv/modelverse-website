// import YouTubeEmbed from '@/components/app/embed/youtubeEmbed'
import { Banner } from '@/components/app/misc/banner'
import { ContentSection } from '@/components/app/misc/contentSection'
import { Layout } from '@/components/layout'
import infoFile from '@/data/home.yaml?raw'
import { parse } from 'yaml'

type Message = {
  caption: string
  message: string
}

type Button = {
  text: string
  url: string
}

type Info = {
  title: string
  message: string
  button: Button
  list: Message[]
}

const homeBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">We Secure - You Succeed</h1>
    <p className="text-lg">
      Manage Security, Safety and Sustainability with the unique, modern
      Modelverse Solution.
    </p>
    <button
      className="cursor-pointer rounded-full bg-black font-semibold shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/50"
      onClick={() =>
        (window.location.href =
          'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
      }
    >
      <div className="size-full rounded-full bg-gradient-to-r from-green-500/60 to-teal-500/60 px-3 py-1">
        Book a Demo
      </div>

      {/* <div className="bg-linear-to-tl from-green-500 to-teal-500 bg-clip-text text-transparent"> */}
      {/* </div> */}
    </button>
  </Banner>
)

export function Home() {
  const info = parse(infoFile)

  return (
    <Layout home={true} banner={homeBanner}>
      <ContentSection className="flex flex-col gap-8">
        <h1 className="text-center text-4xl font-bold text-white">
          Why Modelverse?
        </h1>
        <div className="flex flex-col">
          {info.map((item: Info, index: number) => (
            <div
              key={index}
              className="group flex w-full basis-1/3 flex-col items-center-safe gap-8 rounded-lg bg-white p-8"
            >
              <h1 className="text-center text-2xl font-bold text-amber-500">
                {item.title}
              </h1>
              {item.message && <p className="text-sm">{item.message}</p>}
            </div>
          ))}
        </div>
      </ContentSection>
    </Layout>
  )
}
