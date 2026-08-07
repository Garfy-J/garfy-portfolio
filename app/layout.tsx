import type { Metadata } from "next";
import { Fraunces, Caveat, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Garfield Wang — Brand & Integrated Marketing Strategist",
  description:
    "Garfield 'Garfy' Wang — brand and integrated marketing strategist across Greater China, Japan, Taiwan, and APAC. Strategy, China market entry, and self-built AI products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${caveat.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="paper-grain antialiased">{children}</body>
    </html>
  );
}
