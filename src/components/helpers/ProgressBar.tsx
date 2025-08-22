import { useScroll, useSpring, motion } from 'framer-motion'

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-yellow-300 origin-left z-50"
    />
  )
}
