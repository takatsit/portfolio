"use client";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 2400;
    const tick = 16;
    const steps = duration / tick;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 2.8);
      const value = Math.min(100, Math.round(eased * 100));
      setCount(value);

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setExiting(true), 200);
        setTimeout(() => setDone(true), 1200);
      }
    }, tick);

    return () => clearInterval(timer);
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center"
      style={{
        transform: exiting ? "translateY(-100%)" : "translateY(0)",
        transition: exiting ? "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
      }}
    >
      <span
        className="text-white select-none leading-none"
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "clamp(72px, 12vw, 160px)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
        }}
      >
        {String(count).padStart(2, "0")}%.
      </span>
    </div>
  );
}
