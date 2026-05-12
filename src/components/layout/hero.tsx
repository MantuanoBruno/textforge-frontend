export function Hero() {
  return (
    <header className="text-center mb-24">
      <div
        className="
            inline-flex
            items-center
            gap-2
            px-3
            py-1
            rounded-full
            border
            border-zinc-800
            bg-zinc-900/50
            text-xs
            font-medium
            text-zinc-400
            mb-6
            tracking-widest
            uppercase
          "
      >
        Advanced OCR & Text Analysis
      </div>

      <h1
        className="
            text-6xl
            md:text-8xl
            font-bold
            tracking-tighter
            mb-6
            bg-gradient-to-b
            from-white
            via-zinc-200
            to-zinc-500
            bg-clip-text
            text-transparent
          "
      >
        TextForge
      </h1>

      <p
        className="
            text-lg
            md:text-xl
            text-zinc-400
            max-w-2xl
            mx-auto
            leading-relaxed
          "
      >
        High-precision OCR and intelligent text analysis in a premium industrial
        interface.
      </p>
    </header>
  );
}
