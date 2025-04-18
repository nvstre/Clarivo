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
import VideoPlayer from "./components/ui/video-player";  // Ensure this is correctly imported

export default function Home() {
  const testimonials = [
    {
      author: {
        name: "Emma Thompson",
        handle: "@emmaai",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "This AI-powered coach has revolutionized the way I approach self-improvement. It offers personalized guidance that has brought clarity and purpose to my journey."
    },
    {
      author: {
        name: "David Park",
        handle: "@davidtech",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "I've explored many tools, but this AI coach is the only one that truly understands my goals. It's given me the structure and insight I need to make consistent progress."
    },
    {
      author: {
        name: "Sofia Rodriguez",
        handle: "@sofiaml",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "The personalized daily guidance I receive from this AI is a game-changer. It's helped me stay focused and intentional in my pursuit of becoming the best version of myself."
    }
  ];

  // Video source file path
  const videoSrc = "/yeat.mp4";  // Correct path to the video file in the public folder

  // Ensure VideoPlayer expects 'src' prop
  const VideoPlayerComponent = () => {
    return <VideoPlayer src={videoSrc} />;  // Pass the src prop to the VideoPlayer component
  };

  return (
    <main className="bg-background text-foreground w-full min-h-screen relative overflow-x-hidden">
      <Header1 />

      <section className="absolute inset-0 z-0">
        <BeamsBackground />
      </section>

      <section id="home" className="py-16 flex items-center justify-center px-6 relative z-10">
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
            src="/2025.png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      <section id="features" className="w-full px-6 py-12 relative z-10">
        <FeaturesSectionWithBentoGrid />
      </section>

      <section id="demo" className="w-full px-6 py-12 relative z-10">
  <h2 className="text-3xl font-semibold text-center mb-4">See It in Action</h2>
  <p className="text-center text-lg mb-8">
    Watch the AI chatbot in action and see how it can help guide your transformation journey.
  </p>
  
  {/* Video Component */}
  <VideoPlayerComponent />
  
  {/* "Get Started" Button with Glow Effect */}
  <div className="text-center mt-8">
    <a 
      href="#price" 
      className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      style={{
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.7)', // Blue glow effect
        textShadow: '0 0 8px rgba(59, 130, 246, 0.7)', // Glow effect on text
      }}
    >
      Get Started
    </a>
  </div>
</section>





      <section id="reviews" className="py-8 flex items-center justify-center px-6 relative z-10">
        <TestimonialsSection
          title="Trusted by people transforming their lives"
          description="Join a growing movement of individuals using AI to reclaim direction, build momentum, and design a meaningful future."
          testimonials={testimonials}
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
 
           {/* Pricing Plans */}
           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
             {/* Free Plan */}
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
 
             {/* Basic Plan */}
             <div className="relative group">
               <PricingCard
                 tier="Basic"
                 price="$29/mo"
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
 
             {/* Pro Plan */}
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

      <footer className="border-t border-border py-1 px-100 text-center text-sm text-muted-foreground relative z-10">
        <Footer2 />
      </footer>
    </main>
  );
}
