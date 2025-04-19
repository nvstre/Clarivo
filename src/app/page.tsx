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
import { FAQ } from "./components/ui/faq-section";
import { TestimonialsSection } from "./components/ui/testimonials";
import VideoPlayer from "./components/ui/video-player";

export default function Home() {
  const testimonials = [
    {
      author: {
        name: "Alex Chen",
        handle: "@alexc_dev",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Clarivo came into my life when I was at a career crossroads. The AI coach helped me map out my strengths and create a clear path forward. 3 months later, I'm in a leadership role I never thought possible! The clarity it provides is unmatched 🎯"
    },
    {
      author: {
        name: "Sarah Miller",
        handle: "@sarah.wellness",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "As someone juggling family and personal growth, Clarivo gets it. Their micro-goals approach fits perfectly into my busy schedule. Started with the free version but the results were so good, I upgraded within weeks. Best investment in myself this year! ✨"
    },
    {
      author: {
        name: "Marcus Thompson",
        handle: "@marc_fit",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Clarivo's progress tracking is incredible. When my fitness journey plateaued, the AI analyzed my patterns and suggested small but powerful changes. 6 weeks in: down 12 lbs and crushing PRs I didn't think were possible. Pro tier is worth every cent 💪"
    },
    {
      author: {
        name: "Priya Patel",
        handle: "@priya.creates",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "I was hesitant about another AI tool, but Clarivo is different. It's like having a mentor who evolves with you. The way it connects dots in your personal development journey is mind-blowing. 2 months with Clarivo = 3 goals achieved + newfound confidence ⭐"
    }
  ];

  const videoSrc = "/yeat.mp4";

  const VideoPlayerComponent = () => {
    return <VideoPlayer src={videoSrc} />;
  };

  return (
    <main className="relative w-full overflow-hidden">
      <Header1 />

      <section className="absolute inset-0 z-0">
        <BeamsBackground />
      </section>

      <div className="relative z-20 max-w-[100vw] overflow-x-hidden">
        <section id="home" className="relative">
          <Hero />
        </section>

        <section className="py-16 flex items-center justify-center px-6">
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

        <section id="features" className="py-16">
          <FeaturesSectionWithBentoGrid />
        </section>

        <section id="demo" className="w-full px-6 py-12">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <h2 className="text-3xl font-semibold text-center mb-4">See It in Action</h2>
          <p className="text-center text-lg mb-8">
            Discover how our AI coach transforms lives through personalized guidance, helping you break through barriers and achieve lasting change.
          </p>
          
          <VideoPlayerComponent />
        </section>

        <section id="price" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-4">Simple, Transparent Pricing</h2>
            <p className="text-center text-lg mb-8">
              Choose the plan that's right for you. No hidden fees, no surprises.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="relative group">
                <PricingCard
                  tier="Basic"
                  price="$27/mo"
                  bestFor="Perfect for those just starting their journey to self-improvement."
                  CTA="Get Basic access"
                  benefits={[
                    { text: "Personalized daily guidance and insights", checked: true },
                    { text: "Basic goal tracking and progress monitoring", checked: true },
                    { text: "Access to core AI coaching features", checked: true },
                    { text: "Community support and resources", checked: true },
                  ]}
                  className="transition-transform transform hover:scale-105"
                />
              </div>

              <div className="relative group">
                <PricingCard
                  tier="Pro"
                  price="$57/mo"
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

        <section className="py-16 flex items-center justify-center px-6">
          <div className="w-full">
            <Blog />
          </div>
        </section>

        <section id="faq" className="py-8 flex items-center justify-center px-6">
          <div className="w-full max-w-4xl">
            <FAQ />
          </div>
        </section>

        <footer className="border-t border-border py-1 px-4 text-center text-sm text-muted-foreground">
          <Footer2 />
        </footer>
      </div>
    </main>
  );
}
