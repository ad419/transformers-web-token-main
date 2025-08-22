import { motion } from 'framer-motion'
import { ChevronRight, Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-zinc-200"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-300 shadow">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-black tracking-tight text-xl">Hopium Prime</span>
          <span className="ml-2 text-xs px-2 py-1 rounded-full bg-black text-yellow-300">
            $HOPIUM
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#transformations" className="hover:underline">
            Evolving Lore
          </a>
          <a href="#voting" className="hover:underline">
            Voting
          </a>
          <a href="#reveal" className="hover:underline">
            Reveal Game
          </a>
          <a
            href="#cta"
            className="font-semibold inline-flex items-center gap-1 bg-black text-yellow-300 px-3 py-2 rounded-xl shadow hover:scale-105 transition"
          >
            Buy $HOPIUM <ChevronRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
