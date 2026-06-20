import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

const skills = [
  { label: "AI活用ツール設計・作成", level: 85 },
  { label: "業務フロー改善", level: 90 },
  { label: "データ分析・管理", level: 85 },
  { label: "HP制作", level: 80 },
  { label: "わかりやすい説明・提案", level: 95 },
];

const timeline = [
  { year: "2019", event: "大学時代から4年間、塾講師として小〜高校生に文理問わず指導" },
  { year: "2023", event: "新卒で塾業界に入社。中学生向けに英語・理科を担当" },
  { year: "2023", event: "大手外資系企業へ転職。Inbound部門に配属" },
  { year: "2024", event: "社内でExcelマクロ・AI活用ツールを自作し業務改善を推進" },
  { year: "2026", event: "AI×HP作成の副業を開始。中小企業・個人事業主向けに展開中" },
];

export default function ProfileSection() {
  return (
    <section id="profile" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Profile</p>
          <SplitTitle className="text-4xl md:text-5xl font-bold text-white mb-5">プロフィール</SplitTitle>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-4xl font-bold text-white shrink-0">
                  T
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">伊藤 誉貢</h3>
                  <p className="text-blue-300/70">AI活用 / HP作成</p>
                  <p className="text-blue-300/50 text-sm mt-1">大手外資系企業勤務</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-blue-200/70 text-sm leading-relaxed">
                  大学・新卒時代の4年間、塾講師として「どうすれば相手に伝わるか」を徹底的に磨いてきました。
                </p>
                <p className="text-blue-200/70 text-sm leading-relaxed mt-3">
                  現在は大手外資系企業のオペレーション部門に在籍4年目。データ分析・業務改善を担当し、社内ではExcelマクロやAI活用ツールを自作して業務効率化を実現してきました。
                </p>
                <p className="text-blue-200/70 text-sm leading-relaxed mt-3">
                  「ITが難しい」という人に、わかりやすく・使えるレベルで届ける。AIの知識と、教える力を掛け合わせて、あなたのビジネスを一緒に前に進めます。
                </p>
              </div>

              <div className="space-y-3">
                {timeline.map((item) => (
                  <div key={item.year + item.event} className="flex gap-4 items-start">
                    <span className="text-blue-400 font-mono text-sm shrink-0 w-12">{item.year}</span>
                    <span className="text-blue-200/65 text-sm">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={100}>
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-lg">スキル・専門領域</h4>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-200/80 text-sm">{skill.label}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                {["ChatGPT", "Claude", "Excel", "Python", "Dify", "Make"].map((tech) => (
                  <div key={tech} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-center text-blue-200/60 text-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
