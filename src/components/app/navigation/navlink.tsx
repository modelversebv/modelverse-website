import { Link } from 'react-router-dom'

type NavLinkProps = {
  active?: boolean
  to: string
  children?: React.ReactNode
}

export function NavLink({ active = false, to, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`${active ? 'text-teal-500' : 'text-white/90 hover:text-white'}`}
    >
      {children}
    </Link>
  )
}
