"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getPokemonDetails } from "@/lib/pokeApi";

type Props = {
  name: string | null;
  onClose: () => void;
};

function PokemonDetailSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gray-200" />
      <div className="mx-auto mb-3 h-6 w-32 rounded bg-gray-200" />
      <div className="mx-auto mb-4 h-4 w-24 rounded bg-gray-200" />

      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-4 rounded bg-gray-200" />
        ))}
      </div>
    </div>
  );
}


export default function PokemonDetailModal({ name, onClose }: Props) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!name) return;

    setLoading(true);
    getPokemonDetails(name)
      .then(setData)
      .finally(() => setLoading(false));
  }, [name]);

  return (
    <AnimatePresence>
      {name && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* ✅ BACKDROP */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* ✅ MODAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-[90%] max-w-md rounded-2xl
                     bg-white p-6 shadow-xl
                     dark:bg-gray-800"
          >
            {/* ❌ Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-xl text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
            >
              ✕
            </button>

            {/* ⏳ Loading */}
            {loading && <PokemonDetailSkeleton />}

            {/* ✅ Data */}
            {data && (
              <>
                <motion.div
                  className="relative mx-auto mb-4 h-32 w-32"
                  initial={{ scale: 0.85 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Image
                    src={data.sprites.other["official-artwork"].front_default}
                    alt={data.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                <h2 className="mb-2 text-center text-2xl font-bold capitalize text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  {data.name}
                </h2>



                <div className="mb-4 flex justify-center gap-2">
                  {data.types.map((t: any) => (
                    <span
                      key={t.type.name}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm capitalize
                               dark:bg-gray-700"
                    >
                      {t.type.name}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {data.stats.map((stat: any) => (
                    <div
                      key={stat.stat.name}
                      className="flex justify-between"
                    >
                      <span className="capitalize">
                        {stat.stat.name}
                      </span>
                      <span className="font-medium">
                        {stat.base_stat}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
