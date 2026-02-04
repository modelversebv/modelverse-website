// Importing pfps
import { useRef } from 'react'

import benImage from '@/assets/team/Ben - web.jpg'
import bozhenaImage from '@/assets/team/Bozhena - web.jpg'
import daanImage from '@/assets/team/Daan - web.jpg'
import liliImage from '@/assets/team/Lili - web.jpg'
import marionaImage from '@/assets/team/Mariona - web.jpg'
import mateiImage from '@/assets/team/Matei - web.jpg'
import reshmaImage from '@/assets/team/Reshma - web.jpg'
import sjorsImage from '@/assets/team/Sjors - web.jpg'
import teamImage from '@/assets/team/Team - web.jpg'
import { Card } from '@/components/app/misc/card'
import { Hero } from '@/components/app/misc/hero'
import { Layout } from '@/components/layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Book,
  Eye,
  Linkedin,
  Mail,
  PencilLine,
  Shield,
  User,
} from 'lucide-react'

const AboutHero = (
  <Hero
    className="items-center-safe justify-center-safe text-center text-white md:max-w-4xl"
    backgroundClassName="object-[center_70%]"
    backgroundImg="/images/heroes/about.avif"
    overlay
  >
    <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-lime-500 shadow-lg backdrop-blur-md">
      <p className="text-sm">About Modelverse</p>
    </div>
    <h1 className="text-5xl sm:text-6xl">
      We're on a Mission to{' '}
      <span className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
        Democratize Risk Management
      </span>
    </h1>
    <p className="text-xl text-white/70">
      Making enterprise-grade information risk management accessible to
      organizations of all sizes.
    </p>
  </Hero>
)

export function AboutPage() {
  const layoutRef = useRef<HTMLDivElement>(null)

  // Data
  const teamMembers = [
    {
      name: 'Ben Krutzen',
      role: 'CEO & CTO | Co-Founder',
      bio: 'Ben is the creator of Modelverse, driven by a passion for turning strategy into action. With over 25 years at Shell and later as a partner at KPMG, Ben helped organizations navigate complex challenges across transformation, risk, and technology. He holds a PhD in theoretical physics and once explored black holes at Imperial College London—before diving into the world of business.',
      image: benImage,
      linkedin: 'https://www.linkedin.com/in/benkrutzen/',
      mail: 'mailto:ben@modelverse.online',
      dob: '',
    },
    {
      name: 'Reshma Pandohi Mishre',
      role: 'Partner | Co-Founder',
      bio: 'Reshma brings deep expertise in strategic information management and cybersecurity, with a clear, structured approach to tackling complex challenges. Reshma held a variety of IT leadership an Security roles across international corporates and the energy sector. She holds an MSc in Applied Physics and an executive MSc in Cyber Security.',
      image: reshmaImage,
      linkedin: 'https://www.linkedin.com/in/reshmapandohi/',
      mail: 'mailto:reshma@modelverse.online',
      dob: '',
    },
    {
      name: 'Daan Loyens',
      role: 'CFO & COO | Co-Founder',
      bio: 'Daan is an experienced entrepreneur and IT leader who’s passionate about using modern technology to help organizations tackle real-world challenges. Daan brings broad insight as a strategist, investor, and trusted cybersecurity advisor. He holds a PhD and MSc in Computing Science, along with an executive MSc in Cyber Security.',
      image: daanImage,
      linkedin: 'https://www.linkedin.com/in/dl11235813213456/',
      mail: 'mailto:daan@modelverse.online',
      dob: '',
    },
    {
      name: 'Lili Guo',
      role: 'Partner | CISO',
      bio: 'Lili is a governance expert with deep experience in health, cybersecurity and patient safety. Before becoming a partner, Lili spent 12 years at the Dutch Ministry of Health, working on organ donation, e-health, and cybersecurity. She holds a Cum Laude BSc in Biomedical Science, a Cum Laude MSc in Neuroscience, and a Summa Cum Laude MSc in Cyber Security Governance.',
      image: liliImage,
      linkedin: 'https://www.linkedin.com/in/lili-guo-3941b126/',
      mail: 'mailto:Lili@modelverse.online',
      dob: '',
    },
    {
      name: 'Bozhena Kovtun',
      role: 'Office Manager',
      bio: 'Bozhena smoothly runs the back-office, always friendly, accessible, and business-smart.',
      image: bozhenaImage,
      linkedin: 'https://www.linkedin.com/in/bozhena-kovtun-0a106619b/',
      mail: 'mailto:bozhena@valuetracks.io',
      dob: '',
    },
    {
      name: 'Mariona Fortuny Jané',
      role: 'Risk Consultant',
      bio: 'Mariona researches, interprets, structures and creates cybersecurity risk models and ESG models for enterprise clients.',
      image: marionaImage,
      linkedin: 'https://www.linkedin.com/in/mariona-fortuny-jan%C3%A9/',
      mail: 'mailto:mariona@modelverse.online',
      dob: '',
    },
    {
      name: 'Sjors de Natris',
      role: 'Risk Consultant & Security Engineer',
      bio: 'Sjors is focused on risk management and platform improvements using cloud services and security infrastructure.',
      image: sjorsImage,
      linkedin: 'https://www.linkedin.com/in/sjors-de-natris-470a51198/',
      mail: 'mailto:sjors@modelverse.online',
      dob: '',
    },
    {
      name: 'Matei Avram',
      role: 'Software Engineer',
      bio: 'Matei develops and maintains the website, helps implement DevOps practices, and supports the development of the Modelverse platform.',
      image: mateiImage,
      linkedin: 'https://www.linkedin.com/in/matei-avram-919771251/',
      mail: 'mailto:matei@modelverse.online',
      dob: '',
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

  const ambassadors = [
    {
      name: 'Jan-Willem Klerkx',
      role: 'Co-Founder & CEO, BonCode',
      linkedin: 'https://www.linkedin.com/in/jwklerkx/',
      bio: 'Jan-Willem Klerkx is a seasoned entrepreneur and business leader with a strong track record in technology, software quality, and strategic consulting. His career spans leadership positions in software improvement, AI-driven ventures, and digital health.\n As co-founder and CEO of BonCode, Jan-Willem has championed the importance of treating software as a core business asset. His approach combines deep technical insight with strategic thinking, helping organizations reduce risk, improve maintainability, and unlock innovation through objective source code and architecture analysis. Prior to BonCode, he contributed to the success of several tech firms, where he played pivotal roles in sales, business development, and most notably executive leadership.\n His passion for software quality and business agility continues to shape his mission: enabling companies to make informed decisions about their technology landscape and turn complex challenges into strategic opportunities.',
      image: 'images/ambassadors/jan-willem.jpg',
    },
    {
      name: 'Gordon Muehl',
      role: 'Founder & Managing Director, MuehlCyberConsulting',
      linkedin: 'https://www.linkedin.com/in/gordonmuehl/',
      bio: 'Gordon Muehl is a CTO and cybersecurity leader with over 30 years of experience in global technology strategy, software architecture, secure software development, and enterprise transformation.\n He has led innovation for Fortune 500 companies, built high-performing international teams, and embedded security culture into a 100.000 employee R&D organization.\n Specializing in secure software development lifecycle, technical due diligence, and non-functional requirements governance, Gordon bridges business and technical domains—from CxOs to developers. He’s a recognised public speaker and has delivered training to over 20,000 developers worldwide.\n With deep cross-cultural leadership experience and significant legal and technical experience, Gordon continues to shape the future of secure software development.',
      image: 'images/ambassadors/gordon.png',
    },
    {
      name: 'Dennis Mulder',
      role: 'Co-Founder & CTO, Full Circle IT NL',
      linkedin: 'https://www.linkedin.com/in/dennismulder/',
      bio: 'Dennis Mulder is an independent IT architect and advisor, focused on helping organizations make technology work for their business - securely, pragmatically, and with tangible results. As founder of Full Circle IT and CEO of WVE Business Technology Architecture, he draws on 25+ years’ experience, including as ex-CTO at Microsoft Netherlands.\n Dennis specializes in IT strategy, AI, and digital transformation, bridging business and tech from boardroom to execution. He is a Certified Distinguished IT Architect (CITA-D), president of Iasa Global NL, and chairs the Chief Architect Forum. Dennis is committed to developing talent and advancing the profession - always with an eye for practical impact.',
      image: 'images/ambassadors/dennis.jpg',
    },
    {
      name: 'Oskar Brink',
      role: 'Independent Cyber Security and Risk Manager',
      linkedin: 'https://www.linkedin.com/in/oskarbrink/',
      bio: 'Oskar Brink is an experienced cybersecurity and risk management professional with a career spanning nearly four decades, including over 25 years at Shell. With a strong background in IT project and portfolio management, Oskar now serves as an all-round Cybersecurity and Risk Manager.\n He specialises in bringing clarity and structure to complex IT environments, enabling organizations to become more agile, secure, and resilient. Oskar has led large and diverse teams, and has international experience working in Malaysia and India.\n He excels at aligning security and risk strategies with business objectives, driving sustainable transformation, and fostering continuous improvement through coaching and collaboration.',
      image: 'images/ambassadors/oskar.jpg',
    },
    {
      name: 'Robert Bals',
      role: 'Lead Auditor ISO 27001 & Data Protection Officer, IsoSecure',
      linkedin: 'https://www.linkedin.com/in/rbals/',
      bio: 'Robert Bals is a certified ISO 27001 Lead Auditor and GDPR Data Protection Officer who helps ICT, software, and healthcare organizations strengthen information security and compliance without unnecessary bureaucracy.\n With over 10 years of experience at ISOSecure, he provides tailored ISMS implementations, audits for ISO 27001 and TUV Nord certification, and GDPR solutions.\n His practical, jargon-free approach focuses on solving complex security challenges and delivering scalable, client-focused results. Robert stands out for combining deep technical expertise with a pragmatic mindset, helping businesses—from startups to global enterprises—turn security into a competitive advantage.',
      image: 'images/ambassadors/robert.jpg',
    },
    {
      name: 'Alexandra Roger-Machart',
      role: 'Independent Communications & Media Relations Advisor',
      linkedin:
        'https://www.linkedin.com/in/alexandra-roger-machart-senior-manager-corporate-communications/',
      bio: 'Alexandra Roger-Machart is a forward-thinking senior professional with deep industry experience in the Renewable Energy and Consumer Goods sectors. Specializing in Communications and Corporate Disclosures, Alexandra helps companies strengthen their external profile, engage with stakeholders and enhance their corporate reporting through both strategic storytelling and regulatory expertise.\n Having worked across various organizational dynamics, from fast-growing startups to large blue-chip corporations such as Unilever, her background spans B2B, B2C and B2G environments. Her expertise covers Corporate and Financial Communications, Sustainability Reporting, Investor Relations, Crisis PR and Media Engagement.\n Passionate about Tech and AI-driven transformation, Alexandra advises startups and scaleups, bringing a customer-centric, interdisciplinary perspective and a global outlook with fluency in German, English, French and Dutch.',
      image: 'images/ambassadors/alexandra.jpg',
    },
  ]

  return (
    <Layout about={true} hero={AboutHero} ref={layoutRef}>
      {/* Metadata */}
      <title>Modelverse | About Us</title>
      <meta
        name="description"
        content="Learn about the Modelverse team, our mission to simplify GRC, and our commitment to building the future of enterprise risk management software."
      />

      {/* Content */}
      <div className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="flex flex-col justify-center-safe gap-32 px-4 py-16 md:container md:mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4 md:justify-center-safe">
              <h1 className="text-4xl sm:text-5xl">Our Story</h1>
              <div className="flex flex-col gap-4 text-lg text-white/70">
                <p>
                  Modelverse was founded in 2023 by a team of experienced risk
                  managers who witnessed firsthand the challenges organizations
                  face when trying to implement effective risk and compliance
                  management programs.
                </p>
                <p>
                  We saw companies struggling with complex compliance
                  requirements, limited resources, and a shortage of talent.
                  Meanwhile, enterprise risk management solutions were either
                  too expensive or too complex.
                </p>
                <p>
                  We knew there had to be a better way. That's why we built
                  Modelverse — a platform that brings the power of enterprise
                  risk and compliance management to organizations of all sizes,
                  with the simplicity and affordability that organizations need.
                </p>
              </div>
            </div>
            <div className="relative flex items-center-safe justify-center-safe lg:basis-1/2">
              <Card className="flex p-2 hover:bg-white/10">
                <img
                  src={teamImage}
                  alt="Modelverse team of eight members, photographed together in their bright, modern office headquarters."
                  className="aspect-video rounded-lg object-cover"
                />
              </Card>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
              <h1 className="text-4xl sm:text-5xl">Our Values</h1>
              <p className="text-xl text-white/70">
                The principles that guide everything we do at Modelverse.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group relative shadow-md transition-all duration-300 hover:border-lime-500/70 hover:shadow-lime-500/70"
                >
                  <div className="absolute inset-0 rounded-lg bg-linear-to-br group-hover:from-lime-500/10 group-hover:to-teal-500/10" />
                  <div className="relative z-1 flex flex-col gap-2">
                    <div className="mb-4 flex w-fit items-center justify-center rounded-xl bg-linear-to-br from-lime-500 to-teal-500 p-2">
                      <value.icon className="size-6" />
                    </div>
                    <h3 className="mb-2 text-xl">{value.title}</h3>
                    <p className="text-white/70">{value.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Maybe add Milestones */}

          <div className="flex flex-col gap-8 text-center">
            <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
              <h1 className="text-4xl sm:text-5xl">Meet the Team</h1>
              <p className="text-xl text-white/70">
                The passionate people behind Modelverse.
              </p>
            </div>

            <div className="grid max-w-7xl grid-cols-1 gap-4 self-center sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <Card
                  className="bg-white/5 p-0 hover:border-lime-500/50 hover:bg-white/10"
                  key={index}
                >
                  <img src={member.image} className="rounded-t-xl" alt="" />
                  <div className="flex grow flex-col p-4">
                    <h1 className="mb-2 text-xl">{member.name}</h1>
                    <h1 className="mb-4 bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text font-semibold text-transparent">
                      {member.role}
                    </h1>
                    <p className="mb-4 text-left text-white/70">{member.bio}</p>
                    <div className="flex grow flex-row items-end gap-2">
                      <a
                        href={member.linkedin}
                        className="flex w-fit items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors duration-300 hover:bg-white/20"
                      >
                        <Linkedin className="size-6" />
                      </a>
                      <a
                        href={member.mail}
                        className="flex w-fit items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors duration-300 hover:bg-white/20"
                      >
                        <Mail className="size-6" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {ambassadors.length != 0 && (
            <div className="flex flex-col gap-8 text-center">
              <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
                <h1 className="text-4xl sm:text-5xl">Our Ambassadors</h1>
                <p className="text-xl text-gray-600">
                  Trusted voices in the risk and compliance management community
                  who believe in our mission.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {ambassadors.map((ambassador, index) => (
                  <Card
                    className="gap-8 overflow-hidden bg-white/5 p-0 text-left hover:border-lime-500/50 hover:bg-white/10"
                    key={index}
                  >
                    <div className="flex flex-col gap-4 px-8 pt-8 sm:flex-row">
                      <Avatar className="size-48 self-center md:size-38">
                        <AvatarImage
                          src={ambassador.image}
                          className="object-cover object-center"
                        />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <h1 className="text-xl">{ambassador.name}</h1>
                          <h1 className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text font-semibold text-transparent">
                            {ambassador.role}
                          </h1>
                        </div>
                        <a
                          href={ambassador.linkedin}
                          className="flex w-fit items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 transition-colors duration-300 hover:bg-white/20"
                        >
                          <Linkedin className="size-6" />
                        </a>
                      </div>
                    </div>
                    <div className="flex grow flex-col gap-4 bg-lime-500/10 p-8 sm:flex-row">
                      <PencilLine className="hidden size-6 shrink-0 text-lime-500 opacity-50 sm:block" />
                      <div>
                        {ambassador.bio.split('\n').map((paragraph, index) => (
                          <p key={index} className="mb-4 text-sm text-white/70">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
