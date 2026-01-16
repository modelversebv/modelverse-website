import { Link } from 'react-router-dom'

type NavLinkProps = {
  active?: boolean
  to: string
  children?: React.ReactNode
}

export function NavLink({ active = false, to, children }: NavLinkProps) {
  return (
    <div className="group relative">
      <Link
        to={to}
        className={`rounded-full font-semibold text-white md:font-normal md:text-black`}
      >
        <div
          className={`flex flex-row gap-2 rounded-full px-4 py-2 transition-all duration-300 ${active ? 'bg-linear-to-r from-green-500/70 to-teal-500/70 shadow-md backdrop-blur-md md:from-green-500/30 md:to-teal-500/30 md:shadow-none md:backdrop-blur-none' : 'opacity-90 md:opacity-70 md:hover:opacity-100'}`}
        >
          {children}
        </div>
      </Link>
    </div>
  )
}
