// Regenerates public/images/garfy-character.png — the static fallback shown
// when WebGL is unavailable or the visitor prefers reduced motion — from the
// live R3F scene in components/contact-character/.
//
// Usage:
//   npm install -D playwright && npx playwright install chromium
//   npm run dev   (in a separate terminal)
//   node scripts/generate-character-png.mjs
//
// playwright isn't kept as a permanent dependency; install it temporarily
// when you need to re-render the fallback after changing the character.

import { chromium } from "playwright";

const URL = process.env.CHAR_PNG_URL ?? "http://localhost:3000";
const OUT = "public/images/garfy-character.png";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });

const contact = await page.$("#contact");
await contact.scrollIntoViewIfNeeded();
// let the one-time wave animation finish and let a blink pass before
// capturing, so the fallback shows a calm, eyes-open idle pose
await page.waitForTimeout(2200);

const canvas = await page.$("#contact canvas");
const box = await canvas.boundingBox();
await page.screenshot({
  path: OUT,
  clip: { x: box.x, y: box.y, width: box.width, height: box.height },
});

console.log("Saved", OUT, box);
await browser.close();
