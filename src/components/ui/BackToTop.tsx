"use client";

import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const { scrollY } = useScrollProgress();
  const visible = scrollY > 400;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg"
          style={{
            background: "linear-gradient(135deg, #4f8ef7, #6366f1)",
            boxShadow: "0 4px 20px rgba(79,142,247,0.4)",
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
