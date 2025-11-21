import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Info, TrendingUp } from 'lucide-react'

const CasesHero = (
  <Hero className="items-center-safe justify-center-safe text-center md:max-w-4xl">
    <div className="flex w-fit flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 px-3 py-1 font-semibold text-amber-500">
      <p className="text-sm">Success Stories</p>
    </div>
    <h1 className="text-5xl sm:text-6xl">Customers' Success</h1>
    <p className="text-xl text-gray-600">
      See how organizations like yours are transforming their risk and
      compliance management with Modelverse.
    </p>
  </Hero>
)

type CaseStudy = {
  name: string
  about: string
  case: string
  logo: string
  url: string
}

export function CasesPage() {
  const caseStudies: CaseStudy[] = [
    {
      name: 'Fellowmind',
      about:
        'Fellowmind is one of the largest Microsoft integrators in western Europe active in the Netherlands, Poland, Denmark, Sweden and Finland.',
      case: 'Modelverse is used to support the security strategy and manage all information risks across the regions. Additionally, data privacy processes are supported and a Continuous Improvement program is on its way to execute the security strategy.',
      logo: 'images/new_logos/fellowmind.jpg',
      url: 'https://www.fellowmind.com/',
    },
    {
      name: 'Province Flevoland',
      about:
        'The Province of Flevoland is the twelfth and newest province of the Netherlands, established in 1986, when the southern and eastern Flevopolders, together with the Noordoostpolder, were merged into one provincial entity.',
      case: 'We are piloting Modelverse for Flevoland to improve risk management, increasing effectiveness of the implemented cybersecurity measures and to save time for the CISO team, the IT team, the OT team and the data privacy team.',
      logo: 'images/new_logos/provincie-flevoland.jpg',
      url: 'https://www.flevoland.nl/',
    },
    {
      name: 'PharmaPartners',
      about:
        'Pharmapartners is a leading provider of healthcare systems in the Netherlands. They provide during 40 years key IT systems for General Practitioners and public pharmacies.',
      case: 'We are supporting PharmaPartners with a strategic cyber security plan and a plan for addressing patient safety.',
      logo: 'images/new_logos/pharma-partners.jpg',
      url: 'https://www.pharmapartners.nl/',
    },
    {
      name: 'Thebe',
      about:
        'Thebe provides district nursing, specialist care, home support and day care in 19 municipalities in West and Central Brabant. They also provide care in 25 residential care centres in the region.',
      case: 'Modelverse is being piloted for Digital Risk Management.',
      logo: 'images/new_logos/thebe.jpg',
      url: 'https://www.thebe.nl/',
    },
    {
      name: '1801',
      about:
        '1801 is dedicated to collaborate with education and youth care. They support pupils, students, educational professionals and schools in the Netherlands.',
      case: 'Modelverse is used to manage Information Security and saving substantial team and effort of the CISO team.',
      logo: 'images/new_logos/1801.jpg',
      url: 'https://1801.nl/',
    },
    {
      name: 'NPI',
      about:
        "The NPi is the Dutch training provider for physiotherapists. They support paramedical professionals in 'lifelong learning' with courses, training, webinars, e-learning and scientific information services.",
      case: 'NPI are using Modelverse to manage all information. Compliance is managed using security policies functionality. This way policies are maintained and published to all staff.',
      logo: 'images/new_logos/npi.jpg',
      url: 'https://www.npi.nl/',
    },
    {
      name: 'Nedato',
      about:
        'Nedato is the largest Dutch coorperative of potato farmers. They act as a wholesaler connecting potato farmers with the fried potatoes processing industry.',
      case: 'Nedato is using the Digital Risk Management functionality of Modelverse.',
      logo: 'images/new_logos/nedato.jpg',
      url: 'https://nedato.nl/',
    },
    {
      name: 'NewForrest Fingerfood',
      about:
        'NewForrest Fingerfood is a Dutch company that specializes in producing frozen finger foods, mini snacks, and appetizers for both retail and food service markets.',
      case: 'NewForrest is using the Digital Risk Management functionality of Modelverse.',
      logo: 'images/new_logos/newForrest.jpg',
      url: 'https://newforrest.nl/',
    },
    {
      name: 'LeydenJar Technology',
      about:
        'LeydenJar Technology is a scale up that developed a high-performing pure Silicon anode for batteries, boosting the energy of batteries by 50%. They are developing their first production plant in the Eindhoven region.',
      case: 'We helped LeydenJar to protect its Intellectual Property of their core technology using Modelverse.',
      logo: 'images/new_logos/leydan-jar.jpg',
      url: 'https://leyden-jar.com/',
    },
  ]

  return (
    <Layout cases={true} hero={CasesHero}>
      <div className="bg-gray-50">
        <div className="flex flex-col gap-8 px-4 py-16 md:container md:mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              className={`min-h-[400px] bg-white p-0 lg:flex-row ${index % 2 != 0 && 'lg:flex-row-reverse'}`}
              key={index}
            >
              <div className="flex h-[400px] items-center-safe justify-center-safe lg:basis-1/2">
                <img
                  src={study.logo}
                  alt=""
                  className={`size-full rounded-t-lg object-cover lg:rounded-t-none ${index % 2 != 0 ? 'lg:rounded-r-lg' : 'lg:rounded-l-lg'}`}
                />
              </div>
              <div className="flex flex-col gap-4 p-8 lg:basis-1/2 lg:justify-center-safe">
                <h1 className="text-3xl">{study.name}</h1>
                <div className="flex flex-col justify-center-safe gap-2">
                  <div className="flex w-fit flex-row gap-2 text-lg">
                    <Info className="size-5 self-center text-amber-500" />
                    About
                  </div>
                  <p className="text-gray-600">{study.about}</p>
                </div>
                <div className="flex flex-col justify-center-safe gap-2">
                  <div className="flex w-fit flex-row gap-2 text-lg">
                    <TrendingUp className="size-5 self-center text-green-500" />
                    Improvements
                  </div>
                  <p className="text-gray-600">{study.case}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8 bg-gradient-to-r from-green-500 to-teal-500 px-4 py-16 text-white sm:items-center-safe">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl">Ready to Write Your Success Story?</h1>
          <p className="text-lg">
            Join these leading organizations in transforming your risk and
            compliance management.
          </p>
        </div>
        <button
          className="cursor-pointer rounded-full bg-white px-4 py-2 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/50 sm:w-fit"
          onClick={() =>
            (window.location.href =
              'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
          }
        >
          <div className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
            Request a Demo
          </div>
        </button>
      </div>
    </Layout>
  )
}
