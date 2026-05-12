export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full" />

      <div className="absolute top-[20%] -right-[5%] w-[30%] h-[50%] bg-zinc-800/10 blur-[100px] rounded-full" />
    </div>
  );
}
