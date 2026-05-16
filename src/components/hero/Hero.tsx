"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center px-6 pt-28 pb-20 text-center">
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-400 backdrop-blur-sm"
      >
        <Sparkles size={14} className="text-amber-500" />
        Advanced OCR & Text Refinement
      </motion.div>

      <motion.h1
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.6,
        }}
        className="max-w-5xl bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-6xl font-bold tracking-tighter text-transparent md:text-8xl"
      >
        TextForge
      </motion.h1>

      <motion.p
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
      >
        Transform raw documents into refined linguistic insights. OCR,
        repetition analysis, and semantic refinement in a premium industrial
        interface.
      </motion.p>
    </section>
  );
}
