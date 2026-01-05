"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Flame, Shield, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import Link from "next/link";

const spices = [
  {
    name: "Turmeric Powder",
    hindi: "Haldi",
    color: "from-yellow-500 to-amber-600",
  },
  {
    name: "Red Chilli Powder",
    hindi: "Lal Mirch",
    color: "from-red-500 to-red-700",
  },
  {
    name: "Coriander Powder",
    hindi: "Dhaniya",
    color: "from-amber-700 to-yellow-800",
  },
  {
    name: "Cumin Powder",
    hindi: "Jeera",
    color: "from-yellow-700 to-amber-900",
  },
];

export function PureSpicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const particleY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-secondary/20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column - Left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Authentic & <span className="text-accent">Pure Masalas</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              We believe that the soul of every meal lies in its spices. Our
              Turmeric, Red Chilli, Coriander, and Cumin are hand-selected and
              carefully ground to preserve their natural volatile oils and
              potency. Experience the true "Seed to Supper" journey with spices
              that contain zero additives or artificial colors.
            </motion.p>

            {/* Product Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4"
            >
              {spices.map((spice, index) => (
                <motion.div
                  key={spice.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-4 hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-full bg-gradient-to-br ${spice.color} flex items-center justify-center shrink-0`}
                    >
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {spice.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {spice.hindi}
                      </p>
                    </div>
                  </div>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-2 text-sm text-muted-foreground bg-background/60 rounded-lg px-4 py-3 border border-border/30"
            >
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Available in 50g and 250g premium packs</span>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                size="lg"
                variant="accent"
                className="shadow-lg hover:shadow-xl transition-all group"
                asChild
              >
                <Link href="#spice-range">
                  Explore Spice Range
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Column - Right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            <motion.div
              style={{ y: imageY, rotate: imageRotate }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Image placeholder - Top-down view of spice bowls */}
              <div className="absolute inset-0 bg-linear-to-br from-slate-100 via-slate-50 to-amber-50">
                {/* Simulated spice bowls */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="grid grid-cols-2 gap-6 w-full h-full">
                    {/* Turmeric bowl */}
                    <motion.div
                      animate={{ rotate: [0, 2, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-xl"
                    />
                    {/* Red Chilli bowl */}
                    <motion.div
                      animate={{ rotate: [0, -2, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-xl"
                    />
                    {/* Coriander bowl */}
                    <motion.div
                      animate={{ rotate: [0, -2, 0] }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="rounded-full bg-gradient-to-br from-amber-600 to-yellow-700 shadow-xl"
                    />
                    {/* Cumin bowl */}
                    <motion.div
                      animate={{ rotate: [0, 2, 0] }}
                      transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="rounded-full bg-gradient-to-br from-yellow-700 to-amber-900 shadow-xl"
                    />
                  </div>
                </div>

                {/* Floating particles effect */}
                <motion.div
                  style={{ y: particleY }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={i}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="absolute w-2 h-2 rounded-full bg-accent/30"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + (i % 3) * 20}%`,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Pure Badge Overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute top-6 left-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-accent blur-xl opacity-50" />
                  <Badge
                    variant="accent"
                    className="relative text-white px-4 py-2 text-sm font-bold shadow-lg"
                  >
                    <Shield className="h-4 w-4 mr-1" />
                    100% Chemical Free
                  </Badge>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
