import type { Ingredient, MealApi, MealDetails } from "@/types/meal"

export function mapMealDetails(apiItem: MealApi): MealDetails {
  const ingredients: Ingredient[] = []

  for (let i = 1; i <= 20; i++) {
    const ingredient = apiItem[`strIngredient${i}` as keyof MealApi]?.trim()
    const measure = apiItem[`strMeasure${i}` as keyof MealApi]?.trim()

    if (ingredient && measure) {
      ingredients.push({
        name: ingredient,
        measure: measure,
      })
    }
  }

  return {
    id: apiItem.idMeal,
    name: apiItem.strMeal,
    category: apiItem.strCategory,
    area: apiItem.strArea,
    instructions: apiItem.strInstructions,
    image: apiItem.strMealThumb,
    youtube: apiItem.strYoutube,
    ingredients,
  }
}
