"use client";

import Link from "next/link";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  product: [
    { name: "Wood Pressed Oils", href: "#oils" },
    { name: "Pure Spices", href: "#spices" },
    { name: "Future Products", href: "#roadmap" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Manufacturing", href: "#manufacturing" },
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "Inquiry List", href: "#inquiry-list" },
    { name: "FAQs", href: "#faqs" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">māpāfööd</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              From Seed to Supper. Traditional wood-pressed oils and hand-ground
              spices, crafted with purity and passion for your family's health.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Crafted with tradition in India</span>
              </div>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} māpāfööd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
