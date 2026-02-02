import { cn } from '@/lib/utils'

type HeroProps = {
  className?: string
  backgroundImg?: string
  backgroundClassName?: string
  overlay?: boolean
  children?: React.ReactNode
}

export function Hero({
  className,
  backgroundImg,
  backgroundClassName,
  children,
}: HeroProps) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className={cn('bg-cover pt-20 select-none', backgroundClassName)}
    >
      <div
        className={cn(
          'relative z-10 flex flex-col gap-8 px-4 py-16 md:container md:mx-auto',
          className
        )}
      >
        {children}
      </div>
      {/* {overlay && (
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-white" />
      )} */}
    </div>
  )
}
