import React from "react";
import Image from "next/image";

import { Hero } from "./components/ui/animated-hero";
import { BeamsBackground } from "./components/ui/background";
import { Header1 } from "./components/ui/header"; 
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { FeaturesSectionWithBentoGrid } from "./components/ui/feature-section-with-bento-grid";
import { Blog } from "./components/ui/blog-section";
import { Footer2 } from "./components/ui/footer2";
import { PricingCard } from "./components/ui/PricingCard"; 
import { FAQ } from "./components/ui/faq-section"

export default function Home() {
  return (
    <main className="bg-background text-foreground w-full min-h-screen relative">
      <Header1 /> 

      {/* Beams Background */}
      <section className="absolute inset-0 z-0">
        <BeamsBackground />
      </section>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <Hero />
      </section>

      {/* Transform Your Life Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Transform Your Life <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Interactively
              </span>
            </h1>
          }
        >
          <Image
            src="/2025.png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* Features Section */}
      <section className="w-full px-6 py-32 relative z-10">
        <FeaturesSectionWithBentoGrid />
      </section>

      {/* Pricing Section */}
      <section className="flex items-center justify-center px-6 relative z-10 bg-gradient-to-r from-lightCyan to-softBlue">
        <div className="relative overflow-hidden bg-background text-foreground w-full max-w-5xl py-20">
          <div className="mb-12 space-y-3 text-center">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Pricing
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Start free and explore what&apos;s possible. When you&apos;re ready to commit to your transformation, unlock deeper guidance, smarter insights, and a personalized journey — all powered by AI.
            </p>
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Free Plan */}
            <div className="relative group">
              <PricingCard
                tier="Free"
                price="$0/mo"
                bestFor="Perfect for: Exploring your transformation journey, starting small, and getting a taste of personalized AI guidance."
                CTA="Get started for free"
                benefits={[
                  { text: "1 AI-guided self-improvement journey", checked: true },
                  { text: "Limited progress tracking", checked: true },
                  { text: "Access to basic personalized insights", checked: true },
                  { text: "Daily goal-setting assistance", checked: true },
                ]}
                className="transition-transform transform hover:scale-105"
              />
            </div>

            {/* Basic Plan */}
            <div className="relative group">
              <PricingCard
                tier="Basic"
                price="$29/mo"
                bestFor="Perfect for: Committing to a more structured, continuous journey of self-improvement with deeper insights and personalized strategies."
                CTA="14-day free trial"
                benefits={[
                  { text: "All Free Plan features", checked: true },
                  { text: "Unlimited progress tracking", checked: true },
                  { text: "Enhanced personalized insights", checked: true },
                  { text: "Weekly check-ins for guidance optimization", checked: true },
                  { text: "Priority AI support for faster responses and tailored strategies", checked: true },
                  { text: "In-depth tracking and analysis for deeper self-improvement", checked: true },
                ]}
                className="transition-transform transform hover:scale-105"
              />
            </div>

            {/* Pro Plan */}
            <div className="relative group">
              <PricingCard
                tier="Pro"
                price="$57/mo"
                bestFor="Perfect for: Those who are fully committed to their transformation and want exclusive, round-the-clock AI guidance to unlock their full potential."
                CTA="Get Pro access"
                benefits={[
                  { text: "All Basic Plan features", checked: true },
                  { text: "Advanced goal tracking and progress visualization", checked: true },
                  { text: "Priority AI support with 24/7 access", checked: true },
                  { text: "Unlimited personalized strategies and advanced insights", checked: true },
                  { text: "Monthly consultations with your AI coach for fine-tuning your goals", checked: true },
                ]}
                className="transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="w-full">
          <Blog />
        </div>
      </section>

      {/* FAQ Section (Placeholder) */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-4xl">
           <FAQ />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-border py-10 px-6 text-center text-sm text-muted-foreground relative z-10">
        <Footer2 />
      </footer>
    </main>
  );
}
