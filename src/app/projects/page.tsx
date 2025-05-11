'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Mail, Phone, Linkedin } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const contactInfo = {
  email: 'ishwar.katwe0816@gmail.com',
  phone: '+919632463245',
  linkedin: 'https://www.linkedin.com/in/ishwar-katwe-269aaa56/'
};

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React, Node.js, and MongoDB. Features include user authentication, real-time updates, and responsive design.',
    period: '2023',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/yourusername/project-one',
    demo: 'https://project-one-demo.com'
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with features like product catalog, shopping cart, payment integration, and order management.',
    period: '2022',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/yourusername/project-two',
    demo: 'https://project-two-demo.com'
  }
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">Projects</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 glass">
                    <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                    <p className="text-foreground/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <Card className="p-6 glass sticky top-8">
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{contactInfo.phone}</span>
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </motion.div>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 