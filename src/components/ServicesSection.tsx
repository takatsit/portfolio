"use client";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: "🤖",
    title: "AIエージェント構築",
    description:
      "御社の業務フローに合わせたカスタムAIエージェントを設計・開発。24時間365日稼働する自律型の業務実行システムで、人手に依存していた作業を自動化します。",
    features: ["要件定義から運用まで一貫対応", "既存システムとのAPI連携", "チャットボット・自動処理・判断AIなど"],
    color: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-700/30 hover:border-blue-500/60",
    badge: "bg-blue-500/20 text-blue-300",
  },
  {
    icon: "⚡",
    title: "業務自動化",
    description:
      "繰り返し作業・データ入力・レポート作成・メール対応など、手作業でこなしていた業務をAIとRPAで完全自動化。コア業務に集中できる環境を構築します。",
    features: ["書類処理・データ集計の自動化", "メール・チャット自動応答", "請求・在庫・スケジュール管理"],
    color: "from-violet-600/20 to-violet-900/10",
    border: "border-violet-700/30 hover:border-violet-500/60",
    badge: "bg-violet-500/20 text-violet-300",
  },
  {
    icon: "🧭",
    title: "AIコンサルティング",
    description:
      "AI導入に何から始めればいいかわからない経営者様向けに、現状分析・戦略策定・ロードマップ作成を提供。確実にROIを出せる導入計画を一緒に作ります。",
    features: ["AI活用可能性の無料診断", "優先度別の導入ロードマップ", "投資対効果のシミュレーション"],
    color: "from-emerald-600/20 to-emerald-900/10",
    border: "border-emerald-700/30 hover:border-emerald-500/60",
    badge: "bg-emerald-500/20 text-emerald-300",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6 max-w-7xl mx-auto">
      <FadeIn className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Services</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
          3つのコアサービス
        </h2>
        <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
          御社の課題規模・予算・目標に合わせて、最適なAIソリューションを提案します。
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <FadeIn key={service.title} delay={i * 120} direction="up">
            <div
              className={`relative h-full bg-gradient-to-br ${service.color} border ${service.border} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.badge} text-3xl mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-blue-200/65 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-blue-200/70">
                    <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
