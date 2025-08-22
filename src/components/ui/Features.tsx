import { motion } from 'framer-motion'
import { Flame, Users, Timer, Zap } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <Flame className="h-6 w-6" />,
      title: 'Weekly Transformations',
      description:
        'Full rebrand every week: name, PFP, banner, bio, and lore. The central hook keeping it fresh.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community Meme Voting',
      description:
        'Submit memes via site, daily votes decide the top 3–5 to post from official accounts.',
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: 'Reveal Game',
      description:
        'Hints & teasers drop before each transformation. Guess the next identity, win bragging rights.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'AI-Powered Evolution',
      description:
        'Scrapes trends across platforms to generate updated visuals, text, and lore automatically.',
    },
  ]

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-black text-center"
      >
        🔥 Core Features
      </motion.h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-200">
                {it.icon}
              </span>
              <h3 className="font-bold">{it.title}</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-700">{it.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
