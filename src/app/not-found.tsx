import { ArrowLeft, Shield } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-linear-to-br from-lime-500/10 to-teal-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-linear-to-br from-teal-500/10 to-emerald-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        <Link href="/" className="flex flex-row items-center gap-2">
          <img src="/icon.png" alt="Modelverse" className="size-10" />
          <span className="text-xl font-semibold">Modelverse</span>
        </Link>

        <div className="flex flex-col items-center gap-2">
          <div className="flex w-fit flex-row gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-lime-500 backdrop-blur-md">
            <Shield className="size-4 self-center" />
            <p className="text-sm">404 — Page Not Found</p>
          </div>
        </div>

        <h1 className="bg-linear-to-r from-lime-500 to-teal-500 bg-clip-text text-9xl font-bold text-transparent sm:text-[12rem]">
          404
        </h1>

        <div className="flex max-w-md flex-col gap-4">
          <p className="text-2xl font-semibold">We couldn't find that page.</p>
          <p className="text-white/60">
            The page you're looking for doesn't exist or may have been moved.
          </p>
        </div>

        <Link
          href="/"
          className="group flex flex-row items-center gap-2 rounded-full bg-linear-to-r from-lime-500 to-teal-500 px-6 py-3 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-500/50"
        >
          <ArrowLeft className="size-4 transition-all duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
