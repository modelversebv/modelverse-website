import { Link } from 'react-router-dom'

type NavLinkProps = {
  active?: boolean
  to: string
  children?: React.ReactNode
}

export function NavLink({ active = false, to, children }: NavLinkProps) {
  return (
    <Link className="text-2xl font-semibold" to={to}>
      {children}
    </Link>
  )
}
