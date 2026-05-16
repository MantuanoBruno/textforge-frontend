import { SectionTitle } from "../ui/SectionTitle";
import { HighlightedText } from "./HighlightedText";
import { HighlightedWord } from "@/types/analysis";

interface OCRPreviewProps {
  text: HighlightedWord[];
}

export function OCRPreview({ text }: OCRPreviewProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />

      <div className="relative z-10">
        <SectionTitle className="mb-6">Extracted Raw</SectionTitle>

        <div className=" max-h-[400px] overflow-y-auto pr-2 font-serif leading-relaxed text-zinc-400">
          <HighlightedText words={text} />

          <br />

          <p>
            TextForge treats each document as raw material to be analyzed,
            refined and transformed into structured linguistic insight.
          </p>
        </div>
      </div>
    </div>
  );
}
