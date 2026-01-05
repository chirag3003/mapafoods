"use client";

import { motion } from "framer-motion";
import { Droplet, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/products";

interface CategorySectionProps {
  title: string;
  description: string;
  products: Product[];
  icon: "oil" | "spice";
  index: number;
}

const icons = {
  oil: Droplet,
  spice: Sparkles,
};

export function CategorySection({
  title,
  description,
  products,
  icon,
  index,
}: CategorySectionProps) {
  const Icon = icons[icon];

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product, idx) => (
          <ProductCard key={product.id} product={product} index={idx} />
        ))}
      </div>
    </section>
  );
}
