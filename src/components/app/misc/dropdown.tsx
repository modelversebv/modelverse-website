import { Card } from './card'

type DropdownProps = {
  children?: React.ReactNode
}

export function Dropdown({ children }: DropdownProps) {
  return (
    <Card className="invisible absolute left-4 z-50 flex min-w-3xs translate-y-2 flex-col rounded-md border bg-white p-0 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      {children}
    </Card>
  )
}
