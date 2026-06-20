import Image from "next/image";
import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

const timeline = [
  { year: "2019", event: "大学時代から4年間、塾講師として小〜高校生に文理問わず指導" },
  { year: "2023", event: "新卒で塾業界に入社。中学生向けに英語・理科を担当" },
  { year: "2023", event: "大手外資系企業へ転職。Inbound部門に配属" },
  { year: "2024", event: "社内でExcelマクロ・AI活用ツールを自作し業務改善を推進" },
  { year: "2026", event: "AI×HP作成の副業を開始。中小企業・個人事業主向けに展開中" },
];

const skills = [
  { label: "AI活用ツール設計・作成", level: 85 },
  { label: "業務フロー改善", level: 90 },
  { label: "HP制作", level: 80 },
  { label: "わかりやすい説明・提案", level: 95 },
];

export default function ProfileSection() {
  return (
    <section id="profile" className="pt-28 border-t border-white/8">
      {/* Section label */}
      <div className="px-8 md:px-16 mb-14">
        <FadeIn>
          <p className="text-white/25 text-xs font-mono tracking-[0.35em] uppercase mb-5">Profile</p>
          <SplitTitle className="text-4xl md:text-6xl font-black text-white">プロフィール</SplitTitle>
        </FadeIn>
      </div>

      {/* Two-column split */}
      <div className="flex flex-col lg:flex-row min-h-[600px] border-t border-white/10">
        {/* Left: photo */}
        <FadeIn direction="left" className="relative lg:w-1/2 h-72 lg:h-auto overflow-hidden">
          <Image
            src="/images/profile-bg.jpg"
            alt="profile background"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50" />
          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-2xl font-black text-white mb-5">
              T
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-1">伊藤 誉貢</h3>
            <p className="text-white/45 text-sm font-mono tracking-[0.15em]">AI活用 / HP作成 / 大手外資系企業勤務</p>
          </div>
        </FadeIn>

        {/* Right: content */}
        <FadeIn direction="right" delay={80} className="lg:w-1/2 flex flex-col justify-center px-8 md:px-14 py-14 bg-[#020b18]">
          {/* Bio */}
          <p className="text-white/45 text-sm leading-relaxed mb-2">
            大学・新卒時代の4年間、塾講師として「どうすれば相手に伝わるか」を徹底的に磨いてきました。
          </p>
          <p className="text-white/45 text-sm leading-relaxed mb-2">
            現在は大手外資系企業のオペレーション部門に在籍。データ分析・業務改善を担当し、社内ではExcelマクロやAI活用ツールを自作して業務効率化を実現してきました。
          </p>
          <p className="text-white/45 text-sm leading-relaxed mb-10">
            「ITが難しい」という方に、使えるレベルで届ける。AIの知識と教える力を掛け合わせて、あなたのビジネスを一緒に前に進めます。
          </p>

          {/* Timeline */}
          <div className="space-y-4 mb-10 border-t border-white/10 pt-8">
            {timeline.map((item) => (
              <div key={item.year + item.event} className="flex gap-6 items-start">
                <span className="text-white/25 font-mono text-xs tracking-widest shrink-0 w-12 pt-0.5">{item.year}</span>
                <span className="text-white/40 text-sm leading-relaxed">{item.event}</span>
              </div>
            ))}
          </div>

          {/* Skill bars */}
          <div className="space-y-4 border-t border-white/10 pt-8">
            {skills.map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-white/40 text-xs font-mono tracking-wide">{skill.label}</span>
                  <span className="text-white/25 text-xs font-mono">{skill.level}%</span>
                </div>
                <div className="h-px bg-white/8 w-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {["ChatGPT", "Claude", "Excel / VBA", "Dify", "Make", "Next.js"].map((tech) => (
              <span key={tech} className="text-white/30 text-[10px] font-mono tracking-[0.15em] border border-white/10 px-3 py-1.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
