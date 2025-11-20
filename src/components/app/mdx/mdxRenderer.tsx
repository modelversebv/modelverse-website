// components/MDXRenderer.tsx
import React from 'react'

import YouTubeEmbed from '@/components/app/embed/youtubeEmbed'

type MDXRendererProps = {
  mdxContent: React.ComponentType<any>
}

const components = { YouTubeEmbed }

export function MDXRenderer({ mdxContent: Content }: MDXRendererProps) {
  return <Content components={components} />
}
