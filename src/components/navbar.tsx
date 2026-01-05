"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, List } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [listCount] = useState(0); // This will be managed by a context/state later

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-border/40"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Mapafoods</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/shop"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#manufacturing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Manufacturing
            </Link>
            {/* <Link
              href="#inquiry-list"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Inquiry List
            </Link> */}
          </nav>

          {/* My List Button */}
          <Link
            href="#my-list"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105"
          >
            <List className="h-4 w-4" />
            <span>My List ({listCount})</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
