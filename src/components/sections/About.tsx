"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ABOUT_TEXT, PERSONAL } from "@/lib/data";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const ABOUT_TAGS = ["Python", "SQL", "Machine Learning", "Flask", "Data Analytics", "REST APIs"];

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="py-24 bg-[var(--bg-2)]">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">About Me</div>
          <h2 className="section-title">Who Am I?</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <div
                className="w-56 h-56 rounded-2xl flex items-center justify-center font-serif text-7xl text-white relative z-10"
                style={{ background: "linear-gradient(135deg, #4f8ef7, #6366f1)" }}
              >
                VS
              </div>
              <div
                className="absolute inset-[-3px] rounded-2xl z-0"
                style={{
                  background: "linear-gradient(135deg, #4f8ef7, #6366f1)",
                  filter: "blur(20px)",
                  opacity: 0.45,
                }}
              />
            </div>

            {/* Info badges */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { icon: <MapPin size={13} />, text: PERSONAL.location },
                { icon: <GraduationCap size={13} />, text: "CSE — AI & ML" },
                { icon: <Briefcase size={13} />, text: "Open to Work" },
              ].map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-mono border border-[rgba(79,142,247,0.25)] bg-[rgba(79,142,247,0.08)] text-[var(--accent-3)]"
                >
                  {b.icon}
                  {b.text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p className="text-[var(--text-2)] text-[1.05rem] leading-[1.85] mb-5">
              {ABOUT_TEXT}
            </p>
            <p className="text-[var(--text-2)] text-[1.05rem] leading-[1.85] mb-6">
              Currently pursuing B.Tech in CSE (AI & ML) at Dronacharya College of Engineering with a CGPA of 7.9/10. Backed by hands-on industry experience from a Data Analyst internship at Team Computers Pvt. Ltd.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {ABOUT_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold font-mono border border-[rgba(79,142,247,0.25)] bg-[rgba(79,142,247,0.08)] text-[var(--accent-3)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
