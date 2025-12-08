"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function PokedexTransition({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white dark:bg-black"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "center" }}
        >
          {/* Pokéball */}
          <motion.img
            src="/pokeball-bg.svg"
            alt="Pokéball"
            initial={{ scale: 0 }}
            animate={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-36 w-36"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
