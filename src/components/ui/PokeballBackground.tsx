"use client";

import { motion } from "framer-motion";

export default function PokeballBackground() {
  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: -60 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "linear",
      }}
    >
      <div
        className="h-[200%] w-full opacity-[0.06]"
        style={{
          backgroundImage: `url("/pokeball-bg.svg")`,
          backgroundSize: "120px 120px",
          backgroundRepeat: "repeat",
        }}
      />
    </motion.div>
  );
}
