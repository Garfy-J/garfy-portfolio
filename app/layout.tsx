import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
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
      className={`${bricolage.variable} ${caveat.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="paper-grain antialiased">{children}</body>
    </html>
  );
}
