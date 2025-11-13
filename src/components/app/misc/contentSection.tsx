import { cn } from '@/lib/utils'

type SectionProps = {
  children?: React.ReactNode
  className?: string
}

export function ContentSection({ children, className }: SectionProps) {
  return <div className={cn(className, 'min-h-screen p-4')}>{children}</div>
}
