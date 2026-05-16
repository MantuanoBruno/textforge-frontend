export type AnalysisStatus =
  | "idle"
  | "uploading"
  | "processing"
  | "completed"
  | "error";

export interface HighlightedWord {
  word: string;
  type?: "repeated" | "refined";
}

export interface SynonymSuggestion {
  original: string;
  synonyms: string[];
}

export interface AnalysisStats {
  totalWords: number;
  uniqueWords: number;
  repetitions: number;
}

export interface DensityItem {
  word: string;
  count: number;
  heat: number;
}

export interface TextAnalysisResponse {
  stats: AnalysisStats;
  density: DensityItem[];
  highlightedText: HighlightedWord[];
  synonyms: SynonymSuggestion[];
}
