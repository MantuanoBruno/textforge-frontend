"use client";

import { useState } from "react";
import { Hero } from "@/components/hero/Hero";
import { BackgroundGlow } from "@/components/hero/BackgroundGlow";
import { UploadDropzone } from "@/components/upload/UploadDropzone";
import { ProcessingState } from "@/components/upload/ProcessingState";
import { ResultsView } from "@/components/results/ResultsView";
import { uploadDocument } from "@/lib/api/analyze";
import { AnalysisStatus, TextAnalysisResponse } from "@/types/analysis";

export default function Home() {
  const [status, setStatus] = useState<AnalysisStatus>("idle");

  const [fileName, setFileName] = useState("");

  const [analysisData, setAnalysisData] = useState<TextAnalysisResponse | null>(
    null
  );

  async function handleUpload(file: File) {
    try {
      setFileName(file.name);

      setAnalysisData(null);

      /*
       * Phase 1:
       * Hammer impact
       * Sparks
       */
      setStatus("uploading");

      await new Promise((resolve) => setTimeout(resolve, 900));

      /*
       * Phase 2:
       * OCR + NLP processing
       */
      setStatus("processing");

      const response = await uploadDocument(file);

      /*
       * Small cinematic pause
       */
      await new Promise((resolve) => setTimeout(resolve, 600));

      setAnalysisData(response);

      /*
       * Final reveal
       */
      setStatus("completed");
    } catch (error) {
      console.error(error);

      setStatus("error");
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white ">
      <BackgroundGlow />

      <div className="relative z-10">
        <Hero />

        {(status === "idle" || status === "uploading") && (
          <UploadDropzone
            onUpload={handleUpload}
            isUploading={status === "uploading"}
          />
        )}

        {status === "processing" && <ProcessingState fileName={fileName} />}

        {status === "completed" && analysisData && (
          <ResultsView data={analysisData} />
        )}

        {status === "error" && (
          <div className="mt-16 text-center ">
            <p className=" text-sm uppercase tracking-[0.3em] text-red-400 ">
              Forge Failed
            </p>

            <p className=" mt-3 text-zinc-500 ">Failed to process document.</p>
          </div>
        )}
      </div>
    </main>
  );
}
