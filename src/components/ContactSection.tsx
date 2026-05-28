"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "./MotionProvider";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/mynkgrg801@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Form Submission - Portfolio",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 bg-zinc-950 flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-champagne/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-champagne/40" />
            <h2 className="text-sm font-light tracking-[0.3em] uppercase text-champagne-light">
              Get In Touch
            </h2>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-champagne/40" />
          </motion.div>
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Let&apos;s build something extraordinary together.
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-12">
          {/* Contact Info */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-10 justify-center"
          >
            <div>
              <h4 className="text-2xl font-semibold text-foreground mb-4">Ready to start a project?</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, I&apos;m always open to discussing new opportunities, collaborations, or tech challenges.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800 text-champagne-light group-hover:bg-champagne/10 group-hover:border-champagne/30 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-1">Email</p>
                  <a href="mailto:mynkgrg801@gmail.com" className="text-foreground hover:text-champagne transition-colors">
                    mynkgrg801@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800 text-champagne-light group-hover:bg-champagne/10 group-hover:border-champagne/30 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-1">Phone</p>
                  <a href="tel:+919991971157" className="text-foreground hover:text-champagne transition-colors">
                    +91-9991971157
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800 text-champagne-light group-hover:bg-champagne/10 group-hover:border-champagne/30 transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-1">Location</p>
                  <p className="text-foreground">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium tracking-wide text-zinc-400 pl-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-foreground placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-champagne/50 focus:border-champagne/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium tracking-wide text-zinc-400 pl-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-foreground placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-champagne/50 focus:border-champagne/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label htmlFor="message" className="text-xs font-medium tracking-wide text-zinc-400 pl-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-foreground placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-champagne/50 focus:border-champagne/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-champagne/10 to-champagne/5 border border-champagne/20 text-champagne-light font-medium tracking-wide hover:from-champagne/20 hover:to-champagne/10 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-champagne/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative flex items-center gap-2">
                  {isSubmitting ? (
                    "Sending..."
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-sm text-center mt-2"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center mt-2"
                >
                  Something went wrong. Please email me directly!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
