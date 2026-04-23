import Link from 'next/link'

type NavLinkProps = {
  active?: boolean
  href: string
  children?: React.ReactNode
}

export function NavLink({ active = false, href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${active ? 'text-teal-500' : 'text-white/90 hover:text-white'}`}
    >
      {children}
    </Link>
  )
}
