"use client"

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Sparkles, Zap, Brain, Lightbulb, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  step: number;
  className?: string;
}

const FeatureCard = ({ icon, title, description, step, className }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: step * 0.1 }}
    viewport={{ once: true }}
  >
    <Card className={cn(
      "group relative overflow-hidden border-[#D2F5FF]/20 bg-[#0E1C36]/90 shadow-lg transition-all duration-300 hover:shadow-[#61DAFF]/20 hover:border-[#61DAFF]/30",
      className
    )}>
      <CardDecorator />
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#034ED8]/10 text-[#61DAFF]">
            {icon}
          </div>
          <span className="text-[#D2F5FF]/40 text-sm font-light">Step {step}</span>
        </div>
        <h3 className="mt-4 text-xl font-medium text-[#D2F5FF]">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-[#D2F5FF]/70 text-sm">{description}</p>
        <div className="mt-6 flex items-center text-[#61DAFF] text-sm font-medium">
          <span>Learn more</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const CardDecorator = () => (
  <>
    <span className="absolute -left-px -top-px block h-2 w-2 border-l-2 border-t-2 border-[#61DAFF]"></span>
    <span className="absolute -right-px -top-px block h-2 w-2 border-r-2 border-t-2 border-[#61DAFF]"></span>
    <span className="absolute -bottom-px -left-px block h-2 w-2 border-b-2 border-l-2 border-[#61DAFF]"></span>
    <span className="absolute -bottom-px -right-px block h-2 w-2 border-b-2 border-r-2 border-[#61DAFF]"></span>
    <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#034ED8]/20 blur-3xl"></div>
    <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#61DAFF]/10 blur-3xl"></div>
  </>
);

function LuxuryFeatures() {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Insights",
      description: "Transform raw data into actionable intelligence with our advanced AI algorithms that adapt to your unique business needs.",
      step: 1,
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Strategic Transformation",
      description: "Reimagine your business processes with intelligent automation that evolves with your organization's growth.",
      step: 2,
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Exclusive Analytics",
      description: "Access premium analytics dashboards with predictive modeling that gives you a competitive edge in your industry.",
      step: 3,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Seamless Integration",
      description: "Connect your existing systems effortlessly with our enterprise-grade API infrastructure for a unified experience.",
      step: 4,
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-[#0E1C36]"></div>
      <div className="absolute inset-0 [--border:#034ED8] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-6xl px-6"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-[#034ED8]/20 px-4 py-1.5 text-sm font-medium text-[#61DAFF]">
              Transformative AI Experience
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-semibold text-[#D2F5FF] lg:text-5xl"
          >
            Your Journey to Digital Excellence
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-[#D2F5FF]/70"
          >
            Experience the evolution of your business through our premium AI solutions designed for visionary leaders.
          </motion.p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              step={feature.step}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="mx-auto max-w-3xl border-[#D2F5FF]/20 bg-[#0E1C36]/90 p-8">
            <CardDecorator />
            <h3 className="text-2xl font-medium text-[#D2F5FF]">Ready to Transform Your Business?</h3>
            <p className="mt-4 text-[#D2F5FF]/70">Join the exclusive community of industry leaders who are redefining success with our AI solutions.</p>
            <div className="mt-6">
              <button className="inline-flex items-center justify-center rounded-md bg-[#034ED8] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#034ED8]/90 focus:outline-none focus:ring-2 focus:ring-[#61DAFF] focus:ring-offset-2">
                Start Your Transformation
              </button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default LuxuryFeatures; 