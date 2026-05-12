import { FileText, Search, Sparkles } from "lucide-react";

type StatsCardsProps = {
  totalWords: number;
  uniqueWords: number;
  repeatedCount: number;
};

export function StatsCards({
  totalWords,
  uniqueWords,
  repeatedCount,
}: StatsCardsProps) {
  const stats = [
    {
      label: "Total Words",
      value: totalWords,
      icon: <FileText size={16} />,
    },

    {
      label: "Unique Terms",
      value: uniqueWords,
      icon: <Search size={16} />,
    },

    {
      label: "Repetitions",
      value: repeatedCount,
      icon: <Sparkles size={16} />,
    },
  ];

  return (
    <div
      className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
        "
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
                group
                relative
                bg-zinc-900/50
                border
                border-zinc-800
                p-6
                rounded-2xl
                overflow-hidden
                shadow-2xl
              "
        >
          <div
            className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-amber-500/5
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
          />

          <div
            className="
                  relative
                  flex
                  items-center
                  justify-between
                  mb-4
                "
          >
            <span
              className="
                    text-zinc-500
                    text-xs
                    font-bold
                    uppercase
                    tracking-tighter
                  "
            >
              {stat.label}
            </span>

            <div
              className="
                    text-amber-500/50
                    group-hover:text-amber-500
                    transition-colors
                  "
            >
              {stat.icon}
            </div>
          </div>

          <div
            className="
                  relative
                  text-3xl
                  font-bold
                  tracking-tight
                  text-zinc-100
                "
          >
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
