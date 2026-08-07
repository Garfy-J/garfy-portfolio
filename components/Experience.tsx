import { SectionHeading } from "./Strengths";

const ROLES = [
  {
    org: "Cyberlink",
    role: "Marketing Assistant",
    when: "Oct 2012 – Dec 2013",
    body: "Product marketing and e-commerce across APAC and EMEA.",
  },
  {
    org: "Ogilvy, Taipei",
    role: "Digital Media Planner",
    when: "",
    body: "Early digital media planning grounding at one of the network agencies.",
  },
  {
    org: "GREY Group, Beijing",
    role: "Brand Strategist",
    when: "",
    body: "Strategy work spanning auto, medical and other categories.",
  },
  {
    org: "Olé Inspiration, Beijing",
    role: "Planning Manager",
    when: "",
    body: "Worked with entertainment studios including Universal, Sony and Warner Bros.",
  },
  {
    org: "TOPYS",
    role: "Senior Brand Strategist",
    when: "",
    body: "Built connections across creative studios, individual creators and media.",
  },
  {
    org: "Milleporte K.K., Tokyo",
    role: "E-Commerce & Marketing Manager",
    when: "",
    body: "Drove e-commerce and marketing to a 2,299% ROAS.",
    highlight: "2,299% ROAS",
  },
  {
    org: "Cabana",
    role: "Creative Marketing Manager",
    when: "",
    body: "Creative-led marketing management.",
  },
  {
    org: "Independent",
    role: "Brand & Marketing Consultant",
    when: "Current",
    body: "Generalist consulting practice spanning brand strategy, integrated campaign execution and market-entry advisory for international clients — plus a growing shelf of self-shipped AI products on the side.",
    current: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
      <SectionHeading eyebrow="The long version" title="Experience" />

      <div className="mt-14 max-w-3xl">
        {ROLES.map((r, i) => (
          <div
            key={r.org + r.role}
            className="relative pl-8 sm:pl-10 pb-10 border-l-2 border-rule last:pb-0 last:border-l-0"
          >
            <span
              className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${
                r.current
                  ? "bg-seal border-seal"
                  : "bg-paper border-ink-soft"
              }`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display font-semibold text-2xl">{r.org}</h3>
              {r.when && (
                <span className="font-mono text-xs text-ink-soft uppercase tracking-wide">
                  {r.when}
                </span>
              )}
            </div>
            <p className="text-seal font-medium mt-0.5">{r.role}</p>
            <p className="text-ink-soft mt-2 leading-relaxed max-w-xl">
              {r.highlight ? (
                <>
                  Drove e-commerce and marketing to a{" "}
                  <span className="highlight font-medium text-ink">
                    {r.highlight}
                  </span>
                  .
                </>
              ) : (
                r.body
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
