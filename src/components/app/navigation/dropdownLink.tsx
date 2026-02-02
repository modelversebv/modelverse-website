import { Link } from 'react-router-dom'

type DropdownLinkProps = {
  active?: boolean
  to: string
  title: string
  children?: React.ReactNode
}

export function DropdownLink({
  active = false,
  to,
  title,
  children,
}: DropdownLinkProps) {
  return (
    <>
      <Link
        to={to}
        className={`transtion-all hidden flex-col gap-2 p-2 text-white duration-300 ${active ? 'bg-teal-500/30' : 'hover:bg-white/20'} md:flex`}
      >
        <span className={`font-semibold ${active && 'text-teal-500'}`}>
          {title}
        </span>
        <p className={`text-sm ${active ? 'text-white/90' : 'text-white/70'}`}>
          {children}
        </p>
      </Link>
      <Link
        to={to}
        className={`md:hidden ${active ? 'text-teal-500' : 'text-white/90 hover:text-white'}`}
      >
        {title}
      </Link>
    </>
  )
}
