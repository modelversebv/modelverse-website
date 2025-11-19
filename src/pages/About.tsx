import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Book, Eye, Linkedin, Mail, Shield, User } from 'lucide-react'

const AboutHero = (
  <Hero className="items-center-safe justify-center-safe text-center md:max-w-4xl">
    <div className="flex w-fit flex-row items-center-safe justify-center-safe gap-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 px-3 py-1 font-semibold text-amber-500">
      <p className="text-sm">About Modelverse</p>
    </div>
    <h1 className="text-5xl sm:text-6xl">
      We're on a Mission to Democratize Cybersecurity
    </h1>
    <p className="text-xl text-gray-600">
      Making enterprise-grade information risk management accessible to
      organizations of all sizes.
    </p>
  </Hero>
)

export function AboutPage() {
  const teamMembers = [
    {
      name: 'Ben',
      role: 'CEO & CTO | Co-Founder',
      bio: 'Ben is the creator of Modelverse, driven by a passion for turning strategy into action. With over 25 years at Shell and later as a partner at KPMG, Ben helped organizations navigate complex challenges across transformation, risk, and technology. He holds a PhD in theoretical physics and once explored black holes at Imperial College London—before diving into the world of business.',
      image: 'images/new_pfps/Ben - web.jpg',
      linkedin: 'https://www.linkedin.com/in/benkrutzen/',
      mail: 'mailto:ben@modelverse.online',
    },
    {
      name: 'Reshma',
      role: 'Partner | Co-Founder',
      bio: 'Reshma brings deep expertise in strategic information management and cybersecurity, with a clear, structured approach to tackling complex challenges. Reshma held a variety of IT leadership an Security roles across international corporates and the energy sector. She holds an MSc in Applied Physics and an executive MSc in Cyber Security.',
      image: 'images/new_pfps/Reshma - web.jpg',
      linkedin: 'https://www.linkedin.com/in/reshmapandohi/',
      mail: 'mailto:reshma@modelverse.online',
    },
    {
      name: 'Daan',
      role: 'CFO & COO | Co-Founder',
      bio: 'Daan is an experienced entrepreneur and IT leader who’s passionate about using modern technology to help organizations tackle real-world challenges. Daan brings broad insight as a strategist, investor, and trusted cybersecurity advisor. He holds a PhD and MSc in Computing Science, along with an executive MSc in Cyber Security.',
      image: 'images/new_pfps/Daan - web.jpg',
      linkedin: 'https://www.linkedin.com/in/dl11235813213456/',
      mail: 'mailto:daan@modelverse.online',
    },
    {
      name: 'Lili',
      role: 'Partner | CISO',
      bio: 'Lili is a governance expert with deep experience in health, cybersecurity and patient safety. Before becoming a partner, Lili spent 12 years at the Dutch Ministry of Health, working on organ donation, e-health, and cybersecurity. She holds a Cum Laude BSc in Biomedical Science, a Cum Laude MSc in Neuroscience, and a Summa Cum Laude MSc in Cyber Security Governance.',
      image: 'images/new_pfps/Lili - web.jpg',
      linkedin: 'https://www.linkedin.com/in/lili-guo-3941b126/',
      mail: 'mailto:Lili@modelverse.online',
    },
    {
      name: 'Bozhena',
      role: 'Office Manager',
      bio: 'Bozhena smoothly runs the back-office, always friendly, accessible, and business-smart.',
      image: 'images/new_pfps/Bozhena - web.jpg',
      linkedin: 'https://www.linkedin.com/in/bozhena-kovtun-0a106619b/',
      mail: 'mailto:bozhena@valuetracks.io',
    },
    {
      name: 'Mariona',
      role: 'Risk Consultant',
      bio: 'Mariona researches, interprets, structures and creates cybersecurity risk models and ESG models for enterprise clients.',
      image: 'images/new_pfps/Mariona - web.jpg',
      linkedin: 'https://www.linkedin.com/in/mariona-fortuny-jan%C3%A9/',
      mail: 'mailto:mariona@modelverse.online',
    },
    {
      name: 'Sjors',
      role: 'Risk Consultant & Security Engineer',
      bio: 'Sjors is focused on risk management and platform improvements using cloud services and security infrastructure.',
      image: 'images/new_pfps/Sjors - web.jpg',
      linkedin: 'https://www.linkedin.com/in/sjors-de-natris-470a51198/',
      mail: 'mailto:sjors@modelverse.online',
    },
    {
      name: 'Matei',
      role: 'Software Engineer',
      bio: 'Matei develops and maintains the website, helps implement DevOps practices, and supports the development of the cybersecurity platform.',
      image: 'images/new_pfps/Matei - web.jpg',
      linkedin: 'https://www.linkedin.com/in/matei-avram-919771251/',
      mail: 'mailto:matei@modelverse.online',
    },
  ]

  const values = [
    {
      icon: User,
      title: 'Customer First',
      description:
        "We build products that solve real problems. Our customers' success is our success.",
    },
    {
      icon: Shield,
      title: 'Security by Design',
      description:
        "Security isn't an afterthought—it's built into everything we do, from code to culture.",
    },
    {
      icon: Eye,
      title: 'Transparency',
      description:
        'We believe in open communication with our customers, partners, and each other.',
    },
    {
      icon: Book,
      title: 'Continuous Learning',
      description:
        'The threat landscape evolves daily. We stay ahead through constant innovation and education.',
    },
  ]

  // const milestones = [
  //   {
  //     year: '2021',
  //     title: 'Company Founded',
  //     description:
  //       'Modelverse was born from a vision to make enterprise security accessible to all.',
  //   },
  //   {
  //     year: '2022',
  //     title: 'First 100 Customers',
  //     description:
  //       'Reached our first major milestone, helping organizations across diverse industries.',
  //   },
  //   {
  //     year: '2023',
  //     title: 'Series A Funding',
  //     description:
  //       'Raised $15M to accelerate product development and expand our team.',
  //   },
  //   {
  //     year: '2024',
  //     title: 'ISO 27001 Certified',
  //     description:
  //       'Achieved ISO 27001 certification, demonstrating our commitment to security excellence.',
  //   },
  //   {
  //     year: '2025',
  //     title: 'Global Expansion',
  //     description:
  //       'Opened offices in Europe and Asia, serving customers on three continents.',
  //   },
  // ]

  return (
    <Layout about={true} hero={AboutHero}>
      <div className="bg-gray-50">
        <div className="flex flex-col justify-center-safe gap-8 px-4 py-16 sm:gap-16 sm:px-8 sm:py-32 md:container md:mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4 md:justify-center-safe">
              <h1 className="text-4xl sm:text-5xl">Our Story</h1>
              <div className="flex flex-col gap-4 text-lg text-gray-600">
                <p>
                  Modelverse was founded in 2023 by a team of cybersecurity
                  veterans who witnessed firsthand the challenges small and
                  medium-sized organizations face when trying to implement
                  enterprise-grade security programs.
                </p>
                <p>
                  We saw companies struggling with complex compliance
                  requirements, limited resources, and a shortage of security
                  talent. Meanwhile, enterprise security solutions were either
                  too expensive, too complex, or simply not designed for
                  organizations with fewer than 10,000 employees.
                </p>
                <p>
                  We knew there had to be a better way. That's why we built
                  Modelverse—a platform that brings the power of enterprise
                  security to organizations of all sizes, with the simplicity
                  and affordability that growing businesses need.
                </p>
              </div>
            </div>
            <div className="size-full min-h-[400px] rounded-lg bg-black" />
          </div>

          <div className="flex flex-col gap-8">
            <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
              <h1 className="text-4xl sm:text-5xl">Our Values</h1>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do at Modelverse.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-white transition-all duration-300 hover:border-green-500 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500/10 to-teal-500/10">
                    <value.icon className="size-6 text-amber-500" />
                  </div>
                  <h3 className="mb-2 text-xl text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Maybe add Milestones */}

          <div className="flex flex-col gap-8 text-center">
            <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
              <h1 className="text-4xl sm:text-5xl">Meet the Team</h1>
              <p className="text-xl text-gray-600">
                The passionate people behind Modelverse.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div
                  className="flex flex-col rounded-lg border bg-white text-left"
                  key={index}
                >
                  <img src={member.image} className="rounded-t-lg" alt="" />
                  <div className="flex grow flex-col p-8">
                    <h1 className="mb-2 text-xl">{member.name}</h1>
                    <h1 className="mb-4 text-amber-500">{member.role}</h1>
                    <p className="mb-4 text-gray-600">{member.bio}</p>
                    <div className="flex grow flex-row items-end gap-2 text-amber-500">
                      <a
                        href={member.linkedin}
                        className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-r from-green-500/10 to-teal-500/10 transition-colors hover:from-green-500/20 hover:to-teal-500/20"
                      >
                        <Linkedin className="size-6" />
                      </a>
                      <a
                        href={member.mail}
                        className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-r from-green-500/10 to-teal-500/10 transition-colors hover:from-green-500/20 hover:to-teal-500/20"
                      >
                        <Mail className="size-6" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
