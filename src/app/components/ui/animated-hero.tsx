'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Search, ChevronDown } from 'lucide-react';
import { Button } from './button';
import { HeaderSignUpDialog } from './header-signup-dialog';

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ['life', 'opportunities', 'growth', 'potential', 'success'],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <a href="#blog">
              <Button variant="ghost" size="lg" className="gap-4 hover:border hover:border-border">
                Read our launch article <MoveRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">
                Change your life and embrace new
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: '-100' }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Unlock your potential with personalized AI-driven guidance, helping you achieve your goals and transform your life.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <a href="#demo">
              <Button size="lg" className="gap-4 hover:scale-105 transition-transform duration-200" variant="outline">
                Watch Demo <Search className="w-4 h-4" />
              </Button>
            </a>
            <HeaderSignUpDialog 
              buttonClassName="bg-blue-600 text-white shadow-[0_0_15px_#3b82f6] hover:bg-[#15397D]"
              buttonText="Try it for free"
              size="lg"
              showArrow={true}
            />
          </div>
          
          <motion.div 
            className="mt-8 cursor-pointer"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={() => {
              const tabletSection = document.getElementById('tablet');
              if (tabletSection) {
                tabletSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
