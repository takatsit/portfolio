"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const TYPED_TEXT = "ビジネスをもっと軽くする。";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const startDelay = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTypedText(TYPED_TEXT.slice(0, i));
        if (i >= TYPED_TEXT.length) { clearInterval(interval); setTypingDone(true); }
      }, 80);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(startDelay);
  }, [mounted]);

  useEffect(() => {
    const interval = setInterval(() => { setCursorVisible(v => !v); }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020b18] to-transparent" />

      <div className="relative h-full flex flex-col justify-end px-8 md:px-16 pb-24 max-w-[1400px] mx-auto w-full">
        <p
          className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 font-mono transition-all duration-1000"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(12px)" }}
        >
          AI × Business Efficiency
        </p>

        <h1
          className="text-5xl sm:text-7xl md:text-[80px] lg:text-[96px] font-black text-white leading-[1.05] mb-2 tracking-tight transition-all duration-1000 delay-100"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)" }}
        >
          AIで、あなたの
        </h1>

        <h2
          className="text-5xl sm:text-7xl md:text-[80px] lg:text-[96px] font-black leading-[1.05] tracking-tight min-h-[1.1em] transition-all duration-1000 delay-200"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)" }}
        >
          <span className="gradient-text">{mounted ? typedText : ""}</span>
          <span
            className="gradient-text"
            style={{ opacity: !typingDone && cursorVisible ? 1 : 0, transition: "opacity 0.1s" }}
          >|</span>
        </h2>

        <div
          className="mt-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 transition-all duration-1000 delay-300"
          style={{ opacity: mounted ? 1 : 0 }}
        >
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="bg-white text-black font-bold px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-white/90 transition-all duration-200 hover:scale-105"
            >
              無料相談を申し込む
            </a>
            <a
              href="#services"
              className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              サービスを見る <span>↓</span>
            </a>
          </div>
          <p className="text-white/35 text-sm leading-relaxed sm:text-right max-w-xs">
            中小企業・個人事業主の業務をAIで仕組み化し、<br />
            集客につながるHPを低コストで制作します。
          </p>
        </div>
      </div>
    </section>
  );
}
