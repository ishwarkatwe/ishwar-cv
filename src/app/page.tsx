'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, ArrowRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ishwar-katwe-269aaa56/',
    color: 'text-blue-500',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/ishwarkatwe',
    color: 'text-gray-800 dark:text-gray-200',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:ishwar.katwe0816@gmail.com',
    color: 'text-red-500',
  },
  {
    name: 'Phone',
    icon: Phone,
    href: 'tel:+919632463245',
    color: 'text-green-500',
  },
];

const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Vite'],
  },
];

const experience = [
  {
    role: 'Principal Software Engineer',
    company: 'OneTrust',
    period: '2020 - Present',
    description: [
      'Led development of enterprise-scale applications',
      'Mentored junior developers and conducted code reviews',
      'Implemented best practices and coding standards',
      'Received Pat on Back Award 2021 for work recognition',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Tech Mahindra',
    period: '2015 - 2020',
    description: [
      'Developed and maintained multiple web applications',
      'Collaborated with cross-functional teams',
      'Optimized application performance and scalability',
    ],
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold mb-6 gradient-text"
          >
            Ishwar Katwe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-foreground/80 mb-8"
          >
            Principal Software Engineer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Button asChild>
              <a href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/about">Learn More</a>
            </Button>
          </motion.div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <Card className="p-6 glass">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a 
                    href="mailto:ishwar.katwe0816@gmail.com"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    ishwar.katwe0816@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a 
                    href="tel:+919632463245"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    +91 96324 63245
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <link.icon className={`h-5 w-5 ${link.color}`} />
                    <span className="text-foreground/80">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="p-6 glass">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Experience</h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <Card key={job.role} className="p-6 glass">
                <h3 className="text-xl font-semibold mb-2">{job.role}</h3>
                <p className="text-muted-foreground mb-4">
                  {job.company} • {job.period}
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
