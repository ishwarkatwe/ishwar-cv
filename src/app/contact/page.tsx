'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ishwar-katwe-269aaa56/',
    icon: Linkedin,
    color: 'text-[#0077B5]'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: Github,
    color: 'text-[#333] dark:text-white'
  },
  {
    name: 'Email',
    url: 'mailto:ishwar.katwe0816@gmail.com',
    icon: Mail,
    color: 'text-[#EA4335]'
  },
  {
    name: 'Phone',
    url: 'tel:+919632463245',
    icon: Phone,
    color: 'text-[#34A853]'
  }
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">Contact Me</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 glass">
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </Card>

          <div className="space-y-8">
            <Card className="p-6 glass">
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:ishwar.katwe0816@gmail.com"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>ishwar.katwe0816@gmail.com</span>
                  </a>
                  <a
                    href="tel:+919632463245"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+91 9632463245</span>
                  </a>
                </div>
              </motion.div>
            </Card>

            <Card className="p-6 glass">
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-semibold mb-6">Social Links</h2>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <link.icon className={`h-5 w-5 ${link.color}`} />
                      <span className="text-foreground/80">{link.name}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 