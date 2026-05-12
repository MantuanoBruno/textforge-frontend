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

              <td
                className="
                    p-4
                    text-zinc-500
                  "
              >
                {word.count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
