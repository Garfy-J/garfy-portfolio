import { SectionHeading } from "./Strengths";

const GROUPS = [
  {
    title: "Strategy & Research",
    items: [
      "Brand strategy",
      "Integrated campaign planning",
      "Market entry strategy",
      "China-outbound intelligence",
      "Data analysis & brand ranking",
    ],
  },
  {
    title: "China Digital Platforms",
    items: ["WeChat", "Weibo", "RED (Xiaohongshu)", "Douyin", "WeChat Mini Programs"],
  },
  {
    title: "Content & Creative",
    items: ["Filmmaking", "Photography", "Art direction", "Copywriting"],
  },
  {
    title: "Languages",
    items: ["English — fluent", "Mandarin — fluent", "Japanese — fluent"],
  },
  {
    title: "Build & Ship",
    items: [
      "AI-assisted product development",
      "Next.js / Vercel",
      "Apify data scraping",
      "Product Hunt launches",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 bg-paper-2">
      <SectionHeading eyebrow="Toolkit" title="Skills" />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {GROUPS.map((g) => (
          <div key={g.title}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-seal mb-4">
              {g.title}
            </h3>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="font-display text-xl sm:text-2xl leading-snug border-b border-rule/70 pb-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
