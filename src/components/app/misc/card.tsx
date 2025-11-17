type CardProps = {
  children?: React.ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col rounded-lg border p-8 transition-all duration-300 hover:border-green-500 hover:shadow-lg">
      {children}
    </div>
  )
}
