"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { PERSONAL } from "@/lib/data";
import emailjs from "@emailjs/browser";

export function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_wg3d4ae",
      "template_poo1a64",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "Fdit-Wn6z3bNjHff2"
    );

    setSent(true);
    setTimeout(() => setSent(false), 4000);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }
};

  const CONTACT_LINKS = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
      bg: "bg-blue-500/10",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/vansh3829",
      href: PERSONAL.linkedin,
      bg: "bg-blue-600/10",
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      value: "github.com/vansh3829",
      href: PERSONAL.github,
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--bg-2)]">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let&apos;s Connect</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <h3 className="font-serif text-2xl mb-3 text-[var(--text)]">Open to Opportunities</h3>
            <p className="text-[var(--text-2)] mb-8 leading-relaxed">
             Currently seeking AI/ML and Data Science internship opportunities where I can apply my skills in Python, SQL, Machine Learning, NLP, RAG, and LLM-based applications. I’m always open to learning, collaborating on interesting projects, and connecting with people in the field.
            </p>
            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 surface-card hover:border-[var(--accent)] hover:bg-[rgba(79,142,247,0.03)] group transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-[var(--accent)] flex-shrink-0 ${link.bg}`}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[var(--text-3)] text-xs">{link.label}</div>
                    <div className="text-[var(--text)] text-sm font-medium group-hover:text-[var(--accent)] transition-colors">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[var(--text-2)] font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] text-sm placeholder-[var(--text-3)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[var(--text-2)] font-medium">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="xyz@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] text-sm placeholder-[var(--text-3)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-[var(--text-2)] font-medium">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] text-sm placeholder-[var(--text-3)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                {sent ? (
                  "✅ Message Sent!"
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
