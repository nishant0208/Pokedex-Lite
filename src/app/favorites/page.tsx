"use client";

import PokemonCard from "@/components/pokedex/PokemonCard";
import { useFavorites } from "@/hooks/userFavorites";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Favorites
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">
          You have not favorited any Pokémon yet.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {favorites.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
