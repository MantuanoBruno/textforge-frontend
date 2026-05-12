"use client";

import { useState } from "react";
import { BackgroundGlow } from "@/components/layout/background-glow";
import { UploadZone } from "@/components/upload/upload-zone";
import { Hero } from "@/components/layout/hero";
import { uploadFile } from "@/services/api";
import { AnalysisResponse } from "@/types/analysis";
import { ResultsView } from "@/components/results/results-view";
import { ForgeLoading } from "@/components/upload/forge-loading";

export default function Home() {
  const [result, setResult] = useState<AnalysisResponse | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileSelect = async (file: File) => {
    try {
      setLoading(true);

      setError(null);

      setSelectedFileName(file.name);

      const response = await uploadFile(file);

      setResult(response);
    } catch {
      setError("Failed to process file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
        relative
        min-h-screen
        bg-[#0a0a0a]
        text-zinc-100
        overflow-x-hidden
      "
    >
      <BackgroundGlow />

      <div
        className="
          relative
          max-w-6xl
          mx-auto
          px-6
          py-20
        "
      >
        <Hero />

        <section
          className="
            max-w-3xl
            mx-auto
            mb-32
          "
        >
          <UploadZone onFileSelect={handleFileSelect} />

          {loading && <ForgeLoading fileName={selectedFileName} />}

          {error && (
            <p
              className="
                  text-center
                  text-red-500
                  mt-6
                "
            >
              {error}
            </p>
          )}

          {result && <ResultsView result={result} />}
        </section>
      </div>
    </main>
  );
}
