import FadeIn from "./FadeIn";

const skills = [
  { label: "AIエージェント設計", level: 95 },
  { label: "業務フロー分析", level: 92 },
  { label: "Python / LLM開発", level: 88 },
  { label: "RPA / 自動化", level: 85 },
  { label: "クラウドインフラ", level: 80 },
];

const timeline = [
  { year: "2016", event: "大手SIerに入社。エンタープライズ向けシステム開発に従事" },
  { year: "2019", event: "スタートアップのCTOとしてAIプロダクト開発を主導" },
  { year: "2022", event: "独立。中小企業向けAI導入支援を開始" },
  { year: "2024", event: "導入実績50社突破。AIコンサルティング事業を本格展開" },
];

export default function ProfileSection() {
  return (
    <section id="profile" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Profile</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">プロフィール</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn direction="left">
            <div className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-4xl font-bold text-white shrink-0">
                  AI
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">山田 太郎</h3>
                  <p className="text-blue-300/70">AIソリューションアーキテクト</p>
                  <p className="text-blue-300/50 text-sm mt-1">東京都在住</p>
                </div>
              </div>

              {/* Message */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-blue-200/70 text-sm leading-relaxed">
                  「AIで仕事がなくなる」のではなく、「AIで人がもっと大切な仕事に集中できる」と私は信じています。
                </p>
                <p className="text-blue-200/70 text-sm leading-relaxed mt-3">
                  エンジニアとして10年以上、大企業からスタートアップまで様々な現場でシステム開発に携わってきました。その中で気づいたのは、多くの中小企業が技術的な壁ではなく「何から始めればいいかわからない」という壁で止まっているということ。
                </p>
                <p className="text-blue-200/70 text-sm leading-relaxed mt-3">
                  だからこそ私は、技術の翻訳者として経営者の言葉で課題を整理し、確実に成果が出るAI導入を一緒に実現することにこだわっています。
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-3">
                {timeline.map((item) => (
                  <div key={item.year} className="flex gap-4 items-start">
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
                {["OpenAI", "LangChain", "Python", "AWS", "Zapier", "n8n"].map((tech) => (
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
