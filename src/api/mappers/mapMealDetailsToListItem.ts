import type { MealDetails, MealListItem } from "@/types/meal"

export function mapMealDetailsToListItem(meal: MealDetails): MealListItem {
  return {
    id: meal.id,
    name: meal.name,
    category: meal.category,
    area: meal.area,
    image: meal.image,
  }
}
