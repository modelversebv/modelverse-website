import { Banner } from '@/components/app/misc/banner'
import { Layout } from '@/components/layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import infoFile from '@/data/team.yaml?raw'
import { parse } from 'yaml'

type Member = {
  name: string
  role: string
  bio: string
  img: string
}

type Team = {
  name: string
  members: Member[]
}

const teamBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">Meet the Team</h1>
    <p className="text-lg">
      The passionate individuals driving Customer Success at Modelverse
      Services.
    </p>
  </Banner>
)

export function Team() {
  const info = parse(infoFile)
  return (
    <Layout team={true} banner={teamBanner}>
      {info.map((team: Team, teamNumber: number) => (
        <div
          className="flex flex-col items-center-safe justify-center-safe gap-8 mx-4 md:mx-32"
          key={teamNumber}
        >
          <h1 className="text-center text-4xl font-bold">{team.name}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 w-full gap-8">
            {team.members.map((member: Member, memberNumber: number) => (
              <div
                className="rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 flex flex-col gap-8 w-full p-8 transition duration-300 hover:-translate-y-3"
                key={memberNumber}
              >
                <div className="flex flex-row justify-start items-center gap-4 xl:flex-col xl:items-start">
                  <Avatar className="size-24">
                    <AvatarImage
                      src={`${member.img}`}
                      className="object-cover"
                    />
                    <AvatarFallback>{member.name}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h1 className="text-amber-500 text-2xl font-bold">
                      {member.name}
                    </h1>
                    <h1 className="italic inline-flex flex-wrap">
                      {member.role}
                    </h1>
                  </div>
                </div>
                <p className="text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  )
}
