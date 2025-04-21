'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Search, ChevronDown } from 'lucide-react';
import { Button } from './button';
import { HeaderSignUpDialog } from './header-signup-dialog';
import { AIInputWithLoading } from './ai-input-with-loading';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
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

  const handleAIInputSubmit = async (value: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: value,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Add bot response
    const botMessage: Message = {
      id: Date.now() + 1,
      text: "We don't have the current budget to help you!",
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botMessage]);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 sm:gap-8 py-12 sm:py-20 lg:py-40 items-center justify-center flex-col">
          <div className="text-center">
            <a href="#blog">
              <Button variant="ghost" size="lg" className="gap-4 hover:border hover:border-border text-xs sm:text-base">
                Read our launch article <MoveRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </a>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              Discover how ClarivoAI is revolutionizing personal growth with specialized AI guidance
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4 flex-col">
            <h1 className="text-3xl sm:text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
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

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Tired of endless research and no clear direction? ClarivoAI provides specialized guidance to help you achieve your goals with precision and clarity.
            </p>
          </div>
          
          <div className="w-full max-w-xl space-y-3 sm:space-y-4 px-2">
            {messages.length > 0 && (
              <div className="space-y-1.5 sm:space-y-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[90%] sm:max-w-[80%] px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm ${
                        message.sender === 'user'
                          ? 'bg-blue-500/10 text-blue-500'
                          : 'bg-muted/50 text-muted-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <AIInputWithLoading 
              placeholder="Ask me anything about your goals..."
              onSubmit={handleAIInputSubmit}
              loadingDuration={3000}
              thinkingDuration={1000}
              minHeight={48}
              maxHeight={200}
            />
          </div>

          <div className="flex flex-row gap-2 sm:gap-3">
            <a href="#demo">
              <Button size="lg" className="gap-4 hover:scale-105 transition-transform duration-200 text-xs sm:text-base" variant="outline">
                Watch Demo <Search className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </a>
            <HeaderSignUpDialog 
              buttonClassName="bg-blue-600 text-white shadow-[0_0_15px_#3b82f6] hover:bg-[#15397D] text-xs sm:text-base"
              buttonText="Get started for free"
              size="lg"
              showArrow={true}
            />
          </div>
          
          <motion.div 
            className="mt-6 sm:mt-8 cursor-pointer"
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
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground hover:text-foreground transition-colors" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
