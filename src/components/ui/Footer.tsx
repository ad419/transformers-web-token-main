import { Rocket } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-300 shadow">
            <Rocket className="h-4 w-4" />
          </span>
          <span className="font-extrabold">Hopium Prime</span>
          <span className="text-xs px-2 py-1 rounded-full bg-black text-yellow-300 ml-2">
            meme coin
          </span>
        </div>
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Hopium Prime — Built for memes, not financial advice 😂
        </p>
      </div>
    </footer>
  )
}
