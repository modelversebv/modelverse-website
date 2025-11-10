// components/MDXRenderer.tsx
import YouTubeEmbed from '@/components/app/embed/youtubeEmbed'
import { MDXProvider } from '@mdx-js/react'

type MDXRendererProps = {
  mdxContent: React.FC
}

const components = { YouTubeEmbed }

export function MDXRenderer({ mdxContent: Content }: MDXRendererProps) {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  )
}
