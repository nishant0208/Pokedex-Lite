const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemonList(limit: number, offset: number) {
  const res = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
    { cache: "no-store" } // SSR fresh data
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Pokémon list");
  }

  return res.json();
}

export async function searchPokemonByName(name: string) {
  const res = await fetch(
    `${BASE_URL}/pokemon/${name.toLowerCase()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

