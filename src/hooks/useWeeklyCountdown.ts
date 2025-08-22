import { useEffect, useMemo, useState } from 'react'

export function useWeeklyCountdown() {
  // Resets every Sunday 00:00 local time — adjust as needed
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const target = useMemo(() => {
    const n = new Date(now)
    const day = n.getDay() // 0=Sun
    const daysUntilSunday = (7 - day) % 7
    const t = new Date(n)
    t.setDate(
      n.getDate() +
        (daysUntilSunday === 0 && n.getHours() < 24 && n.getMinutes() < 60 && n.getSeconds() < 60
          ? 7
          : daysUntilSunday),
    )
    t.setHours(0, 0, 0, 0)
    return t.getTime()
  }, [now])

  const diff = Math.max(0, target - now)
  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const s = Math.floor((diff / 1000) % 60)
  return { d, h, m, s }
}
