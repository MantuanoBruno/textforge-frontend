"use client";

import { motion } from "framer-motion";

import { TextAnalysisResponse } from "@/types/analysis";

import { SynonymsPanel } from "./SynonymsPanel";
import { StatsGrid } from "./StatsGrid";
import { WordDensityTable } from "./WordDensityTable";
import { OCRPreview } from "./OCRPreview";

interface ResultsViewProps {
  data: TextAnalysisResponse;
}

export function ResultsView({ data }: ResultsViewProps) {
  return (
    <motion.section
      initial={false}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        mx-auto
        mt-12
        max-w-7xl
        space-y-8
        px-6
        pb-20
      "
    >
      <StatsGrid stats={data.stats} />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <WordDensityTable density={data.density} />
        </div>

        <div className="space-y-8 lg:col-span-2">
          <OCRPreview text={data.highlightedText} />

          <SynonymsPanel synonyms={data.synonyms} />
        </div>
      </div>
    </motion.section>
  );
}
