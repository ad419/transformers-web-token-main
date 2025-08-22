export default function TimePill({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="text-xl font-black leading-none">{String(value).padStart(2, '0')}</div>
      <div className="text-[10px] text-zinc-500">{label}</div>
    </div>
  )
}
