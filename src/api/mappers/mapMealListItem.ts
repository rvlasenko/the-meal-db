import type { MealApi, MealListItem } from "@/types/meal"

export function mapMealListItem(apiItem: MealApi): MealListItem {
  return {
    id: apiItem.idMeal,
    name: apiItem.strMeal,
    category: apiItem.strCategory,
    area: apiItem.strArea,
    image: apiItem.strMealThumb,
  }
}
