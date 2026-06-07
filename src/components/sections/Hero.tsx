"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { PERSONAL, STATS } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #4f8ef7 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.10]"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="section-container relative z-10 py-20 w-full">
        {/* Available badge */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[rgba(79,142,247,0.3)] bg-[rgba(79,142,247,0.08)] text-[var(--accent)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-serif text-[clamp(3rem,9vw,5.5rem)] leading-[1.05] mb-3"
        >
          {PERSONAL.name.split(" ")[0]}{" "}
          <span className="gradient-text">{PERSONAL.name.split(" ")[1]}</span>
        </motion.h1>

        {/* Typing title */}
        <motion.div
          {...fadeUp(0.3)}
          className="font-mono text-[clamp(1rem,2.5vw,1.25rem)] text-[var(--accent-3)] mb-4 h-8 flex items-center"
        >
          <TypeAnimation
            sequence={[
              "Data Analyst", 2000,
              "Data Engineer Aspirant", 2000,
              "AI & ML Student", 2000,
              "Python Developer", 2000,
              "Backend Engineer", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="border-r-2 border-[var(--accent)] pr-1"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-[var(--text-2)] text-[clamp(1rem,2vw,1.15rem)] max-w-xl mb-8 leading-relaxed"
        >
          {PERSONAL.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-8">
          <a href="#projects" className="btn-primary">
            <ArrowRight size={16} />
            View Projects
          </a>
          <a href={PERSONAL.resumeUrl} download className="btn-outline">
            <Download size={16} />
            Download Resume
          </a>
          <a href="#contact" className="btn-outline">
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.6)} className="flex items-center gap-3 mb-16">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-2)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[rgba(79,142,247,0.08)] hover:-translate-y-0.5 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-2)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[rgba(79,142,247,0.08)] hover:-translate-y-0.5 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-2)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[rgba(79,142,247,0.08)] hover:-translate-y-0.5 transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          {...fadeUp(0.7)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-5 text-center"
            >
              <div className="font-serif text-3xl gradient-text leading-none mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-[var(--text-3)] text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
