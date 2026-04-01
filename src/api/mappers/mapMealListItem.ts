import type { MealListItem } from "@/types/meal"
import type { MealApi } from "../types"

export function mapMealListItem(apiItem: MealApi): MealListItem {
  return {
    id: apiItem.idMeal,
    name: apiItem.strMeal,
    category: apiItem.strCategory,
    area: apiItem.strArea,
    image: apiItem.strMealThumb,
  }
}
