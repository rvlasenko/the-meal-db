import { getRandomMeal } from "@/api/mealdb"
import { useQuery } from "@tanstack/react-query"
import Loader from "../ui/Loader"
import ErrorState from "../ui/ErrorState"
import { Link } from "react-router"

export default function RandomMealSection() {
  const {
    isPending,
    isError,
    error,
    refetch,
    data: meal,
  } = useQuery({
    queryKey: ["meals", "random"],
    queryFn: () => getRandomMeal(),
  })

  if (isPending) return <Loader />

  if (isError)
    return (
      <ErrorState
        message={error instanceof Error ? error.message : "Unknown error"}
      />
    )

  if (!meal) return null

  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          ✨ Random Meal
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 overflow-hidden rounded-2xl bg-white shadow-sm border border-orange-100">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full sm:w-64 h-56 sm:h-auto object-cover shrink-0"
          />

          <div className="flex flex-col justify-center gap-3 p-6">
            <h3 className="text-2xl font-bold text-gray-900">{meal.name}</h3>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-600 font-medium">
                {meal.category}
              </span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-700 font-medium">
                {meal.area}
              </span>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                to={`/meals/${meal.id}`}
                className="rounded-xl bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
              >
                View Recipe
              </Link>
              <button
                onClick={() => refetch()}
                className="rounded-xl border border-orange-200 px-5 py-2 text-sm font-semibold text-orange-500 hover:bg-orange-50 transition-colors"
              >
                Another one 🎲
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
