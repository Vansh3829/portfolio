import { PERSONAL } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[var(--text-3)] text-sm text-center sm:text-left">
          Designed and Developed by{" "}
          <span className="text-[var(--accent)] font-medium">{PERSONAL.name}</span>{" "}
          © 2026
        </p>
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-3)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-3)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-3)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
