import Link from 'next/link'

type DropdownLinkProps = {
  active?: boolean
  href: string
  title: string
  disabled?: boolean
  children?: React.ReactNode
}

export function DropdownLink({
  active = false,
  href,
  title,
  disabled = false,
  children,
}: DropdownLinkProps) {
  return (
    <>
      <Link
        href={href}
        onClick={(e) => {
          if (disabled) e.preventDefault()
        }}
        className={`transtion-all hidden flex-col gap-2 p-2 text-white duration-300 ${disabled && 'cursor-default! text-white/50! hover:bg-transparent!'} ${active ? 'bg-teal-500/30' : 'hover:bg-white/20'} md:flex`}
      >
        <span className={`font-semibold ${active && 'text-teal-500'}`}>
          {title}
        </span>
        <p
          className={`text-sm ${disabled && 'text-white/30!'} ${active ? 'text-white/90' : 'text-white/70'}`}
        >
          {children}
        </p>
      </Link>
      <Link
        href={href}
        onClick={(e) => {
          if (disabled) e.preventDefault()
        }}
        className={`md:hidden ${disabled && 'text-white/50!'} ${active ? 'text-teal-500' : 'text-white/90 hover:text-white'}`}
      >
        {title}
      </Link>
    </>
  )
}
