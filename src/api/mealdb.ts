import type { MealApi, MealDetails, MealListItem } from "@/types/meal"
import { mapMealListItem } from "./mappers/mapMealListItem"
import { mapMealDetails } from "./mappers/mapMealDetails"

type MealsResponse = {
  meals: MealApi[] | null
}

const BASE_URL = import.meta.env.VITE_BASE_URL

export async function searchMeals(query: string): Promise<MealListItem[]> {
  const response = await fetch(
    BASE_URL + "search.php?s=" + encodeURIComponent(query),
  )
  if (!response.ok) {
    throw new Error("Search URL is broken")
  }
  const data: MealsResponse = await response.json()
  const meals = data.meals ?? [] // instead of null
  return meals.map(mapMealListItem)
}

export async function getMealById(id: string): Promise<MealDetails> {
  const response = await fetch(BASE_URL + "lookup.php?i=" + id)
  if (!response.ok) {
    throw new Error("Detail URL is broken")
  }
  const data: MealsResponse = await response.json()
  const meal = data.meals?.[0]
  if (!meal) {
    throw new Error("Detailed meal does not exist")
  }
  return mapMealDetails(meal)
}
