"use client";

import Image from "next/image";
import { FadeIn } from "../ui/magic-ui/fade-in";
import { StaggerContainer, StaggerItem } from "../ui/magic-ui/stagger-container";
import { AnimatedGradient } from "../ui/magic-ui/animated-gradient";
import { HoverCard } from "../ui/magic-ui/hover-card";
import { CodeXml, BookOpen, Laptop, Heart } from "lucide-react";

const focusAreas = [
  { icon: CodeXml, title: "FullStack Learning", subtitle: "Next.js, React, Node.js" },
  { icon: BookOpen, title: "Learning", subtitle: "FullStack Developer" },
  { icon: Laptop, title: "Projects", subtitle: "E-commerce, Web Apps, AI" },
  { icon: Heart, title: "Interests", subtitle: "Real-Time Apps, AI" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 py-24 bg-background" // fixed: z-10 and top padding
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <HoverCard hoverScale={1.02}>
              <AnimatedGradient className="relative">
                <Image
                  src="/images/myimage.jpg"
                  alt="About Ali Raza"
                  width={500}
                  height={600}
                  className="relative rounded-2xl shadow-2xl object-cover"
                />
              </AnimatedGradient>
            </HoverCard>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <FadeIn direction="right">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  About Me
                </h2>
              </FadeIn>
            </StaggerItem>

            <StaggerItem>
              <FadeIn direction="right" delay={0.2}>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Hello! I'm Ali Raza, a dedicated Full Stack Developer with a passion for creating 
                    dynamic, user-centric web applications...
                  </p>
                  <p>
                    With a strong foundation in both front-end and back-end technologies...
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new tech trends...
                  </p>
                </div>
              </FadeIn>
            </StaggerItem>

            <StaggerItem>
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {focusAreas.map((area, index) => (
                  <StaggerItem key={index}>
                    <HoverCard>
                      <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
                        <area.icon className="h-8 w-8 text-primary mb-2" />
                        <h5 className="font-semibold text-foreground">{area.title}</h5>
                        <p className="text-sm text-muted-foreground">{area.subtitle}</p>
                      </div>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
