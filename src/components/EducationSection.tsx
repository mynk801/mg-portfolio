"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { staggerContainer, fadeInUp } from "./MotionProvider";

const education = [
  {
    degree: "12th Grade (Senior Secondary Education)",
    institution: "Abhinav Public School",
    date: "April 2019 – March 2020",
    location: "Delhi, India",
    details: "Completed with a percentage of 75.8%. Focused on Science and Mathematics.",
  },
  {
    degree: "B.Tech. (Hons.) Computer Science Engineering",
    institution: "University of Petroleum and Energy Studies (UPES)",
    date: "Aug 2021 – May 2025",
    location: "Dehradun, India",
    details: "Graduating with a CGPA of 7.66. Core coursework includes Data Structures, Algorithms, Database Management Systems, and Cloud Computing.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 bg-zinc-950/50 border-t border-zinc-900 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-champagne/40" />
            <h2 className="text-sm font-light tracking-[0.3em] uppercase text-champagne-light">
              Academic Background
            </h2>
            <span className="h-px w-12 bg-champagne/40 md:hidden" />
          </motion.div>
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Education.
          </motion.h3>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-5xl mx-auto">
          {/* Horizontal line for desktop connecting the dots */}
          <div className="hidden md:block absolute top-[20px] left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-transparent via-zinc-800 to-transparent z-0" />
          
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex flex-col items-center group z-10"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 mb-8 rounded-full border border-zinc-800 bg-zinc-900 text-silver-muted shadow-[0_0_15px_rgba(253,230,138,0.05)] transition-all duration-500 group-hover:bg-champagne/10 group-hover:border-champagne/30 group-hover:text-champagne-light group-hover:scale-110">
                <GraduationCap size={16} />
              </div>

              {/* Content Card */}
              <div className="w-full p-6 md:p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 hover:border-champagne/20 transition-all duration-500 flex flex-col items-center text-center h-full">
                <h4 className="text-xl font-bold text-foreground group-hover:text-champagne-light transition-colors leading-snug mb-2">
                  {item.degree}
                </h4>
                <h5 className="text-sm font-semibold text-zinc-300 mb-4">
                  {item.institution}
                </h5>
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-3 mt-auto mb-4 text-xs font-medium text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="opacity-70 text-champagne/70" />
                    <span>{item.date}</span>
                  </div>
                  <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-700" />
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="opacity-70 text-champagne/70" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 font-light leading-relaxed pt-4 border-t border-zinc-800/50 w-full">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
