"use client";

import { motion } from "framer-motion";
import { Award, FileText, ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp } from "./MotionProvider";

const certifications = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "Sept 2024",
    description: "Validated expertise in developing and maintaining applications on the AWS platform, demonstrating proficiency in core AWS services, uses, and basic architecture best practices.",
    pdfUrl: "/certifications/aws-developer.pdf",
    image: "/certifications/aws-developer-thumb.png",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 bg-zinc-950/50 border-t border-zinc-900">
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
              Professional Verification
            </h2>
          </motion.div>
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Certifications.
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-champagne/20 transition-all duration-500"
            >
              {/* Certificate Thumbnail Area */}
              <a 
                href={cert.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative h-48 w-full bg-zinc-950 border-b border-zinc-800/50 overflow-hidden block group-hover:border-champagne/20 transition-colors"
              >
                <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center text-zinc-600 gap-2 font-mono text-xs z-0">
                   <Award size={24} className="opacity-50" />
                   <span>[ Thumbnail: {cert.image} ]</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={cert.image} 
                  alt={`${cert.title} Certificate`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = '0';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-20 pointer-events-none">
                   <span className="text-xs font-medium text-champagne-light flex items-center gap-1.5">
                     <FileText size={14} /> Open PDF
                   </span>
                </div>
              </a>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-champagne-light transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-silver-muted font-medium mb-4">
                  {cert.issuer} &nbsp;&middot;&nbsp; {cert.date}
                </p>
                
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 flex-grow">
                  {cert.description}
                </p>

                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-zinc-300 hover:text-champagne transition-colors mt-auto"
                >
                  View Full Certificate
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
