"use client";

import { ProgressBar } from "../components/ui/magic-ui/progress-bar";
import { AnimatedHeader } from "../components/layout/animated-header";
import { AnimatedFooter } from "../components/layout/animated-footer";
import { HeroSection } from "../components/sections/hero-section";
import { StatsSection } from "../components/sections/stats-section";
import { AboutSection } from "../components/sections/about-section";
import { SkillsSection } from "../components/sections/skills-section";
import { ProjectsSection } from "../components/sections/projects-section";
import { ContactSection } from "../components/sections/contact-section";
import NoSSR from "../components/NoSRR";

export default function Home() {
  return (
    <NoSSR>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <ProgressBar />
        <AnimatedHeader />
        <main className="pt-16 overflow-x-hidden">
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <AnimatedFooter />
      </div>
    </NoSSR>
  );
}