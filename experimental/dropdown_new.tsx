import { Link } from 'react-router-dom'

type DropdownLinkProps = {
  to: string
  children?: React.ReactNode
}

type DropdownProps = {
  children?: React.ReactNode
}

export function DropdownLink({ children, to }: DropdownLinkProps) {
  return (
    <Link className="text- font-semibold" to={to}>
      {children}
    </Link>
  )
}

export function Dropdown({ children }: DropdownProps) {
  return <div className="mt-2 ml-8">{children}</div>
}
