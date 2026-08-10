"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-sm border border-[var(--border)] flex items-center justify-center text-[var(--text-3)]">
        <div className="w-5 h-5 bg-[var(--bg-subtle)] animate-pulse rounded-full" />
      </div>
    );
  }

  const toggleTheme = (event: React.MouseEvent) => {
    const isDark = resolvedTheme === "dark";
    const root = document.documentElement;
    const nextTheme: "light" | "dark" = isDark ? "light" : "dark";
    const supportsMotion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const xPercent = `${(event.clientX / window.innerWidth) * 100}%`;
    const yPercent = `${(event.clientY / window.innerHeight) * 100}%`;

    root.style.setProperty("--theme-switch-x", xPercent);
    root.style.setProperty("--theme-switch-y", yPercent);
    root.classList.add("theme-animating");

    if (!supportsMotion) {
      setTheme(nextTheme);
      window.setTimeout(() => {
        root.classList.remove("theme-animating");
      }, 520);
      return;
    }

    try {
      const transition = document.startViewTransition(() => {
        setTheme(nextTheme);
      });

      transition.finished.finally(() => {
        root.classList.remove("theme-animating");
      });
    } catch {
      setTheme(nextTheme);
      window.setTimeout(() => {
        root.classList.remove("theme-animating");
      }, 520);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-sm border border-[var(--border)] flex items-center justify-center text-[var(--text-3)] hover:text-[var(--text)] hover:border-[var(--text)] transition-all group overflow-hidden"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Moon size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Sun size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
