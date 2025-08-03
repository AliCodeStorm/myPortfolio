"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FadeIn } from "../ui/magic-ui/fade-in";
import { StaggerContainer, StaggerItem } from "../ui/magic-ui/stagger-container";
import { AnimatedGradient } from "../ui/magic-ui/animated-gradient";
import { FloatingElement } from "../ui/magic-ui/floating-element";
import { TypingAnimation } from "../ui/magic-ui/typing-animation";
import { HoverCard } from "../ui/magic-ui/hover-card";
import { ArrowRight, Github, Linkedin, Facebook } from "lucide-react";
import { WhatsappLogo } from "../icons/whatsapp-logo";
import { motion } from "framer-motion";
import NoSSR from "../NoSRR";
import SplashCursor from "../Animations/CursorAniamtion";

const socialLinks = [
  { href: "https://github.com/AliCodeStorm", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/ali-raza-7b735834b", icon: Linkedin, label: "LinkedIn" },
  { href: "https://wa.me/9230294280084", icon: WhatsappLogo, label: "WhatsApp" },
  { href: "https://web.facebook.com/ali.raza.108940/", icon: Facebook, label: "Facebook" }
];

export function HeroSection() {
  return (
    <NoSSR>
      <SplashCursor>
        <section
          id="home"
          className="relative z-20 min-h-screen overflow-hidden bg-background pt-28 pb-16"
        >
          <AnimatedGradient className="absolute inset-0 z-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </AnimatedGradient>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <StaggerContainer className="text-center lg:text-left space-y-8">
                <StaggerItem>
                  <FadeIn direction="up" delay={0.2}>
                    <motion.h1
                      className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      Ali Raza
                    </motion.h1>
                  </FadeIn>
                </StaggerItem>

                <StaggerItem>
                  <div className="h-16 text-2xl md:text-4xl font-medium text-muted-foreground">
                    <TypingAnimation
                      texts={[
                        'REACT Developer',
                        'MERN Stack Developer',
                        'JavaScript',
                        'Problem Solver',
                      ]}
                      className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    />
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <FadeIn direction="up" delay={0.6}>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                      I craft elegant and efficient web solutions, turning complex problems into beautiful,
                      intuitive designs. Passionate about modern web technologies and building delightful user experiences.
                    </p>
                  </FadeIn>
                </StaggerItem>

                <StaggerItem>
                  <FadeIn direction="up" delay={0.8}>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                      <HoverCard>
                        <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                          <a href="#projects" className="flex items-center">
                            View My Work <ArrowRight className="ml-2 h-5 w-5" />
                          </a>
                        </Button>
                      </HoverCard>
                      <HoverCard>
                        <Button size="lg" variant="outline">
                          <a href="#contact">Contact Me</a>
                        </Button>
                      </HoverCard>
                    </div>
                  </FadeIn>
                </StaggerItem>

                <StaggerItem>
                  <FadeIn direction="up" delay={1}>
                    <div className="flex items-center justify-center lg:justify-start gap-6">
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={social.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                        >
                          <HoverCard hoverScale={1.2} rotateOnHover>
                            <Link href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                              <social.icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                            </Link>
                          </HoverCard>
                        </motion.div>
                      ))}
                    </div>
                  </FadeIn>
                </StaggerItem>
              </StaggerContainer>

              <FadeIn direction="right" delay={0.4} className="flex justify-center">
                <FloatingElement duration={4} yOffset={15}>
                  <HoverCard hoverScale={1.05}>
                    <div className="relative">
                      <AnimatedGradient gradientClassName="bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-accent shadow-2xl">
                          <Image
                            src="/images/AliRaza.png"
                            alt="Ali Raza"
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                      </AnimatedGradient>
                    </div>
                  </HoverCard>
                </FloatingElement>
              </FadeIn>
            </div>
          </div>
        </section>
      </SplashCursor>
    </NoSSR>
  );
}
