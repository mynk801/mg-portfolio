"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  ArrowDown,
  Sparkles,
  Code2,
} from "lucide-react";

/* ─── Custom Brand Icons (removed from Lucide v1.x) ─── */
function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LeetCodeIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.543l3.995 3.733c.831.776 2.15.776 2.981 0l3.995-3.733a6.115 6.115 0 0 0 1.595-2.585 5.95 5.95 0 0 0 .157-1.127 5.572 5.572 0 0 0-.04-.51 5.485 5.485 0 0 0-.251-1.042c-.22-.596-.546-1.144-.962-1.614l-3.076-3.324-1.39-1.5a1.444 1.444 0 0 1-.397-1.074 1.42 1.42 0 0 1 .425-1.031l.035-.035 1.464-1.581a1.448 1.448 0 0 1 1.056-.463 1.425 1.425 0 0 1 1.01.432l5.093 5.497c.504.544 1.139.957 1.837 1.189a1.47 1.47 0 0 1 .927.954 1.455 1.455 0 0 1-.223 1.332l-1.07 1.432c-.365.488-.934.783-1.545.81a1.455 1.455 0 0 1-1.353-.615l-.014-.02-2.735-3.66a2.656 2.656 0 0 0-1.63-.984 2.67 2.67 0 0 0-1.802.261 2.654 2.654 0 0 0-1.141 1.429 2.653 2.653 0 0 0 .121 1.916l1.378 2.616c.381.724 1.106 1.2 1.913 1.258h6.294a1.43 1.43 0 0 1 1.428 1.428 1.43 1.43 0 0 1-1.428 1.428H6.551a1.43 1.43 0 0 1-1.428-1.428 1.43 1.43 0 0 1 1.428-1.428h2.09l-1.492-2.83a4.708 4.708 0 0 1-.24-3.385 4.735 4.735 0 0 1 2.053-2.551 4.75 4.75 0 0 1 3.208-.49 4.722 4.722 0 0 1 2.871 1.777l1.096 1.468a3.541 3.541 0 0 0 3.125 1.401c1.236-.056 2.394-.658 3.136-1.65l1.07-1.433c.48-.642.66-1.462.488-2.251a3.567 3.567 0 0 0-2.288-2.35 6.012 6.012 0 0 0-3.397-2.19l-5.093-5.498a3.528 3.528 0 0 0-2.528-1.073z"/>
    </svg>
  );
}

/* ─── Typing Effect Hook ─── */
function useTypingEffect(
  strings: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = strings[stringIndex];

    if (!isDeleting) {
      setDisplayText(current.substring(0, displayText.length + 1));
      if (displayText.length === current.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setDisplayText(current.substring(0, displayText.length - 1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
      }
    }
  }, [displayText, isDeleting, stringIndex, strings, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return displayText;
}

/* ─── Floating Particles ─── */
const PARTICLES = [
  { id: 0, size: 2.4, x: 15, y: 20, duration: 8, delay: 0.5 },
  { id: 1, size: 1.6, x: 72, y: 35, duration: 9, delay: 1.2 },
  { id: 2, size: 3.2, x: 40, y: 70, duration: 7, delay: 0.0 },
  { id: 3, size: 1.8, x: 85, y: 55, duration: 10, delay: 2.0 },
  { id: 4, size: 2.8, x: 25, y: 85, duration: 6.5, delay: 1.8 },
  { id: 5, size: 2.0, x: 60, y: 12, duration: 8.5, delay: 0.8 },
];

function FloatingParticles() {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-champagne/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 10, -5, 15, 0],
            opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Social Link ─── */
function SocialLink({
  href,
  icon: Icon,
  label,
  delay,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 hover:border-champagne/40 hover:bg-champagne/5 hover:shadow-lg hover:shadow-champagne/10"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        delay,
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon
        size={18}
        className="text-silver-muted transition-colors duration-300 group-hover:text-champagne"
      />
    </motion.a>
  );
}

/* ─── Hero Section ─── */
export default function HeroSection() {
  const typedRole = useTypingEffect(
    ["Software Developer", "Full-Stack Developer", "AWS Certified Developer"],
    80,
    50,
    2200
  );

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Radial gradient spotlight */}
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-zinc-950 to-transparent" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(253,230,138,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(253,230,138,0.3) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-24 text-center">
        {/* Status Badge */}
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-900/50 px-4 py-2 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-light tracking-widest uppercase text-silver-muted">
            Available for opportunities
          </span>
        </motion.div>

        {/* Greeting Line */}
        <motion.p
          className="mb-4 text-sm font-light tracking-[0.3em] uppercase text-silver-muted md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Sparkles size={14} className="mr-2 inline text-champagne/60" />
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-gradient-gold">Mayank</span>{" "}
          <span className="text-gradient-silver">Garg</span>
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          className="mb-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-champagne/40 md:w-12" />
          <p className="text-base font-light tracking-[0.15em] text-champagne-light md:text-lg lg:text-xl">
            <span className="typing-cursor">{typedRole}</span>
          </p>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-champagne/40 md:w-12" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mx-auto mb-10 max-w-xl text-sm leading-relaxed font-light text-zinc-400 md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          B.Tech (Hons.) Computer Science Engineering — UPES &apos;25
          <br />
          Building elegant, high-performance digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          {/* View Work */}
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-champagne/10 to-champagne/5 px-8 py-3.5 text-sm font-medium tracking-wide text-champagne-light transition-all duration-300 hover:from-champagne/20 hover:to-champagne/10 hover:shadow-xl hover:shadow-champagne/10"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {/* Shimmer overlay */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-champagne/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              View Work
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </span>
          </motion.a>

          {/* Download Resume */}
          <motion.a
            href="/resume.pdf"
            download
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-700/50 bg-zinc-900/40 px-8 py-3.5 text-sm font-medium tracking-wide text-silver backdrop-blur-sm transition-all duration-300 hover:border-silver-muted/40 hover:bg-zinc-800/60 hover:shadow-lg hover:shadow-white/5"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              <Download
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              Download Resume
            </span>
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3">
          <SocialLink
            href="https://www.linkedin.com/in/mynk801/"
            icon={LinkedinIcon}
            label="LinkedIn"
            delay={1.9}
          />
          <SocialLink
            href="https://github.com/mynk801/"
            icon={GithubIcon}
            label="GitHub"
            delay={2.0}
          />
          <SocialLink
            href="https://leetcode.com/u/mynk801/"
            icon={Code2}
            label="LeetCode"
            delay={2.1}
          />
          <SocialLink
            href="mailto:mynkgrg801@gmail.com"
            icon={Mail}
            label="Email"
            delay={2.2}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span className="text-[10px] font-light tracking-[0.3em] uppercase text-zinc-600">
          Scroll
        </span>
        <motion.div
          className="flex h-8 w-5 items-start justify-center rounded-full border border-zinc-700/50 p-1"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="h-1.5 w-1 rounded-full bg-champagne/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
