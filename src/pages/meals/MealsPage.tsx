import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"
import { searchMeals } from "@/api/mealdb"
import Loader from "@/components/ui/Loader"
import ErrorState from "@/components/ui/ErrorState"
import EmptyState from "@/components/ui/EmptyState"
import MealListCard from "@/components/meal/MealListCard"
import SearchForm from "@/components/search/SearchForm"

export default function MealsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("query")?.trim() ?? ""

  const {
    isPending,
    isError,
    error,
    data: meals,
  } = useQuery({
    queryKey: ["meals", "search", query], // it's better when there will be categories, details
    queryFn: () => searchMeals(query),
    enabled: Boolean(query), // it's better to add this check to prevent empty query
  })

  if (!query) return <EmptyState message="Enter a search query" />

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
      <h1>Search results for: {query}</h1>

      <SearchForm initialValue={query} />

      <ul>
        {meals.map((meal) => (
          <MealListCard key={meal.id} meal={meal} />
        ))}
      </ul>
    </section>
  )
}
