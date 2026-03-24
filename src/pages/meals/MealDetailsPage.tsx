import { getMealById } from "@/api/mealdb"
import EmptyState from "@/components/ui/EmptyState"
import ErrorState from "@/components/ui/ErrorState"
import Loader from "@/components/ui/Loader"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"

export default function MealDetailsPage() {
  const { id = "" } = useParams()

  const {
    isPending,
    isError,
    error,
    data: meal,
  } = useQuery({
    queryKey: ["meals", id],
    queryFn: () => getMealById(id),
    enabled: Boolean(id),
  })

  if (!id) return <EmptyState message="Meal id is missing" />

  if (isPending) return <Loader />

  if (isError)
    return (
      <ErrorState
        message={error instanceof Error ? error.message : "Unknown error"}
      />
    )

  if (!meal) return <EmptyState message="No meal found" />

  return (
    <section>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} width={320} />
      <p>{meal.strCategory}</p>
      <p>{meal.strArea}</p>
      <p>{meal.strInstructions}</p>
    </section>
  )
}
