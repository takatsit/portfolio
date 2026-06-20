import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

const steps = [
  {
    number: "01",
    title: "お問い合わせ・ヒアリング",
    desc: "現在の業務の困りごとや「こんなものを作りたい」というイメージをオンラインでヒアリングします。整理できていなくても大丈夫です。",
    duration: "30〜60分",
  },
  {
    number: "02",
    title: "提案・お見積り",
    desc: "ヒアリング内容をもとに、最適な解決策とお見積りをご提案します。内容に納得いただけたら正式にご依頼ください。",
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
    desc: "完成物をご確認いただき、修正が必要な箇所を対応します。イメージと違う部分は遠慮なくお伝えください。",
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
    <section id="process" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Process</p>
          <SplitTitle className="text-4xl md:text-5xl font-bold text-white mb-5">ご依頼の流れ</SplitTitle>
          <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
            お問い合わせから納品まで、丁寧にサポートします。
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 80} direction="up">
              <div className="relative bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-black text-blue-900/60">{step.number}</span>
                  <span className="text-xs text-blue-300/50 bg-blue-900/30 px-2 py-1 rounded-full">{step.duration}</span>
                </div>
                <h3 className="text-white font-bold mb-3">{step.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">{step.desc}</p>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-blue-700/40 text-xl">→</div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
