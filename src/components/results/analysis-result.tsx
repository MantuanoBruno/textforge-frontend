"use client";

import { AnalysisResponse } from "@/types/analysis";

import { StatsGrid } from "./stats-grid";

import { RepeatedWordCard } from "./repeated-word-card";

type AnalysisResultProps = {
  result: AnalysisResponse;
};

export function AnalysisResult({ result }: AnalysisResultProps) {
  return (
    <section
      className="
        mt-16
        space-y-10
        animate-in
        fade-in
        duration-700
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          flex-wrap
        "
      >
        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-amber-500
              mb-2
            "
          >
            Analysis Complete
          </p>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              tracking-tight
              text-zinc-100
            "
          >
            Forged Text Insights
          </h2>
        </div>

        <div
          className="
            px-4
            py-2
            rounded-full
            border
            border-zinc-800
            bg-zinc-900/50
            text-sm
            text-zinc-400
            backdrop-blur-sm
          "
        >
          {result.repeatedWords.length} repeated terms detected
        </div>
      </div>

      <StatsGrid result={result} />

      <div className="space-y-4">
        {result.repeatedWords.length > 0 ? (
          result.repeatedWords.map((word) => (
            <RepeatedWordCard key={word.word} data={word} />
          ))
        ) : (
          <div
            className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/30
              p-8
              text-center
              backdrop-blur-sm
            "
          >
            <p
              className="
                text-zinc-400
                text-lg
              "
            >
              No significant repetitions found.
            </p>

            <p
              className="
                text-zinc-600
                text-sm
                mt-2
              "
            >
              Your text appears lexically balanced.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
