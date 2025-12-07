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

// 🌈 Simple type-color heuristic (no extra fetch)
const TYPE_COLORS: Record<string, string> = {
  fire: "from-red-400 to-red-600",
  water: "from-blue-400 to-blue-600",
  grass: "from-green-400 to-green-600",
  electric: "from-yellow-400 to-yellow-500",
  psychic: "from-pink-400 to-pink-600",
  ice: "from-cyan-300 to-cyan-500",
  dragon: "from-indigo-500 to-purple-600",
  dark: "from-gray-700 to-gray-900",
  fairy: "from-pink-300 to-pink-500",
  fighting: "from-orange-600 to-red-700",
  ground: "from-amber-600 to-yellow-700",
  rock: "from-stone-500 to-stone-700",
  bug: "from-lime-500 to-green-600",
  poison: "from-purple-500 to-indigo-600",
  ghost: "from-violet-600 to-purple-800",
};


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

  // ✅ Deterministic color (no fetch)
  const gradient =
    TYPE_COLORS[name[0]] ?? "from-gray-300 to-gray-400";

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
        {/* 🌈 Type-based background aura */}
        <div
          className={`pointer-events-none absolute inset-0
                      opacity-20 bg-gradient-to-br ${gradient}`}
        />

        {/* ❤️ Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite({ name, url });
          }}
          className="absolute right-2 top-2 z-10 text-xl"
        >
          {favorite ? "❤️" : "🤍"}
        </button>

        {/* 🖼 Pokémon image */}
        <div className="relative mx-auto mb-3 h-24 w-24">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        {/* 📛 Name */}
        <p className="font-semibold capitalize">
          {name}
        </p>
      </motion.div>

      {/* 🎴 Detail Modal */}
      {open && (
        <PokemonDetailModal
          name={name}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
