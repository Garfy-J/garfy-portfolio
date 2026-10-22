import BrandMark, { type Brand } from "./logos/BrandMark";

const CLIENTS: { brand: Brand; name: string }[] = [
  { brand: "intel", name: "Intel" },
  { brand: "maserati", name: "Maserati" },
  { brand: "gore-tex", name: "Gore-Tex" },
  { brand: "capella", name: "Capella Hotels" },
  { brand: "universal", name: "Universal" },
  { brand: "sony", name: "Sony" },
  { brand: "warnerbros", name: "Warner Bros." },
  { brand: "rakuten", name: "Rakuten Insight" },
];

export default function ClientsStrip() {
  return (
    <div>
      <span className="poster-meta text-ink-soft">Selected clients</span>
      <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-6">
        {CLIENTS.map((c) => (
          <div
            key={c.brand}
            className="flex items-center text-ink opacity-70 hover:opacity-100 transition-opacity"
          >
            <BrandMark brand={c.brand} className="h-6 sm:h-7 w-auto max-w-[7rem]" />
          </div>
        ))}
      </div>
    </div>
  );
}
