export default function PokemonCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border bg-white p-4 text-center">
      <div className="mx-auto mb-3 h-24 w-24 rounded-full bg-gray-200" />
      <div className="mx-auto h-4 w-20 rounded bg-gray-200" />
    </div>
  );
}
