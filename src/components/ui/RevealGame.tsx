import { motion } from 'framer-motion'

export default function RevealGame() {
  const hints = [
    'Hint #1: Alarm noises + motivational quotes that go too hard',
    'Hint #2: A bathtub but colder than your portfolio',
    'Hint #3: Notebook full of ‘hustle’ spelled wrong',
  ]

  return (
    <section id="reveal" className="bg-purple-100/60 border-y border-purple-200">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black"
            >
              Transformation Reveal Game 🎭
            </motion.h2>
            <p className="mt-3 text-zinc-700">
              Each week we drop cryptic teasers. Guess the next identity before the countdown hits
              zero. Nail it for clout and potential whitelist perks.
            </p>
            <ul className="mt-6 space-y-3">
              {hints.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -8, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-300 font-bold">
                    {i + 1}
                  </span>
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ rotate: 3, opacity: 0, y: 20 }}
            whileInView={{ rotate: 0, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            className="relative rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-xl"
          >
            <img
              src="https://placehold.co/900x600/png?text=Next+Identity+Redacted"
              alt="redacted"
            />
            <div className="absolute inset-0 grid place-items-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-black/60 backdrop-blur text-white px-6 py-3 rounded-2xl"
              >
                <span className="font-semibold">Guess in Discord / X</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
