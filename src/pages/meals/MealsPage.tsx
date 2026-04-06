import { useQuery } from "@tanstack/react-query"
import { useSearchParams, useNavigate } from "react-router"
import { getMealsByCategory, searchMeals } from "@/api/mealdb"
import Loader from "@/components/ui/Loader"
import ErrorState from "@/components/ui/ErrorState"
import EmptyState from "@/components/ui/EmptyState"
import MealListCard from "@/components/meal/MealListCard"
import { useState } from "react"

export default function MealsPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get("query")?.trim() ?? ""
  const category = searchParams.get("category")?.trim() ?? ""

  const hasQuery = Boolean(query)
  const hasCategory = Boolean(category)
  const source = hasQuery ? "query" : hasCategory ? "category" : null

  const [inputValue, setInputValue] = useState(source === "query" ? query : "")

  const queryKey = ["meals", source, source === "query" ? query : category]
  const queryFn = () => {
    if (source === "query") return searchMeals(query)
    if (source === "category") return getMealsByCategory(category)
    return Promise.resolve([])
  }

  const {
    data: meals,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey,
    queryFn,
    enabled: hasQuery || hasCategory,
  })

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    navigate(`/meals?query=${inputValue}`)
  }

  if (isPending) return <Loader />

  if (isError)
    return (
      <ErrorState
        message={error instanceof Error ? error.message : "Unknown error"}
      />
    )

  if (!meals.length) return <EmptyState message="No meals found" />

  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          {source === "query"
            ? `Results for "${query}"`
            : `Category: ${category}`}
        </h1>

        <form onSubmit={handleSubmit} className="mb-8 flex max-w-xl gap-2">
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Refine your search..."
            className="flex-1 rounded-xl border border-orange-200 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
          />
          <button
            type="submit"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition-colors"
          >
            Search
          </button>
        </form>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {meals.map((meal) => (
            <MealListCard key={meal.id} meal={meal} />
          ))}
        </ul>
      </div>
    </section>
  )
}
