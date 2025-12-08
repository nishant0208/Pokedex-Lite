"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function AppHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-red-400 font-semibold"
        : "hover:text-red-300"
    }`;

  return (
    <motion.header
      initial={{ height: 80 }}
      animate={{ height: open ? 230 : 80 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="sticky top-0 z-50 overflow-hidden
                 border-b border-black/10
                 bg-white/70 backdrop-blur-xl
                 dark:bg-gray-900/70 dark:text-gray-100"
    >
      {/* ✅ TOP BAR */}
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4">

        {/* ✅ LOGO */}
        <Link
          href="/"
          className="whitespace-nowrap text-xl font-bold leading-none"
        >
          Pokédex <span className="text-red-400">Lite</span>
        </Link>

        {/* ✅ DESKTOP NAV (UNCHANGED BEHAVIOR) */}
        <nav className="hidden items-center gap-6 whitespace-nowrap md:flex">
          <Link href="/pokedex" className={linkClass("/pokedex")}>
            Pokédex
          </Link>
          <Link href="/favorites" className={linkClass("/favorites")}>
            Favorites
          </Link>

          <SignedOut>
            <SignInButton>
              <button className="rounded-full bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>

        {/* ✅ MOBILE RIGHT SIDE (PROFILE + HAMBURGER) */}
        <div className="flex items-center gap-3 md:hidden">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {/* 🔵 Animated Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="relative h-8 w-8"
          >
            <motion.span
              animate={{
                rotate: open ? 55 : 0,
                y: open ? 6 : -4,
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-1/2 h-[2px] w-full bg-current"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="absolute left-0 top-1/2 h-[2px] w-full bg-current"
            />
            <motion.span
              animate={{
                rotate: open ? -55 : 0,
                y: open ? -2 : 4,
              }}
               transition={{ duration: 0.2 }}
              className="absolute left-0 top-1/2 h-[2px] w-full bg-current"
            />
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      <div className="px-4 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-2 bg-gray-900 py-4 text-white"
        >
          <Link
            href="/pokedex"
            onClick={() => setOpen(false)}
            className={`block py-2 ${pathname === "/pokedex" && "text-red-400"}`}
          >
            Pokédex
          </Link>

          <Link
            href="/favorites"
            onClick={() => setOpen(false)}
            className={`block py-2 ${pathname === "/favorites" && "text-red-400"}`}
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
        </motion.div>
      </div>
    </motion.header>
  );
}
