export function BuildNumber() {
  return process.env.NEXT_PUBLIC_BUILD_SHA || 'local'
}
