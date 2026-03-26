import { useRecentMeals } from "@/hooks/useRecentMeals"
import MealListCard from "../meal/MealListCard"

export default function LatestViewedSection() {
  const { recentMeals } = useRecentMeals()

  if (!recentMeals.length) return null

  return (
    <section>
      <h2>Recently viewed</h2>

      <ul>
        {recentMeals.map((meal) => (
          <MealListCard key={meal.id} meal={meal} />
        ))}
      </ul>
    </section>
  )
}
