import { cn } from '@/lib/utils'

type HeroProps = {
  className?: string
  backgroundImg?: string
  backgroundClassName?: string
  containerClassName?: string
  overlay?: boolean
  children?: React.ReactNode
}

export function Hero({
  className,
  backgroundImg,
  backgroundClassName,
  containerClassName,
  overlay = false,
  children,
}: HeroProps) {
  return (
    <div
      className={cn(
        'relative h-dvh select-none md:h-fit md:pt-20',
        containerClassName
      )}
    >
      {backgroundImg && (
        <img
          src={backgroundImg}
          fetchPriority="high"
          alt=""
          className={cn(
            'absolute inset-0 size-full object-cover',
            backgroundClassName
          )}
        />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 via-slate-900/30 to-slate-900" />
      )}
      <div
        className={cn(
          'relative z-1 flex h-full flex-col gap-8 px-4 py-16 md:container md:mx-auto',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
