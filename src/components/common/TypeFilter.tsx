"use client";

import { useRouter, useSearchParams } from "next/navigation";

const TYPES = [
  "fire", "water", "grass", "electric", "psychic",
  "ice", "dragon", "dark", "fairy", "fighting",
  "ghost", "ground", "rock", "bug", "poison"
];

export default function TypeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentType = searchParams.get("type") ?? "";

  function handleChange(value: string) {
    if (!value) router.push("/pokedex");
    else router.push(`/pokedex?type=${value}`);
  }

  return (
    <select
      value={currentType}
      onChange={(e) => handleChange(e.target.value)}
      className="mb-6 rounded-md border px-4 py-2 text-sm text-gray-900"
    >
      <option value="">All Types</option>
      {TYPES.map((type) => (
        <option key={type} value={type}>
          {type.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
