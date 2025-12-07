import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  hasNextPage: boolean;
};

export default function Pagination({
  currentPage,
  hasNextPage,
}: PaginationProps) {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      {currentPage > 1 && (
        <Link
          href={`/pokedex?page=${currentPage - 1}`}
          className="rounded-md border bg-white px-4 py-2 text-sm
                     text-gray-800 hover:bg-gray-100 transition"
        >
          ← Previous
        </Link>
      )}

      <span className="text-sm font-medium text-gray-600">
        Page {currentPage}
      </span>

      {hasNextPage && (
        <Link
          href={`/pokedex?page=${currentPage + 1}`}
          className="rounded-md border bg-white px-4 py-2 text-sm
                     text-gray-800 hover:bg-gray-100 transition"
        >
          Next →
        </Link>
      )}
    </div>
  );
}
