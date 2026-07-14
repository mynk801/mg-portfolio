"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Wrench } from "lucide-react";
import { slideInLeft, slideInRight, staggerContainer, fadeInUp } from "./MotionProvider";
import LeetCodeStats from "./LeetCodeStats";

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Database",
    icon: Database,
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    category: "Tools & Cloud",
    icon: Wrench,
    items: ["Git", "GitHub", "AWS", "Docker", "Linux", "Postman"],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen py-24 bg-zinc-950 flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-champagne/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-champagne/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-champagne/40" />
            <h2 className="text-sm font-light tracking-[0.3em] uppercase text-champagne-light">
              About & Arsenal
            </h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl leading-tight">
            Building robust solutions with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne via-champagne-light to-zinc-400">modern tech stack.</span>
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Bio Text */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col gap-6 text-zinc-400 font-light leading-relaxed text-lg"
          >
            <p>
              I am a Software Developer and Full-Stack Engineer with a strong foundation in <span className="text-zinc-200 font-medium">Computer Science Engineering</span> from UPES (B.Tech Hons, 2025).
            </p>
            <p>
              My passion lies in architecting scalable applications and crafting seamless user experiences. I thrive in environments where I can leverage my skills to solve complex problems and deliver high-quality, performant software.
            </p>
            <p>
              As an <span className="text-zinc-200 font-medium">AWS Certified Developer</span>, I also possess a solid understanding of cloud infrastructure and deployment strategies, ensuring the applications I build are both robust and reliable.
            </p>
            
            <div className="mt-8 pt-8 border-t border-zinc-800/50 hidden lg:block">
               <p className="text-sm font-medium tracking-[0.2em] text-champagne/50 uppercase mb-4">Philosophy</p>
               <blockquote className="text-xl italic text-silver border-l-2 border-champagne/30 pl-4">
                 &quot;Code is read much more often than it is written. Make it elegant.&quot;
               </blockquote>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="group flex flex-col p-6 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-champagne/20 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-silver-muted group-hover:text-champagne-light group-hover:border-champagne/30 transition-all duration-500">
                    <skillGroup.icon size={18} />
                  </div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-silver group-hover:text-champagne transition-colors">
                    {skillGroup.category}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-400 bg-zinc-950/50 border border-zinc-800/80 rounded-lg hover:border-champagne/40 hover:text-champagne-light hover:bg-champagne/5 hover:shadow-[0_0_10px_rgba(253,230,138,0.1)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Full-width LeetCode Stats */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 w-full"
        >
          <LeetCodeStats username="mynk801" />
        </motion.div>
      </div>
    </section>
  );
}
