type SectionProps = {
  bottom?: boolean
  children?: React.ReactNode
}

export function ContentSection({ children }: SectionProps) {
  return (
    <div className="relative rounded-xl bg-white py-16">
      <div className="container flex flex-col gap-32 p-4 sm:mx-auto">
        {children}
      </div>
      {/* {bottom && (
        <div className="absolute -bottom-16 h-30 w-full skew-y-16 bg-white"></div>
      )} */}
    </div>
  )
}
