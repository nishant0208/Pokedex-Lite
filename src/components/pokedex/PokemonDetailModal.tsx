"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getPokemonDetails } from "@/lib/pokeApi";

type Props = {
  name: string | null;
  onClose: () => void;
};

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

  if (!name) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl"
        >
          ✕
        </button>

        {loading && (
          <p className="text-center text-gray-500">Loading…</p>
        )}

        {data && (
          <>
            <div className="relative mx-auto mb-4 h-32 w-32">
              <Image
                src={data.sprites.other["official-artwork"].front_default}
                alt={data.name}
                fill
                className="object-contain"
              />
            </div>

            <h2 className="mb-2 text-center text-2xl font-bold capitalize">
              {data.name}
            </h2>

            <div className="mb-4 flex justify-center gap-2">
              {data.types.map((t: any) => (
                <span
                  key={t.type.name}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm capitalize"
                >
                  {t.type.name}
                </span>
              ))}
            </div>

            <div className="space-y-2 text-sm text-gray-700">
              {data.stats.map((stat: any) => (
                <div key={stat.stat.name} className="flex justify-between">
                  <span className="capitalize">{stat.stat.name}</span>
                  <span className="font-medium">{stat.base_stat}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
