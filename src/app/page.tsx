import { HeroSection } from "@/components/hero-section";
import { CorePillarsSection } from "@/components/core-pillars-section";
import { WoodPressedOilsSection } from "@/components/wood-pressed-oils-section";
import { PureSpicesSection } from "@/components/pure-spices-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <CorePillarsSection />
      <WoodPressedOilsSection />
      <PureSpicesSection />
      
      {/* Placeholder for future sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">More sections coming soon...</p>
        </div>
      </section>
    </main>
  );
}
