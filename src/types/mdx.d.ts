declare module '*.mdx' {
  const metadata: Record<string, any>
  export { metadata }

  const MDXContent: React.ComponentType<any>
  export default MDXContent
}
