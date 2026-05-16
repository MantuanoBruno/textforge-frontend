"use client";

import { motion } from "framer-motion";
import { FileText, Search, Sparkles } from "lucide-react";

import { AnalysisStats } from "@/types/analysis";

interface StatsGridProps {
  stats: AnalysisStats;
}

export function StatsGrid({ stats }: StatsGridProps) {
  const items = [
    {
      label: "Total Words",
      value: stats.totalWords,
      icon: FileText,
    },
    {
      label: "Unique Terms",
      value: stats.uniqueWords,
      icon: Search,
    },
    {
      label: "Repetitions",
      value: stats.repetitions,
      icon: Sparkles,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-5 flex items-center justify-between">
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-zinc-500
                  "
                >
                  {item.label}
                </p>

                <Icon
                  size={18}
                  className="text-amber-500/60 transition-colors group-hover:text-amber-500"
                />
              </div>

              {/* Value */}
              <h3 className="text-4xl font-bold tracking-tight text-zinc-100">
                {item.value}
              </h3>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
