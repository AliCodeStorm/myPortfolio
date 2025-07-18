"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FadeIn } from "../ui/magic-ui/fade-in";
import { StaggerContainer, StaggerItem } from "../ui/magic-ui/stagger-container";
import { HoverCard } from "../ui/magic-ui/hover-card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: 'React Tech Blog Templates',
    description: 'A modern React application showcasing reusable UI components, page templates, and AI-powered suggestions for tech blogs and documentation sites.',
    technologies: ['React', 'Next.js', 'AI', 'Gemini 2.0 Flash', 'Tailwind CSS'],
    imageUrl: '/projects/TechReact.png',
    link: 'https://codeshowcase.vercel.app/',
    featured: true
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    imageUrl: '/projects/reactStore.png',
    link: 'https://alicodestorm.github.io/react-store/',
    featured: true
  },
  {
    title: 'AC Repairing Website',
    description: 'A business AC repairing website with lots of animation effects, clean interface, and responsive structure.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'GSAP'],
    imageUrl: '/projects/ACRparing.png',
    link: 'https://alicodestorm.github.io/AC-Reparing/',
    featured: false
  },
  {
    title: 'Authentication API',
    description: 'A robust Node.js authentication system with JWT tokens, refresh tokens, and MongoDB integration.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    imageUrl: '/projects/authentication.jpg',
    link: 'https://github.com/AliCodeStorm/Authentication',
    featured: false
  },
  {
    title: 'HTML & Bootstrap Store',
    description: 'A business store website with animation effects, clean interface, and responsive structure.',
    technologies: ['HTML', 'Bootstrap', 'JavaScript'],
    imageUrl: '/projects/FrontentStore.png',
    link: 'https://alicodestorm.github.io/Bootstrap-E-Commerce-store/',
    featured: false
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a challenge I was excited to tackle.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={project.title} className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}>
              
              <HoverCard className="h-full group">
                <Card className="h-full bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="mb-4 text-muted-foreground">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="hover:bg-primary/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <HoverCard>
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </HoverCard>
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