import YouTubeEmbed from '@/components/app/embed/youtubeEmbed'
import { Banner } from '@/components/app/misc/banner'
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
    <h1 className="text-4xl font-bold">Secure Your Future</h1>
    <p className="text-lg">
      Manage Security, Safety and Sustainability with the unique, modern
      Modelverse Solution.
    </p>
    <button
      className="cursor-pointer rounded-full bg-white px-4 py-2 font-bold transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/50"
      onClick={() =>
        (window.location.href =
          'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
      }
    >
      <div className="bg-linear-to-tl from-green-500 to-teal-500 bg-clip-text text-transparent">
        Book a Demo
      </div>
    </button>
  </Banner>
)

export function Home() {
  const info = parse(infoFile)

  return (
    <Layout home={true} banner={homeBanner}>
      <div className="mx-4 flex flex-col items-center-safe justify-center-safe gap-8 md:mx-32">
        <h1 className="text-center text-4xl font-bold">Why Modelverse?</h1>
        <div className="flex flex-col gap-8 lg:flex-row">
          {info.map((item: Info, index: number) => (
            <div
              key={index}
              className="group flex w-full basis-1/3 flex-col items-center-safe gap-8 rounded-lg bg-linear-to-tl from-green-500/10 to-teal-500/10 p-8"
            >
              <h1 className="text-center text-2xl font-bold text-amber-500">
                {item.title}
              </h1>
              {item.message && <p className="text-sm">{item.message}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4 flex flex-col items-center-safe justify-center-safe gap-8 text-center md:mx-32 xl:mx-64">
        <h1 className="text-center text-4xl font-bold">Testimonial</h1>
        <p className="italic">
          Modelverse has transformed our approach to cybersecurity risk
          management.
        </p>
        <p className="text-lg font-bold italic">
          –David Warnink, CIO, Fellowmind
        </p>
        <YouTubeEmbed videoId="XEPf418PJFU" title="Fellowmind Testimonial" />
      </div>
    </Layout>
  )
}
