"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

const faqs = [
  {
    q: "AIやITの知識がなくても大丈夫ですか？",
    a: "まったく問題ありません。塾講師として「わかりやすく伝える」ことを長年磨いてきたので、専門用語を使わず、経営課題の言葉でご説明します。「IT苦手」な方ほど、むしろ得意です。",
  },
  {
    q: "どんな業務を自動化できますか？",
    a: "データ入力・集計、報告書・書類の作成、定型メールの対応、Excelでの管理業務など、繰り返し発生する手作業が自動化の対象になります。まずはどんな業務に時間がかかっているかをお聞かせください。",
  },
  {
    q: "HPはどんなものを作ってもらえますか？",
    a: "会社・店舗紹介、サービス案内、問い合わせフォーム付きのシンプルなHPを得意としています。AIを活用してデザイン・テキスト・構成を一括で対応するため、低コスト・短期間での制作が可能です。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "案件の内容・規模によって異なります。まずは無料でご相談いただき、内容を確認した上でお見積りします。「予算がない」「小さな依頼で申し訳ない」など気にせずお気軽にご連絡ください。",
  },
  {
    q: "副業としてやっているということですが、品質は大丈夫ですか？",
    a: "大手外資系企業のオペレーション部門で実際にAIツールを設計・作成して業務改善を行ってきた実績があります。副業ですが手を抜くことはなく、丁寧にサポートします。",
  },
  {
    q: "納品後のサポートはありますか？",
    a: "はい、対応しています。HP制作後の修正・更新や、AIツールの改善・追加機能の対応も行います。長期的にお付き合いいただけると嬉しいです。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-28 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <FadeIn className="mb-16">
          <p className="text-white/25 text-xs font-mono tracking-[0.35em] uppercase mb-5">FAQ</p>
          <SplitTitle className="text-4xl md:text-6xl font-black text-white">よくある質問</SplitTitle>
        </FadeIn>

        <div className="border-t border-white/10">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.q} delay={i * 50}>
              <div className="border-b border-white/10">
                <button
                  className="w-full text-left flex items-start justify-between gap-8 py-9 group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex gap-6 md:gap-12 items-start">
                    <span className="text-white/15 font-mono text-sm shrink-0 pt-0.5 group-hover:text-white/30 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white font-semibold text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {faq.q}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 text-white/30 text-xl leading-none mt-0.5 transition-transform duration-300 group-hover:text-white/60 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    openIndex === i ? "max-h-48 pb-9" : "max-h-0"
                  }`}
                >
                  <p className="text-white/40 text-sm leading-relaxed pl-[calc(1.5rem+1.5rem)] md:pl-[calc(3rem+1.5rem)]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
