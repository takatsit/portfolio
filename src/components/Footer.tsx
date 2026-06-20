export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold gradient-text text-lg">Glorant</p>
          <p className="text-blue-300/40 text-xs mt-1">AIで中小企業の可能性を拡張する</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-blue-300/50 text-sm">
          <a href="#services" className="hover:text-white transition-colors">サービス</a>
          <a href="#cases" className="hover:text-white transition-colors">導入事例</a>
          <a href="#profile" className="hover:text-white transition-colors">プロフィール</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a>
        </nav>
        <p className="text-blue-300/30 text-xs">© 2026 Glorant. All rights reserved.</p>
      </div>
    </footer>
  );
}
