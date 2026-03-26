import type { MealListItem } from "@/types/meal"

const KEY = "favorites"

export function getFavorites(): MealListItem[] {
  const raw = localStorage.getItem(KEY)
  if (!raw) return []

  try {
    return JSON.parse(raw) // implement zod
  } catch {
    return []
  }
}

export function saveFavorites(items: MealListItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items))
}

export function isFavorite(id: string) {
  const items = getFavorites()
  return items.some((item) => item.id === id)
}

export function addFavorite(item: MealListItem) {
  const items = getFavorites()
  saveFavorites([...items, item])
}

export function removeFavorite(id: string) {
  const items = getFavorites()
  saveFavorites(items.filter((item) => item.id !== id))
}
