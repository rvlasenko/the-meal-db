import type { MealApi, MealListItem } from "@/types/meal"

type MealsResponse = {
  meals: MealApi[] | null
}

const BASE_URL = import.meta.env.VITE_BASE_URL

export async function searchMeals(query: string): Promise<MealListItem[]> {
  const response = await fetch(
    BASE_URL + "search.php?s=" + encodeURIComponent(query),
  )
  if (!response.ok) {
    throw new Error("Meals URL is broken")
  }
  const data: MealsResponse = await response.json()
  return data.meals ?? [] // instead of null
}

export async function getMealById(id: string): Promise<MealApi> {
  const response = await fetch(BASE_URL + "lookup.php?i=" + id)
  if (!response.ok) {
    throw new Error("Detailed meal URL is broken")
  }
  const data: MealsResponse = await response.json()
  if (!data.meals?.[0]) {
    throw new Error("Detailed meal does not exist")
  }
  return data.meals[0]
}
