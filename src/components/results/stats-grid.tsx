"use client";

import { AnalysisResponse } from "@/types/analysis";

type StatsGridProps = {
  result: AnalysisResponse;
};

export function StatsGrid({ result }: StatsGridProps) {
  const repeatedTotal = result.repeatedWords.reduce(
    (acc, item) => acc + item.count,
    0
  );

  const repetitionRate = ((repeatedTotal / result.totalWords) * 100).toFixed(1);

  const stats = [
    {
      label: "Total Words",
      value: result.totalWords,
    },

    {
      label: "Unique Words",
      value: result.uniqueWords,
    },

    {
      label: "Repetition Rate",
      value: `${repetitionRate}%`,
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-4
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900/40
            backdrop-blur-sm
            p-6
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-amber-500/5
              to-transparent
              pointer-events-none
            "
          />

          <p
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-zinc-500
              mb-3
            "
          >
            {stat.label}
          </p>

          <p
            className="
              text-4xl
              md:text-5xl
              font-bold
              tracking-tight
              text-zinc-100
            "
          >
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
