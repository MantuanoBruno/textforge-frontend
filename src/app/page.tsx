"use client";

import { Hero } from "@/components/layout/hero";

import { BackgroundGlow } from "@/components/layout/background-glow";

import { UploadZone } from "@/components/upload/upload-zone";

import { ResultsView } from "@/components/results/results-view";

import { useAnalysis } from "@/hooks/use-analysis";

export default function Home() {
  const { analyze, loading, data, error } = useAnalysis();

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 overflow-x-hidden">
      <BackgroundGlow />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <Hero />

        <section className="max-w-3xl mx-auto mb-32">
          <UploadZone onFileSelect={analyze} loading={loading} />
        </section>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {data && <ResultsView data={data} />}
      </div>
    </main>
  );
}
