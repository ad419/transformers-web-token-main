import { motion, AnimatePresence } from 'framer-motion'
import { Crown } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Transformations() {
  const forms = [
    {
      name: 'MorningRoutine Prime',
      vibe: 'grindset satire, 4:30am alarms, cold plunges',
      img: 'https://placehold.co/800x500/jpg?text=MorningRoutine+Prime',
    },
    {
      name: 'AuraKid Prime',
      vibe: 'mystical, chosen-one memes',
      img: 'https://placehold.co/800x500/jpg?text=AuraKid+Prime',
    },
    {
      name: 'Epstein Prime',
      vibe: 'dark humor, edgy conspiracies',
      img: 'https://placehold.co/800x500/jpg?text=Epstein+Prime',
    },
    {
      name: 'Jet2Holidays Prime',
      vibe: 'chaotic Brit holiday humor',
      img: 'https://placehold.co/800x500/jpg?text=Jet2Holidays+Prime',
    },
    {
      name: 'Skidibi Prime',
      vibe: 'absurd, chaotic meme energy',
      img: 'https://placehold.co/800x500/jpg?text=Skidibi+Prime',
    },
  ]

  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % forms.length), 3800)
    return () => clearInterval(id)
  }, [forms.length])

  return (
    <section id="transformations" className="bg-gradient-to-b from-white to-pink-100/60">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black"
          >
            Weekly Transformations
          </motion.h2>
          <span className="text-sm bg-black text-yellow-300 px-3 py-1 rounded-full flex items-center gap-2">
            <Crown className="h-4 w-4" /> first-of-its-kind, evolving meme coin
          </span>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-xl">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={index}
                src={forms[index].img}
                alt={forms[index].name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto"
              />
            </AnimatePresence>
          </div>
          <div>
            <AnimatePresence mode="sync">
              <motion.div
                key={forms[index].name}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-3xl font-extrabold">{forms[index].name}</h3>
                <p className="mt-2 text-zinc-700">{forms[index].vibe}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-xs bg-yellow-300 rounded-full px-3 py-1">
                    auto-updates across site & socials
                  </span>
                  <span className="text-xs bg-white border border-zinc-200 rounded-full px-3 py-1">
                    AI-generated lore & art
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
