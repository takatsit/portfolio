import Image from "next/image";
import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

const cases = [
  {
    number: "01",
    industry: "飲食業",
    company: "個人事業主（飲食店）",
    tag: "HP作成",
    challenge: "既存のHPのクオリティが低く自分で作り直したいが、やり方がわからない。外注すると費用が高すぎて依頼できない状況だった。",
    solution: "AIを活用してデザイン・テキスト・構成をゼロから制作。低コスト・短期間でのHP制作を実現した。",
    result: "以前と比べてクオリティが大幅に向上。「自分ではできない」という状況を解消し、集客につながるHPが完成した。",
    metric: "クオリティ大幅向上",
    siteTitle: "タイ居酒屋 イサーン サコンナコン",
    siteUrl: "http://thaiizakaya-esansakonnakhon.netlify.app/",
    thumbnail: "/hp-thumbnail.png",
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="pt-28 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <FadeIn className="mb-16">
          <p className="text-white/25 text-xs font-mono tracking-[0.35em] uppercase mb-5">Case Studies</p>
          <SplitTitle className="text-4xl md:text-6xl font-black text-white">導入事例</SplitTitle>
        </FadeIn>
      </div>

      {cases.map((c) => (
        <FadeIn key={c.number} direction="up">
          <div className="border-t border-white/10">
            {/* Thumbnail — full width */}
            <a
              href={c.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full aspect-[16/7] overflow-hidden group"
            >
              <Image
                src={c.thumbnail}
                alt={c.siteTitle}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full">
                  サイトを見る →
                </span>
              </div>
              <div className="absolute bottom-6 left-8 md:left-16">
                <span className="text-white/50 text-xs font-mono tracking-[0.2em]">↗ {c.siteTitle}</span>
              </div>
            </a>

            {/* Details */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-12">
              <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                {/* Left: meta */}
                <div className="md:w-56 shrink-0 space-y-4">
                  <span className="text-white/15 font-black text-5xl font-mono">{c.number}</span>
                  <div className="space-y-2 pt-2">
                    <p className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase">{c.industry}</p>
                    <p className="text-white/40 text-sm">{c.company}</p>
                  </div>
                  <span className="inline-block text-[10px] font-mono tracking-[0.2em] border border-white/15 text-white/30 px-3 py-1.5 rounded-full">
                    {c.tag}
                  </span>
                </div>

                {/* Right: challenge / solution / result */}
                <div className="flex-1 space-y-6 border-t border-white/10 pt-6 md:border-t-0 md:pt-0 md:border-l md:border-white/10 md:pl-20">
                  <div>
                    <p className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase mb-2">課題</p>
                    <p className="text-white/45 text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase mb-2">施策</p>
                    <p className="text-white/45 text-sm leading-relaxed">{c.solution}</p>
                  </div>
                  <div>
                    <p className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase mb-2">成果</p>
                    <p className="text-white/45 text-sm leading-relaxed">{c.result}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-2xl font-black text-white">{c.metric}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
