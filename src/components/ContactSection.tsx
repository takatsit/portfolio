"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    challenge: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("送信に失敗しました。直接メールにてご連絡ください。");
      }
    } catch {
      setError("送信に失敗しました。直接メールにてご連絡ください。");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/15 focus:border-white/50 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors duration-200";

  return (
    <section id="contact" className="pt-28 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Header */}
        <FadeIn className="mb-16">
          <p className="text-white/25 text-xs font-mono tracking-[0.35em] uppercase mb-5">Contact</p>
          <SplitTitle className="text-4xl md:text-6xl font-black text-white">お問い合わせ</SplitTitle>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 border-t border-white/10 pt-16">
          {/* Left: info */}
          <FadeIn direction="left" className="lg:w-64 shrink-0 space-y-10">
            <div>
              <p className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase mb-3">まずは話だけでも</p>
              <p className="text-white/50 text-sm leading-relaxed">
                課題が整理できていなくても、何から始めればいいかわからなくても、気軽にご相談ください。
              </p>
            </div>

            <div className="space-y-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase mb-1.5">メール</p>
                <p className="text-white/55 text-sm">taka.aicreate0707@gmail.com</p>
              </div>
              <div>
                <p className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase mb-1.5">対応時間</p>
                <p className="text-white/55 text-sm">平日夜・土日</p>
              </div>
              <div>
                <p className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase mb-1.5">返信目安</p>
                <p className="text-white/55 text-sm">2営業日以内</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase mb-4">SNS</p>
              <a
                href="https://x.com/tsugu_aicreate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="text-white/40 text-sm font-bold group-hover:text-white transition-colors duration-200">𝕏</span>
                <span className="text-white/40 text-sm font-mono group-hover:text-white transition-colors duration-200">@tsugu_aicreate</span>
              </a>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction="right" delay={80} className="flex-1">
            {submitted ? (
              <div className="flex flex-col items-start justify-center py-16 border-t border-white/10">
                <p className="text-white/25 text-xs font-mono tracking-[0.3em] uppercase mb-6">Sent</p>
                <h3 className="text-3xl font-black text-white mb-4">送信が完了しました</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  1〜2営業日以内にご連絡いたします。<br />しばらくお待ちください。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-white/25 text-[10px] font-mono tracking-[0.2em] uppercase mb-3">お名前 *</label>
                    <input
                      type="text"
                      required
                      placeholder="山田 太郎"
                      className={inputClass}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-white/25 text-[10px] font-mono tracking-[0.2em] uppercase mb-3">会社名</label>
                    <input
                      type="text"
                      placeholder="株式会社〇〇"
                      className={inputClass}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/25 text-[10px] font-mono tracking-[0.2em] uppercase mb-3">メールアドレス *</label>
                  <input
                    type="email"
                    required
                    placeholder="example@company.co.jp"
                    className={inputClass}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-white/25 text-[10px] font-mono tracking-[0.2em] uppercase mb-3">お悩み・課題</label>
                  <select
                    className={`${inputClass} cursor-pointer`}
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  >
                    <option value="" className="bg-[#020b18]">選択してください</option>
                    <option value="auto" className="bg-[#020b18]">業務を自動化したい</option>
                    <option value="hp" className="bg-[#020b18]">HPを作りたい</option>
                    <option value="consult" className="bg-[#020b18]">何から始めればいいかわからない</option>
                    <option value="other" className="bg-[#020b18]">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/25 text-[10px] font-mono tracking-[0.2em] uppercase mb-3">詳細・ご要望</label>
                  <textarea
                    rows={4}
                    placeholder="現在の課題や自動化したい業務など、自由にご記入ください。"
                    className={`${inputClass} resize-none`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {error && <p className="text-red-400/70 text-xs font-mono">{error}</p>}

                <div className="flex items-center gap-6 pt-4">
                  <button
                    type="submit"
                    disabled={sending}
                    className="bg-white text-black font-bold px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-white/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
                  >
                    {sending ? "送信中..." : "無料相談を申し込む"}
                  </button>
                  <p className="text-white/20 text-[10px] font-mono leading-relaxed">
                    送信情報はお問い合わせ対応<br />以外に使用しません。
                  </p>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
