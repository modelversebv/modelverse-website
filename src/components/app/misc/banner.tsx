type BannerProps = {
  children?: React.ReactNode
}

export function Banner({ children }: BannerProps) {
  return (
    <div className="container mx-auto flex h-screen shrink-0 flex-col items-center-safe justify-center-safe gap-8 p-4 text-center text-white select-none">
      {children}
    </div>
  )
}
