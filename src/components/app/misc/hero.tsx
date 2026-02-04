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
  overlay = false,
  children,
}: HeroProps) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className={cn('relative bg-cover pt-20 select-none', backgroundClassName)}
    >
      {overlay && (
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 via-slate-900/30 to-slate-900" />
      )}
      <div
        className={cn(
          'relative z-1 flex flex-col gap-8 px-4 py-16 md:container md:mx-auto',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
