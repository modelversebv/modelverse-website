import createMDX from '@next/mdx'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: './dist',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  allowedDevOrigins: [
    'fraction-edmonton-protective-intensive.trycloudflare.com',
  ],
}

export default withMDX(nextConfig)
