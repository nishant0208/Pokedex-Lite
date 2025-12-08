"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PokedexTransition from "@/components/ui/pokedexTransitrion";

/* ---------------- Floating Pokéballs ---------------- */

function FloatingPokeballs() {
  const positions = [
    { top: "10%", left: "5%" },
    { top: "20%", left: "80%" },
    { top: "60%", left: "10%" },
    { top: "70%", left: "75%" },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute opacity-30"
          style={pos}
          animate={{ y: [0, -25, 0] }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/pokeball.png"
            alt="Pokéball"
            width={80}
            height={80}
            className="select-none"
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------- Animated Counter ---------------- */

function AnimatedCounter({ value }: { value: number }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
    return unsubscribe;
  }, [spring]);

  return <span className="font-semibold">{display}+</span>;
}

/* ---------------- Home Page ---------------- */

export default function HomePage() {
  const router = useRouter();
  const [playTransition, setPlayTransition] = useState(false);

  const audio = typeof Audio !== "undefined"
  ? new Audio("/sounds/pokeball.mp3")
  : null;

  const enterPokedex = () => {
  if (audio) {
    audio.currentTime = 0;
    audio.volume = 0.6;
    audio.play();
  }

  setPlayTransition(true);

  setTimeout(() => {
    router.push("/pokedex");
  }, 600);
};


  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden text-center">

      {/* ✅ Pokédex transition overlay */}
      <PokedexTransition show={playTransition} />

      {/* 🎈 Floating Pokéballs */}
      <FloatingPokeballs />

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
        Welcome to <span className="text-red-500">Pokédex Lite</span>
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

      {/* 🔢 Pokémon Count */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400"
      >
        <AnimatedCounter value={1025} /> Pokémon available
      </motion.div>

      {/* 🔴 CTA Button */}
      <motion.div
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={enterPokedex}
          className="inline-block rounded-full bg-red-500 px-8 py-4
                     text-lg font-semibold text-white shadow-lg
                     hover:bg-red-600"
        >
          Enter Pokédex
        </button>
      </motion.div>
    </section>
  );
}
