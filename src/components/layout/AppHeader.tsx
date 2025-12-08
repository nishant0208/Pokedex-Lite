"use client";

import Link from "next/link";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function AppHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-700 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* ✅ Logo */}

        <Link href="/" className="text-xl font-bold">
          Pokédex <span className="text-red-400">Lite</span>
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/pokedex" className="hover:text-red-300">
            Pokédex
          </Link>
          <Link href="/favorites" className="hover:text-red-300">
            Favorites
          </Link>

          <SignedOut>
            <SignInButton>
              <button className="rounded-full bg-red-500 px-4 py-2 text-sm hover:bg-red-600">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Dropdown */}
      {open && (
        <div className="space-y-2 bg-gray-800 px-4 pb-4 md:hidden">
          <Link
            href="/pokedex"
            onClick={() => setOpen(false)}
            className="block py-2"
          >
            Pokédex
          </Link>

          <Link
            href="/favorites"
            onClick={() => setOpen(false)}
            className="block py-2"
          >
            Favorites
          </Link>

          <SignedOut>
            <SignInButton>
              <button className="mt-2 w-full rounded-full bg-red-500 py-2 text-sm">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
    </header>
  );
}
