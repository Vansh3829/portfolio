"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EDUCATION } from "@/lib/data";

export function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic Journey</h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{
              background: "linear-gradient(180deg, #4f8ef7 0%, #6366f1 60%, transparent 100%)",
            }}
          />

          <div className="flex flex-col gap-8">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="flex gap-6 items-start"
              >
                {/* Dot */}
                <div
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #4f8ef7, #6366f1)",
                    boxShadow: "0 0 20px rgba(79,142,247,0.4)",
                  }}
                >
                  {edu.icon}
                </div>

                {/* Card */}
                <div className="surface-card flex-1 p-5 hover:translate-x-1 transition-transform">
                  <div className="font-semibold text-[1.05rem] mb-1 text-[var(--text)]">
                    {edu.degree}
                  </div>
                  <div className="text-[var(--accent)] text-sm font-medium mb-3">
                    {edu.school}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.08)] text-[var(--text-2)]">
                      📅 {edu.period}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.08)] text-[var(--text-2)]">
                      🏆 {edu.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
