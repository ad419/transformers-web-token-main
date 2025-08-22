export default function Ticker() {
  return (
    <div className="bg-black text-yellow-300 py-3 overflow-hidden" aria-label="meme ticker">
      <div className="whitespace-nowrap animate-[ticker_40s_linear_infinite] text-sm font-semibold">
        <span className="mx-6">
          🧩 This week: MorningRoutine Prime — 4:30am alarms, cold plunges, grindset delusion
        </span>
        <span className="mx-6">🔮 Next: AuraKid Prime — mystical chosen-one memes</span>
        <span className="mx-6">🕶️ Epstein Prime — dark humor conspiracies</span>
        <span className="mx-6">🏖️ Jet2Holidays Prime — chaotic Brit holiday energy</span>
        <span className="mx-6">🧻 Skidibi Prime — absurd, chaotic meme juice</span>
      </div>
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}
