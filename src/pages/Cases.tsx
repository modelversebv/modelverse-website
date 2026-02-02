import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { ArrowRight, Info, TrendingUp } from 'lucide-react'

const CasesHero = (
  <Hero
    className="items-center-safe justify-center-safe text-center text-white md:max-w-4xl"
    backgroundClassName="bg-slate-900"
  >
    <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
      <p className="text-sm">Success Stories</p>
    </div>
    {/* <div className="flex w-fit flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-linear-to-r from-green-500/20 to-teal-500/20 px-3 py-1 font-semibold text-amber-500">
      <p className="text-sm">Success Stories</p>
    </div> */}
    <h1 className="text-5xl sm:text-6xl">
      Real Results from{' '}
      <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
        Real Customers
      </span>
    </h1>
    <p className="text-xl text-white/70">
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
        'Fellowmind is one of the largest Microsoft integrators in western Europe and is active in the Netherlands, Poland, Denmark, Sweden and Finland.',
      case: 'Modelverse is used to support the security strategy and manage all information risks across Fellowmind’s different regions. Additionally, data privacy processes are supported, and a continuous improvement program is on its way to execute the security strategy.',
      logo: 'images/new_logos/fellowmind.jpg',
      url: 'https://www.fellowmind.com/',
    },
    {
      name: 'Provincie Flevoland',
      about:
        'The Province of Flevoland is the twelfth and newest province of the Netherlands, established in 1986, when the southern and eastern Flevopolders, together with the Noordoostpolder, were merged into one provincial entity.',
      case: 'We are piloting Modelverse for Flevoland to improve their risk management, increasing the effectiveness of the implemented cybersecurity measures and saving time for the IT, OT and data privacy teams, as well as the CISO.',
      logo: 'images/new_logos/provincie-flevoland.jpg',
      url: 'https://www.flevoland.nl/',
    },
    {
      name: 'PharmaPartners',
      about:
        'Pharmapartners is a leading company in the provision of integrated healthcare systems in the Netherlands, ensuring healthcare providers have access to reliable, up-to-date and complete (patient) information.',
      case: 'We are supporting PharmaPartners with a strategic cyber security plan and a plan ensuring patient safety.',
      logo: 'images/new_logos/pharma-partners.jpg',
      url: 'https://www.pharmapartners.nl/',
    },
    {
      name: 'Thebe',
      about:
        'Thebe provides district nursing, specialist care, home support and day care in 19 municipalities in the Western and central parts of Brabant. They also provide care in 25 residential care centres in the region.',
      case: 'Modelverse is being piloted for Thebe’s digital risk management.',
      logo: 'images/new_logos/thebe.jpg',
      url: 'https://www.thebe.nl/',
    },
    {
      name: '1801',
      about:
        '1801 advises schools and ROCs on learning, teaching and organising education. They support education professionals with all the challenges that education entails, bringing stalled processes in motion and solving strategic issues',
      case: 'Modelverse is used to manage information security and saves the CISO and IT team substantial time and effort.',
      logo: 'images/new_logos/1801.jpg',
      url: 'https://1801.nl/',
    },
    {
      name: 'NPI',
      about:
        'The NPI is the Dutch training provider for physiotherapists. They support paramedical professionals in lifelong learning with courses, training, webinars, e-learning and scientific information services.',
      case: 'NPI uses Modelverse to manage all their information. Compliance is also managed using the functionality for security policies. This way policies can be easily maintained and published to the entire staff.',
      logo: 'images/new_logos/npi.jpg',
      url: 'https://www.npi.nl/',
    },
    {
      name: 'Nedato',
      about:
        'Nedato is the largest Dutch cooperative of potato farmers. They act as a wholesaler connecting potato farmers with the fried potato processing industry.',
      case: 'Nedato is using the digital risk management functionality of Modelverse.',
      logo: 'images/new_logos/nedato.jpg',
      url: 'https://nedato.nl/',
    },
    {
      name: 'NewForrest Fingerfood',
      about:
        'NewForrest Fingerfood is a Dutch company that specializes in producing frozen finger foods, mini snacks, and appetizers for both the retail and food service markets.',
      case: 'NewForrest is using the digital risk management functionality of Modelverse.',
      logo: 'images/new_logos/newForrest.jpg',
      url: 'https://newforrest.nl/',
    },
    {
      name: 'LeydenJar Technology',
      about:
        'LeydenJar Technology is a scale-up that developed a high-performing pure silicon anode for batteries, boosting the energy of batteries by 50%. They are developing their first production plant in the Eindhoven region.',
      case: 'We helped LeydenJar to protect the intellectual property of their core technology using Modelverse.',
      logo: 'images/new_logos/leydan-jar.jpg',
      url: 'https://leyden-jar.com/',
    },
  ]

  return (
    <Layout cases={true} hero={CasesHero}>
      {/* Metadata */}
      <title>Modelverse Cases | Customer Success Stories</title>
      <meta
        name="description"
        content="View how leading enterprises reduced audit time and achieved 100% compliance using the Modelverse Risk & Compliance SaaS platform."
      />

      {/* Content */}
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="flex flex-col gap-8 px-4 pt-16 pb-32 md:container md:mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              className={`min-h-[400px] bg-white/5 p-0 text-white hover:border-lime-500/50 hover:bg-white/10 lg:flex-row ${index % 2 != 0 && 'lg:flex-row-reverse'}`}
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
                  <div className="flex w-fit flex-row gap-2 text-lg text-lime-500">
                    <Info className="size-5 self-center" />
                    About
                  </div>
                  <p className="text-white/70">{study.about}</p>
                </div>
                <div className="flex flex-col justify-center-safe gap-2">
                  <div className="flex w-fit flex-row gap-2 text-lg text-teal-500">
                    <TrendingUp className="size-5 self-center" />
                    Improvements
                  </div>
                  <p className="text-white/70">{study.case}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden bg-linear-to-br from-lime-900/30 via-teal-900/30 to-slate-900">
        {/* Gradients */}
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-linear-to-br from-lime-500/20 to-teal-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-linear-to-br from-teal-500/20 to-emerald-500/20 blur-3xl" />

        {/* Content */}
        <div className="relative z-1 flex flex-col gap-8 px-4 py-16 text-white sm:items-center-safe">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-4xl">Ready to Write Your Success Story?</h1>
            <p className="text-lg text-white/70">
              Join these leading organizations in transforming your risk and
              compliance management.
            </p>
          </div>
          <button
            className="group flex cursor-pointer flex-row justify-center-safe gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-4 py-2 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50 md:w-fit"
            onClick={() =>
              (window.location.href =
                'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
            }
          >
            Request a Demo
            <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </Layout>
  )
}
