import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ThemeToggle from "../common/ThemeToggle";
export default function AppHeader() {
  return (

    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 
                   backdrop-blur-md border-b border-gray-200 dark:border-gray-800">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          <h1 className="text-xl font-extrabold tracking-tight">
            Pokédex <span className="text-red-500">Lite</span>
          </h1>

        </Link>


        <nav className="flex gap-6 text-sm font-medium">
          <div className="flex items-center gap-4">
            <SignedOut>
              <Link
                href="/sign-in"
                className="rounded-full bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
              >
                Sign In
              </Link>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          <Link href="/pokedex" className="hover:text-red-500">
            Pokédex
          </Link>
          <Link href="/favorites" className="hover:text-red-500">
            Favorites
          </Link>
          <ThemeToggle />
        </nav>

      </div>

    </header>

  );
}
