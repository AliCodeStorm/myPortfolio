"use client";

import { FadeIn } from "../ui/magic-ui/fade-in";
import { StaggerContainer, StaggerItem } from "../ui/magic-ui/stagger-container";
import { HoverCard } from "../ui/magic-ui/hover-card";
import { Star, Users, Coffee, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  { icon: Star, value: 30, label: "Projects Completed", suffix: "+" },
  { icon: Users, value: 10, label: "Happy Clients", suffix: "+" },
  { icon: Coffee, value: 1000, label: "Cups of Coffee", suffix: "+" },
  { icon: Rocket, value: 3, label: "Years Experience", suffix: "+" },
];

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = value / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="text-3xl font-bold text-foreground">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StaggerItem key={stat.label}>
              <HoverCard className="text-center">
                <FadeIn direction="up" delay={index * 0.1}>
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="p-4 bg-gradient-to-r from-primary to-accent rounded-full"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-muted-foreground mt-2">{stat.label}</div>
                </FadeIn>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}