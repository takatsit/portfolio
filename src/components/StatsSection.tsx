import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

const strengths = [
  {
    icon: "🎓",
    title: "教える力",
    desc: "大学〜新卒の4年間、塾講師として文理問わず幅広い生徒に教えてきた経験。難しいことを「わかりやすく」伝えるのが得意です。IT苦手な方でも安心して相談できます。",
  },
  {
    icon: "🏭",
    title: "現場の実務経験",
    desc: "大手外資系企業でデータ分析・業務改善を担当し、社内でAI活用ツールを実際に作って業務を効率化してきた経験があります。「使えるAI」を知っています。",
  },
  {
    icon: "🔗",
    title: "一気通貫で対応",
    desc: "「HPで集客して、業務はAIで回す」を一人で完結。複数の業者に依頼する手間なく、集客から業務効率化までまとめてサポートします。",
  },
];

export default function StatsSection() {
  return (
    <section id="strengths" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-blue-800/10 to-violet-900/20" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Why Choose Me</p>
          <SplitTitle className="text-4xl md:text-5xl font-bold text-white">選ばれる3つの理由</SplitTitle>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((s, i) => (
            <FadeIn key={s.title} delay={i * 100}>
              <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
                <div className="text-5xl mb-4">{s.icon}</div>
                <div className="text-white font-bold text-lg mb-3">{s.title}</div>
                <div className="text-blue-200/60 text-sm leading-relaxed">{s.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
