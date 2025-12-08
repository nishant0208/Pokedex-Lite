"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function HomePage() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden text-center">
      
      {/* 🌈 Soft animated background glow */}
      <motion.div
        className="absolute -z-10 h-[500px] w-[700px] rounded-full
                   bg-gradient-to-r from-red-300/70 via-pink-300/40 to-yellow-300/50 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🧠 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-4 text-4xl font-extrabold sm:text-5xl"
      >
        Welcome to{" "}
        <span className="text-red-500">Pokédex Lite</span>
      </motion.h1>

      {/* 📘 Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 max-w-xl text-gray-600 dark:text-gray-900"
      >
        A fast, modern Pokédex built with Next.js, TypeScript,
        Framer Motion and PokéAPI.
      </motion.p>

      {/* 🔴 CTA Button */}
      <motion.div
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link
          href="/pokedex"
          className="inline-block rounded-full bg-red-500 px-8 py-4
                     text-lg font-semibold text-white shadow-lg
                     hover:bg-red-600"
        >
          Enter Pokédex
        </Link>
      </motion.div>
    </section>
  );
}

