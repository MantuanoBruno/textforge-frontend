"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

type ForgeLoadingProps = {
  fileName?: string;
};

export function ForgeLoading({ fileName }: ForgeLoadingProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="
        text-center
        py-20
      "
    >
      <div
        className="
          relative
          inline-block
          mb-8
        "
      >
        <div
          className="
            w-24
            h-24
            rounded-full
            border-4
            border-zinc-900
            border-t-amber-500
            animate-spin
          "
        />

        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            absolute
            -top-4
            left-1/2
            -translate-x-1/2
            text-amber-600/40
            blur-sm
          "
        >
          <Flame size={48} />
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="
          space-y-2
        "
      >
        <p
          className="
            text-amber-500
            font-mono
            tracking-[0.3em]
            uppercase
            animate-pulse
            italic
          "
        >
          Forging your text...
        </p>

        {fileName && (
          <p
            className="
                text-zinc-500
                text-sm
              "
          >
            {fileName}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
