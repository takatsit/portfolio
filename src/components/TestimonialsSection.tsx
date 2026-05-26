import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "田中 浩二",
    role: "代表取締役 / 製造業",
    comment:
      "受発注業務の自動化で、スタッフの残業がほぼゼロになりました。最初は半信半疑でしたが、3ヶ月で投資回収できました。提案から実装まで丁寧に伴走してくれたので、ITに詳しくない私でも安心して進められました。",
    avatar: "田",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "山本 さやか",
    role: "代表取締役 / アパレルEC",
    comment:
      "在庫管理の自動化で、週12時間かかっていた作業が30分になりました。空いた時間で新しいブランド展開に着手でき、半年で売上が1.5倍に。AIって難しそうと思っていましたが、使ってみると想像以上にシンプルでした。",
    avatar: "山",
    color: "from-violet-500 to-violet-700",
  },
  {
    name: "鈴木 一郎",
    role: "所長 / 税理士事務所",
    comment:
      "どこから始めればいいか全くわからなかった私に、現状分析から優先順位づけまで丁寧に整理してもらえました。段階的な導入ができたのでリスクが低く、スタッフの抵抗感も最小限でした。売上も着実に伸びています。",
    avatar: "鈴",
    color: "from-emerald-500 to-emerald-700",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 px-6 max-w-7xl mx-auto">
      <FadeIn className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">お客様の声</h2>
        <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
          実際にAIを導入された経営者様からいただいたコメントです。
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 120} direction="up">
            <div className="h-full bg-white/5 border border-white/10 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-blue-200/70 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-blue-300/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
