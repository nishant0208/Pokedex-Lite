"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialValue = searchParams.get("search") ?? "";

  const [value, setValue] = useState(initialValue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!value.trim()) {
      router.push("/pokedex");
    } else {
      router.push(`/pokedex?search=${value.trim()}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search Pokémon by name..."
        className="w-full rounded-md border px-4 py-2 text-sm
                   text-gray-900 focus:outline-none focus:ring-2
                   focus:ring-red-400"
      />

      <button
        type="submit"
        className="rounded-md bg-red-500 px-4 py-2
                   text-sm font-medium text-white hover:bg-red-600"
      >
        Search
      </button>
    </form>
  );
}
 