import { TextAnalysisResponse } from "@/types/analysis";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333";

interface BackendResponse {
  totalWords: number;
  uniqueWords: number;

  repeatedWords: {
    word: string;
    count: number;
  }[];

  extractedText: string;
}

export async function uploadDocument(
  file: File
): Promise<TextAnalysisResponse> {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to analyze document");
  }

  const data: BackendResponse = await response.json();

  console.log(data);

  return {
    stats: {
      totalWords: data.totalWords,
      uniqueWords: data.uniqueWords,
      repetitions: data.repeatedWords.length,
    },

    density: data.repeatedWords.map((item, index) => ({
      word: item.word,
      count: item.count,
      heat: Math.max(15, 100 - index * 8),
    })),

    highlightedText: data.extractedText.split(" ").map((word) => ({
      word,
      repeated: data.repeatedWords.some(
        (repeated) =>
          repeated.word.toLowerCase().replace(/[.,!?]/g, "") ===
          word.toLowerCase().replace(/[.,!?]/g, "")
      ),
    })),

    synonyms: [],
  };
}
