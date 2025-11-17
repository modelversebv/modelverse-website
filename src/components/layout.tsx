type LayoutProps = {
  children?: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="scrollbar-hide h-screen w-screen overflow-auto">
      {children}
    </div>
  )
}
