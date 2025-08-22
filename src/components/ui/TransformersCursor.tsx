'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'

// Cybertronian-style characters for the trail
const CYBERTRONIAN_CHARS = ['◊', '◈', '⬡', '⬢', '⬣', '▽', '△', '◇', '⬟', '⬠', '⬢', '⬣']
const AUTOBOT_WORDS = ['ROLL', 'OUT', 'PRIME', 'AUTO', 'BOTS', 'SPARK']

// Optimus Prime head SVG
const OptimusPrimeSVG = ({
  mouthOpen,
  isHovering,
  scale = 1,
}: {
  mouthOpen: boolean
  isHovering: boolean
  scale?: number
}) => (
  <svg
    width={48 * scale}
    height={48 * scale}
    viewBox="0 0 56 56"
    fill="none"
    style={{
      pointerEvents: 'none',
      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
      transform: isHovering ? 'scale(1.1)' : 'scale(1)',
      transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }}
  >
    <defs>
      <linearGradient id="blueHelmet" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="silverFace" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E5E7EB" />
        <stop offset="50%" stopColor="#D1D5DB" />
        <stop offset="100%" stopColor="#9CA3AF" />
      </linearGradient>
      <linearGradient id="redAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
      <radialGradient id="eyeGlow">
        <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
        <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.6" />
      </radialGradient>
    </defs>

    <g transform="translate(28, 28)">
      <path
        d="M -20 -18 L -20 -8 L -22 -6 L -22 12 L -18 18 L -12 20 L 12 20 L 18 18 L 22 12 L 22 -6 L 20 -8 L 20 -18 L 15 -22 L 8 -24 L -8 -24 L -15 -22 Z"
        fill="url(#blueHelmet)"
        stroke="#1E40AF"
        strokeWidth="1"
      />
      <rect
        x="-4"
        y="-24"
        width="8"
        height="6"
        fill="url(#blueHelmet)"
        stroke="#1E40AF"
        strokeWidth="1"
      />
      <path
        d="M -22 -8 L -26 -10 L -26 -2 L -24 0 L -22 0 Z"
        fill="url(#blueHelmet)"
        stroke="#1E40AF"
        strokeWidth="1"
      />
      <path
        d="M 22 -8 L 26 -10 L 26 -2 L 24 0 L 22 0 Z"
        fill="url(#blueHelmet)"
        stroke="#1E40AF"
        strokeWidth="1"
      />
      <path
        d="M -14 -12 L -14 8 L -10 14 L 10 14 L 14 8 L 14 -12 L 10 -16 L -10 -16 Z"
        fill="url(#silverFace)"
        stroke="#4B5563"
        strokeWidth="1"
      />
      <rect x="-10" y="-15" width="20" height="3" fill="url(#redAccent)" />
      <rect x="-12" y="-8" width="24" height="8" fill="#1F2937" opacity="0.7" />
      <g>
        <rect
          x="-10"
          y="-6"
          width="6"
          height="4"
          fill="url(#eyeGlow)"
          opacity={isHovering ? 1 : 0.7}
        >
          <animate
            attributeName="opacity"
            values={isHovering ? '1;0.8;1' : '0.7;0.5;0.7'}
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="4" y="-6" width="6" height="4" fill="url(#eyeGlow)" opacity={isHovering ? 1 : 0.7}>
          <animate
            attributeName="opacity"
            values={isHovering ? '1;0.8;1' : '0.7;0.5;0.7'}
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="-9" y="-5" width="2" height="1" fill="#FFFFFF" opacity="0.8" />
        <rect x="5" y="-5" width="2" height="1" fill="#FFFFFF" opacity="0.8" />
      </g>
      <path
        d="M -2 -2 L -2 4 L 0 6 L 2 4 L 2 -2 Z"
        fill="#9CA3AF"
        stroke="#6B7280"
        strokeWidth="1"
      />
      <g transform={mouthOpen ? 'translate(0, 6)' : 'translate(0, 0)'}>
        <path
          d="M -8 8 L -8 12 L -6 14 L 6 14 L 8 12 L 8 8 Z"
          fill="#6B7280"
          stroke="#4B5563"
          strokeWidth="1"
          style={{ transition: 'all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
        />
        <rect x="-6" y="9" width="1" height="4" fill="#374151" />
        <rect x="-3" y="9" width="1" height="4" fill="#374151" />
        <rect x="0" y="9" width="1" height="4" fill="#374151" />
        <rect x="3" y="9" width="1" height="4" fill="#374151" />
        <rect x="5" y="9" width="1" height="4" fill="#374151" />
        {mouthOpen && (
          <rect x="-4" y="10" width="8" height="2" fill="#60A5FA" opacity="0.6">
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur="0.5s"
              repeatCount="indefinite"
            />
          </rect>
        )}
      </g>
      <path d="M -10 14 L -8 18 L 8 18 L 10 14" fill="#6B7280" stroke="#4B5563" strokeWidth="1" />
      <g>
        <rect x="-18" y="2" width="2" height="8" fill="#1F2937" />
        <rect x="-18" y="3" width="2" height="1" fill="url(#redAccent)" />
        <rect x="-18" y="6" width="2" height="1" fill="url(#redAccent)" />
        <rect x="16" y="2" width="2" height="8" fill="#1F2937" />
        <rect x="16" y="3" width="2" height="1" fill="url(#redAccent)" />
        <rect x="16" y="6" width="2" height="1" fill="url(#redAccent)" />
      </g>
      <g transform="translate(0, -19)">
        <path d="M -3 0 L -1 -2 L 1 -2 L 3 0 L 2 2 L -2 2 Z" fill="url(#redAccent)" opacity="0.8" />
      </g>
    </g>
  </svg>
)

// Enhanced trail particle with Cybertronian characters
const CybertronianTrail: React.FC<{
  x: number
  y: number
  opacity: number
  size: number
  char: string
  rotation: number
  color: string
}> = React.memo(({ x, y, opacity, size, char, rotation, color }) => (
  <div
    style={{
      position: 'fixed',
      left: x,
      top: y,
      pointerEvents: 'none',
      opacity: opacity,
      zIndex: 9998,
      transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${opacity})`,
      fontSize: `${size}px`,
      fontFamily: 'monospace',
      fontWeight: 'bold',
      color: color,
      textShadow: `0 0 ${10 * opacity}px ${color}, 0 0 ${20 * opacity}px ${color}`,
      filter: `blur(${(1 - opacity) * 2}px)`,
      willChange: 'transform, opacity',
    }}
  >
    {char}
  </div>
))
CybertronianTrail.displayName = 'CybertronianTrail'

type TrailParticle = {
  x: number
  y: number
  id: number
  opacity: number
  size: number
  char: string
  rotation: number
  color: string
  createdAt: number
}

const TransformersCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 })
  const targetPos = useRef({ x: 0, y: 0 })
  const currentPos = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()
  const [mouthOpen, setMouthOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<TrailParticle[]>([])
  const [isMoving, setIsMoving] = useState(false)
  const moveTimeoutRef = useRef<NodeJS.Timeout>()
  const trailIdRef = useRef(0)
  const [isTransforming, setIsTransforming] = useState(false)
  const lastTrailTime = useRef(0)
  const velocity = useRef({ x: 0, y: 0 })
  const lastFrameTime = useRef(performance.now())
  const trailDistance = useRef(0)

  // Frame-rate independent smooth cursor animation
  useEffect(() => {
    const smoothAnimation = (currentTime: number) => {
      const deltaTime = currentTime - lastFrameTime.current
      lastFrameTime.current = currentTime

      // Calculate frame-independent interpolation factor
      // Higher values = faster response, lower values = smoother movement
      const responsiveness = 0.4 // Adjust between 0.1 (smooth) to 1.0 (instant)
      const interpolationFactor = 1 - Math.pow(1 - responsiveness, deltaTime / 16.67) // Normalized to 60fps

      const dx = targetPos.current.x - currentPos.current.x
      const dy = targetPos.current.y - currentPos.current.y

      // Update velocity for trail effects
      velocity.current.x = dx * interpolationFactor
      velocity.current.y = dy * interpolationFactor

      // Update position with frame-independent interpolation
      currentPos.current.x += dx * interpolationFactor
      currentPos.current.y += dy * interpolationFactor

      setSmoothPos({
        x: currentPos.current.x,
        y: currentPos.current.y,
      })

      animationFrameRef.current = requestAnimationFrame(smoothAnimation)
    }

    animationFrameRef.current = requestAnimationFrame(smoothAnimation)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Optimized cursor movement with dynamic trail generation
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newX = e.clientX
    const newY = e.clientY

    // Calculate distance moved for trail density
    const dx = newX - targetPos.current.x
    const dy = newY - targetPos.current.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    targetPos.current = { x: newX, y: newY }
    setIsMoving(true)

    if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current)
    moveTimeoutRef.current = setTimeout(() => setIsMoving(false), 100)

    // Accumulate distance for trail generation
    trailDistance.current += distance

    // Dynamic trail generation based on movement distance
    const trailThreshold = 15 // Generate trail every 15 pixels of movement
    if (trailDistance.current >= trailThreshold) {
      trailDistance.current = 0

      const now = performance.now()

      // Calculate speed for dynamic effects
      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2)

      // Choose character based on movement
      const charType = Math.random()
      let char: string
      if (charType < 0.3 && speed > 5) {
        char = AUTOBOT_WORDS[Math.floor(Math.random() * AUTOBOT_WORDS.length)]
      } else if (charType < 0.7) {
        char = CYBERTRONIAN_CHARS[Math.floor(Math.random() * CYBERTRONIAN_CHARS.length)]
      } else {
        char = Math.random() < 0.5 ? '0' : '1'
      }

      // Dynamic color based on speed
      const colors =
        speed > 10 ? ['#60A5FA', '#3B82F6', '#EF4444'] : ['#3B82F6', '#2563EB', '#1E40AF']

      const newParticle: TrailParticle = {
        x: newX + (Math.random() - 0.5) * 10,
        y: newY + (Math.random() - 0.5) * 10,
        id: trailIdRef.current++,
        opacity: 1,
        size: Math.random() * 8 + 12 + Math.min(speed * 0.5, 10),
        char: char,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        createdAt: now,
      }

      setTrail((prev) => [...prev.slice(-25), newParticle])
      lastTrailTime.current = now
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current)
    }
  }, [handleMouseMove])

  // Optimized trail fade animation using requestAnimationFrame
  useEffect(() => {
    let rafId: number

    const updateTrail = (currentTime: number) => {
      setTrail((prev) => {
        if (prev.length === 0) return prev

        return prev
          .map((p) => {
            const age = currentTime - p.createdAt
            const fadeSpeed = age > 500 ? 0.92 : 0.97
            return {
              ...p,
              opacity: p.opacity * fadeSpeed,
              rotation: p.rotation + (1 - p.opacity) * 3,
            }
          })
          .filter((p) => p.opacity > 0.01)
      })

      rafId = requestAnimationFrame(updateTrail)
    }

    rafId = requestAnimationFrame(updateTrail)

    return () => cancelAnimationFrame(rafId)
  }, [])

  // Mouse interactions
  useEffect(() => {
    const handleMouseDown = () => {
      setMouthOpen(true)
      setIsTransforming(true)

      // Create burst of particles on click
      const burstCount = 8
      const burstParticles: TrailParticle[] = []
      for (let i = 0; i < burstCount; i++) {
        const angle = (i / burstCount) * Math.PI * 2
        const distance = 30
        burstParticles.push({
          x: currentPos.current.x + Math.cos(angle) * distance,
          y: currentPos.current.y + Math.sin(angle) * distance,
          id: trailIdRef.current++,
          opacity: 1,
          size: 16,
          char: CYBERTRONIAN_CHARS[Math.floor(Math.random() * CYBERTRONIAN_CHARS.length)],
          rotation: angle * (180 / Math.PI),
          color: '#EF4444',
          createdAt: performance.now(),
        })
      }
      setTrail((prev) => [...prev, ...burstParticles].slice(-40))

      setTimeout(() => setIsTransforming(false), 300)
    }
    const handleMouseUp = () => setMouthOpen(false)

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Hover detection
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target?.tagName === 'A' ||
        target?.tagName === 'BUTTON' ||
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.style?.cursor === 'pointer' ||
        target?.onclick !== null
      ) {
        setIsHovering(true)
      }
    }
    const handleMouseOut = () => setIsHovering(false)

    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    window.addEventListener('mouseout', handleMouseOut, { passive: true })

    return () => {
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      {/* Cybertronian character trail */}
      {trail.map((particle) => (
        <CybertronianTrail
          key={particle.id}
          x={particle.x}
          y={particle.y}
          opacity={particle.opacity}
          size={particle.size}
          char={particle.char}
          rotation={particle.rotation}
          color={particle.color}
        />
      ))}

      {/* Transformation effect ring */}
      {isTransforming && (
        <div
          style={{
            position: 'fixed',
            left: smoothPos.x - 100,
            top: smoothPos.y - 100,
            width: 200,
            height: 200,
            pointerEvents: 'none',
            zIndex: 9997,
            willChange: 'transform',
          }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            <g transform="translate(100, 100)">
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <circle
                  key={i}
                  cx={Math.cos((angle * Math.PI) / 180) * 50}
                  cy={Math.sin((angle * Math.PI) / 180) * 50}
                  r="3"
                  fill="#EF4444"
                  opacity="0.8"
                >
                  <animate
                    attributeName="r"
                    values="3;15;3"
                    dur="0.3s"
                    begin={`${i * 0.05}s`}
                    repeatCount="1"
                  />
                  <animate
                    attributeName="opacity"
                    values="1;0;1"
                    dur="0.3s"
                    begin={`${i * 0.05}s`}
                    repeatCount="1"
                  />
                </circle>
              ))}
            </g>
            <circle
              cx="100"
              cy="100"
              r="40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              opacity="0.8"
            >
              <animate attributeName="r" values="20;70;20" dur="0.3s" repeatCount="1" />
              <animate attributeName="opacity" values="1;0;1" dur="0.3s" repeatCount="1" />
            </circle>
          </svg>
        </div>
      )}

      {/* Main Optimus Prime cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: smoothPos.x - 24,
          top: smoothPos.y - 24,
          width: 48,
          height: 48,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `
            ${isTransforming ? 'scale(1.3)' : 'scale(1)'} 
            rotate(${isMoving ? Math.sin(Date.now() / 100) * 5 + 'deg' : '0deg'})
          `,
          transition: isTransforming
            ? 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            : 'none',
          willChange: 'transform',
        }}
      >
        <OptimusPrimeSVG mouthOpen={mouthOpen || isHovering} isHovering={isHovering} />
      </div>
    </>
  )
}

export default TransformersCursor
