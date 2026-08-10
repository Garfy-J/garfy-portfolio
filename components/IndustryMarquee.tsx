const INDUSTRIES = [
  "Automotive",
  "Luxury",
  "Entertainment",
  "Outdoor",
  "Hospitality",
  "Technology",
  "E-commerce",
  "Consumer Tech",
  "Beauty",
  "Travel",
];

const COLORS = ["text-coral", "text-cobalt", "text-teal", "text-ink"];

export default function IndustryMarquee() {
  const loop = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-yellow py-5 sm:py-6">
      <div className="flex w-max animate-marquee gap-10 sm:gap-14">
        {loop.map((item, i) => (
          <span
            key={item + i}
            className={`font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight whitespace-nowrap ${
              COLORS[i % COLORS.length]
            }`}
          >
            {item} <span className="text-ink/30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
