import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

const services = [
  {
    icon: "⚡",
    title: "AI業務自動化・効率化",
    description:
      "繰り返し作業・データ管理・報告書作成など、毎日こなしている手作業をAIで仕組み化します。「やらなきゃいけないけど時間がかかる」を解消して、本業に集中できる環境をつくります。",
    features: ["データ入力・集計の自動化", "レポート・書類作成の効率化", "専用AIツールの設計・作成"],
    color: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-700/30 hover:border-blue-500/60",
    badge: "bg-blue-500/20 text-blue-300",
  },
  {
    icon: "🌐",
    title: "HP作成",
    description:
      "AIを活用して、集客につながるHPを低コスト・短期間で制作します。「外注するには高すぎる」「自分で作る自信がない」を解決。難しい知識は一切不要です。",
    features: ["デザイン・テキスト・構成を一括対応", "スマホ対応・問い合わせフォーム付き", "納品後の更新・修正も対応"],
    color: "from-violet-600/20 to-violet-900/10",
    border: "border-violet-700/30 hover:border-violet-500/60",
    badge: "bg-violet-500/20 text-violet-300",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6 max-w-5xl mx-auto">
      <FadeIn className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Services</p>
        <SplitTitle className="text-4xl md:text-5xl font-bold text-white mb-5">2つのサービス</SplitTitle>
        <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
          AIの力で、あなたのビジネスの課題を解決します。
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
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
