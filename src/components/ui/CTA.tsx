import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="bg-black text-yellow-300">
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black"
          >
            Ready to Ride the Hopium Wave? 🌊
          </motion.h2>
          <p className="mt-3 text-zinc-200">
            Every week is a fresh meme identity and a new shot of chaos. Join early, stay weird.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#buy"
              className="inline-flex items-center gap-2 bg-yellow-300 text-black px-5 py-3 rounded-2xl font-semibold"
            >
              Buy $HOPIUM <ChevronRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-3 rounded-2xl font-semibold"
            >
              Chart <ChevronRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
        <motion.div
          initial={{ rotate: -2, opacity: 0, y: 20 }}
          whileInView={{ rotate: 0, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          className="relative rounded-3xl overflow-hidden border border-yellow-300/40 bg-yellow-100"
        >
          <img src="https://placehold.co/900x600/png?text=Funny+CTA+Art" alt="cta art" />
          <div className="absolute bottom-3 right-3 text-xs bg-black text-yellow-300 px-3 py-1 rounded-full">
            placeholder
          </div>
        </motion.div>
      </div>
    </section>
  )
}
