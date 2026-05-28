"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    // Fetch the visit count from our own internal API
    fetch("/api/visit")
      .then((res) => res.json())
      .then((data) => setVisits(data.count))
      .catch((err) => console.error("Failed to fetch visits:", err));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold tracking-tight text-foreground">
              Mayank<span className="text-champagne">Garg</span>
            </span>
            <span className="text-xs font-light tracking-[0.2em] text-silver-muted mt-1 uppercase">
              Software Developer & Full-Stack Developer
            </span>
          </div>

          {/* Center — Links */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {["Home", "About", "Experience", "Education", "Projects", "Achievements", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-light tracking-wide text-silver-muted transition-colors duration-300 hover:text-champagne-light"
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Right — Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-champagne/10 hover:border-champagne/30 transition-all duration-300 text-xs font-medium text-silver-muted hover:text-champagne-light"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            Back to top
          </button>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="flex items-center gap-1.5 text-xs text-zinc-500">
              Built with <Heart size={12} className="text-champagne/60" fill="currentColor" /> by Mayank Garg
            </p>
            <p className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          {/* Visitor Counter */}
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity bg-zinc-900 px-3 py-1.5 rounded-md border border-zinc-800">
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Visits</span>
            <span className="text-sm font-mono font-bold text-champagne">
              {visits === null ? "..." : visits}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
