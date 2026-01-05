"use client";

import { motion } from "framer-motion";
import {
  Droplet,
  Flame,
  FlaskConical,
  Leaf,
  Shield,
  Sprout,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const processSteps = [
  {
    icon: Sprout,
    title: "Sourcing the Seed",
    description:
      "We partner with local farmers to source high-quality, non-GMO seeds—Mustard, Coconut, Sunflower, and Spices.",
  },
  {
    icon: Droplet,
    title: "Traditional Extraction (The Wood Press)",
    description:
      "Our oils are never refined. We use traditional wooden presses that generate zero heat, keeping the vital antioxidants and flavors alive.",
  },
  {
    icon: Leaf,
    title: "Hand-Ground Spices",
    description:
      "Our spices are ground slowly to ensure the natural volatile oils don't evaporate, preserving the aroma and medicinal properties.",
  },
  {
    icon: Shield,
    title: "Zero-Additive Packaging",
    description:
      "We pack our products in their purest form. No anti-caking agents in your Turmeric, and no preservatives in your Oil.",
  },
];

const comparisonData = [
  {
    feature: "Extraction",
    industrial: "Chemical Solvents & High Heat",
    mapafood: "Cold Wood-Pressed (Lakdi Gani)",
  },
  {
    feature: "Preservatives",
    industrial: "Synthetic Additives (BHA/BHT)",
    mapafood: "100% Preservative-Free",
  },
  {
    feature: "Nutrition",
    industrial: "Stripped during refining",
    mapafood: "Natural Nutrients Intact",
  },
  {
    feature: "Aroma",
    industrial: "Artificial Flavors Added",
    mapafood: "Authentic Natural Fragrance",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
    },
  },
};

export default function ProcessPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20"
            >
              <Leaf className="h-4 w-4" />
              <span className="font-semibold">FROM SEED TO SUPPER</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Crafted by Tradition,
              <br />
              <span className="text-primary">Guided by Purity.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From the fertile soil to your dinner table, we ensure every step
              of our manufacturing is free from heat, chemicals, and
              compromises.
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Step-by-Step Timeline Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The <span className="text-primary">"Seed to Supper"</span> Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every product tells a story of tradition, purity, and dedication
              to quality at each step of the process.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static array with consistent order
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  <CardHeader className="text-center pt-8">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Science of Purity Comparison Table */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The <span className="text-primary">Science of Purity</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how māpāfööd stands apart from industrial brands through our
              commitment to traditional methods and natural processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50 bg-secondary/50">
                      <th className="px-6 py-4 text-left text-sm font-bold text-foreground">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-muted-foreground">
                        Industrial Brands
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-primary">
                        māpāfööd
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <motion.tr
                        // biome-ignore lint/suspicious/noArrayIndexKey: static array with consistent order
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="border-b border-border/30 last:border-0 hover:bg-secondary/20 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-semibold text-foreground">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {row.industrial}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-primary">
                          {row.mapafood}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Wood Matters Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10 aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Flame className="h-32 w-32 text-primary/30" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent border border-accent/20">
                <Flame className="h-4 w-4" />
                <span className="font-semibold">TRADITIONAL WISDOM</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Why <span className="text-primary">Wood Matters</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Wood is a natural insulator. Unlike metal expellers that heat up
                and oxidize the oil, our wooden gani keeps the process cool.
                This "Cold Pressing" is the only way to ensure the oil you
                consume is as healthy as the seed it came from.
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      No Heat Generation
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Wood press maintains cool temperatures, preserving
                      nutrients
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Droplet className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Natural Oxidation Prevention
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Traditional methods prevent harmful oxidation of oils
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* No-Chemical Pact Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                <Shield className="h-4 w-4" />
                <span className="font-semibold">OUR PROMISE</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                The <span className="text-primary">No-Chemical Pact</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We manufacture what we eat. Our promise is simple: if it's a
                chemical, it's not in our factory. This applies to our current
                range of oils and spices, and it will remain the foundation of
                our future pickles and staples.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl bg-background p-4 border border-border/50">
                  <FlaskConical className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    Zero Preservatives
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    No BHA, BHT, or synthetic additives
                  </p>
                </div>
                <div className="rounded-xl bg-background p-4 border border-border/50">
                  <Leaf className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    Natural Only
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    Pure ingredients from nature
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/20 aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-32 w-32 text-primary/30" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experience the <span className="text-primary">Difference</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us in bringing back the authentic taste and nutrition that
              nature intended.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/shop"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-xl"
              >
                Explore Our Products
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
