const PILLARS = [
  {
    n: "01",
    title: "Cross-border brand strategy",
    body:
      "A decade-plus running strategy across Greater China, Japan, Taiwan and wider APAC — trilingual in English, Mandarin and Japanese, which means sitting in the room for the local nuance, not just the market report.",
  },
  {
    n: "02",
    title: "China market intelligence",
    body:
      "Built and run an independent China-outbound intelligence practice, tracking brands going global out of China. Deep, hands-on fluency in WeChat, Weibo, RED (Xiaohongshu) and Douyin — the platforms strategy decks usually only describe secondhand.",
  },
  {
    n: "03",
    title: "Integrated campaign execution",
    body:
      "From strategy deck to live influencer program — managing international clients like Intel across five markets (India, China, Korea, Japan, Taiwan) end to end: strategy, account management and on-the-ground communication.",
  },
  {
    n: "04",
    title: "Builder, not just a strategist",
    body:
      "Ships real, working AI-assisted products solo — from idea to Product Hunt launch. Strategy that's been stress-tested by actually building and shipping something, not just recommending it.",
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
      <SectionHeading eyebrow="Why work with me" title="Strengths" />
      <div className="grid sm:grid-cols-2 gap-px bg-rule mt-12 border border-rule">
        {PILLARS.map((p) => (
          <div key={p.n} className="bg-paper p-8 sm:p-10 flex flex-col gap-4">
            <span className="font-mono text-xs text-seal">{p.n}</span>
            <h3 className="font-display font-semibold text-2xl sm:text-3xl leading-tight">
              {p.title}
            </h3>
            <p className="text-ink-soft leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-seal">
        {eyebrow}
      </span>
      <h2 className="font-display font-bold text-5xl sm:text-6xl mt-2">{title}</h2>
    </div>
  );
}
