import { SectionHeading } from "./Strengths";
import { getAmareArticles } from "./writing-demos/amareArticles";
import AmareStage from "./writing-demos/AmareStage";
import MediumStage from "./writing-demos/MediumStage";
import WritingCard from "./writing-demos/WritingCard";
import Section from "./Section";

export default async function Writing() {
  const amareArticles = await getAmareArticles();

  return (
    <Section id="writing" bg="paper">
      <SectionHeading eyebrow="Field notes" title="Writing" />
      <p className="text-ink-soft max-w-2xl mt-4">
        Notes on brand strategy, marketing culture and where AI fits in the
        storytelling stack — published on Medium, and over at Amare, the
        design blog I built and edit.
      </p>

      <div className="mt-14 grid lg:grid-cols-2 gap-8">
        <WritingCard
          href="https://amare.homes"
          buttonLabel="Read Amare ↗"
          name="Amare"
          tagline="Design and creative culture worth stopping for."
          body="A calm, reading-first blog I built and edit."
        >
          <AmareStage articles={amareArticles} />
        </WritingCard>

        <WritingCard
          href="https://garfieldwang.medium.com/"
          buttonLabel="Read on Medium ↗"
          name="Medium"
          tagline="Field notes on brand strategy, marketing culture and AI in storytelling."
          body=""
        >
          <MediumStage />
        </WritingCard>
      </div>
    </Section>
  );
}
