type NavLinkProps = {
  active?: boolean
  children?: React.ReactNode
}

export function NavLink({ active = false, children }: NavLinkProps) {
  return (
    <div
      className={`flex flex-row items-center-safe gap-2 rounded-full px-4 py-2 ${active ? 'bg-gradient-to-r from-green-500/30 to-teal-500/30 opacity-100' : 'cursor-pointer md:opacity-70 md:hover:opacity-100'}`}
    >
      {children}
    </div>
  )
}
