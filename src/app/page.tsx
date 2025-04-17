import { Hero } from "./components/ui/animated-hero";
import { BeamsBackground } from "./components/ui/background";
import { Header1 } from "./components/ui/header"; // Import Header1

export default function Home() {
  return (
    <main className="bg-background text-foreground w-full min-h-screen relative">
      {/* Header Section */}
      <Header1 /> 

      {/* Beams Background Section */}
      <section className="absolute inset-0 z-0">
        <BeamsBackground /> {/* Add the Beams Background here */}
      </section>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <Hero />
      </section>

      {/* Tablet Preview Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-border relative z-10">
        <div className="text-center text-2xl text-muted-foreground">
          Tablet preview placeholder
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-border relative z-10">
        <div className="text-center text-2xl text-muted-foreground">
          Features section placeholder
        </div>
      </section>

      {/* Reviews Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-border relative z-10">
        <div className="text-center text-2xl text-muted-foreground">
          Reviews section placeholder
        </div>
      </section>

      {/* Pricing Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-border relative z-10">
        <div className="text-center text-2xl text-muted-foreground">
          Pricing section placeholder
        </div>
      </section>

      {/* Blog Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-border relative z-10">
        <div className="text-center text-2xl text-muted-foreground">
          Blog section placeholder
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-border relative z-10">
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
