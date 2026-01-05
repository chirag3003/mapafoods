"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Droplet, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";
import Link from "next/link";

const oils = [
  { name: "Mustard Oil", hindi: "Sarson Ka Tel" },
  { name: "Sunflower Oil", hindi: "Surajmukhi Ka Tel" },
  { name: "Coconut Oil", hindi: "Nariyal Ka Tel" },
];

export function WoodPressedOilsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              style={{ y: imageY, rotate: imageRotate }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Image placeholder with gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-amber-400 via-amber-500 to-amber-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Droplet className="h-32 w-32 text-white/30" />
                </div>
                {/* Simulating oil droplet */}
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-32 bg-white/20 rounded-full blur-xl"
                />
              </div>

              {/* Pure Badge Overlay */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute top-6 right-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-accent blur-xl opacity-50" />
                  <Badge
                    variant="accent"
                    className="relative text-white px-4 py-2 text-sm font-bold shadow-lg"
                  >
                    <Shield className="h-4 w-4 mr-1" />
                    Wood Pressed
                  </Badge>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Traditional{" "}
                <span className="text-primary">Wood Pressed Oils</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Our oils are extracted using the ancient cold-press method,
              ensuring that heat-sensitive nutrients and antioxidants remain
              intact. From heart-healthy Sunflower to aromatic Mustard and
              Coconut, we bring you purity in every drop, manufactured without a
              single chemical or preservative.
            </motion.p>

            {/* Product List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3 py-4"
            >
              {oils.map((oil, index) => (
                <motion.div
                  key={oil.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <Droplet className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{oil.name}</span>
                  <span className="text-muted-foreground text-sm">
                    ({oil.hindi})
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 rounded-lg px-4 py-3"
            >
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Available in 250ml, 500ml, and 1L bottles</span>
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
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all group"
                asChild
              >
                <Link href="#oil-catalog">
                  View Oil Catalog
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
