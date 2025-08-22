import { Twitter, Stars, Flame } from 'lucide-react'

export default function WhyViral() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <span className="inline-flex items-center gap-2 bg-yellow-200 px-3 py-1 rounded-full">
            <Twitter className="h-4 w-4" /> Follow on X
          </span>
          <span className="inline-flex items-center gap-2 bg-yellow-200 px-3 py-1 rounded-full">
            <Stars className="h-4 w-4" /> Weekly lore drops
          </span>
          <span className="inline-flex items-center gap-2 bg-yellow-200 px-3 py-1 rounded-full">
            <Flame className="h-4 w-4" /> Meme comps daily
          </span>
        </div>
      </div>
    </section>
  )
}
