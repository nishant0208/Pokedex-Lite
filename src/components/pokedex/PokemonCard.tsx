"use client";

import Image from "next/image";
import { useFavorites } from "@/hooks/userFavorites";

type PokemonCardProps = {
  name: string;
  url: string;
};

function getPokemonId(url: string) {
  return url.split("/").filter(Boolean).pop();
}

export default function PokemonCard({ name, url }: PokemonCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const id = getPokemonId(url);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const favorite = isFavorite(name);

  return (
    <div className="relative rounded-xl border bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <button
        onClick={() => toggleFavorite({ name, url })}
        className="absolute right-2 top-2 text-xl"
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      <div className="relative mx-auto mb-3 h-24 w-24">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      <p className="font-semibold capitalize text-gray-800">
        {name}
      </p>
    </div>
  );
}
