"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { STATS } from "@/lib/data";

export function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="achievements" className="py-24 bg-[var(--bg-3)]">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="section-label">Achievements</div>
          <h2 className="section-title">By the Numbers</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="surface-card p-7 text-center relative overflow-hidden group hover:-translate-y-1.5 transition-transform"
            >
              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                style={{ background: "linear-gradient(135deg, #4f8ef7, #6366f1)" }}
              />

              <div className="relative z-10">
                <div className="font-serif text-5xl gradient-text leading-none mb-2">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      delay={0.2 + i * 0.1}
                    />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                </div>
                <div className="text-[var(--text-2)] text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
