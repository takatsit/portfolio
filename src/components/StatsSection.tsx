import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

const strengths = [
  {
    number: "01",
    title: "教える力",
    desc: "大学〜新卒の4年間、塾講師として文理問わず幅広い生徒に教えてきた経験。難しいことを「わかりやすく」伝えるのが得意です。IT苦手な方でも安心して相談できます。",
    keyword: "Teaching",
  },
  {
    number: "02",
    title: "現場の実務経験",
    desc: "大手外資系企業でデータ分析・業務改善を担当し、社内でAI活用ツールを実際に作って業務を効率化してきた経験があります。「使えるAI」を知っています。",
    keyword: "Experience",
  },
  {
    number: "03",
    title: "一気通貫で対応",
    desc: "「HPで集客して、業務はAIで回す」を一人で完結。複数の業者に依頼する手間なく、集客から業務効率化までまとめてサポートします。",
    keyword: "All-in-one",
  },
];

export default function StatsSection() {
  return (
    <section id="strengths" className="pt-28 pb-10 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <FadeIn className="mb-16">
          <p className="text-white/25 text-xs font-mono tracking-[0.35em] uppercase mb-5">Why Choose Me</p>
          <SplitTitle className="text-4xl md:text-6xl font-black text-white">選ばれる3つの理由</SplitTitle>
        </FadeIn>

        <div className="border-t border-white/10">
          {strengths.map((s, i) => (
            <FadeIn key={s.number} delay={i * 80}>
              <div className="flex gap-6 md:gap-16 py-10 md:py-14 border-b border-white/10 group cursor-default">
                {/* Number */}
                <span className="text-white/12 font-black text-5xl md:text-6xl font-mono leading-none shrink-0 w-14 md:w-20 pt-1 group-hover:text-white/25 transition-colors duration-500">
                  {s.number}
                </span>

                {/* Content */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-20 flex-1 min-w-0">
                  <div className="md:w-56 shrink-0">
                    <span className="block text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase mb-2 group-hover:text-white/35 transition-colors duration-300">
                      {s.keyword}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-blue-300 transition-colors duration-300">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-white/35 text-sm leading-relaxed max-w-2xl group-hover:text-white/55 transition-colors duration-300">
                    {s.desc}
                  </p>
                </div>

                {/* Arrow */}
                <span className="text-white/15 text-xl self-center shrink-0 group-hover:text-white/40 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
