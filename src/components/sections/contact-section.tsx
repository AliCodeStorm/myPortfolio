"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FadeIn } from "../ui/magic-ui/fade-in";
import { StaggerContainer, StaggerItem } from "../ui/magic-ui/stagger-container";
import { HoverCard } from "../ui/magic-ui/hover-card";
import { useToast } from "../../hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import { WhatsappLogo } from "../icons/whatsapp-logo";
import Link from "next/link";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: Mail, label: "Email", value: "ali.raza@example.com", href: "mailto:ali.raza@example.com" },
  { icon: Phone, label: "Phone", value: "+92 302 9428 0084", href: "tel:+923029428084" },
  { icon: MapPin, label: "Location", value: "Pakistan", href: "#" },
];

const socialLinks = [
  { href: "https://github.com/AliCodeStorm", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/ali-raza-7b735834b", icon: Linkedin, label: "LinkedIn" },
  { href: "https://wa.me/9230294280084", icon: WhatsappLogo, label: "WhatsApp" },
  { href: "https://web.facebook.com/ali.raza.108940/", icon: Facebook, label: "Facebook" }
];

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("_zhERR0YCgl3pZUuE");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "No subject provided",
        message: formData.message
      };

      const response = await emailjs.send(
        "service_i6nb13t",
        "template_pl64xsa",
        templateParams
      );

      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Message sent successfully! ✅",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later. ❌",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <HoverCard>
              <Card className="bg-gradient-to-br from-background to-muted/20 border-primary/10 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject of your message"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message..."
                        rows={5}
                        required
                        className="border-primary/20 focus:border-primary resize-none"
                      />
                    </div>
                    <HoverCard>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </HoverCard>
                  </form>
                </CardContent>
              </Card>
            </HoverCard>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <FadeIn direction="right">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <StaggerItem key={contact.label}>
                      <HoverCard>
                        <motion.div
                          className="flex items-center space-x-4 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg hover:from-primary/10 hover:to-accent/10 transition-all"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
                            <contact.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{contact.label}</div>
                            <div className="text-muted-foreground">{contact.value}</div>
                          </div>
                        </motion.div>
                      </HoverCard>
                    </StaggerItem>
                  ))}
                </div>
              </FadeIn>
            </StaggerItem>

            <StaggerItem>
              <FadeIn direction="right" delay={0.3}>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <HoverCard hoverScale={1.2} rotateOnHover>
                        <Link 
                          href={social.href} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary hover:to-accent rounded-lg transition-all group"
                        >
                          <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-white transition-colors" />
                        </Link>
                      </HoverCard>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}