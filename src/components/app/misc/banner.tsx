type BannerProps = {
  children?: React.ReactNode
}

export function Banner({ children }: BannerProps) {
  return (
    <div className="flex h-screen grow items-center-safe justify-center-safe">
      <div className="mx-4 flex flex-col gap-8 text-center text-white">
        {children}
      </div>
    </div>
  )
}
