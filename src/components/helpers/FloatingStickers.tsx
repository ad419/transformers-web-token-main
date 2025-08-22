import { motion } from 'framer-motion'

export default function FloatingStickers() {
  const stickers = [
    'https://placehold.co/120x120/svg?text=GM',
    'https://placehold.co/120x120/svg?text=WAGMI',
    'https://placehold.co/120x120/svg?text=NGMI',
    'https://placehold.co/120x120/svg?text=HODL',
  ]
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {stickers.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt="sticker"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 0.25 }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          className={`absolute w-16 h-16 opacity-30 ${
            ['top-16 left-10', 'top-40 right-16', 'bottom-24 left-20', 'bottom-16 right-24'][i]
          }`}
        />
      ))}
    </div>
  )
}
