"use client";

import dynamic from "next/dynamic";
import Pagination from "@/components/common/Pagination";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

const PokemonCard = dynamic(
    () => import("./PokemonCard"),
    { ssr: false }
);

type Pokemon = {
    name: string;
    url: string;
};

type Props = {
    pokemons: Pokemon[];
    page: number;
    hasNextPage: boolean;
    showPagination: boolean;
    isFiltering: boolean;
};

export default function PokemonGrid({
    pokemons,
    page,
    hasNextPage,
    showPagination,
    isFiltering,
}: Props) {
    return (
        <>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {pokemons.length === 0 && isFiltering ? (
                    Array.from({ length: 8 }).map((_, i) => (
                        <PokemonCardSkeleton key={i} />
                    ))
                ) : pokemons.length > 0 ? (
                    pokemons.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-sm text-gray-500">
                        No Pokémon match your search 🧐
                    </p>

                )}
            </ul>

            {showPagination && (
                <Pagination
                    currentPage={page}
                    hasNextPage={hasNextPage}
                />
            )}
        </>
    );
}
