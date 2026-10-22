import type { ReactNode } from "react";

/** Shared section shell: one vertical rhythm, one gutter, one content width,
 * used by every section so the page reads as a single consistent system. */
export default function Section({
  id,
  bg = "paper",
  className = "",
  innerClassName = "",
  children,
}: {
  id?: string;
  bg?: "paper" | "paper-2";
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 sm:px-12 lg:px-24 py-[72px] lg:py-[112px] ${
        bg === "paper-2" ? "bg-paper-2" : "bg-paper"
      } ${className}`}
    >
      <div className={`max-w-[1200px] mx-auto ${innerClassName}`}>{children}</div>
    </section>
  );
}
