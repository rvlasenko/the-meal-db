import type { MealListItem } from "@/types/meal"

const KEY = "recent"

// storage logic
export function getRecentMeals(): MealListItem[] {
  const raw = localStorage.getItem(KEY)
  if (!raw) return []

  try {
    return JSON.parse(raw) // implement zod
  } catch {
    return []
  }
}

export function addRecentMeal(item: MealListItem) {
  const meals = getRecentMeals()
  const filtered = meals.filter((meal) => meal.id !== item.id)

  saveRecent([item, ...filtered])
}

function saveRecent(items: MealListItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items))
}
