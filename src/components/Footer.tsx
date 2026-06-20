export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-28 py-10 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-white font-black text-lg tracking-tight">Glorant</p>
          <p className="text-white/20 text-xs font-mono mt-1">AI × Business Efficiency</p>
        </div>
        <nav className="flex flex-wrap gap-8 text-white/25 text-xs font-mono tracking-[0.15em]">
          <a href="#services" className="hover:text-white/60 transition-colors duration-200">Services</a>
          <a href="#cases" className="hover:text-white/60 transition-colors duration-200">Cases</a>
          <a href="#profile" className="hover:text-white/60 transition-colors duration-200">Profile</a>
          <a href="#faq" className="hover:text-white/60 transition-colors duration-200">FAQ</a>
          <a href="#contact" className="hover:text-white/60 transition-colors duration-200">Contact</a>
        </nav>
        <p className="text-white/15 text-[10px] font-mono">© 2026 Glorant. All rights reserved.</p>
      </div>
    </footer>
  );
}
