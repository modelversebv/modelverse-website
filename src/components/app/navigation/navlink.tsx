import { Link } from 'react-router-dom'

type NavLinkProps = {
  url: string
  children: React.ReactNode
  active: boolean
}

export function NavLink({ url, children, active }: NavLinkProps) {
  return (
    <div
      className={`rounded-full md:size-fit ${active && 'bg-black shadow-lg'}`}
    >
      <Link
        to={url}
        className={`flex size-full flex-row rounded-full px-3 py-1 font-semibold text-white ${
          active &&
          'bg-gradient-to-r from-green-500/60 to-teal-500/60 shadow-lg'
        }`}
      >
        <span
          className={`flex flex-row items-center-safe ${
            active ? 'opacity-100' : 'opacity-80 hover:opacity-100'
          }`}
        >
          {children}
        </span>
      </Link>
    </div>
  )
}
