"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/data";

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "backend", label: "Backend" },
  { id: "data", label: "Data" },
  { id: "ml", label: "Machine Learning" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = PROJECTS.filter(
    (p) => activeFilter === "all" || p.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-24 bg-[var(--bg-2)]">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Projects</div>
          <h2 className="section-title">Featured Work</h2>
          <p className="text-[var(--text-2)] max-w-xl">
            A selection of projects that demonstrate my skills in data engineering, backend development, and machine learning.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-2 mt-8 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                activeFilter === f.id
                  ? "border-[var(--accent)] bg-[rgba(79,142,247,0.12)] text-[var(--accent)]"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-2)] hover:border-[var(--border-2)] hover:text-[var(--text)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="surface-card flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:border-[var(--border-2)]"
              >
                {/* Thumbnail */}
                <div
                  className={`h-36 flex items-center justify-center text-5xl bg-gradient-to-br ${project.gradient} relative`}
                >
                  <span className="relative z-10">{project.emoji}</span>
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Body */}
                <div className="flex-1 flex flex-col p-5">
                  <h3 className="font-semibold text-[var(--text)] text-[0.97rem] mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed mb-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[0.72rem] font-mono rounded border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.07)] text-[var(--accent-3)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="px-2 py-0.5 text-[0.72rem] rounded border border-[var(--border)] bg-[var(--bg-3)] text-[var(--text-3)]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-medium rounded-lg text-white transition-opacity hover:opacity-85"
                      style={{ background: "linear-gradient(135deg, #4f8ef7, #6366f1)" }}
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-medium rounded-lg border border-[var(--border)] bg-[var(--bg-2)] text-[var(--text-2)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
