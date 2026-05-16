export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Left Amber Glow */}
      <div className="absolute top-[-10%] left-[-10%] h-[40rem] w-[40rem] rounded-full bg-amber-500/10 blur-[140px]" />

      {/* Right Dark Glow */}
      <div className="absolute top-[20%] right-[-10%] h-[35rem] w-[35rem] rounded-full bg-zinc-700/10 blur-[120px]" />

      {/* Bottom Warm Glow */}
      <div className="absolute bottom-[-20%] left-[30%] h-[30rem] w-[30rem] rounded-full bg-orange-500/5 blur-[120px]" />
    </div>
  );
}
