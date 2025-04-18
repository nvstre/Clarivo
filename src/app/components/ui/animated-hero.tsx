'use client';

import React, { useEffect, useMemo, useState, useId } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Search, X } from 'lucide-react';
import { Button } from './button';
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "./dialog";

// SignUpDialog Component
export const SignUpDialog = () => {
  const id = useId();
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-4 bg-blue-600 text-white shadow-[0_0_15px_#3b82f6] hover:bg-[#15397D]">
          Get Started <MoveRight className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            <svg
              className="stroke-zinc-800 dark:stroke-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
            </svg>
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">Create an account</DialogTitle>
            <DialogDescription className="sm:text-center">
              Enter your information to create a new account.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`${id}-name`}>Full Name</Label>
              <Input id={`${id}-name`} placeholder="John Doe" type="text" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-email`}>Email</Label>
              <Input id={`${id}-email`} placeholder="hi@example.com" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-password`}>Password</Label>
              <Input
                id={`${id}-password`}
                placeholder="Create a password"
                type="password"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id={`${id}-terms`} />
            <Label htmlFor={`${id}-terms`} className="font-normal text-muted-foreground">
              I agree to the <a className="text-primary underline hover:no-underline" href="#">Terms of Service</a> and <a className="text-primary underline hover:no-underline" href="#">Privacy Policy</a>
            </Label>
          </div>
          <Button type="button" className="w-full">
            Get Started
          </Button>
        </form>

        <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          <span className="text-xs text-muted-foreground">Or</span>
        </div>

        <Button variant="outline">Sign up with Google</Button>
        
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a className="text-primary underline hover:no-underline" href="#">
            Sign in
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

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
            <SignUpDialog />
          </div>
        </div>
      </div>
    </div>
  );
}
