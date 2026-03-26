import { addRecentMeal, getRecentMeals } from "@/lib/recentMeals"
import type { MealListItem } from "@/types/meal"
import { useState } from "react"

// hook to sync with react
export function useRecentMeals() {
  const [recentMeals, setRecentMeals] = useState<MealListItem[]>(
    () => getRecentMeals(), // lazy initialization for huge localStorage operation
  )

  const add = (item: MealListItem) => {
    addRecentMeal(item)
    setRecentMeals([item, ...recentMeals])
  }

  return {
    recentMeals,
    add,
  }
}
