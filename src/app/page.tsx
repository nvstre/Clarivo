import React from "react";
import Image from "next/image";
import scrollImg from "./components/ui/images/scroll.png";

import { Hero } from "./components/ui/animated-hero";
import { BeamsBackground } from "./components/ui/background";
import { Header1 } from "./components/ui/header";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { Blog } from "./components/ui/blog-section";
import { Footer2 } from "./components/ui/footer2";
import { PricingCard } from "./components/ui/PricingCard";
import { FAQ } from "./components/ui/faq-section";
import { TestimonialsSection } from "./components/ui/testimonials";
import VideoPlayer from "./components/ui/video-player";
import SecondBentoGrid from "./components/ui/second-bento-grid";

export default function Home() {
  const testimonials = [
    {
      author: {
        name: "Alex Chen",
        handle: "@alexc_dev",
        avatar: "/default-avatar.png"
      },
      text: "ClarivoAI's personalized coaching helped me break through my career plateau. The AI's insights into my strengths and growth areas were spot-on. Within 3 months, I've gained clarity on my career path and landed a leadership role I never thought possible! 🎯"
    },
    {
      author: {
        name: "Sarah Miller",
        handle: "@sarah.wellness",
        avatar: "/default-avatar.png"
      },
      text: "As a busy professional, I struggled to maintain my personal growth journey. ClarivoAI's micro-goals system and daily check-ins keep me accountable. The AI coach adapts to my schedule and provides just the right amount of guidance. Best investment in my personal development! ✨"
    },
    {
      author: {
        name: "Marcus Thompson",
        handle: "@marc_fit",
        avatar: "/default-avatar.png"
      },
      text: "What sets ClarivoAI apart is how it connects different aspects of personal growth. When I hit a plateau in my fitness journey, the AI analyzed patterns across my nutrition, sleep, and stress levels. The holistic approach led to breakthroughs I couldn't achieve alone. 💪"
    },
    {
      author: {
        name: "Priya Patel",
        handle: "@priya.creates",
        avatar: "/default-avatar.png"
      },
      text: "I've tried many personal development tools, but ClarivoAI feels like having a mentor who truly understands me. The way it tracks progress and provides actionable insights is revolutionary. Two months in, and I've achieved goals I've been struggling with for years! ⭐"
    }
  ];

  const videoSrc = "/taka.mp4";

  const VideoPlayerComponent = () => {
    return <VideoPlayer src={videoSrc} />;
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Header1 />

      <section className="absolute inset-0 z-0">
        <BeamsBackground />
      </section>

      <section id="home" className="relative z-20">
        <Hero />
      </section>

      <section className="py-16 flex items-center justify-center px-6 relative z-10">
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
            src={scrollImg}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      <section className="py-16 relative z-10">
        <SecondBentoGrid />
      </section>

      <section id="demo" className="w-full px-6 py-12 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <h2 className="text-3xl font-semibold text-center mb-4">See It in Action</h2>
        <p className="text-center text-lg mb-8">
          Discover how our AI coach transforms lives through personalized guidance, helping you break through barriers and achieve lasting change.
        </p>
        
        <VideoPlayerComponent />
      </section>

      <section id="aews" className="py-8 flex items-center justify-center px-6 relative z-10">
        <TestimonialsSection
          title="Trusted by people transforming their lives"
          description="Join a growing movement of individuals using AI to reclaim direction, build momentum, and design a meaningful future."
          testimonials={testimonials}
          className="w-full max-w-[90vw] md:max-w-4xl"
        />
      </section>

      <section id="price" className="flex items-center justify-center px-6 relative z-10 bg-gradient-to-r from-lightCyan to-softBlue">
        <div className="relative overflow-hidden bg-background text-foreground w-full max-w-5xl py-20">
          <div className="mb-12 space-y-3 text-center">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Pricing
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">
              Start free and explore what&apos;s possible. When you&apos;re ready to commit to your transformation, unlock deeper guidance, smarter insights, and a personalized journey — all powered by AI.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="relative group">
              <PricingCard
                tier="Free"
                price="$0/mo"
                bestFor="Exploring your transformation journey, starting small, and getting a taste of personalized AI guidance."
                CTA="Get started for free"
                benefits={[
                  { text: "Limited progress tracking", checked: true },
                  { text: "Access to basic personalized insights", checked: true },
                  { text: "Daily goal-setting assistance", checked: true },
                ]}
                className="transition-transform transform hover:scale-105"
              />
            </div>

            <div className="relative group">
              <PricingCard
                tier="Basic"
                price="$11.99/mo"
                bestFor="Committing to a more structured, continuous journey of self-improvement with deeper insights and personalized strategies."
                CTA="14-day free trial"
                benefits={[
                  { text: "Unlimited progress tracking", checked: true },
                  { text: "Enhanced personalized insights", checked: true },
                  { text: "Weekly check-ins for guidance optimization", checked: true },
                  { text: "Clarivo AI support for faster responses and tailored strategies", checked: true },
                  { text: "In-depth tracking and analysis", checked: true },
                ]}
                className="transition-transform transform hover:scale-105"
              />
            </div>

            <div className="relative group">
              <PricingCard
                tier="Pro"
                price="$17.99/mo"
                bestFor="Those who are fully committed to their transformation and want exclusive, AI guidance to unlock their full potential."
                CTA="Get Pro access"
                benefits={[
                  { text: "All Basic Plan features", checked: true },
                  { text: "Advanced goal tracking and progress visualization", checked: true },
                  { text: "Unlimited personalized strategies and advanced insights", checked: true },
                  { text: "Monthly consultations with your AI coach for fine-tuning your goals", checked: true },
                ]}
                className="transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 flex items-center justify-center px-6 relative z-10">
        <div className="w-full">
          <Blog />
        </div>
      </section>

      <section id="faq" className="py-8 flex items-center justify-center px-6 relative z-10">
        <div className="w-full max-w-4xl">
          <FAQ />
        </div>
      </section>

      <Footer2 />
    </main>
  );
} 