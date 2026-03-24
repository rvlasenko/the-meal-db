import { getMealById } from "@/api/mealdb"
import EmptyState from "@/components/ui/EmptyState"
import ErrorState from "@/components/ui/ErrorState"
import Loader from "@/components/ui/Loader"
import { useFavorites } from "@/hooks/useFavorites"
import type { MealListItem } from "@/types/meal"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"

export default function MealDetailsPage() {
  const { id = "" } = useParams()
  const { isFavorite, toggle } = useFavorites()

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
  const favoriteItem: MealListItem = {
    id: meal.id,
    name: meal.name,
    category: meal.category,
    area: meal.area,
    image: meal.image,
  }

  return (
    <section>
      <h1>{meal.name}</h1>
      <img src={meal.image} alt={meal.name} width={320} />
      <p>{meal.category}</p>
      <p>{meal.area}</p>

      <ul>
        {meal.ingredients.map((item, index) => (
          <li key={index}>
            {item.name} — {item.measure}
          </li>
        ))}
      </ul>

      <button onClick={() => toggle(favoriteItem)}>
        {favorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </section>
  )
}
