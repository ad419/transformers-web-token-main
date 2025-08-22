'use client'

import FloatingStickers from '@/components/helpers/FloatingStickers'
import ProgressBar from '@/components/helpers/ProgressBar'
import CommunityVoting from '@/components/ui/CommunityVoting'
import CTA from '@/components/ui/CTA'
import Features from '@/components/ui/Features'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import Navbar from '@/components/ui/Navbar'
import RevealGame from '@/components/ui/RevealGame'
import Ticker from '@/components/ui/Ticker'
import Transformations from '@/components/ui/Transformations'
import WhyViral from '@/components/ui/WhyViral'

export default function HopiumPrimeLanding() {
  return (
    <main className="font-orbitron min-h-screen bg-gradient-to-b from-yellow-50 via-pink-50 to-purple-100 text-zinc-900 selection:bg-yellow-200/80">
      <ProgressBar />
      <FloatingStickers />
      <Navbar />
      <Hero />
      <Ticker />
      <Features />
      <Transformations />
      <CommunityVoting />
      <RevealGame />
      <WhyViral />
      <CTA />
      <Footer />
    </main>
  )
}
