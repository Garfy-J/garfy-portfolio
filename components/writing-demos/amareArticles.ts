export type AmareArticle = { title: string; href: string };

/** Hard-coded fallback — verified real titles/URLs from amare.homes.
 * Used whenever the live fetch fails or doesn't yield enough articles. */
const FALLBACK: AmareArticle[] = [
  {
    title: "A Headphone With Real Dials: Why Retro Controls Feel Like the Future",
    href: "https://amare.homes/posts/tune-x3-retro-headphones-physical-dials-heritage-tech",
  },
  {
    title: "Tesla's Flying Roadster Is Real-ish. Here's What It Means for Cars, Brands and Parking Spots.",
    href: "https://amare.homes/posts/tesla-roadster-flying-car-auto-industry-brand-partners",
  },
  {
    title: "Fiat's Multiplay Is a Family Car That Becomes a Pickup. The Real Lesson Is About Care.",
    href: "https://amare.homes/posts/fiat-multiplay-concept-brand-partnership-strategy",
  },
  {
    title: "The NBA Is Testing a Smart Basketball. Does AI Make the Game Fairer or Just Flatter?",
    href: "https://amare.homes/posts/nba-smart-basketball-ai-sports-pros-cons",
  },
  {
    title: "One Table, Three Games: The Dining Table Is Finally Learning to Play",
    href: "https://amare.homes/posts/sannes-3-in-1-table-dining-pool-ping-pong",
  },
  {
    title: "Apple Music Built a Concert Hall. The Real Product Is the Story It Tells.",
    href: "https://amare.homes/posts/apple-music-hall-battersea-brand-strategy",
  },
];

function decodeEntities(s: string): string {
  return s
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8212;/g, "—")
    .replace(/&#8211;/g, "–");
}

/** Runs at build time in this Server Component context (the page has no
 * dynamic APIs, so Next statically generates it and this fetch resolves
 * once at build). Always falls back to known-good hard-coded data. */
export async function getAmareArticles(): Promise<AmareArticle[]> {
  try {
    const res = await fetch("https://amare.homes", {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return FALLBACK;
    const html = await res.text();

    const hrefs: string[] = [];
    const seen = new Set<string>();
    for (const m of html.matchAll(/href="(\/posts\/[a-z0-9-]+)"/g)) {
      if (!seen.has(m[1])) {
        seen.add(m[1]);
        hrefs.push(m[1]);
      }
      if (hrefs.length >= 6) break;
    }
    if (hrefs.length < 6) return FALLBACK;

    const articles: AmareArticle[] = [];
    for (const href of hrefs) {
      const idx = html.indexOf(`href="${href}"`);
      const chunk = html.slice(idx, idx + 2000);
      const altMatch = chunk.match(/<img alt="([^"]+)"/);
      const raw = altMatch?.[1];
      if (!raw) return FALLBACK;
      // cover-image alt text is "Title — Photo: credit" — drop the credit
      const title = decodeEntities(raw.split(/\s+—\s+Photo:/)[0]).trim();
      if (!title || title.length < 5) return FALLBACK;
      articles.push({ title, href: `https://amare.homes${href}` });
    }

    return articles.length === 6 ? articles : FALLBACK;
  } catch {
    return FALLBACK;
  }
}
