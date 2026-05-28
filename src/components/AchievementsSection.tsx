"use client";

import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";
import { staggerContainer, fadeInUp } from "./MotionProvider";

const achievements = [
  {
    title: "3rd Place - Code Hustle",
    organization: "UPES Hypervision",
    description: "Secured 3rd place for developing the Automated YouTube Video Tags Updater, demonstrating rapid prototyping and API integration skills.",
    icon: Trophy,
  },
  {
    title: "Finalist",
    organization: "48-hour UPES CSI Hackathon",
    description: "Recognized as a Finalist for building an innovative Image Encryption System during an intensive 48-hour competitive coding event.",
    icon: Medal,
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
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
              Milestones & Awards
            </h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Achievements.
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="group relative flex flex-col p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-champagne/20 transition-all duration-500 overflow-hidden"
            >
              {/* Background accent glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-champagne/5 rounded-full blur-3xl group-hover:bg-champagne/10 transition-colors duration-500 pointer-events-none" />
              
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-champagne/20 to-champagne/5 text-champagne-light border border-champagne/10 shadow-lg shadow-champagne/5 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <achievement.icon size={24} />
              </div>
              
              <h4 className="text-xl font-bold text-foreground mb-2 relative z-10">
                {achievement.title}
              </h4>
              <p className="text-sm text-champagne-light/80 font-medium mb-4 relative z-10">
                {achievement.organization}
              </p>
              
              <p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
