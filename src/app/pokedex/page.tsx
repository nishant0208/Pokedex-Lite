import SearchInput from "@/components/common/SearchInput";
import TypeFilter from "@/components/common/TypeFilter";
import PokemonGrid from "@/components/pokedex/PokemonGrid";
import {
  getPokemonList,
  searchPokemonByName,
  getPokemonByType,
} from "@/lib/pokeApi";

const PAGE_SIZE = 20;

export default async function PokedexPage({
  searchParams,
}: {
  searchParams?: Promise<{
    page?: string;
    search?: string;
    type?: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;

const page = Number(resolvedSearchParams?.page ?? "1");
const search = resolvedSearchParams?.search;
const type = resolvedSearchParams?.type;

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
  } else if (type) {
    pokemons = await getPokemonByType(type);
  } else {
    const offset = (page - 1) * PAGE_SIZE;
    const data = await getPokemonList(PAGE_SIZE, offset);
    pokemons = data.results;
    hasNextPage = offset + PAGE_SIZE < data.count;
  }

  const isFiltering = !!search || !!type;

  return (
    <section className="text-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-red-600">
        Pokédex
      </h1>

      <div className="sticky top-20 z-10 mb-8 rounded-2xl bg-white/80 p-4 backdrop-blur-md shadow-md">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <SearchInput />
          <TypeFilter />
        </div>
      </div>

      <PokemonGrid
        pokemons={pokemons}
        page={page}
        hasNextPage={hasNextPage}
        showPagination={!search && !type}
        isFiltering={isFiltering}
      />
    </section>
  );
}
