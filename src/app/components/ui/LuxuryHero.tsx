"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

interface LuxuryHeroProps {
  className?: string;
}

const LuxuryHero: React.FC<LuxuryHeroProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "relative min-h-[90vh] w-full overflow-hidden bg-background text-foreground",
        "flex flex-col items-center justify-center py-16 px-4 md:py-24 lg:py-32",
        className
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,#034ED8_0%,transparent_70%)] opacity-20 blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,#61DAFF_0%,transparent_70%)] opacity-20 blur-3xl" />
        <div className="absolute right-1/3 bottom-1/3 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,#D2F5FF_0%,transparent_70%)] opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] flex flex-col gap-12 lg:gap-24">
        <div className="relative z-10 flex flex-col items-center gap-6 pt-8 md:pt-16 text-center lg:gap-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <LuxuryLogo />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "inline-block",
              "bg-gradient-to-r from-[#034ED8] via-[#61DAFF] to-[#D2F5FF]",
              "bg-clip-text text-transparent",
              "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
              "leading-[1.1] sm:leading-[1.1]",
              "drop-shadow-sm"
            )}
          >
            Elevate Your Digital Experience
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={cn(
              "max-w-[600px]",
              "text-base sm:text-lg md:text-xl",
              "text-muted-foreground",
              "font-medium"
            )}
          >
            Discover a premium AI-powered platform designed for those who demand excellence. 
            Sophisticated, intuitive, and exclusively crafted for visionaries.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative z-10 flex flex-wrap justify-center gap-4 mt-4"
          >
            <Button
              size="lg"
              className={cn(
                "bg-[#034ED8] hover:bg-[#034ED8]/90",
                "text-white shadow-lg",
                "transition-all duration-300 rounded-full px-8",
                "flex items-center gap-2 text-base"
              )}
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className={cn(
                "border-[#61DAFF] text-[#034ED8]",
                "hover:bg-[#D2F5FF]/10 hover:text-[#034ED8]",
                "transition-all duration-300 rounded-full px-8",
                "text-base"
              )}
            >
              Book a Demo
            </Button>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="relative w-full max-w-5xl mt-16 px-4 sm:px-6 lg:px-8"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#61DAFF]/20 shadow-[0_0_50px_-12px_rgba(97,218,255,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0E1C36]/80 to-[#034ED8]/20 mix-blend-overlay z-10"></div>
              <div className="aspect-[16/9] bg-[#0E1C36] rounded-2xl overflow-hidden">
                <AnimatedVisual />
              </div>
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-[#0E1C36]/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-5 w-5 text-[#61DAFF]" />
                <span className="text-sm font-medium text-white">Premium AI Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LuxuryLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#034ED8] to-[#61DAFF] flex items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-[#0E1C36] flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#034ED8] to-[#61DAFF]"></div>
        </div>
      </div>
      <div className="text-2xl font-bold bg-gradient-to-r from-[#034ED8] via-[#61DAFF] to-[#D2F5FF] bg-clip-text text-transparent">
        Clarivo
      </div>
    </div>
  );
};

const AnimatedVisual = () => {
  const dotCount = 100;
  const dots = Array.from({ length: dotCount });

  return (
    <div className="relative w-full h-full bg-[#0E1C36] overflow-hidden">
      {dots.map((_, index) => {
        const size = Math.random() * 4 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-[#61DAFF]/80"
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-[#034ED8] to-[#61DAFF] opacity-20 blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-[#61DAFF]/30"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#61DAFF]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LuxuryHero; 