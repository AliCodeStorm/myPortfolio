"use client";

import { Card, CardContent } from "../ui/card";
import { FadeIn } from "../ui/magic-ui/fade-in";
import { StaggerContainer, StaggerItem } from "../ui/magic-ui/stagger-container";
import { HoverCard } from "../ui/magic-ui/hover-card";
import { ReactLogo } from "../icons/react-logo";
import { NextLogo } from "../icons/next-logo";
import { NodeLogo } from "../icons/node-logo";
import { MongoDbLogo } from "../icons/mongodb-logo";
import { JavaScriptLogo } from "../icons/javascript-logo";
import { HtmlLogo } from "../icons/html-logo";
import { CssLogo } from "../icons/css-logo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: 'React.js', icon: <ReactLogo className="h-full w-full" />, level: 95 },
  { name: 'Next.js', icon: <NextLogo className="h-full w-full" />, level: 90 },
  { name: 'JavaScript', icon: <JavaScriptLogo className="h-full w-full" />, level: 92 },
  { name: 'Node.js', icon: <NodeLogo className="h-full w-full" />, level: 88 },
  { name: 'MongoDB', icon: <MongoDbLogo className="h-full w-full" />, level: 85 },
  { name: 'HTML5', icon: <HtmlLogo className="h-full w-full" />, level: 98 },
  { name: 'CSS3', icon: <CssLogo className="h-full w-full" />, level: 95 },
];

export function SkillsSection() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-r from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A look at the technologies and tools I use to bring ideas to life.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <StaggerItem key={skill.name}>
              <HoverCard hoverScale={1.05} rotateOnHover className="group">
                <Card className="h-full bg-gradient-to-br from-background to-muted/30 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <motion.div 
                      className="h-16 w-16 mb-4 text-primary group-hover:text-accent transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </CardContent>
                </Card>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}