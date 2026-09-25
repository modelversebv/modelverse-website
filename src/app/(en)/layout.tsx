import { IntlProvider } from '@/providers/IntlProvider'

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <IntlProvider locale="en">{children}</IntlProvider>
}
