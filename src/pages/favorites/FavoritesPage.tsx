import MealCard from "@/components/meal/MealCard"
import EmptyState from "@/components/ui/EmptyState"
import { useFavorites } from "@/hooks/useFavorites"

export default function FavoritesPage() {
  const { favorites, toggle } = useFavorites()

  if (!favorites.length) return <EmptyState message="No favorite meals found" />

  return (
    <>
      <div>your favorite meals</div>
      <ul>
        {favorites.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
            action={<button onClick={() => toggle(meal)}>Remove</button>}
          />
        ))}
      </ul>
    </>
  )
}
