"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface AnimatedGradientProps {
  children: ReactNode;
  className?: string;
  gradientClassName?: string;
}

export function AnimatedGradient({
  children,
  className = "",
  gradientClassName = "",
}: AnimatedGradientProps) {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl",
          gradientClassName
        )}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}