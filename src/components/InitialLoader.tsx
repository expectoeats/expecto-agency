"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (!visible) return;

    // Skip loader on repeat visits within the same session
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("loader_shown")) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    let current = 0;
    const timer = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 8; // faster increments
      setProgress(Math.min(current, 100));
      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setExit(true);
          setTimeout(() => {
            setVisible(false);
            document.body.style.overflow = "";
            if (typeof sessionStorage !== "undefined") {
              sessionStorage.setItem("loader_shown", "1");
            }
          }, 500);
        }, 50);
      }
    }, 16); // ~60fps, faster overall

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--bg)]"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(56,189,248,0.18),transparent_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(129,140,248,0.14),transparent_52%)]" />
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, transparent 0 16px, rgba(255,255,255,0.04) 17px 18px)",
            }}
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center">
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              className="relative h-28 w-28 md:h-32 md:w-32"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ x: -120, y: -60, rotate: -45, opacity: 0 }}
                animate={exit ? { x: -150, y: -80, rotate: -60, opacity: 0 } : { x: 0, y: 0, rotate: 0, opacity: 1 }}
                transition={{ 
                  duration: exit ? 0.6 : 1.5, 
                  ease: exit ? "easeIn" : [0.22, 1, 0.36, 1],
                  delay: exit ? 0 : 0.1
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Expecto Logo"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.55)]"
                  style={{ clipPath: "polygon(0 0, 56% 0, 52% 20%, 45% 35%, 47% 51%, 35% 53%, 20% 55%, 0 59%)" }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                initial={{ x: 120, y: -70, rotate: 45, opacity: 0 }}
                animate={exit ? { x: 160, y: -90, rotate: 60, opacity: 0 } : { x: 0, y: 0, rotate: 0, opacity: 1 }}
                transition={{ 
                  duration: exit ? 0.6 : 1.6, 
                  delay: exit ? 0.05 : 0.2, 
                  ease: exit ? "easeIn" : [0.22, 1, 0.36, 1] 
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Expecto Logo"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.55)]"
                  style={{ clipPath: "polygon(56% 0, 100% 0, 100% 55%, 80% 53%, 65% 50%, 47% 51%, 45% 35%, 52% 20%)" }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                initial={{ x: -110, y: 80, rotate: 40, opacity: 0 }}
                animate={exit ? { x: -140, y: 100, rotate: 50, opacity: 0 } : { x: 0, y: 0, rotate: 0, opacity: 1 }}
                transition={{ 
                  duration: exit ? 0.6 : 1.7, 
                  delay: exit ? 0.1 : 0.3, 
                  ease: exit ? "easeIn" : [0.22, 1, 0.36, 1] 
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Expecto Logo"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.55)]"
                  style={{ clipPath: "polygon(0 59%, 20% 55%, 35% 53%, 47% 51%, 50% 70%, 48% 85%, 53% 100%, 0 100%)" }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0"
                initial={{ x: 110, y: 90, rotate: -40, opacity: 0 }}
                animate={exit ? { x: 150, y: 110, rotate: -50, opacity: 0 } : { x: 0, y: 0, rotate: 0, opacity: 1 }}
                transition={{ 
                  duration: exit ? 0.6 : 1.8, 
                  delay: exit ? 0.15 : 0.4, 
                  ease: exit ? "easeIn" : [0.22, 1, 0.36, 1] 
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Expecto Logo"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.55)]"
                  style={{ clipPath: "polygon(47% 51%, 65% 50%, 80% 53%, 100% 55%, 100% 100%, 53% 100%, 48% 85%, 50% 70%)" }}
                />
              </motion.div>
            </motion.div>

            <motion.p
              className="font-montserrat text-2xl font-semibold tracking-[0.18em] text-white/90 md:text-3xl"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              EXPECTO
            </motion.p>
          </div>

          <motion.p
            className="font-mono text-sm tracking-[0.3em] text-cyan-100/85"
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {progress}%
          </motion.p>
        </div>

        <motion.div 
          animate={exit ? { x: "-100%" } : { x: 0 }} 
          transition={{ duration: 0.6, ease: [0.87, 0, 0.13, 1] }} 
          className="absolute inset-y-0 left-0 z-20 w-1/2 border-r border-white/10 bg-[linear-gradient(90deg,#080b10,#121925)]" 
        />
        <motion.div 
          animate={exit ? { x: "100%" } : { x: 0 }} 
          transition={{ duration: 0.6, ease: [0.87, 0, 0.13, 1] }} 
          className="absolute inset-y-0 right-0 z-20 w-1/2 border-l border-white/10 bg-[linear-gradient(270deg,#080b10,#121925)]" 
        />
      </motion.div>
    </AnimatePresence>
  );
}

