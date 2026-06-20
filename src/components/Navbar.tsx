"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "サービス", href: "#services" },
  { label: "選ばれる理由", href: "#strengths" },
  { label: "導入事例", href: "#cases" },
  { label: "ご依頼の流れ", href: "#process" },
  { label: "プロフィール", href: "#profile" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#020b18]/95 backdrop-blur-md border-b border-white/8 py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between">
        <a href="#" className="text-lg font-black text-white tracking-tight hover:text-white/80 transition-colors duration-200">
          Glorant
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono tracking-[0.12em] text-white/35 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs font-bold bg-white text-black px-5 py-2.5 rounded-full hover:bg-white/90 transition-all duration-200 hover:scale-105"
          >
            無料相談
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-px bg-current transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="bg-[#020b18]/98 border-t border-white/8 px-8 py-6 space-y-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-white/40 text-xs font-mono tracking-[0.15em] hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block bg-white text-black font-bold text-xs px-6 py-2.5 rounded-full mt-2"
            onClick={() => setMenuOpen(false)}
          >
            無料相談
          </a>
        </div>
      </div>
    </header>
  );
}
