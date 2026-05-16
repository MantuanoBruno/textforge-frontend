"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

interface ProcessingStateProps {
  fileName?: string;
}

export function ProcessingState({ fileName }: ProcessingStateProps) {
  return (
    <section className="relative mx-auto mt-10 max-w-4xl px-6">
      <motion.div
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        className=" relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 px-8 py-20 text-center backdrop-blur-sm "
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />

        {/* Spinner Area */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-8">
            {/* Rotating Ring */}
            <div className=" h-24 w-24 rounded-full border-4 border-zinc-800 border-t-amber-500 animate-spin " />

            {/* Floating Flame */}
            <motion.div
              animate={false}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
            >
              <Flame size={34} className="text-amber-500" />
            </motion.div>
          </div>

          {/* Processing Text */}
          <motion.p
            animate={false}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="text-sm uppercase tracking-[0.35em] text-amber-500 font-mono "
          >
            Forging your document...
          </motion.p>

          {/* File Name */}
          {fileName && <p className="mt-4 text-sm text-zinc-500">{fileName}</p>}
        </div>
      </motion.div>
    </section>
  );
}
