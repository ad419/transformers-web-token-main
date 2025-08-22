import { motion } from 'framer-motion'
import { Vote, Send, MessageSquare } from 'lucide-react'

export default function CommunityVoting() {
  const fakeSubmissions = [
    { id: 1, img: 'https://placehold.co/400x280/png?text=Meme+1', handle: '@anon1', upvotes: 420 },
    {
      id: 2,
      img: 'https://placehold.co/400x280/png?text=Meme+2',
      handle: '@degenMax',
      upvotes: 369,
    },
    {
      id: 3,
      img: 'https://placehold.co/400x280/png?text=Meme+3',
      handle: '@bagholder',
      upvotes: 213,
    },
    {
      id: 4,
      img: 'https://placehold.co/400x280/png?text=Meme+4',
      handle: '@ceoofhopium',
      upvotes: 1337,
    },
  ]

  return (
    <section id="voting" className="mx-auto max-w-6xl px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-center"
      >
        Community Meme Voting
      </motion.h2>
      <p className="text-center mt-3 text-zinc-700 max-w-2xl mx-auto">
        Submit your memes and short posts. Community votes daily. Top 3–5 go live from the official
        account. It’s a content engine powered by degens like you.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {fakeSubmissions.map((m) => (
          <motion.div
            whileHover={{ y: -6 }}
            key={m.id}
            className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm"
          >
            <img src={m.img} alt="meme" className="w-full h-auto" />
            <div className="p-4 flex items-center justify-between text-sm">
              <span className="font-semibold">{m.handle}</span>
              <button className="inline-flex items-center gap-1 rounded-xl px-3 py-1 bg-black text-yellow-300">
                <Vote className="h-4 w-4" /> {m.upvotes}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-black text-yellow-300 px-4 py-2 rounded-xl font-semibold"
        >
          Submit Meme <Send className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-xl font-semibold"
        >
          See Rules <MessageSquare className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
