export interface RepeatedWord {
  word: string;
  stem: string;
  count: number;
  percentage: number;
  synonyms: string[];
}

export interface AnalysisResponse {
  totalWords: number;
  uniqueWords: number;
  repeatedWords: RepeatedWord[];
  extractedText: string;
}
