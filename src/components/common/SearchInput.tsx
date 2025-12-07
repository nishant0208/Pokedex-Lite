"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState("");

  // ✅ Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    setValue(searchParams.get("search") ?? "");
  }, [searchParams]);

  if (!mounted) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setValue(newValue);

    const params = new URLSearchParams(searchParams.toString());

    if (newValue) {
      params.set("search", newValue);
      params.delete("page");
    } else {
      params.delete("search");
    }

    router.push(`/pokedex?${params.toString()}`);
  }

  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder="Search Pokémon..."
      className="w-full rounded-full border border-gray-300
                 bg-gray-50 px-5 py-3 text-sm
                 text-gray-900
                 focus:outline-none focus:ring-2 focus:ring-red-400
                 dark:bg-gray-800 dark:text-gray-100"
    />
  );
}
