import { ReactNode } from "react";
import clsx from "clsx";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassPanel({
  children,
  className,
  glow = false,
}: GlassPanelProps) {
  return (
    <div
      className={clsx(
        `relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm shadow-2xl`,
        className
      )}
    >
      {/* Glow Layer */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
