"use client";

import { useState } from "react";

import { uploadFile } from "@/services/api";

import { AnalysisResponse } from "@/types/analysis";

export function useAnalysis() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<AnalysisResponse | null>(null);

  const [error, setError] = useState<string | null>(null);

  async function analyze(file: File) {
    try {
      setLoading(true);

      setError(null);

      const result = await uploadFile(file);

      setData(result);
    } catch {
      setError("Failed to analyze file.");
    } finally {
      setLoading(false);
    }
  }

  return {
    analyze,
    loading,
    data,
    error,
  };
}
