export interface Product {
  id: string;
  name: string;
  description: string;
  sizes: string[];
  category: "spices" | "oils";
  available: boolean;
}

export const products: Product[] = [
  // Spices & Masalas
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    description:
      "High-curcumin content for natural wellness. Haldi powder ground fresh to preserve its medicinal properties.",
    sizes: ["50g", "250g"],
    category: "spices",
    available: true,
  },
  {
    id: "red-chilli-powder",
    name: "Red Chilli Powder",
    description:
      "Vibrant color and authentic heat. Lal Mirch powder made from sun-dried red chillies.",
    sizes: ["50g", "250g"],
    category: "spices",
    available: true,
  },
  {
    id: "coriander-powder",
    name: "Coriander Powder",
    description:
      "Freshly ground for maximum aroma. Dhaniya powder that brings authentic flavor to your dishes.",
    sizes: ["50g", "250g"],
    category: "spices",
    available: true,
  },
  {
    id: "cumin-powder",
    name: "Cumin Powder",
    description:
      "Earthy and rich, hand-selected seeds. Jeera powder ground to perfection for traditional cooking.",
    sizes: ["50g", "250g"],
    category: "spices",
    available: true,
  },

  // Wood Pressed Oils
  {
    id: "mustard-oil",
    name: "Mustard Oil",
    description:
      "Pungent and pure, perfect for traditional cooking. Wood-pressed using the ancient Lakdi Gani method.",
    sizes: ["250ml", "500ml", "1L"],
    category: "oils",
    available: true,
  },
  {
    id: "sunflower-oil",
    name: "Sunflower Oil",
    description:
      "A light, nutrient-rich oil for everyday health. Preserves all the natural goodness of sunflower seeds.",
    sizes: ["250ml", "500ml", "1L"],
    category: "oils",
    available: true,
  },
  {
    id: "coconut-oil",
    name: "Coconut Oil",
    description:
      "Multi-purpose purity, from kitchen to personal care. Cold-pressed to retain all beneficial properties.",
    sizes: ["250ml", "500ml", "1L"],
    category: "oils",
    available: true,
  },
];

export const productCategories = {
  spices: {
    title: "Spices & Masalas",
    description:
      "Hand-ground spices that maintain their volatile oils, ensuring maximum potency and aroma.",
    icon: "spice",
  },
  oils: {
    title: "Wood Pressed Oils",
    description:
      "Traditional wood-pressing technique that preserves vital nutrients and natural flavors.",
    icon: "oil",
  },
} as const;
