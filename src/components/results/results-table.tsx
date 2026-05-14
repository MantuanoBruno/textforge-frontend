import { RepeatedWord } from "@/types/analysis";

type ResultsTableProps = {
  repeatedWords: RepeatedWord[];
};

export function ResultsTable({ repeatedWords }: ResultsTableProps) {
  return (
    <div
      className="
        bg-zinc-900/30
        border
        border-zinc-800/50
        rounded-2xl
        overflow-hidden
      "
    >
      <table
        className="
          w-full
          text-left
          text-sm
          border-collapse
        "
      >
        <thead>
          <tr
            className="
              border-b
              border-zinc-800
              bg-zinc-800/30
            "
          >
            <th className="p-4 font-medium text-zinc-400">Word</th>

            <th className="p-4 font-medium text-zinc-400">Count</th>

            <th className="p-4 font-medium text-zinc-400">Heat</th>

            <th className="p-4 font-medium text-zinc-400">Synonyms</th>
          </tr>
        </thead>

        <tbody>
          {repeatedWords.map((word) => (
            <tr
              key={word.word}
              className="
                  border-b
                  border-zinc-800/50
                  hover:bg-white/5
                  transition-colors
                "
            >
              <td
                className="
                    p-4
                    font-mono
                    text-zinc-300
                  "
              >
                {word.word}
              </td>

              <td className="p-4 text-zinc-500">{word.count}</td>

              <td className="p-4">
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className=" h-full bg-gradient-to-r from-amber-600 to-orange-400 rounded-full transition-all duration-700"
                    style={{
                      width: `${Math.min(word.percentage * 10, 100)}%`,
                    }}
                  />
                </div>
              </td>

              <td className="p-4">
                <div
                  className="
      flex
      flex-wrap
      gap-2
    "
                >
                  {word.synonyms.length > 0 ? (
                    word.synonyms.map((synonym) => (
                      <span
                        key={synonym}
                        className="
                px-2
                py-1
                rounded-full
                bg-amber-500/10
                border
                border-amber-500/20
                text-amber-400
                text-xs
              "
                      >
                        {synonym}
                      </span>
                    ))
                  ) : (
                    <span
                      className="
            text-zinc-600
            text-xs
          "
                    >
                      No suggestions
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
