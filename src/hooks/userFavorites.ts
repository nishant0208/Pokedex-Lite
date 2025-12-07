"use client";

import { useEffect, useState } from "react";

export type FavoritePokemon = {
  name: string;
  url: string;
};

const STORAGE_KEY = "favorite-pokemons";

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  function saveToStorage(items: FavoritePokemon[]) {
    setFavorites(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  function isFavorite(name: string) {
    return favorites.some((p) => p.name === name);
  }

  function toggleFavorite(pokemon: FavoritePokemon) {
    if (isFavorite(pokemon.name)) {
      saveToStorage(favorites.filter((p) => p.name !== pokemon.name));
    } else {
      saveToStorage([...favorites, pokemon]);
    }
  }

  return { favorites, toggleFavorite, isFavorite };
}
