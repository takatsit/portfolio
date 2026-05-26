"use client";
import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

const stats = [
  { value: 50, suffix: "社+", label: "AI導入実績", desc: "製造・小売・サービス業など幅広い業種" },
  { value: 42, suffix: "%", label: "平均コスト削減率", desc: "業務自動化による削減効果の平均値" },
  { value: 300, suffix: "時間+", label: "年間削減工数/社", desc: "単純作業の自動化による試算" },
  { value: 98, suffix: "%", label: "顧客継続率", desc: "導入後の継続サポート契約率" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-blue-800/10 to-violet-900/20" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Results</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">数字で見る実績</h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-blue-200/50 text-xs">{stat.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
