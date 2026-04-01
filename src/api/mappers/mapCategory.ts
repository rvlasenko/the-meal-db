import type { MealCategory } from "@/types/meal"
import type { MealCategoryApi } from "../types"

export function mapCategory(api: MealCategoryApi): MealCategory {
  return {
    name: api.strCategory,
  }
}
