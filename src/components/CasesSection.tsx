import Image from "next/image";
import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

const cases = [
  {
    industry: "飲食業",
    company: "個人事業主（飲食店）",
    challenge: "既存のHPのクオリティが低く自分で作り直したいが、やり方がわからない。外注すると費用が高すぎて依頼できない状況だった。",
    solution: "AIを活用してデザイン・テキスト・構成をゼロから制作。低コスト・短期間でのHP制作を実現した。",
    result: "以前と比べてクオリティが大幅に向上。「自分ではできない」という状況を解消し、集客につながるHPが完成した。",
    tag: "HP作成",
    tagColor: "bg-violet-500/20 text-violet-300",
    metric: "クオリティ大幅向上",
    siteTitle: "タイ居酒屋 イサーン サコンナコン",
    siteUrl: "http://thaiizakaya-esansakonnakhon.netlify.app/",
    thumbnail: "/hp-thumbnail.png",
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="py-28 px-6 max-w-5xl mx-auto">
      <FadeIn className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Case Studies</p>
        <SplitTitle className="text-4xl md:text-5xl font-bold text-white mb-5">導入事例</SplitTitle>
        <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
          実際の課題・施策・成果をご紹介します。
        </p>
      </FadeIn>

      <div className="max-w-3xl mx-auto">
        {cases.map((c) => (
          <FadeIn key={c.industry} direction="up">
            <div className="bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1">

              {/* サムネイル */}
              <a href={c.siteUrl} target="_blank" rel="noopener noreferrer" className="block relative group">
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={c.thumbnail}
                    alt={c.siteTitle}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-gray-900 text-sm font-semibold px-4 py-2 rounded-full">
                      サイトを見る →
                    </span>
                  </div>
                </div>
                <div className="px-6 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">{c.siteTitle}</span>
                  <span className="text-blue-400/60 text-xs">↗ 外部リンク</span>
                </div>
              </a>

              {/* 事例詳細 */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <span className="text-xs text-blue-300/60 uppercase tracking-wider">{c.industry}</span>
                    <p className="text-white/60 text-sm">{c.company}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${c.tagColor}`}>{c.tag}</span>
                </div>

                <div className="space-y-4">
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
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
