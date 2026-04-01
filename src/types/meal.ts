// Domain types

export type MealListItem = {
  id: string
  name: string
  image: string
  category: string | null
  area: string | null
}

export type Ingredient = {
  name: string
  measure: string
}

export type MealDetails = {
  id: string
  name: string
  category: string
  area: string
  instructions: string
  image: string
  ingredients: Ingredient[]
  youtube: string | null
}

export type MealCategory = {
  name: string
}
