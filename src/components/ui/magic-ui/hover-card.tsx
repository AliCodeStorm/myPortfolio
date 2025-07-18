"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  rotateOnHover?: boolean;
}

export function HoverCard({
  children,
  className = "",
  hoverScale = 1.05,
  rotateOnHover = false,
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        rotateY: rotateOnHover ? 5 : 0,
        y: -5,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={cn(
        "cursor-pointer transition-shadow duration-300 hover:shadow-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}