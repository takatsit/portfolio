import Image from "next/image";
import FadeIn from "./FadeIn";
import SplitTitle from "./SplitTitle";

const services = [
  {
    number: "01",
    tag: "AI業務自動化・効率化",
    title: "繰り返し作業を、\nAIに任せる。",
    description:
      "データ入力・集計、報告書作成、定型業務など、毎日こなしている手作業をAIで仕組み化します。「やらなきゃいけないけど時間がかかる」を解消して、本業に集中できる環境をつくります。",
    features: ["データ入力・集計の自動化", "レポート・書類作成の効率化", "専用AIツールの設計・作成"],
    image: "/images/service-ai.jpg",
    imageAlt: "AI automation",
    reverse: false,
  },
  {
    number: "02",
    tag: "HP作成",
    title: "集客につながる\nHPを、低コストで。",
    description:
      "AIを活用してデザイン・テキスト・構成をゼロから制作。「外注すると高すぎる」「自分で作れない」を解決します。難しい知識は一切不要、スマホ対応・問い合わせフォーム付きで納品します。",
    features: ["デザイン・テキスト・構成を一括対応", "スマホ対応・問い合わせフォーム付き", "納品後の更新・修正も対応"],
    image: "/images/service-web.jpg",
    imageAlt: "Web creation",
    reverse: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="pt-28">
      <FadeIn className="text-center mb-20 px-6">
        <p className="text-white/30 text-xs font-semibold tracking-[0.3em] uppercase mb-4 font-mono">Services</p>
        <SplitTitle className="text-4xl md:text-6xl font-black text-white">2つのサービス</SplitTitle>
      </FadeIn>

      <div>
        {services.map((service, idx) => (
          <FadeIn key={service.number} direction="up" delay={idx * 80}>
            <div className={`flex flex-col ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} min-h-[520px] border-t border-white/10`}>
              {/* Image half */}
              <div className="relative lg:w-1/2 h-72 lg:h-auto overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-6 left-6">
                  <span className="text-white/30 font-black text-6xl font-mono">{service.number}</span>
                </div>
              </div>

              {/* Text half */}
              <div className={`lg:w-1/2 flex flex-col justify-center px-8 md:px-14 py-14 bg-[#020b18]`}>
                <span className="text-white/30 text-xs tracking-[0.2em] uppercase font-mono mb-5">{service.tag}</span>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6 whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                      <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <a href="#contact" className="inline-flex items-center gap-2 text-white text-sm font-semibold border-b border-white/30 pb-1 hover:border-white transition-colors duration-200">
                    相談する <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
