"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CERTIFICATIONS } from "@/lib/data";

export function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Certifications</div>
          <h2 className="section-title">Credentials</h2>
          <p className="text-[var(--text-2)] max-w-xl">
            Professional certifications from globally recognised organisations validating my expertise.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
              className="surface-card flex items-center gap-4 p-4 hover:translate-x-1 hover:border-[var(--border-2)] transition-all"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${cert.color}`}
              >
                {cert.icon}
              </div>
              <div>
                <div className="font-semibold text-sm text-[var(--text)] leading-snug mb-0.5">
                  {cert.name}
                </div>
                <div className="text-[var(--text-2)] text-xs">{cert.issuer}</div>
                <div className="text-[var(--text-3)] text-[0.7rem] font-mono mt-0.5">{cert.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
