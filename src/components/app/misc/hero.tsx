import { cn } from '@/lib/utils'

type HeroProps = {
  className?: string
  children?: React.ReactNode
}

export function Hero({ className, children }: HeroProps) {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
      <div className='backdrop-blur-[3px]'>
        <div className={cn(
          'flex flex-col px-4 gap-8 pt-12 py-32 md:container md:mx-auto',
          className
        )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
