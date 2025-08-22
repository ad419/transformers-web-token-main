import { useWeeklyCountdown } from '@/hooks/useWeeklyCountdown'
import { Timer } from 'lucide-react'
import TimePill from './TimePill'

export default function CountdownCard() {
  const { d, h, m, s } = useWeeklyCountdown()
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur p-4 inline-flex items-center gap-4 shadow-sm">
      <div className="flex items-center gap-2 font-semibold">
        <Timer className="h-4 w-4" /> Next Transformation:
      </div>
      <div className="flex items-center gap-2">
        <TimePill label="D" value={d} />
        <TimePill label="H" value={h} />
        <TimePill label="M" value={m} />
        <TimePill label="S" value={s} />
      </div>
    </div>
  )
}
