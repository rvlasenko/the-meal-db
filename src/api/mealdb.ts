import type { MealCategory, MealDetails, MealListItem } from "@/types/meal"
import { mapMealListItem } from "./mappers/mapMealListItem"
import { mapMealDetails } from "./mappers/mapMealDetails"
import type { MealApi, MealCategoryApi, MealFilterApi } from "./types"
import { mapCategory } from "./mappers/mapCategory"
import { mapFilteredMeal } from "./mappers/mapFilteredMeal"

type MealsResponse<T> = {
  meals: T[] | null
}

const BASE_URL = import.meta.env.VITE_BASE_URL

export async function searchMeals(query: string): Promise<MealListItem[]> {
  const response = await fetch(
    BASE_URL + "search.php?s=" + encodeURIComponent(query),
  )
  if (!response.ok) {
    throw new Error("Search URL is broken")
  }
  const data: MealsResponse<MealApi> = await response.json()
  const meals = data.meals ?? [] // instead of null
  return meals.map(mapMealListItem)
}

export async function getRandomMeal(): Promise<MealDetails> {
  const response = await fetch(BASE_URL + "random.php")
  if (!response.ok) {
    throw new Error("Random URL is broken")
  }
  const data: MealsResponse<MealApi> = await response.json()
  const meal = data.meals?.[0]
  if (!meal) {
    throw new Error("Meal not found")
  }
  return mapMealDetails(meal)
}

export async function getMealById(id: string): Promise<MealDetails> {
  const response = await fetch(BASE_URL + "lookup.php?i=" + id)
  if (!response.ok) {
    throw new Error("Detail URL is broken")
  }
  const data: MealsResponse<MealApi> = await response.json()
  const meal = data.meals?.[0]
  if (!meal) {
    throw new Error("Meal not found")
  }
  return mapMealDetails(meal)
}

export async function getCategories(): Promise<MealCategory[]> {
  const response = await fetch(BASE_URL + "list.php?c=list")
  if (!response.ok) {
    throw new Error("Categories URL is broken")
  }
  const data: MealsResponse<MealCategoryApi> = await response.json()
  const categories = data.meals ?? []
  return categories.map(mapCategory)
}

export async function getMealsByCategory(
  category: string,
): Promise<MealListItem[]> {
  const response = await fetch(
    BASE_URL + "filter.php?c=" + encodeURIComponent(category),
  )
  if (!response.ok) {
    throw new Error("Category not found")
  }
  const data: MealsResponse<MealFilterApi> = await response.json()
  const meals = data.meals ?? []
  return meals.map(mapFilteredMeal)
}
