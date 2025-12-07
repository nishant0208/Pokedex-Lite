import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">
        Welcome to <span className="text-red-500">Pokédex Lite</span>
      </h1>

      <p className="mb-8 max-w-xl text-gray-600">
        A fast, modern Pokédex built with Next.js, TypeScript, and PokéAPI.
      </p>

      <Link
        href="/pokedex"
        className="rounded-lg bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-600"
      >
        Enter Pokédex
      </Link>
    </section>
  );
}
