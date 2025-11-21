import { cn } from '@/lib/utils'

type CardProps = {
  className?: string
  children?: React.ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn('flex flex-col rounded-lg border p-8', className)}>
      {children}
    </div>
  )
}
