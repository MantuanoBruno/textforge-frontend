import { ReactNode } from "react";
import clsx from "clsx";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        `text-xs uppercase tracking-[0.3em] text-zinc-400 font-medium `,
        className
      )}
    >
      {children}
    </h2>
  );
}
