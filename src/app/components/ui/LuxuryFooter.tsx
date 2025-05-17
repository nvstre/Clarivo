"use client";

import React from 'react';
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { 
  Mail, 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Github, 
  Youtube, 
  ArrowUp, 
  Sun, 
  Moon,
  MessageSquare,
  Sparkles,
  Zap,
  Shield,
  Layers,
  Code
} from "lucide-react";
import { useTheme } from "next-themes";

// Utility function to handle scroll to top
function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border border-[#D2F5FF]/30 bg-[#0E1C36]/5 p-1">
        <button
          onClick={() => setTheme("light")}
          className="mr-3 rounded-full p-2 text-[#034ED8] hover:bg-[#D2F5FF]/20"
          aria-label="Light mode"
        >
          <Sun className="h-4 w-4" strokeWidth={1.5} />
        </button>
        <button 
          type="button" 
          onClick={handleScrollTop}
          className="rounded-full p-1.5 text-[#034ED8] hover:bg-[#D2F5FF]/20"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-3 w-3" />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="ml-3 rounded-full p-2 text-[#034ED8] hover:bg-[#D2F5FF]/20"
          aria-label="Dark mode"
        >
          <Moon className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

const brand = {
  name: "LuxAI",
  description: "Premium AI solutions for discerning enterprises."
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Github", href: "#", icon: Github },
  { name: "Youtube", href: "#", icon: Youtube }
];

const columns = [
  {
    label: "Solutions",
    links: [
      { title: "AI Analytics", href: "#", icon: Sparkles },
      { title: "Enterprise", href: "#", icon: Shield },
      { title: "Integrations", href: "#", icon: Layers },
      { title: "API Access", href: "#", icon: Code }
    ]
  },
  {
    label: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Press", href: "/press" },
      { title: "Contact", href: "/contact" }
    ]
  },
  {
    label: "Resources",
    links: [
      { title: "Documentation", href: "/docs" },
      { title: "Guides", href: "/guides" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Blog", href: "/blog" }
    ]
  },
  {
    label: "Legal",
    links: [
      { title: "Privacy", href: "/privacy" },
      { title: "Terms", href: "/terms" },
      { title: "Security", href: "/security" },
      { title: "Compliance", href: "/compliance" }
    ]
  }
];

function LuxuryFooter({
  className
}: { className?: string }) {
  return (
    <footer 
      className={`relative w-full bg-gradient-to-r from-blue-800 to-indigo-900 ${className}`}
    >
      {/* Layered gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,#61DAFF15,transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_100%,#034ED815,transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Top section with brand and description */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center">
              <Zap className="h-8 w-8 text-[#61DAFF]" />
              <span className="ml-2 text-2xl font-bold text-white">{brand.name}</span>
            </Link>
            <p className="text-[#D2F5FF]/80 max-w-md">
              {brand.description}
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group rounded-full border border-[#D2F5FF]/20 p-2 transition-all hover:bg-[#61DAFF]/10"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4 text-[#D2F5FF] transition-transform group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>
          {/* Navigation columns */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {columns.map((section, index) => (
              <div key={section.label}>
                <h3 className="text-[#61DAFF] font-medium mb-4 text-sm tracking-wider uppercase">
                  {section.label}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-[#D2F5FF]/70 hover:text-[#D2F5FF] transition-all duration-200"
                      >
                        {"icon" in link && link.icon && (
                          <link.icon className="mr-2 h-4 w-4 opacity-70 group-hover:opacity-100" />
                        )}
                        <span className="text-sm">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Separator */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-[#61DAFF]/20 to-transparent"></div>
        {/* Bottom section with theme toggle and copyright */}
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <ThemeToggle />
          <div className="flex items-center space-x-2 text-sm text-[#D2F5FF]/60">
            <span>© {new Date().getFullYear()}</span>
            <span>{brand.name}</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
          <Link
            href="/contact"
            className="flex items-center rounded-full border border-[#D2F5FF]/20 bg-[#0E1C36]/30 px-4 py-2 text-sm text-[#D2F5FF] transition-all hover:bg-[#0E1C36]/50"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Get in touch</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default LuxuryFooter; 