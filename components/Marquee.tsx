const DISCIPLINES = [
  { label: "Strategy", accent: "text-seal" },
  { label: "Brand", accent: "text-indigo" },
  { label: "E-Commerce", accent: "text-jade" },
  { label: "Creative Direction", accent: "text-amber" },
  { label: "Film", accent: "text-magenta" },
  { label: "Content", accent: "text-seal" },
  { label: "China Market", accent: "text-indigo" },
  { label: "AI Product Build", accent: "text-jade" },
];

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden}>
      {DISCIPLINES.map((d, i) => (
        <span
          key={i}
          className="flex items-center gap-3 px-6 sm:px-8 shrink-0 whitespace-nowrap"
        >
          <span className={`font-display font-bold text-2xl sm:text-3xl ${d.accent}`}>
            {d.label}
          </span>
          <span className="text-ink-soft/50 text-xl" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-rule bg-paper-2 py-5">
      <Track />
      <Track ariaHidden />
    </div>
  );
}
