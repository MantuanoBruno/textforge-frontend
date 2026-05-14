"use client";

import { motion } from "framer-motion";

interface Props {
  active: boolean;
}

const sparks = [
  { x: -180, y: -120, delay: 0 },
  { x: 140, y: -90, delay: 0.03 },
  { x: -90, y: 130, delay: 0.06 },
  { x: 200, y: 40, delay: 0.09 },
  { x: -220, y: 60, delay: 0.12 },
  { x: 100, y: -160, delay: 0.15 },
  { x: -130, y: -200, delay: 0.18 },
  { x: 240, y: -40, delay: 0.21 },
  { x: -250, y: -20, delay: 0.24 },
  { x: 80, y: 180, delay: 0.27 },
  { x: -70, y: 220, delay: 0.3 },
  { x: 190, y: 140, delay: 0.33 },
  { x: -160, y: 100, delay: 0.36 },
  { x: 150, y: -210, delay: 0.39 },
  { x: -240, y: -110, delay: 0.42 },
  { x: 260, y: 90, delay: 0.45 },
];

export function ForgeSparks({ active }: Props) {
  if (!active) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparks.map((spark, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: 0,
            scale: 0,
            x: spark.x,
            y: spark.y,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: spark.delay,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            w-1
            h-1
            rounded-full
            bg-amber-400
            shadow-[0_0_12px_rgba(251,191,36,0.9)]
          "
        />
      ))}
    </div>
  );
}
