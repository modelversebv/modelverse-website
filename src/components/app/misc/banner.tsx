type BannerProps = {
  children?: React.ReactNode
}

export function Banner({ children }: BannerProps) {
  return (
    <div className="container mx-auto flex h-64 shrink-0 flex-col items-center-safe justify-center-safe gap-8 bg-gradient-to-br from-green-500 to-teal-500 p-4 text-center text-white lg:bg-transparent lg:bg-none">
      {children}
    </div>
  )
}
