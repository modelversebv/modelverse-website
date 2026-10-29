/** Shape of every `.mdx` import: the rendered content plus the `metadata` object the file exports. */
declare module '*.mdx' {
  const metadata: Record<string, unknown>
  export { metadata }

  const MDXContent: import('mdx/types').MDXContent
  export default MDXContent
}
