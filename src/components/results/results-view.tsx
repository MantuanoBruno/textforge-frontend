"use client";

import { motion } from "framer-motion";

import { FileText, Search, Sparkles } from "lucide-react";

import { AnalysisResponse } from "@/types/analysis";

interface Props {
  data: AnalysisResponse;
}

export function ResultsView({ data }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="space-y-12"
    >
      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            label: "Total Words",
            value: data.totalWords,
            icon: <FileText size={16} />,
          },

          {
            label: "Unique Words",
            value: data.uniqueWords,
            icon: <Search size={16} />,
          },

          {
            label: "Repetitions",
            value: data.repeatedWords.length,
            icon: <Sparkles size={16} />,
          },
        ].map((item, index) => (
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
            className="
              group
              relative
              bg-zinc-900/50
              border
              border-zinc-800
              p-6
              rounded-2xl
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-amber-500/5
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-opacity
              "
            />

            <div className="relative flex items-center justify-between mb-4">
              <span
                className="
                  text-zinc-500
                  text-xs
                  uppercase
                  tracking-widest
                "
              >
                {item.label}
              </span>

              <div className="text-amber-500/50">{item.icon}</div>
            </div>

            <div
              className="
                relative
                text-4xl
                font-bold
                tracking-tight
              "
            >
              {item.value}
            </div>
          </motion.div>
        ))}
      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* REPEATED WORDS */}

        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2
              className="
                text-sm
                font-semibold
                uppercase
                tracking-widest
                text-zinc-400
              "
            >
              Semantic Density
            </h2>
          </div>

          <div
            className="
              bg-zinc-900/30
              border
              border-zinc-800/50
              rounded-2xl
              overflow-hidden
            "
          >
            <table className="w-full text-left">
              <thead>
                <tr
                  className="
                    border-b
                    border-zinc-800
                    bg-zinc-800/30
                  "
                >
                  <th className="p-4 text-zinc-400">Word</th>

                  <th className="p-4 text-zinc-400">Count</th>

                  <th className="p-4 text-zinc-400">Heat</th>
                </tr>
              </thead>

              <tbody>
                {data.repeatedWords.map((word, index) => {
                  const heat = Math.min(word.count * 12, 100);

                  return (
                    <tr
                      key={word.word}
                      className="
                          border-b
                          border-zinc-800/50
                          hover:bg-white/5
                          transition-colors
                        "
                    >
                      <td className="p-4">
                        <div className="space-y-2">
                          <div
                            className="
                                font-mono
                                text-zinc-200
                              "
                          >
                            {word.word}
                          </div>

                          <div
                            className="
                                flex
                                flex-wrap
                                gap-2
                              "
                          >
                            {word.synonyms.slice(0, 5).map((synonym) => (
                              <span
                                key={synonym}
                                className="
                                      px-2
                                      py-1
                                      rounded-lg
                                      bg-amber-500/10
                                      text-amber-400
                                      text-xs
                                    "
                              >
                                {synonym}
                              </span>
                            ))}
                          </div>
                        </div>
                      </td>

                      <td className="p-4 text-zinc-400">{word.count}x</td>

                      <td className="p-4 w-[220px]">
                        <div
                          className="
                              w-full
                              h-2
                              bg-zinc-800
                              rounded-full
                              overflow-hidden
                            "
                        >
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            animate={{
                              width: `${heat}%`,
                            }}
                            transition={{
                              delay: 0.3 + index * 0.05,
                              duration: 0.8,
                            }}
                            className="
                                h-full
                                bg-gradient-to-r
                                from-amber-600
                                to-orange-400
                              "
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* OCR PREVIEW */}

        <div className="lg:col-span-2 space-y-4">
          <h2
            className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-zinc-400
              px-2
            "
          >
            Extracted Raw
          </h2>

          <div
            className="
              bg-zinc-900
              border
              border-zinc-800
              p-6
              rounded-2xl
              text-zinc-400
              leading-relaxed
              text-sm
              max-h-[500px]
              overflow-y-auto
              whitespace-pre-wrap
            "
          >
            {data.extractedText}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
