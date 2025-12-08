import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import FavoritesClient from "./FavoritesClient";

export default async function FavoritesPage() {
  const { userId } = await auth();

  // 🔒 Not signed in
  if (!userId) {
    return (
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold">Favorites</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Please sign in to view your favorite Pokémon.
        </p>

        <Link
          href="/sign-in"
          className="rounded-full bg-red-500 px-6 py-3 text-white transition hover:bg-red-600"
        >
          Sign In
        </Link>
      </section>
    );
  }

  // ✅ Signed in
  return <FavoritesClient />;
}
