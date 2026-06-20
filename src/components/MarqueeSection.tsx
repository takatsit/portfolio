const items = [
  "AI業務自動化",
  "HP作成",
  "業務効率化",
  "データ管理",
  "Glorant",
  "AIツール設計",
  "中小企業支援",
  "個人事業主サポート",
];

const doubled = [...items, ...items];

export default function MarqueeSection() {
  return (
    <div className="bg-white py-5 overflow-hidden border-y border-gray-100">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="text-black font-bold text-xs tracking-[0.2em] uppercase shrink-0 flex items-center">
            {item}
            <span className="mx-8 text-gray-300 font-light">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
