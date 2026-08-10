const ITEMS = [
  "STRATEGY",
  "BRAND",
  "E-COMMERCE",
  "CREATIVE DIRECTION",
  "FILM",
  "CONTENT",
  "CHINA MARKET",
  "AI PRODUCT BUILD",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div
      className="relative w-full overflow-hidden border-y border-rule py-4"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={item + i}
            className="font-display font-semibold text-sm sm:text-base tracking-wide px-6 whitespace-nowrap flex items-center gap-6"
          >
            <span
              className={
                i % 4 === 0
                  ? "text-seal"
                  : i % 4 === 1
                  ? "text-indigo"
                  : i % 4 === 2
                  ? "text-jade"
                  : "text-sky"
              }
            >
              {item}
            </span>
            <span className="text-rule">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
