"use client";

type RepeatedWordCardProps = {
  data: {
    word: string;
    count: number;
    percentage: number;
    synonyms: string[];
  };
};

export function RepeatedWordCard({ data }: RepeatedWordCardProps) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/30
        backdrop-blur-sm
        p-6
        transition-all
        duration-300
        hover:border-amber-500/30
        hover:bg-zinc-900/50
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-amber-500/5
          to-transparent
          pointer-events-none
        "
      />

      <div
        className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-4
        "
      >
        <div>
          <h3
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-zinc-100
            "
          >
            {data.word}
          </h3>

          <div
            className="
              flex
              items-center
              gap-3
              mt-2
              text-sm
              text-zinc-500
            "
          >
            <span>{data.count} occurrences</span>

            <span
              className="
                w-1
                h-1
                rounded-full
                bg-zinc-700
              "
            />

            <span>{data.percentage}%</span>
          </div>
        </div>

        <div
          className="
            px-3
            py-1
            rounded-full
            border
            border-amber-500/20
            bg-amber-500/10
            text-amber-300
            text-xs
            uppercase
            tracking-[0.2em]
            w-fit
          "
        >
          Repeated
        </div>
      </div>

      <div className="mt-6">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-zinc-500
            mb-3
          "
        >
          Suggested replacements
        </p>

        {data.synonyms.length > 0 ? (
          <div
            className="
              flex
              flex-wrap
              gap-2
            "
          >
            {data.synonyms.map((synonym) => (
              <span
                key={synonym}
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-amber-500/10
                  border
                  border-amber-500/20
                  text-amber-300
                  text-sm
                  transition-all
                  duration-200
                  hover:bg-amber-500/20
                "
              >
                {synonym}
              </span>
            ))}
          </div>
        ) : (
          <p
            className="
              text-sm
              text-zinc-600
              italic
            "
          >
            No synonyms found.
          </p>
        )}
      </div>
    </div>
  );
}
