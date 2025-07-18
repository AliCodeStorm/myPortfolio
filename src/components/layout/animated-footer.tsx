"use client";

import { motion } from "framer-motion";
import { Heart, Coffee } from "lucide-react";
import { FadeIn } from "../ui/magic-ui/fade-in";

export function AnimatedFooter() {
  return (
    <footer className="py-8 bg-gradient-to-r from-muted/20 to-background border-t border-primary/10">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Ali Raza. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500" />
              </motion.div>
              <span className="text-muted-foreground">and lots of</span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Coffee className="h-4 w-4 text-amber-500" />
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}