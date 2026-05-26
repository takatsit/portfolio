import FadeIn from "./FadeIn";

const cases = [
  {
    industry: "製造業",
    company: "部品メーカー（従業員80名）",
    challenge: "受発注メールの処理に毎日3時間かかり、人為的ミスによるクレームが月5件発生していた。",
    solution: "AIエージェントによるメール自動分類・発注書生成・基幹システム連携を構築。",
    result: "処理時間を95%削減、ミスゼロを3ヶ月継続中。年間換算で780万円のコスト削減を実現。",
    tag: "AIエージェント構築",
    tagColor: "bg-blue-500/20 text-blue-300",
    metric: "780万円削減/年",
  },
  {
    industry: "小売・EC",
    company: "アパレルEC（従業員25名）",
    challenge: "在庫管理・売上レポート作成に週12時間を費やし、データ分析に手が回らない状況だった。",
    solution: "在庫予測AIと自動レポーティングシステムを導入。Slack通知で異常在庫をリアルタイム検知。",
    result: "週12時間→30分へ削減。欠品率40%改善、過剰在庫20%削減。担当者が販売戦略に集中できるように。",
    tag: "業務自動化",
    tagColor: "bg-violet-500/20 text-violet-300",
    metric: "96%工数削減",
  },
  {
    industry: "士業・コンサル",
    company: "税理士事務所（従業員15名）",
    challenge: "AI導入を検討していたが、何から始めればいいか不明。投資対効果の見通しが立たなかった。",
    solution: "業務診断から開始し、ROIが最大化できる領域を特定。3ヶ月ロードマップを策定・実行支援。",
    result: "6ヶ月で顧客対応の自動化率60%達成。スタッフ1名分の工数を新規顧客開拓に転換。売上120%成長。",
    tag: "AIコンサルティング",
    tagColor: "bg-emerald-500/20 text-emerald-300",
    metric: "売上120%成長",
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="py-28 px-6 max-w-7xl mx-auto">
      <FadeIn className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Case Studies</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">導入事例</h2>
        <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
          実際の導入企業様の課題・施策・成果をご紹介します。
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <FadeIn key={c.industry} delay={i * 120} direction="up">
            <div className="h-full bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="text-xs text-blue-300/60 uppercase tracking-wider">{c.industry}</span>
                  <p className="text-white/60 text-sm">{c.company}</p>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${c.tagColor}`}>{c.tag}</span>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-xs text-red-400/70 font-semibold mb-1">課題</p>
                  <p className="text-blue-200/65 text-sm leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs text-blue-400/70 font-semibold mb-1">施策</p>
                  <p className="text-blue-200/65 text-sm leading-relaxed">{c.solution}</p>
                </div>
                <div>
                  <p className="text-xs text-emerald-400/70 font-semibold mb-1">成果</p>
                  <p className="text-blue-200/65 text-sm leading-relaxed">{c.result}</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="text-2xl font-bold gradient-text">{c.metric}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
