// components/MDXRenderer.tsx
import React from 'react'

import YouTubeEmbed from '@/components/app/embed/youtubeEmbed'

// Utility: generate slug from heading text
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w]+/g, '-')
    .replace(/(^-|-$)/g, '')

// Type for heading props
interface HeadingProps {
  children: React.ReactNode
}

// Generic heading wrapper to add id
const Heading =
  (Tag: keyof React.JSX.IntrinsicElements) =>
  ({ children, ...props }: HeadingProps & Record<string, any>) => {
    const text = typeof children === 'string' ? children : ''
    const id = slugify(text)
    return (
      <Tag id={id} {...props} className="scroll-mt-36">
        {children}
      </Tag>
    )
  }

// MDX components mapping
const components = {
  YouTubeEmbed,
  h1: Heading('h1'),
  h2: Heading('h2'),
  h3: Heading('h3'),
  h4: Heading('h4'),
  h5: Heading('h5'),
  h6: Heading('h6'),
}

// Props for MDXRenderer
interface MDXRendererProps {
  mdxContent: React.ComponentType<any>
}

export function MDXRenderer({ mdxContent: Content }: MDXRendererProps) {
  return <Content components={components} />
}
