import { SectionHeading } from "./Strengths";
import SealStamp from "./SealStamp";

const SCHOOLS = [
  {
    degree: "MSc, E-Business & Innovation",
    school: "Lancaster University",
  },
  {
    degree: "BA",
    school: "National Taiwan University",
  },
  {
    degree: "Filmmaking Certificate",
    school: "London Film Academy",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
      <SectionHeading eyebrow="On paper" title="Education" />
      <div className="mt-14 grid sm:grid-cols-3 gap-8">
        {SCHOOLS.map((s, i) => (
          <div
            key={s.school}
            className="border border-rule bg-paper p-8 flex flex-col gap-4 relative"
          >
            {i === 2 && (
              <SealStamp
                text="artist too"
                className="absolute -top-4 -right-3"
                rotate={9}
              />
            )}
            <p className="font-display text-2xl leading-tight">{s.degree}</p>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
              {s.school}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
