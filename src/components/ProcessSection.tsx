import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "無料相談・ヒアリング",
    desc: "現在の業務フローや課題、目標をオンラインでヒアリング。30分程度でAI導入の可能性を診断します。",
    duration: "30分",
  },
  {
    number: "02",
    title: "現状分析・提案",
    desc: "ヒアリング内容をもとに、ROIが最大化できる導入領域を特定。コスト試算と優先度を明示した提案書を作成します。",
    duration: "3〜5営業日",
  },
  {
    number: "03",
    title: "要件定義・設計",
    desc: "御社の業務フローに合わせたシステム設計を行います。既存ツールとの連携方法も含めて詳細仕様を確定します。",
    duration: "1〜2週間",
  },
  {
    number: "04",
    title: "開発・テスト",
    desc: "AIエージェント・自動化システムを構築。実際のデータを使った動作確認を繰り返し、精度を高めます。",
    duration: "2〜6週間",
  },
  {
    number: "05",
    title: "導入・スタッフ研修",
    desc: "本番環境への導入と、スタッフへの操作説明を実施。現場でスムーズに使い始められるよう丁寧にサポートします。",
    duration: "1週間",
  },
  {
    number: "06",
    title: "運用・継続改善",
    desc: "稼働後の効果測定・モニタリングを継続。データが蓄積するほどAIの精度が向上し、さらなる効率化を実現します。",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">導入の流れ</h2>
          <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
            無料相談から運用開始まで、一貫してサポートします。
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
