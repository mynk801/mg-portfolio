"use client";

import { motion } from "framer-motion";
import { Briefcase, FileText, ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp } from "./MotionProvider";

const experiences = [
  {
    type: "Work Experience",
    title: "Project Intern (IoT & Cloud)",
    company: "Phemesoft",
    date: "Jun 2024 – Jul 2024",
    description: [
      "Contributed to the project by engineering the cloud infrastructure on AWS to support a smart irrigation system, delivering a solution designed to optimize water usage leading to a projected 20% reduction in water consumption.",
      "Developed and delivered the user dashboard, enabling real-time monitoring through data visualization for farmers."
    ],
    certificateUrl: "#", // Placeholder for certification link
  },
  {
    type: "Leadership & Volunteering",
    title: "Associate Technical Head",
    company: "UPES Hypervision",
    date: "May 2023 – May 2024",
    description: [
      "Led and mentored a tech team, streamlined workflows, and ensured timely execution of high-impact events."
    ],
    // No certification link for leadership
  },
  {
    type: "Work Experience",
    title: "Research Intern",
    company: "GiftAbled Foundation",
    date: "Jun 2022 – Jul 2022",
    description: [
      "Analyzed 20 years of district-level data to generate analytical snapshots and report on economic trends.",
      "Evaluated policy impacts by analyzing multiple datasets to provide actionable insights and identify 5+ areas for strategic intervention.",
      "Developed a national database of over 500 college placement cells in MS Excel, improving the efficiency of partner and recruiter outreach efforts."
    ],
    certificateUrl: "#", // Placeholder for certification link
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-champagne/[0.02] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
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
              Career Path
            </h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Experience & Leadership.
          </motion.h3>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 text-champagne-light shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(253,230,138,0.05)] transition-all duration-500 group-hover:bg-champagne/10 group-hover:border-champagne/30 group-hover:scale-110 z-10">
                <Briefcase size={16} />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 hover:border-champagne/20 transition-all duration-500">
                <div className="flex flex-col mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-champagne mb-2">
                    {exp.type}
                  </span>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-champagne-light transition-colors">
                    {exp.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-medium text-silver-muted">
                    <span className="text-zinc-300">{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-400 font-light leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-champagne/50" />
                      {item}
                    </li>
                  ))}
                </ul>

                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-zinc-400 hover:text-champagne transition-colors mt-auto"
                  >
                    <FileText size={14} />
                    View Certificate
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
