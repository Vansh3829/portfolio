"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="experience" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Experience</div>
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="mt-12 flex flex-col gap-6">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              className="relative surface-card p-7 overflow-hidden hover:border-[var(--border-2)]"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, #4f8ef7, #6366f1)" }}
              />

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-[var(--text)] mb-1">{exp.role}</h3>
                  <div className="text-[var(--accent)] font-medium">{exp.company}</div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-full border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.08)] text-[var(--accent-3)] whitespace-nowrap">
                  📅 {exp.period}
                </span>
              </div>

              {/* Highlights */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exp.highlights.map((hl) => (
                  <li
                    key={hl}
                    className="flex items-start gap-3 text-[var(--text-2)] text-sm leading-relaxed"
                  >
                    <span className="text-[var(--accent)] mt-0.5 flex-shrink-0 text-base">▸</span>
                    {hl}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
