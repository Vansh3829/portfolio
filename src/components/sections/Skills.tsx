"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "@/lib/data";

export function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="py-24 bg-[var(--bg-3)]">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Skills</div>
          <h2 className="section-title">Tech Stack</h2>
          <p className="text-[var(--text-2)] max-w-xl">
            The tools and technologies I use to build data-driven solutions, machine learning models, and scalable backend applications.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="surface-card p-5 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_12px_40px_rgba(79,142,247,0.12)]"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${skill.gradient} opacity-90`}
                >
                  {skill.icon}
                </div>
                <div className="font-semibold text-sm text-[var(--text)]">{skill.title}</div>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg border border-[var(--border)] bg-[var(--bg-2)] text-[var(--text-2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[rgba(79,142,247,0.06)] transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
