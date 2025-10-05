"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashProvider({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1000); // 2s splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="flex flex-col items-center justify-center h-screen w-full bg-[#000000] text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo or Text */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="text-4xl font-extrabold tracking-wide"
            >
              <img src="/images/Logo.png" />
            </motion.div>

            {/* Spinner */}
            <motion.div
              className="mt-6 rounded-full h-12 w-12 border-4 border-white border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && children}
    </>
  );
}
