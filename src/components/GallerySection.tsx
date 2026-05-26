import FadeIn from "./FadeIn";

const works = [
  {
    title: "受発注自動化システム",
    category: "AIエージェント",
    desc: "メール→OCR→基幹システム連携を全自動化",
    gradient: "from-blue-600 to-blue-900",
    icon: "📧",
  },
  {
    title: "カスタマーサポートBot",
    category: "AIエージェント",
    desc: "FAQ・問い合わせ対応を24h自動化、有人エスカレーション機能付き",
    gradient: "from-violet-600 to-violet-900",
    icon: "💬",
  },
  {
    title: "在庫予測ダッシュボード",
    category: "業務自動化",
    desc: "売上データからAIが発注量を自動算出・Slack通知",
    gradient: "from-emerald-600 to-emerald-900",
    icon: "📊",
  },
  {
    title: "経費精算自動化",
    category: "業務自動化",
    desc: "領収書スキャン→仕訳→承認ワークフローを完全自動化",
    gradient: "from-orange-600 to-orange-900",
    icon: "🧾",
  },
  {
    title: "AI営業支援ツール",
    category: "AIエージェント",
    desc: "顧客データ分析・アプローチ優先度スコアリング・提案書自動生成",
    gradient: "from-pink-600 to-pink-900",
    icon: "🎯",
  },
  {
    title: "採用AI面接サポート",
    category: "AIコンサルティング",
    desc: "履歴書スクリーニング・面接質問生成・評価シート自動作成",
    gradient: "from-cyan-600 to-cyan-900",
    icon: "👥",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">制作実績</h2>
          <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
            これまでに手がけたAIソリューションの一部をご紹介します。
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((work, i) => (
            <FadeIn key={work.title} delay={i * 80} direction="up">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                {/* Thumbnail */}
                <div className={`bg-gradient-to-br ${work.gradient} aspect-video flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <span className="relative text-6xl">{work.icon}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                {/* Info */}
                <div className="bg-white/5 p-5">
                  <span className="text-xs text-blue-300/60 uppercase tracking-wider">{work.category}</span>
                  <h3 className="text-white font-semibold mt-1 mb-2">{work.title}</h3>
                  <p className="text-blue-200/55 text-sm">{work.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
