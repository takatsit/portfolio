"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    challenge: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/15 hover:border-blue-600/50 focus:border-blue-500 focus:bg-blue-950/30 rounded-xl px-4 py-3 text-white placeholder-blue-300/30 text-sm outline-none transition-all duration-200";

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">お問い合わせ</h2>
          <p className="text-blue-200/60 text-lg max-w-2xl mx-auto">
            まずは無料相談から。30分のオンラインMTGで、AIで解決できる課題かどうかをご確認できます。
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <FadeIn direction="left" className="md:col-span-2">
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
                <div>
                  <p className="text-xs text-blue-300/50 uppercase tracking-wider mb-1">メール</p>
                  <p className="text-white text-sm">contact@ai-solutions.jp</p>
                </div>
                <div>
                  <p className="text-xs text-blue-300/50 uppercase tracking-wider mb-1">対応時間</p>
                  <p className="text-white text-sm">平日 9:00〜18:00</p>
                </div>
                <div>
                  <p className="text-xs text-blue-300/50 uppercase tracking-wider mb-1">返信目安</p>
                  <p className="text-white text-sm">1〜2営業日以内</p>
                </div>
              </div>

              {/* SNS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-xs text-blue-300/50 uppercase tracking-wider mb-4">SNS</p>
                <div className="space-y-3">
                  {[
                    { name: "X (Twitter)", handle: "@ai_solutions_jp", icon: "𝕏" },
                    { name: "LinkedIn", handle: "yamada-taro-ai", icon: "in" },
                    { name: "note", handle: "ai_solutions", icon: "n" },
                  ].map((sns) => (
                    <div key={sns.name} className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        {sns.icon}
                      </span>
                      <div>
                        <p className="text-white text-sm">{sns.name}</p>
                        <p className="text-blue-300/50 text-xs">{sns.handle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right" delay={100} className="md:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-white/5 border border-emerald-500/30 rounded-2xl p-12 text-center">
                <div>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-white text-xl font-bold mb-2">送信が完了しました</h3>
                  <p className="text-blue-200/60 text-sm">
                    1〜2営業日以内にご連絡いたします。
                    <br />
                    しばらくお待ちください。
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-blue-300/60 mb-1.5">お名前 *</label>
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
                    <label className="block text-xs text-blue-300/60 mb-1.5">会社名</label>
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
                  <label className="block text-xs text-blue-300/60 mb-1.5">メールアドレス *</label>
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
                  <label className="block text-xs text-blue-300/60 mb-1.5">お悩み・課題</label>
                  <select
                    className={inputClass}
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  >
                    <option value="" className="bg-[#020b18]">選択してください</option>
                    <option value="agent" className="bg-[#020b18]">AIエージェントを作りたい</option>
                    <option value="auto" className="bg-[#020b18]">業務を自動化したい</option>
                    <option value="consult" className="bg-[#020b18]">何から始めればいいかわからない</option>
                    <option value="other" className="bg-[#020b18]">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-blue-300/60 mb-1.5">詳細・ご要望</label>
                  <textarea
                    rows={4}
                    placeholder="現在の課題や自動化したい業務など、自由にご記入ください。"
                    className={`${inputClass} resize-none`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] glow-blue"
                >
                  無料相談を申し込む
                </button>
                <p className="text-blue-300/40 text-xs text-center">
                  送信いただいた情報は、お問い合わせ対応以外に使用しません。
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
