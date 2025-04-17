import { Hero } from "./components/ui/animated-hero";
import { BeamsBackground } from "./components/ui/background";
import { Header1 } from "./components/ui/header"; 
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import Image from "next/image"; // Importing from next/image for optimized loading
import React from "react"
import { FeaturesSectionWithBentoGrid } from "./components/ui/feature-section-with-bento-grid"

export default function Home() {
  return (
    <main className="bg-background text-foreground w-full min-h-screen relative">
      {/* Header Section */}
      <Header1 /> 

      {/* Beams Background Section */}
      <section className="absolute inset-0 z-0">
        <BeamsBackground />
      </section>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <Hero />
      </section>

      {/* Tablet Preview Section with Scroll Animation */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
              Transform Your Life <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Interactively
                </span>
              </h1>
            </>
          }
        >
          <Image
            src="/2025.png"  // Use the correct path to your image here
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* Features Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
      <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <FeaturesSectionWithBentoGrid />
      </div>
    </div>
      </section>

      {/* Reviews Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="text-center text-2xl text-muted-foreground">
          Reviews section placeholder
        </div>
      </section>

      {/* Pricing Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="text-center text-2xl text-muted-foreground">
          Pricing section placeholder
        </div>
      </section>

      {/* Blog Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="text-center text-2xl text-muted-foreground">
          Blog section placeholder
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="text-center text-2xl text-muted-foreground">
          FAQ section placeholder
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6 text-center text-sm text-muted-foreground relative z-10">
        &copy; {new Date().getFullYear()} AI Goal Coach. All rights reserved.
      </footer>
    </main>
  );
}
