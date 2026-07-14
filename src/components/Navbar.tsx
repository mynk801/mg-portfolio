"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3 focus:outline-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Elegant Geometric Badge Logo Icon */}
            <div className="relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-black border border-zinc-800 group-hover:border-champagne/40 shadow-[0_0_15px_rgba(253,230,138,0.05)] group-hover:shadow-[0_0_20px_rgba(253,230,138,0.2)] transition-all duration-500 overflow-hidden">
              {/* Subtle background glow inside the icon badge */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-champagne/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Stylized M Monogram SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-5.5 md:h-5.5 transition-transform duration-500 group-hover:scale-110"
              >
                <defs>
                  <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fde68a" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                {/* Architectural stylized 'M' path with geometric elegance */}
                <path
                  d="M3 18V7.5C3 6.67157 3.67157 6 4.5 6C5.10929 6 5.63585 6.36531 5.86477 6.91448L11.077 19.4239C11.4552 20.3315 12.5448 20.3315 12.923 19.4239L18.1352 6.91448C18.3642 6.36531 18.8907 6 19.5 6C20.3284 6 21 6.67157 21 7.5V18"
                  stroke="url(#navLogoGradient)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="7.5" r="1.5" fill="url(#navLogoGradient)" />
              </svg>
            </div>

            {/* Elegant Wordmark & Subtitle */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center tracking-tight leading-none">
                <span className="text-base md:text-lg font-bold text-foreground transition-colors group-hover:text-champagne-light">
                  Mayank
                </span>
                <span className="text-base md:text-lg font-light text-champagne ml-1">
                  Garg
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-champagne/80 ml-1.5 self-end mb-1 transition-transform duration-300 group-hover:scale-125 group-hover:bg-champagne hidden sm:inline-block" />
              </div>
              <span className="text-[9px] md:text-[10px] font-medium tracking-[0.25em] uppercase text-zinc-500 transition-colors group-hover:text-zinc-400 mt-0.5">
                Software Engineer
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative px-4 py-2 text-sm font-light tracking-wide text-silver-muted transition-colors hover:text-champagne-light"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-champagne transition-all duration-300 group-hover:w-3/4" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden rounded-full border border-zinc-700/50 bg-zinc-900/50 px-5 py-2 text-xs font-medium tracking-widest uppercase text-champagne-light backdrop-blur-sm transition-all duration-300 hover:border-champagne/30 hover:bg-champagne/5 hover:shadow-lg hover:shadow-champagne/5 md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Let&apos;s Talk
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-silver transition-colors hover:text-champagne md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-lg px-4 py-3 text-sm font-light tracking-wide text-silver-muted transition-colors hover:bg-zinc-900 hover:text-champagne-light"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-2 rounded-full border border-zinc-700/50 bg-zinc-900/50 px-5 py-2.5 text-center text-xs font-medium tracking-widest uppercase text-champagne-light transition-all duration-300 hover:border-champagne/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                Let&apos;s Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
