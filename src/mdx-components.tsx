import type { MDXComponents } from 'mdx/types'
import dynamic from 'next/dynamic'

const YouTubeEmbed = dynamic(() => import('@/components/embed/youtube-embed'))

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w]+/g, '-')
    .replace(/(^-|-$)/g, '')

/** Builds a heading component that gets an `id` from its text, so articles can link to sections. */
const Heading =
  (Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') =>
  ({ children, ...props }: React.ComponentPropsWithoutRef<'h1'>) => {
    const text = typeof children === 'string' ? children : ''
    const id = slugify(text)
    return (
      <Tag id={id} {...props} className="scroll-mt-26 md:scroll-mt-36">
        {children}
      </Tag>
    )
  }

/** Next.js MDX hook: the components MDX content renders with (anchored headings, YouTube embeds). */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    YouTubeEmbed,
    h1: Heading('h1'),
    h2: Heading('h2'),
    h3: Heading('h3'),
    h4: Heading('h4'),
    h5: Heading('h5'),
    h6: Heading('h6'),
    ...components,
  }
}
