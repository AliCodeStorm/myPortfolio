"use client";

import Link from 'next/link';
import { Code2, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { HoverCard } from '../ui/magic-ui/hover-card';
import { ThemeToggle } from '../theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ProgressBar } from '../ui/magic-ui/progress-bar';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function AnimatedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.substring(1));
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed z-30 top-0 w-full transition-all duration-300 ${scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-primary/10 shadow-lg'
          : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <HoverCard hoverScale={1.05}>
          <Link href="#home" className="flex items-center space-x-2" onClick={() => handleNavClick('#home')}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AliRaza
            </span>
          </Link>
        </HoverCard>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative transition-colors hover:text-primary ${activeSection === link.href.substring(1) ? 'text-primary font-semibold' : 'text-muted-foreground'
                  }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    layoutId="activeSection"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <ThemeToggle />

          <div className="sm:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <HoverCard>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </HoverCard>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background/95 backdrop-blur-md">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    The main navigation menu for the mobile version of the site.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col">
                  <Link
                    href="#home"
                    className="flex items-center space-x-2 mb-8"
                    onClick={() => handleNavClick('#home')}
                  >
                    <Code2 className="h-6 w-6 text-primary" />
                    <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      AliRaza
                    </span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    <AnimatePresence>
                      {navLinks.map((link, index) => (
                        <motion.button
                          key={link.href}
                          onClick={() => handleNavClick(link.href)}
                          className={`text-left text-lg transition-colors hover:text-primary ${activeSection === link.href.substring(1) ? 'text-primary font-semibold' : 'text-muted-foreground'
                            }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, x: 10 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {link.label}
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}