import PokemonCard from "@/components/pokedex/PokemonCard";
import Pagination from "@/components/common/Pagination";
import { getPokemonList } from "@/lib/pokeApi";

const PAGE_SIZE = 20;

export default async function PokedexPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page ?? "1");

  const offset = (page - 1) * PAGE_SIZE;
  const data = await getPokemonList(PAGE_SIZE, offset);
  const hasNextPage = offset + PAGE_SIZE < data.count;


  return (
    <section className="text-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-red-600">Pokédex</h1>

      import PokemonCard from "@/components/pokedex/PokemonCard";
      return(
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {data.results.map(
          (pokemon: { name: string; url: string }) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          )
        )}
      </ul>
      <Pagination
        currentPage={page}
        hasNextPage={hasNextPage}
      />


      );

    </section>
  );
}
