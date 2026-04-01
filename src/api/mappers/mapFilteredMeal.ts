import type { MealListItem } from "@/types/meal"
import type { MealFilterApi } from "../types"

export function mapFilteredMeal(api: MealFilterApi): MealListItem {
  return {
    id: api.idMeal,
    name: api.strMeal,
    image: api.strMealThumb,
    area: null,
    category: null,
  }
}
