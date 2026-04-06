import { useRecentMeals } from "@/hooks/useRecentMeals"
import MealListCard from "../meal/MealListCard"

export default function LatestViewedSection() {
  const { recentMeals } = useRecentMeals()

  if (!recentMeals.length) return null

  return (
    <section className="py-12 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          🕐 Recently Viewed
        </h2>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {recentMeals.map((meal) => (
            <MealListCard key={meal.id} meal={meal} />
          ))}
        </ul>
      </div>
    </section>
  )
}
