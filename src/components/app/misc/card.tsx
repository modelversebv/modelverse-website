import { cn } from '@/lib/utils'

type CardProps = {
  className?: string
  children?: React.ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20',
        className
      )}
    >
      {children}
    </div>
  )
}
