type NavLinkProps = {
  url: string
  children: React.ReactNode
  active: boolean
}

export function NavLink({ children, active }: NavLinkProps) {
  return (
    <div
      className={`rounded-full md:size-fit ${active && 'bg-black shadow-lg'}`}
    >
      <div
        className={`flex size-full flex-row rounded-full px-4 py-2 font-semibold text-white ${
          active &&
          'bg-gradient-to-r from-green-500/60 to-teal-500/60 shadow-lg'
        }`}
      >
        <span
          className={`flex flex-row items-center-safe ${
            active ? 'opacity-100' : 'opacity-70 hover:opacity-100'
          }`}
        >
          {children}
        </span>
      </div>
    </div>
  )
}
