"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Quote, Star } from "lucide-react";

// --- BEGIN FULL LuxuryTrustSection COMPONENT ---

interface Logo {
  id: number;
  name: string;
  src: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

interface PressFeature {
  id: number;
  name: string;
  logo: string;
  quote: string;
}

interface TrustSectionProps {
  title?: string;
  subtitle?: string;
  logos?: Logo[];
  testimonials?: Testimonial[];
  pressFeatures?: PressFeature[];
  className?: string;
}

function LogoColumn({ logos, columnIndex, currentTime }: { logos: Logo[]; columnIndex: number; currentTime: number }) {
  const CYCLE_DURATION = 2000;
  const columnDelay = columnIndex * 200;
  const adjustedTime = (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  return (
    <motion.div
      className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src={currentLogo.src}
            alt={currentLogo.name}
            width={120}
            height={40}
            className="h-auto w-auto max-h-[80%] max-w-[80%] object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function LogoCarousel({ logos, columns = 3 }: { logos: Logo[], columns?: number }) {
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(0);

  const distributeLogos = useCallback(
    (logos: Logo[]) => {
      const shuffled = [...logos].sort(() => Math.random() - 0.5);
      const result: Logo[][] = Array.from({ length: columns }, () => []);

      shuffled.forEach((logo, index) => {
        result[index % columns].push(logo);
      });

      const maxLength = Math.max(...result.map((col) => col.length));
      result.forEach((col) => {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      });

      return result;
    },
    [columns]
  );

  useEffect(() => {
    setLogoColumns(distributeLogos(logos));
  }, [logos, distributeLogos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 py-8">
      {logoColumns.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          columnIndex={index}
          currentTime={time}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <Card className="h-full border border-border/30 bg-background/50 backdrop-blur-sm">
        <CardContent className="p-6 md:p-8 h-full flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-[#61DAFF]/20">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback style={{ backgroundColor: "#034ED8" }}>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#61DAFF] text-[#61DAFF]" />
              ))}
            </div>
          </div>
          <Separator className="my-4 bg-border/30" />
          <p className="flex-1 italic text-base/relaxed text-foreground/90">"{testimonial.content}"</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function PressFeatureCard({ feature }: { feature: PressFeature }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full"
    >
      <Card className="h-full border border-border/30 bg-background/50 backdrop-blur-sm">
        <CardContent className="p-6 md:p-8 h-full flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="relative h-10 w-32">
              <Image
                src={feature.logo}
                alt={feature.name}
                fill
                className="object-contain"
              />
            </div>
            <Quote className="h-8 w-8 text-[#61DAFF]/30" strokeWidth={1} />
          </div>
          <p className="flex-1 text-base/relaxed text-foreground/90 font-medium">"{feature.quote}"</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function LuxuryTrustSection({
  title = "Trusted by Visionaries",
  subtitle = "Join the elite community of forward-thinking teams using our AI-powered platform",
  logos = [],
  testimonials = [],
  pressFeatures = [],
  className,
}: TrustSectionProps) {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        "bg-gradient-to-b from-background to-background/95",
        className
      )}
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(97, 218, 255, 0.05), transparent 70%)",
      }}
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-[#61DAFF]/10" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#61DAFF]/5" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16 space-y-4 max-w-3xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            style={{ color: "#D2F5FF" }}
          >
            {title}
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-muted-foreground md:text-lg"
            style={{ color: "#D2F5FF", opacity: 0.8 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
        {/* Animated Logo Carousel */}
        {logos.length > 0 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            className="mb-20"
          >
            <div className="text-center mb-8">
              <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase" style={{ color: "#61DAFF" }}>
                POWERING INNOVATION WORLDWIDE
              </p>
            </div>
            <LogoCarousel logos={logos} />
          </motion.div>
        )}
        {/* Testimonials Grid */}
        {testimonials.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-foreground"
                style={{ color: "#D2F5FF" }}
              >
                What Our Elite Users Say
              </motion.h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        )}
        {/* Press Features */}
        {pressFeatures.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-foreground"
                style={{ color: "#D2F5FF" }}
              >
                Featured In
              </motion.h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pressFeatures.map((feature) => (
                <PressFeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// --- END FULL LuxuryTrustSection COMPONENT ---

export default LuxuryTrustSection; 