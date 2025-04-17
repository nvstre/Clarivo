import { Hero } from "./components/ui/animated-hero";

export default function Home() {
  return (
    <main className="bg-black text-white w-full min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <Hero />
      </section>

      {/* Tablet Preview Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-neutral-800">
        <div className="text-center text-2xl text-muted-foreground">
          {/* Replace with actual tablet mockup when ready */}
          Tablet preview placeholder
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-neutral-800">
        <div className="text-center text-2xl text-muted-foreground">
          Features section placeholder
        </div>
      </section>

      {/* Reviews Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-neutral-800">
        <div className="text-center text-2xl text-muted-foreground">
          Reviews section placeholder
        </div>
      </section>

      {/* Pricing Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-neutral-800">
        <div className="text-center text-2xl text-muted-foreground">
          Pricing section placeholder
        </div>
      </section>

      {/* Blog Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-neutral-800">
        <div className="text-center text-2xl text-muted-foreground">
          Blog section placeholder
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-h-screen flex items-center justify-center px-6 border-t border-neutral-800">
        <div className="text-center text-2xl text-muted-foreground">
          FAQ section placeholder
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-10 px-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} AI Goal Coach. All rights reserved.
      </footer>
    </main>
  );
}
