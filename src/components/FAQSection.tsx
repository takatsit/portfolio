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
    <section id="faq" className="py-28 px-6 max-w-4xl mx-auto">
      <FadeIn className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
        <SplitTitle className="text-4xl md:text-5xl font-bold text-white mb-5">よくある質問</SplitTitle>
        <p className="text-blue-200/60 text-lg">
          お問い合わせ前にご確認ください。
        </p>
      </FadeIn>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <FadeIn key={faq.q} delay={i * 60}>
            <div
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? "border-blue-500/50 bg-blue-950/40" : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <button
                className="w-full text-left flex items-center justify-between gap-4 p-6"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white font-semibold">{faq.q}</span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-blue-300 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45 bg-blue-600 border-blue-600" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-blue-200/65 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
