import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

const steps = [
  {
    number: "01",
    title: "お問い合わせ・ヒアリング",
    desc: "現在の業務の困りごとや「こんなものを作りたい」というイメージをオンラインでヒアリング。整理できていなくても大丈夫です。",
    duration: "30〜60分",
  },
  {
    number: "02",
    title: "提案・お見積り",
    desc: "ヒアリング内容をもとに最適な解決策とお見積りをご提案します。内容に納得いただけたら正式にご依頼ください。",
    duration: "2〜3営業日",
  },
  {
    number: "03",
    title: "設計・制作",
    desc: "AIを活用してHP制作・業務自動化ツールの設計・開発を行います。進捗は随時共有し、方向性を確認しながら進めます。",
    duration: "1〜4週間",
  },
  {
    number: "04",
    title: "確認・修正",
    desc: "完成物をご確認いただき修正が必要な箇所を対応します。イメージと違う部分は遠慮なくお伝えください。",
    duration: "1週間",
  },
  {
    number: "05",
    title: "納品・公開",
    desc: "HPの公開、または自動化ツールの本番運用を開始します。使い方の説明もセットで行います。",
    duration: "〜3日",
  },
  {
    number: "06",
    title: "アフターサポート",
    desc: "納品後も修正・追加対応を行います。使っていく中で出てきた疑問や改善要望もお気軽にご連絡ください。",
    duration: "継続",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="pt-28 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <FadeIn className="mb-16">
          <p className="text-white/25 text-xs font-mono tracking-[0.35em] uppercase mb-5">Process</p>
          <SplitTitle className="text-4xl md:text-6xl font-black text-white">ご依頼の流れ</SplitTitle>
        </FadeIn>

        <div className="border-t border-white/10">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 60}>
              <div className="flex gap-6 md:gap-16 py-9 md:py-12 border-b border-white/10 group cursor-default">
                {/* Step number */}
                <span className="text-white/10 font-black text-5xl md:text-6xl font-mono leading-none shrink-0 w-14 md:w-20 pt-1 group-hover:text-white/22 transition-colors duration-500">
                  {step.number}
                </span>

                {/* Content */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-16 flex-1 min-w-0">
                  <h3 className="text-white font-black text-base md:text-lg md:w-52 shrink-0 group-hover:text-blue-200 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed flex-1 group-hover:text-white/50 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>

                {/* Duration badge */}
                <div className="shrink-0 self-center">
                  <span className="text-[10px] font-mono text-white/20 tracking-[0.15em] border border-white/10 px-3 py-1.5 rounded-full whitespace-nowrap group-hover:text-white/40 group-hover:border-white/20 transition-all duration-300">
                    {step.duration}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-14 flex items-center justify-between">
            <p className="text-white/20 text-xs font-mono tracking-[0.2em]">まずはお気軽にご相談ください</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white text-sm font-bold border-b border-white/30 pb-1 hover:border-white transition-colors duration-200"
            >
              無料相談を申し込む <span>→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
