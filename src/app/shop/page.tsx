"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Leaf } from "lucide-react";
import { CategorySection } from "@/components/category-section";
import { products, productCategories } from "@/lib/products";

export default function ShopPage() {
  const spiceProducts = products.filter((p) => p.category === "spices");
  const oilProducts = products.filter((p) => p.category === "oils");

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-background via-background to-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
              <ShoppingBag className="h-4 w-4" />
              <span className="font-semibold">PRODUCT CATALOG</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Pure Products,</span>
              <br />
              <span className="text-primary">Crafted with Care.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our range of 100% chemical-free, preservative-free
              products. From wood-pressed oils to hand-ground spices, each item
              is crafted using traditional methods to bring purity to your
              kitchen.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="font-medium">Zero Preservatives</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="font-medium">Traditional Methods</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="font-medium">Farm Fresh</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wood Pressed Oils */}
          <CategorySection
            title={productCategories.oils.title}
            description={productCategories.oils.description}
            products={oilProducts}
            icon={productCategories.oils.icon}
            index={0}
          />

          {/* Divider */}
          <div className="my-16 border-t border-border/50" />

          {/* Spices & Masalas */}
          <CategorySection
            title={productCategories.spices.title}
            description={productCategories.spices.description}
            products={spiceProducts}
            icon={productCategories.spices.icon}
            index={1}
          />
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              More Products Coming Soon
            </h3>
            <p className="text-muted-foreground">
              We are expanding our manufacturing capabilities to bring you
              specialty oils, traditional pickles, superfoods, and pantry
              staples. All crafted with the same commitment to purity and
              tradition.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
