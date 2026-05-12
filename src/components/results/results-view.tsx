import { AnalysisResponse } from "@/types/analysis";
import { StatsCards } from "./stats-cards";
import { ResultsTable } from "./results-table";

type ResultsViewProps = {
  result: AnalysisResponse;
};

export function ResultsView({ result }: ResultsViewProps) {
  return (
    <div
      className="
        space-y-12
        mt-12
      "
    >
      <StatsCards
        totalWords={result.totalWords}
        uniqueWords={result.uniqueWords}
        repeatedCount={result.repeatedWords.length}
      />

      <div
        className="
          space-y-4
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            px-2
          "
        >
          <h4
            className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-zinc-400
              italic
            "
          >
            Term Density
          </h4>
        </div>

        <ResultsTable repeatedWords={result.repeatedWords} />
      </div>
    </div>
  );
}
