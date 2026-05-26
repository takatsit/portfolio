"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`relative z-10 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/50 text-blue-300 text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          AIで経営課題を解決する専門家
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-white">AIで、あなたの</span>
          <br />
          <span className="gradient-text">ビジネスを加速する。</span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-200/70 max-w-3xl mx-auto mb-4 leading-relaxed">
          中小企業の経営者様へ。
        </p>
        <p className="text-lg text-blue-200/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          AIエージェント構築・業務自動化・コンサルティングで、
          <br className="hidden md:block" />
          人手不足・コスト増・競争激化の3つの壁を同時に突破します。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group relative bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 glow-blue hover:scale-105"
          >
            無料相談を予約する
          </a>
          <a
            href="#services"
            className="border border-blue-700/60 hover:border-blue-500 text-blue-300 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-blue-900/30"
          >
            サービスを見る →
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-16 text-blue-300/50 text-sm">
          <span>✓ 導入実績 50社以上</span>
          <span>✓ 平均コスト削減 42%</span>
          <span>✓ 導入後サポート付き</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-400/40 text-xs">
        <span>SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-400/40 to-transparent" />
      </div>
    </section>
  );
}
