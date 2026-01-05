"use client";

import { motion } from "framer-motion";
import { Droplet, Heart, Leaf, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const purityPoints = [
  {
    icon: Shield,
    title: "100% Purity",
    description:
      "We manufacture everything without any preservatives or chemicals.",
  },
  {
    icon: Droplet,
    title: "Nutritional Integrity",
    description:
      'By using the traditional "Lakdi Gani" (wood press) method, we prevent heat-related nutrient loss in our oils.',
  },
  {
    icon: Leaf,
    title: "Aroma & Potency",
    description:
      "Our spices are ground carefully to preserve the natural volatile oils that give them their medicinal properties.",
  },
];

const seedToSupperSteps = [
  {
    title: "Seed",
    description:
      "We partner with trusted sources to select high-quality, non-GMO seeds.",
  },
  {
    title: "Process",
    description:
      "Our manufacturing unit is a blend of traditional wisdom and modern hygiene standards.",
  },
  {
    title: "Supper",
    description:
      "We provide the pure building blocks for healthy meals, free from hidden toxins or additives.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
    },
  },
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-linear-to-br from-background via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                <Heart className="h-4 w-4" />
                <span className="font-semibold">OUR STORY</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              The Story Behind the <span className="text-primary">Purity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Beyond manufacturing, we are on a mission to bring authentic,
              chemical-free nutrition back to every supper table.
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* The Mission Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
              The Mission:{" "}
              <span className="text-primary">Returning to Roots</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <div className="bg-secondary/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  The Problem
                </h3>
                <p>
                  Most modern food is a product of industrial
                  efficiency—utilizing high heat, chemical solvents, and
                  synthetic preservatives.
                </p>
              </div>

              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  The Solution
                </h3>
                <p>
                  We chose a slower, purer path by returning to traditional
                  wood-pressing and hand-grinding techniques that respect the
                  integrity of every ingredient.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Purity Pact Section */}
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
              The <span className="text-primary">Purity Pact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our unwavering commitment to delivering the purest, most
              nutritious food products to your family.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {purityPoints.map((point, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static array
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <point.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {point.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seed to Supper Section */}
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
              The <span className="text-primary">"Seed to Supper"</span>{" "}
              Narrative
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our transparent journey from source to table, ensuring quality at
              every step.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {seedToSupperSteps.map((step, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static array
                <motion.div key={index} variants={itemVariants}>
                  <div className="bg-secondary/30 rounded-2xl p-8 hover:bg-secondary/50 transition-colors">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 md:py-32 bg-linear-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Future Vision:{" "}
              <span className="text-primary">A Complete Pantry Partner</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-left bg-background/80 backdrop-blur rounded-2xl p-8 border border-border/50">
                While we started with essential oils and spices, our roadmap
                includes a full range of chemical-free staples.
              </p>

              <p className="text-left bg-background/80 backdrop-blur rounded-2xl p-8 border border-border/50">
                We are expanding into traditional pickles, superfoods like
                Moringa, and daily staples like Makhana and Chura.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-8 bg-secondary/50 rounded-2xl border border-primary/20"
            >
              <p className="text-base text-muted-foreground italic">
                <strong className="text-foreground">Notice:</strong> This site
                is a digital gallery of our manufacturing capabilities and
                product range, not an e-commerce platform.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
