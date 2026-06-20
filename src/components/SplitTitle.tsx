"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SplitTitleProps {
  children: string;
  className?: string;
}

export default function SplitTitle({ children, className = "" }: SplitTitleProps) {
  const { ref, isVisible } = useScrollAnimation();
  const chars = Array.from(children);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {chars.map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.45s ease ${i * 0.04}s, transform 0.45s ease ${i * 0.04}s`,
            whiteSpace: char === " " ? "pre" : undefined,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
