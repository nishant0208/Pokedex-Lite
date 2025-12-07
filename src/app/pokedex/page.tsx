import PokemonCard from "@/components/pokedex/PokemonCard";
import Pagination from "@/components/common/Pagination";
import SearchInput from "@/components/common/SearchInput";
import { getPokemonList, searchPokemonByName } from "@/lib/pokeApi";

const PAGE_SIZE = 20;

export default async function PokedexPage({
  searchParams,
}: {
  searchParams?: Promise<{
    page?: string;
    search?: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page ?? "1");
  const search = resolvedSearchParams?.search;

  let pokemons: { name: string; url: string }[] = [];
  let hasNextPage = false;

  if (search) {
    const result = await searchPokemonByName(search);

    if (result) {
      pokemons = [
        {
          name: result.name,
          url: `https://pokeapi.co/api/v2/pokemon/${result.id}/`,
        },
      ];
    }
  } else {
    const offset = (page - 1) * PAGE_SIZE;
    const data = await getPokemonList(PAGE_SIZE, offset);

    pokemons = data.results;
    hasNextPage = offset + PAGE_SIZE < data.count;
  }

  <SearchInput />


  return (

    <section className="text-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-red-600">Pokédex</h1>

      import PokemonCard from "@/components/pokedex/PokemonCard";
      return(
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {
          pokemons.length > 0 ? (
            pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No Pokémon found.
            </p>
          )
        }
        
      </ul>
      {!search && (
        <Pagination
          currentPage={page}
          hasNextPage={hasNextPage}
        />
      )}



      );

    </section>
  );
}
