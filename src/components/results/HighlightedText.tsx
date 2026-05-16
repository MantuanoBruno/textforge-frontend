interface HighlightedWord {
  word: string;
  type?: "repeated" | "refined";
}

interface HighlightedTextProps {
  words: HighlightedWord[];
}

export function HighlightedText({ words }: HighlightedTextProps) {
  return (
    <p className="leading-relaxed text-zinc-400">
      {words.map((item, index) => (
        <span key={`${item.word}-${index}`}>
          <span
            className={`
                transition-colors
  
                ${
                  item.type === "repeated"
                    ? `
                      rounded-md
                      bg-amber-500/10
                      px-1
                      text-amber-200
                    `
                    : ""
                }
  
                ${
                  item.type === "refined"
                    ? `
                      rounded-md
                      bg-sky-500/10
                      px-1
                      text-sky-200
                    `
                    : ""
                }
              `}
          >
            {item.word}
          </span>{" "}
        </span>
      ))}
    </p>
  );
}
