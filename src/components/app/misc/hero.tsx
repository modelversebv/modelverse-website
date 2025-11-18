import { cn } from '@/lib/utils'

type HeroProps = {
  className?: string
  children?: React.ReactNode
}

export function Hero({ className, children }: HeroProps) {
  return (
    <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10">
      <div className="bg-gradient-to-b from-transparent to-white">
        <div
          className={cn(
            className,
            'flex flex-col gap-8 px-4 py-16 md:container md:mx-auto'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
