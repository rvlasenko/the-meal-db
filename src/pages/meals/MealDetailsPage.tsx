import { mapMealDetailsToListItem } from "@/api/mappers/mapMealDetailsToListItem"
import { getMealById } from "@/api/mealdb"
import EmptyState from "@/components/ui/EmptyState"
import ErrorState from "@/components/ui/ErrorState"
import Loader from "@/components/ui/Loader"
import { useFavorites } from "@/hooks/useFavorites"
import { useRecentMeals } from "@/hooks/useRecentMeals"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useParams } from "react-router"

export default function MealDetailsPage() {
  const { id = "" } = useParams()
  const { isFavorite, toggle } = useFavorites()
  const { add } = useRecentMeals()

  const {
    isPending,
    isError,
    error,
    data: meal,
  } = useQuery({
    queryKey: ["meals", "details", id],
    queryFn: () => getMealById(id),
    enabled: Boolean(id),
  })

  useEffect(() => {
    if (!meal) return
    add(mapMealDetailsToListItem(meal))
  }, [meal])

  if (!id) return <EmptyState message="Meal id is missing" />
  if (isPending) return <Loader />
  if (isError)
    return (
      <ErrorState
        message={error instanceof Error ? error.message : "Unknown error"}
      />
    )
  if (!meal) return <EmptyState message="No meal found" />

  const favorite = isFavorite(meal.id)
  const listItem = mapMealDetailsToListItem(meal)

  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-orange-100">
          <div className="relative h-72 sm:h-96">
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h1 className="text-3xl font-extrabold text-white drop-shadow">
                {meal.name}
              </h1>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-500/90 px-3 py-1 text-sm text-white font-medium">
                  {meal.category}
                </span>
                <span className="rounded-full bg-amber-400/90 px-3 py-1 text-sm text-white font-medium">
                  {meal.area}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid gap-8 sm:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="mb-3 text-lg font-bold text-gray-800">
                Ingredients
              </h2>
              <ul className="space-y-1.5">
                {meal.ingredients.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between gap-2 rounded-lg bg-orange-50 px-3 py-2 text-sm"
                  >
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {item.measure}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <button
                onClick={() => toggle(listItem)}
                className={`w-full rounded-xl px-6 py-3 font-semibold transition-colors ${
                  favorite
                    ? "bg-amber-100 text-amber-700 hover:bg-amber-200"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                ⭐ {favorite ? "Remove from Favorites" : "Add to Favorites"}
              </button>

              {meal.youtube && (
                <div className="overflow-hidden rounded-xl">
                  <iframe
                    width="100%"
                    height="280"
                    src={meal.youtube.replace("watch?v=", "embed/")}
                    title={meal.name}
                    allowFullScreen
                    className="block"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
