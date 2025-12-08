"use client";

import Image from "next/image";
import { useFavorites } from "@/hooks/userFavorites";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

type PokemonCardProps = {
  name: string;
  url: string;
};

function getPokemonId(url: string) {
  return url.split("/").filter(Boolean).pop();
}

/* 🌈 Gradient pool (deterministic, no fetch) */
const GRADIENTS = [
  "from-red-400 to-red-600",
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600",
  "from-yellow-400 to-yellow-500",
  "from-pink-400 to-pink-600",
  "from-purple-400 to-purple-600",
  "from-amber-400 to-orange-500",
  "from-cyan-400 to-sky-500",
];

function getGradientFromName(name: string) {
  const hash = [...name].reduce((sum, c) => sum + c.charCodeAt(0), 0);
  return GRADIENTS[hash % GRADIENTS.length];
}

// ✅ Lazy-loaded modal (correct)
const PokemonDetailModal = dynamic(
  () => import("./PokemonDetailModal"),
  { ssr: false }
);

export default function PokemonCard({ name, url }: PokemonCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [open, setOpen] = useState(false);

  const id = getPokemonId(url);
  const imageUrl =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const favorite = isFavorite(name);

  // ✅ FIXED: deterministic gradient based on name
  const gradient = getGradientFromName(name);

  return (
    <>
      <motion.div
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.06, rotate: 1 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="relative cursor-pointer overflow-hidden rounded-2xl border
                   bg-white dark:bg-gray-800
                   text-gray-900 dark:text-gray-100
                   p-4 text-center shadow-sm hover:shadow-xl"
      >
        {/* 🌈 Type-style background aura */}
        <div
          className={`pointer-events-none absolute inset-0
                      opacity-25 bg-gradient-to-br ${gradient}`}
        />

        {/* ❤️ Favorite */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite({ name, url });
          }}
          className="absolute right-2 top-2 z-10 text-xl"
        >
          {favorite ? "❤️" : "🤍"}
        </button>

        {/* 🖼 Image */}
        <div className="relative mx-auto mb-3 flex h-28 w-28 items-center justify-center
                        rounded-full bg-white/70 dark:bg-gray-700/70">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        {/* 📛 Name */}
        <p className="font-semibold capitalize text-white drop-shadow-sm">
          {name}
        </p>
      </motion.div>

      {/* 🎴 Modal */}
      {open && (
        <PokemonDetailModal
          name={name}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
