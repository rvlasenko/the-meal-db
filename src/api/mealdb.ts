import type { Meal } from "../types/meal"

type SearchMealsResponse = {
  meals: Meal[] | null
}

const BASE_URL = import.meta.env.VITE_BASE_URL

export async function searchMeals(query: string): Promise<Meal[]> {
  const response = await fetch(
    BASE_URL + "search.php?s=" + encodeURIComponent(query),
  )
  if (!response.ok) {
    throw new Error("Meals URL are broken")
  }
  const data: SearchMealsResponse = await response.json()
  return data.meals ?? [] // instead of null
}
