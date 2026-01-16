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
        className={`rounded-full font-semibold text-black lg:font-normal`}
      >
        <div
          className={`flex flex-row gap-2 rounded-full px-4 py-2 transition-all duration-300 ${active ? 'bg-linear-to-r from-green-500/30 to-teal-500/30' : 'opacity-90 lg:opacity-70 lg:hover:opacity-100'}`}
        >
          {children}
        </div>
      </Link>
    </div>
  )
}
