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
export async function getPokemonByType(type: string) {
  const res = await fetch(
    `${BASE_URL}/type/${type}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Pokémon by type");
  }

  const data = await res.json();

  return data.pokemon.map(
    (p: { pokemon: { name: string; url: string } }) =>
      p.pokemon
  );
}
export async function getPokemonDetails(name: string) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Pokémon details");
  }

  return res.json();
}

