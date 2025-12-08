"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  hasNextPage: boolean;
};

export default function Pagination({ currentPage, hasNextPage }: Props) {
  const pages = [1, 2, 3, "...", 8, 9, 10];

  return (
    <div className="mt-10 flex justify-center">
      <div className="flex items-center overflow-hidden rounded-xl
                      border border-gray-300
                      bg-white shadow-sm
                      dark:border-gray-700 dark:bg-gray-700">
        
        {/* ⬅ Prev */}
        <Link
          href={`/pokedex?page=${Math.max(1, currentPage - 1)}`}
          className="flex h-10 w-10 items-center justify-center
                     border-r border-gray-300
                     hover:bg-gray-100
                     dark:border-gray-500 dark:hover:bg-gray-800"
        >
          <ChevronLeft size={18} />
        </Link>

        {/* Pages */}
        {pages.map((p, i) =>
          p === "..." ? (
            <span
              key={i}
              className="flex h-10 w-10 items-center justify-center 
                         text-gray-500"
            >
              …
            </span>
          ) : (
            <Link
              key={i}
              href={`/pokedex?page=${p}`}
              className={`flex h-10 w-10 items-center justify-center
                border-r border-gray-500 text-sm font-medium
                transition
                dark:border-gray-500
                ${
                  p === currentPage
                    ? "bg-red-500 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
            >
              {p}
            </Link>
          )
        )}

        {/* ➡ Next */}
        <Link
          href={`/pokedex?page=${currentPage + 1}`}
          className={`flex h-10 w-10 items-center justify-center
                      hover:bg-gray-100
                      dark:hover:bg-gray-800
                      ${
                        hasNextPage ? "" : "pointer-events-none opacity-40"
                      }`}
        >
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
}
