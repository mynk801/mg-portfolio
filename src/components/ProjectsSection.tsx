"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { staggerContainer, fadeInUp } from "./MotionProvider";

const projects = [
  {
    title: "SecurePixel - Image Encryption System",
    description: "A robust image encryption system designed to secure sensitive visual data using advanced cryptographic algorithms. Ensures data integrity and confidentiality during transmission and storage.",
    tech: ["Python", "Cryptography", "OpenCV", "PyQt"],
    githubUrl: "https://github.com/mynk801/SecurePixel---Image-Encrytion-System",
    liveUrl: "https://securepixel-image-encrytion-system.onrender.com/", 
    image: "/projects/securepixel.png", 
  },
  {
    title: "Synapse - Multi-Agent Orchestration",
    description: "A comprehensive platform for orchestrating multiple AI agents to collaboratively solve complex tasks. Features intelligent task routing and inter-agent communication protocols.",
    tech: ["TypeScript", "Next.js", "Node.js", "LLMs", "WebSocket"],
    githubUrl: "https://github.com/mynk801/Synapse---Multi-Agent-Orchestration-Platform",
    liveUrl: "#",
    image: "/projects/synapse.png",
  },
  {
    title: "GeoJob-India",
    description: "A geospatial job portal connecting professionals with opportunities based on precise location data. Leverages advanced mapping technologies to optimize the job search experience.",
    tech: ["React", "Express", "MongoDB", "Geospatial Data", "Mapbox"],
    githubUrl: "https://github.com/mynk801/GeoJob-India",
    liveUrl: "https://geo-job-india.vercel.app/",
    image: "/projects/geojob.png",
  },
];

/* ─── Custom Github Icon ─── */
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-24 bg-zinc-950">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-champagne/40" />
            <h2 className="text-sm font-light tracking-[0.3em] uppercase text-champagne-light">
              Selected Works
            </h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Featured projects and technical implementations.
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              {/* Project Image wrapped in Website Link */}
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                initial="initial"
                className="w-full lg:w-3/5 group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 aspect-[16/10] block shadow-2xl"
              >
                <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                <div className="absolute inset-0 w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-700 font-mono text-sm border-b border-zinc-800 z-0">
                  [ Image Placeholder: {project.image} ]
                </div>
                
                {/* Image with fun hover effects */}
                <motion.div 
                  className="absolute inset-0 z-10 w-full h-full"
                  variants={{
                    initial: { scale: 1, rotate: 0 },
                    hover: { scale: 1.05, rotate: -1 }
                  }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                </motion.div>
                
                {/* Fancy Gradient Overlay */}
                <motion.div 
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-tr from-champagne/20 via-zinc-950/40 to-transparent z-20 backdrop-blur-[2px]"
                />

                {/* Centered Button on Hover */}
                <motion.div 
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute inset-0 z-30 flex items-center justify-center"
                >
                   <div className="px-6 py-3 rounded-full bg-zinc-950/90 border border-champagne/30 text-champagne-light text-sm font-medium tracking-wide flex items-center gap-2 shadow-lg shadow-champagne/10">
                     Visit Website <ExternalLink size={16} />
                   </div>
                </motion.div>
              </motion.a>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-champagne transition-colors">
                  {project.title}
                </h4>
                
                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {project.description}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium tracking-wide text-champagne/80 bg-champagne/5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground hover:text-champagne-light transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Site
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-zinc-400 hover:text-foreground transition-colors"
                  >
                    <GithubIcon size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
