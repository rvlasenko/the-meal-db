import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"
import { getMealsByCategory, searchMeals } from "@/api/mealdb"
import Loader from "@/components/ui/Loader"
import ErrorState from "@/components/ui/ErrorState"
import EmptyState from "@/components/ui/EmptyState"
import MealListCard from "@/components/meal/MealListCard"
import SearchForm from "@/components/search/SearchForm"

export default function MealsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("query")?.trim() ?? ""
  const category = searchParams.get("category")?.trim() ?? ""

  const hasQuery = Boolean(query)
  const hasCategory = Boolean(category)
  const source = hasQuery ? "query" : hasCategory ? "category" : null // query wins if category

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
    enabled: hasQuery || hasCategory, // it's better to add this check to prevent empty query
  })

  if (isPending) return <Loader />

  if (isError)
    return (
      <ErrorState
        message={error instanceof Error ? error.message : "Unknown error"}
      />
    )

  if (!meals.length) return <EmptyState message="No meals found" />

  return (
    <section>
      <h1>
        {source === "query"
          ? `Search results for: ${query}`
          : `Category: ${category}`}
      </h1>

      <SearchForm initialValue={source === "query" ? query : ""} />

      <ul>
        {meals.map((meal) => (
          <MealListCard key={meal.id} meal={meal} />
        ))}
      </ul>
    </section>
  )
}
