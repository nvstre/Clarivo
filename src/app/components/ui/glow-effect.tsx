"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlowEffectProps {
  className?: string;
  children: React.ReactNode;
}

export function GlowEffect({ className, children }: GlowEffectProps) {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="absolute inset-0 bg-blue-500/20 blur-xl filter"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-blue-500/10 blur-2xl filter"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.8, 0.5, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
} 