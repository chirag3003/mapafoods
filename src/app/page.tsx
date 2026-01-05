import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      
      {/* Placeholder for future sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">More sections coming soon...</p>
        </div>
      </section>
    </main>
  );
}
