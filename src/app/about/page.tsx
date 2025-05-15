'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Linkedin, Award, Languages } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">About Me</h1>
        
        <Card className="p-6 mb-8 glass">
          <motion.div {...fadeInUp}>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I am a Principal Software Engineer with over 8 years of experience in building modern web applications. 
              My expertise lies in JavaScript/TypeScript, React, Node.js, and cloud technologies. 
              I love creating efficient, scalable, and user-friendly solutions.
            </p>
            <a
              href="https://www.linkedin.com/in/ishwar-katwe-269aaa56/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>View my LinkedIn Profile</span>
            </a>
          </motion.div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 glass">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <div>
                    <h3 className="font-medium">Pat on Back Award 2021</h3>
                    <p className="text-foreground/80">Tech Mahindra Pvt Ltd</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <div>
                    <h3 className="font-medium">2nd Prize in State Level Technical Quiz</h3>
                    <p className="text-foreground/80">KLEIT, Hubli</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </Card>

          <Card className="p-6 glass">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <Languages className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Languages</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <div>
                    <h3 className="font-medium">English</h3>
                    <p className="text-foreground/80">Full professional proficiency</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <div>
                    <h3 className="font-medium">Kannada</h3>
                    <p className="text-foreground/80">Native or bilingual proficiency</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <div>
                    <h3 className="font-medium">Hindi</h3>
                    <p className="text-foreground/80">Native or bilingual proficiency</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
} 