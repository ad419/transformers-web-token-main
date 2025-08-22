// import { motion } from 'framer-motion'
// import CountdownCard from '../helpers/CountdownCard'
// import { Sparkles, Stars } from 'lucide-react'

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <motion.h1
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-6xl font-black leading-tight"
//           >
//             The Meme Coin that{' '}
//             <span className="bg-yellow-300 px-2 rotate-1 inline-block">Rebrands Weekly</span> 🤯
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.15, duration: 0.6 }}
//             className="mt-4 text-lg text-zinc-700"
//           >
//             Hopium Prime transforms its entire identity every week—new name, visuals, lore, chaos. A
//             living meme powered by community hype and AI trend-sensing.
//           </motion.p>

//           <div className="mt-6 flex flex-wrap items-center gap-3">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               href="#cta"
//               className="inline-flex items-center gap-2 bg-black text-yellow-300 px-5 py-3 rounded-2xl font-semibold shadow"
//             >
//               Enter the Chaos <Sparkles className="h-4 w-4" />
//             </motion.a>
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               href="#transformations"
//               className="inline-flex items-center gap-2 bg-white border border-zinc-200 px-5 py-3 rounded-2xl font-semibold shadow-sm"
//             >
//               See Weekly Forms <Stars className="h-4 w-4" />
//             </motion.a>
//           </div>

//           <div className="mt-6">
//             <CountdownCard />
//           </div>
//         </div>

//         <motion.div
//           initial={{ rotate: -6, opacity: 0, y: 20 }}
//           animate={{ rotate: 0, opacity: 1, y: 0 }}
//           transition={{ type: 'spring', stiffness: 120, damping: 14 }}
//           className="relative"
//         >
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-white">
//             <img
//               src="https://placehold.co/900x600/png?text=Hopium+Prime+Weekly+Identity"
//               alt="Hopium Prime"
//               className="w-full h-auto"
//             />
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="absolute bottom-3 right-3 text-xs bg-yellow-300 px-3 py-1 rounded-full shadow"
//             >
//               Placeholder art — replace via CMS
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

import { useEffect, useRef } from 'react'
import CountdownCard from '../helpers/CountdownCard'
import { Sparkles, Stars } from 'lucide-react'

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log('Autoplay blocked, user interaction required')
      })
    }
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${'/bg-image.webp'})` }}
    >
      <audio ref={audioRef} src="/sounds/transform.mp3" preload="auto" />
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="hero-cut-title text-5xl md:text-6xl font-black leading-tight backdrop-blur-sm bg-white/60 p-4 rounded-2xl border border-white/30">
            The Meme Coin that{' '}
            <span className="hero-cut-highlight bg-yellow-300 px-2 rotate-1 inline-block backdrop-blur-sm border border-white/20 rounded-lg">
              Rebrands Weekly
            </span>{' '}
            🤯
          </h1>
          <p className="hero-cut-text mt-4 text-lg text-zinc-700 backdrop-blur-sm bg-white/60 p-4 rounded-xl border border-white/30">
            Hopium Prime transforms its entire identity every week—new name, visuals, lore, chaos. A
            living meme powered by community hype and AI trend-sensing.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="hero-cut-btn-primary inline-flex items-center gap-2 bg-black text-yellow-300 px-5 py-3 rounded-2xl font-semibold shadow backdrop-blur-sm border border-white/20"
            >
              Enter the Chaos <Sparkles className="h-4 w-4" />
            </a>
            <a
              href="#transformations"
              className="hero-cut-btn-secondary inline-flex items-center gap-2 bg-white border border-zinc-200 px-5 py-3 rounded-2xl font-semibold shadow-sm backdrop-blur-sm"
            >
              See Weekly Forms <Stars className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 hero-cut-countdown">
            <CountdownCard />
          </div>
        </div>
        {/* Right Content (Logo Spotlight) */}
        <div className="hero-cut-logo relative flex justify-center items-center">
          <div className="relative rounded-full shadow-2xl backdrop-blur-sm bg-white/70">
            <img
              src="/logo.png"
              alt="Hopium Prime Logo"
              className="w-64 h-64 object-cover scale-120"
            />
            <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-30 blur-3xl animate-ping"></div>
          </div>
        </div>
      </div>
      {/* CSS Keyframes for different cut/jump variations - keeping choppy style */}
      <style jsx>{`
        /* Main title - diagonal cut from top-left */
        @keyframes cutJumpTitle {
          0% {
            opacity: 0;
            transform: translateX(-100px) translateY(-80px) rotate(-8deg);
          }
          20% {
            opacity: 1;
            transform: translateX(-60px) translateY(-50px) rotate(5deg);
          }
          40% {
            transform: translateX(-30px) translateY(-30px) rotate(-3deg);
          }
          60% {
            transform: translateX(-15px) translateY(-15px) rotate(2deg);
          }
          80% {
            transform: translateX(-5px) translateY(-5px) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(0);
          }
        }

        /* Highlight span - bouncy from right */
        @keyframes cutJumpHighlight {
          0% {
            opacity: 0;
            transform: translateX(120px) translateY(-40px) rotate(15deg);
          }
          20% {
            opacity: 1;
            transform: translateX(80px) translateY(-25px) rotate(-8deg);
          }
          40% {
            transform: translateX(40px) translateY(-15px) rotate(4deg);
          }
          60% {
            transform: translateX(20px) translateY(-8px) rotate(-2deg);
          }
          80% {
            transform: translateX(8px) translateY(-3px) rotate(1deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(1deg);
          }
        }

        /* Text - slide from bottom-left */
        @keyframes cutJumpText {
          0% {
            opacity: 0;
            transform: translateX(-80px) translateY(60px) rotate(-6deg);
          }
          20% {
            opacity: 1;
            transform: translateX(-50px) translateY(40px) rotate(4deg);
          }
          40% {
            transform: translateX(-30px) translateY(25px) rotate(-2deg);
          }
          60% {
            transform: translateX(-15px) translateY(12px) rotate(1deg);
          }
          80% {
            transform: translateX(-5px) translateY(4px) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(0);
          }
        }

        /* Primary button - punch from center */
        @keyframes cutJumpBtnPrimary {
          0% {
            opacity: 0;
            transform: translateY(-60px) rotate(-10deg);
          }
          20% {
            opacity: 1;
            transform: translateY(-40px) rotate(6deg);
          }
          40% {
            transform: translateY(-25px) rotate(-4deg);
          }
          60% {
            transform: translateY(-12px) rotate(2deg);
          }
          80% {
            transform: translateY(-4px) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }

        /* Secondary button - slide from right with different timing */
        @keyframes cutJumpBtnSecondary {
          0% {
            opacity: 0;
            transform: translateX(90px) translateY(-30px) rotate(12deg);
          }
          20% {
            opacity: 1;
            transform: translateX(60px) translateY(-20px) rotate(-6deg);
          }
          40% {
            transform: translateX(35px) translateY(-12px) rotate(3deg);
          }
          60% {
            transform: translateX(18px) translateY(-6px) rotate(-2deg);
          }
          80% {
            transform: translateX(6px) translateY(-2px) rotate(1deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(0);
          }
        }

        /* Countdown - wobble from bottom */
        @keyframes cutJumpCountdown {
          0% {
            opacity: 0;
            transform: translateY(100px) rotate(-8deg);
          }
          20% {
            opacity: 1;
            transform: translateY(65px) rotate(5deg);
          }
          40% {
            transform: translateY(40px) rotate(-3deg);
          }
          60% {
            transform: translateY(20px) rotate(2deg);
          }
          80% {
            transform: translateY(8px) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }

        /* Logo - spiral entrance from right */
        @keyframes cutJumpLogo {
          0% {
            opacity: 0;
            transform: translateX(150px) translateY(-100px) rotate(45deg);
          }
          20% {
            opacity: 1;
            transform: translateX(100px) translateY(-60px) rotate(-30deg);
          }
          40% {
            transform: translateX(60px) translateY(-35px) rotate(15deg);
          }
          60% {
            transform: translateX(30px) translateY(-18px) rotate(-8deg);
          }
          80% {
            transform: translateX(10px) translateY(-6px) rotate(3deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(0);
          }
        }

        .hero-cut-title {
          animation: cutJumpTitle 1.5s steps(1, end) forwards;
          opacity: 0;
        }

        .hero-cut-highlight {
          animation: cutJumpHighlight 1.4s steps(1, end) forwards;
          opacity: 0;
        }

        .hero-cut-text {
          animation: cutJumpText 1.5s steps(1, end) forwards;
          opacity: 0;
        }

        .hero-cut-btn-primary {
          animation: cutJumpBtnPrimary 1.2s steps(1, end) forwards;
          opacity: 0;
        }

        .hero-cut-btn-secondary {
          animation: cutJumpBtnSecondary 1.5s steps(1, end) forwards;
          opacity: 0;
        }

        .hero-cut-countdown {
          animation: cutJumpCountdown 1.3s steps(1, end) forwards;
          opacity: 0;
        }

        .hero-cut-logo {
          animation: cutJumpLogo 1.5s steps(1, end) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
