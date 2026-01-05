"use client";

import { motion } from "framer-motion";
import { Droplet, Heart, Leaf, Shield, Sparkles, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const transparencyPoints = [
  {
    icon: Shield,
    title: "No Secrets, No Shortcuts",
    description:
      "Most companies manufacture for shelf-life; we manufacture for your life. Every drop of our wood-pressed Mustard, Sunflower, and Coconut oil is extracted without heat to keep the soul of the seed alive.",
  },
  {
    icon: Droplet,
    title: 'The "Zero" Commitment',
    description:
      "We maintain a strict zero-chemical and zero-preservative policy. Our spices—from the golden Turmeric to the vibrant Red Chilli—are hand-selected and ground slowly to ensure their medicinal properties reach your kitchen intact.",
  },
];

const connectReasons = [
  {
    icon: Sparkles,
    title: "Transparency First",
    description:
      "Follow our roadmap to see how we are scaling our chemical-free mission.",
  },
  {
    icon: Leaf,
    title: "Educational Roots",
    description:
      'Learn why the "Lakdi Gani" (wood press) is the gold standard for your heart health.',
  },
  {
    icon: Heart,
    title: "Direct Access",
    description:
      "Be the first to know when our new manufacturing batches of Almond oil or Mango pickles are ready for showcase.",
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
      {/* Hero Section - "Why": Honesty on Every Plate */}
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                <Heart className="h-4 w-4" />
                <span className="font-semibold">THE HEART OF MĀPĀFÖÖD</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8"
            >
              Because <span className="text-primary">"Pure"</span> Should
              Actually Mean <span className="text-primary">Pure.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              <p>
                We live in an era of industrial efficiency where the food on our
                tables has become a product of chemistry. At māpāfööd, we asked
                a simple question:{" "}
                <strong className="text-foreground">
                  When did we stop trusting our food?
                </strong>
              </p>

              <p className="text-xl text-foreground font-medium">
                We aren't just manufacturers; we are consumers who were tired of
                reading labels filled with words we couldn't pronounce. We
                decided to return to the basics—to the soil, the wood, and the
                seed.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Section 2: The Name - A Tribute to the Source */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The Name: A Tribute to{" "}
                <span className="text-primary">the Source</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  The Meaning
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The name <strong className="text-primary">māpā</strong> is a
                  tribute to the two greatest givers—Nature (Mother Earth) and
                  the traditional wisdom of our ancestors.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 border border-border/50 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  The Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our goal is to bridge the gap between ancient health secrets
                  and modern life. By removing the "middle-man" of chemicals and
                  preservatives, we ensure that what leaves our facility is
                  exactly what nature intended for your supper.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Obsession - Radical Transparency */}
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
              Our Obsession:{" "}
              <span className="text-primary">Radical Transparency</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This is where you give us a reason to trust you over a big brand.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          >
            {transparencyPoints.map((point, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static array
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <point.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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

      {/* Section 4: From Seed to Supper - A Shared Journey */}
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
              From Seed to Supper:{" "}
              <span className="text-primary">A Shared Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Invite them into your roadmap.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-background rounded-2xl p-8 border border-border/50 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Beyond Today
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  While we currently offer essential oils and spices, our
                  journey doesn't stop there.
                </p>
              </div>

              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  The Future Roadmap
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are building a complete pantry of staples. Soon, we will
                  bring you traditional chemical-free{" "}
                  <strong className="text-foreground">Pickles</strong>,{" "}
                  <strong className="text-foreground">Moringa</strong>{" "}
                  superfoods, and daily essentials like{" "}
                  <strong className="text-foreground">Makhana</strong> and{" "}
                  <strong className="text-foreground">Poha</strong>. We are
                  growing our family so you can grow yours with health.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Join Us? - The Call to Connection */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why <span className="text-accent">Join Us?</span>
            </h2>
            <p className="text-xl text-foreground font-medium max-w-3xl mx-auto mb-4">
              Join the Movement for Purity
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This website is a showcase of our commitment to honest
              manufacturing. We want you to join us in demanding better
              standards for what we consume.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
          >
            {connectReasons.map((reason, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static array
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-background/80 backdrop-blur">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <reason.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {reason.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-background/80 backdrop-blur rounded-2xl p-8 border border-accent/20 shadow-xl text-center">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-base text-muted-foreground italic">
                Since we aren't taking orders, "joining" means becoming part of
                a community that values food integrity. Be part of the movement
                that puts purity first.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
