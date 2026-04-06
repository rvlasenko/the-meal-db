import MealListCard from "@/components/meal/MealListCard"
import EmptyState from "@/components/ui/EmptyState"
import { useFavorites } from "@/hooks/useFavorites"

export default function FavoritesPage() {
  const { favorites, toggle } = useFavorites()

  if (!favorites.length)
    return <EmptyState message="You haven't saved any favorite meals yet." />

  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          ⭐ Your Favorites
        </h1>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {favorites.map((meal) => (
            <MealListCard
              key={meal.id}
              meal={meal}
              action={
                <button
                  onClick={() => toggle(meal)}
                  className="w-full rounded-lg border border-red-200 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 transition-colors"
                >
                  Remove
                </button>
              }
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
