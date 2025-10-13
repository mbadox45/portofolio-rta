"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ParallaxProviderWrapper from "@/components/ParallaxProviderWrapper";

export default function ClientLayout({ children }) {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <div className="relative min-h-screen w-full select-none overflow-hidden">
      {/* 🔥 Navbar muncul setelah transisi */}
      {showNavbar && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay:1, ease:"backOut" }}
          className="fixed top-0 left-0 w-full z-40"
        >
          <Navbar />
        </motion.div>
      )}

      <ParallaxProviderWrapper>
        <PageTransition onComplete={() => setShowNavbar(true)}>
          {children}
        </PageTransition>
      </ParallaxProviderWrapper>
    </div>
  );
}
