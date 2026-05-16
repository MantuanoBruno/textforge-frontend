import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function GlowButton({ children, className, ...props }: GlowButtonProps) {
  return (
    <button
      className={clsx(
        `group relative overflow-hidden rounded-xlbg-whitepx-5py-3text-smfont-semiboldtext-blacktransition-allduration-300active:scale-95hover:scale-[1.02]`,
        className
      )}
      {...props}
    >
      {/* Glow Layer */}
      <div className=" absolute inset-0 translate-y-full bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-300 group-hover:translate-y-0" />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
