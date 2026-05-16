"use client";

import { motion } from "framer-motion";
import { DensityItem } from "@/types/analysis";

interface WordDensityTableProps {
  density: DensityItem[];
}

export function WordDensityTable({ density }: WordDensityTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm ">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-800/20 px-6 py-4">
        <h3 className=" text-xs uppercase tracking-[0.3em] text-zinc-400 ">
          Term Density
        </h3>

        <p className="text-xs text-amber-500">Frequency Analysis</p>
      </div>

      {/* Table */}
      <div className="divide-y divide-zinc-800/50">
        {density.map((item, index) => (
          <motion.div
            key={item.word}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="group px-6 py-5 transition-colors hover:bg-white/[0.03]"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-zinc-200 ">{item.word}</span>

              <span className="text-sm text-zinc-500 ">{item.count}</span>
            </div>

            {/* Heat Bar */}
            <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${item.heat}%`,
                }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.8,
                }}
                className="h-full rounded-full bg-gradient-to-r from-amber-600 to-orange-400 "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
