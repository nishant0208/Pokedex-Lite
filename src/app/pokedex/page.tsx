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

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Pokédex</h1>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {data.results.map((pokemon: { name: string }) => (
          <li
            key={pokemon.name}
            className="rounded-lg border bg-white p-4 text-center capitalize hover:shadow transition"
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
