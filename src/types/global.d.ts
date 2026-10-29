import type Lenis from 'lenis'

declare global {
  interface Window {
    /** Smooth-scroll instance set by the page layout on fine-pointer devices; absent on touch devices. (`window.lenis` belongs to Lenis itself.) */
    lenisInstance?: Lenis
  }
}

export {}
