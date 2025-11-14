import { Banner } from '@/components/app/misc/banner'
import { Card } from '@/components/app/misc/card'
import { ContentSection } from '@/components/app/misc/contentSection'
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
    <div className="relative mb-12">
      {teamBanner}
      <ContentSection>
        {info.map((team: Team, teamNumber: number) => (
          <div
            className="flex flex-col items-center-safe justify-center-safe gap-8"
            key={teamNumber}
          >
            <h1 className="text-center text-4xl font-bold">{team.name}</h1>
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
              {team.members.map((member: Member, memberNumber: number) => (
                <Card
                  className="transition duration-300 hover:-translate-y-3"
                  key={memberNumber}
                >
                  <div className="flex flex-row items-center justify-start gap-4 xl:flex-col xl:items-start">
                    <Avatar className="size-24">
                      <AvatarImage
                        src={`${member.img}`}
                        className="object-cover"
                      />
                      <AvatarFallback>{member.name}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <h1 className="text-2xl font-bold text-amber-500">
                        {member.name}
                      </h1>
                      <h1 className="inline-flex flex-wrap italic">
                        {member.role}
                      </h1>
                    </div>
                  </div>
                  <p className="text-sm">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </ContentSection>
    </div>
  )
}
