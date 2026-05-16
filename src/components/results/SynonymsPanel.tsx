"use client";

import { motion } from "framer-motion";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SynonymSuggestion } from "@/types/analysis";

interface SynonymsPanelProps {
  synonyms: SynonymSuggestion[];
}

export function SynonymsPanel({ synonyms }: SynonymsPanelProps) {
  return (
    <GlassPanel className="p-6" glow>
      <SectionTitle className="mb-6">Semantic Refinement</SectionTitle>

      <div className="space-y-5">
        {synonyms.map((item, index) => (
          <motion.div
            key={item.original}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="rounded-xl border border-zinc-800 bg-zinc-800/20 p-4"
          >
            {/* Original Word */}
            <div className="mb-3 flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 ">
                Original
              </span>

              <span className="font-mono text-zinc-100 ">{item.original}</span>
            </div>

            {/* Synonyms */}
            <div className="flex flex-wrap gap-2">
              {item.synonyms.map((synonym) => (
                <button
                  key={synonym}
                  className="rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-300 transition-all hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-200 "
                >
                  {synonym}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </GlassPanel>
  );
}
