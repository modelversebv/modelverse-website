import { cn } from '@/lib/utils'

type CardProps = {
  className?: string
  children?: React.ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        className,
        'flex flex-col gap-4 rounded-md border bg-gray-50 p-4 shadow-[6px_6px_black]'
      )}
    >
      {children}
    </div>
  )
}
