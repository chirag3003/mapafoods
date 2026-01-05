"use client";

import { motion } from "framer-motion";
import { Leaf, Plus } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 p-8 flex items-center justify-center">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 border border-primary/20">
            <Leaf className="h-3 w-3" />
            <span>{product.badge}</span>
          </div>
        )}

        {/* Placeholder for product image - using icon for now */}
        <div className="text-8xl opacity-20">
          {product.category === "oils" ? "🫗" : "🌶️"}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Size Selection */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase">
            Size
          </p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSize === size
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to List Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
        >
          Add to List
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}
