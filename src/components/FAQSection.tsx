"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "AIの知識がなくても大丈夫ですか？",
    a: "まったく問題ありません。技術的な知識ゼロの経営者様への導入実績が多数あります。専門用語を使わず、経営課題の言葉でご説明します。操作も最小限になるよう設計します。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "サービス内容・規模によって異なります。業務自動化の小規模案件は30万円〜、AIエージェント構築は50万円〜が目安です。まず無料相談で御社の課題をお聞きし、ROIをシミュレーションした上でご提案します。",
  },
  {
    q: "導入期間はどのくらいですか？",
    a: "シンプルな自動化であれば2〜4週間、複雑なAIエージェントシステムは6〜8週間が標準的です。段階的な導入も対応しており、まず小さく始めて効果を確認してから拡張するアプローチも可能です。",
  },
  {
    q: "既存のシステムとつながりますか？",
    a: "はい。freee・弥生・kintone・Salesforce・Slack・Notion など、主要なビジネスツールとの連携実績があります。API非公開のシステムでも、RPA技術を組み合わせることで連携できるケースが多いです。",
  },
  {
    q: "導入後のサポートはありますか？",
    a: "全プランに3ヶ月間の運用サポートが含まれています。AI精度の改善・機能追加・不具合対応をオンラインで行います。継続サポート契約（月額）もご用意しており、長期的なパートナーとして伴走します。",
  },
  {
    q: "セキュリティは大丈夫ですか？",
    a: "お客様のデータは暗号化して管理し、外部への流出がないようアーキテクチャを設計します。使用するAIサービスはエンタープライズ契約で、学習データへの使用を禁止した条件で利用しています。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 px-6 max-w-4xl mx-auto">
      <FadeIn className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">よくある質問</h2>
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
