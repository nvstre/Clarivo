"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Trust", href: "#trust" },
  { name: "Contact", href: "#contact" },
];

const LuxuryNavbar = () => (
  <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0ea5e9]/80 via-[#38bdf8]/80 to-[#0f172a]/80 backdrop-blur-lg shadow-lg">
    <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400 shadow-md">
          <Image src="/logo.jpg" alt="Clarivo Logo" fill style={{objectFit: 'cover'}} priority />
        </div>
        <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent tracking-tight">Clarivo</span>
      </Link>
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <li key={link.name}>
            <a href={link.href} className="text-lg font-medium text-blue-50 hover:text-cyan-300 transition-colors duration-200">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        {/* Mobile menu button placeholder, can add a drawer/menu later */}
        <button className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 transition">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-200"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </nav>
  </header>
);

export default LuxuryNavbar; 