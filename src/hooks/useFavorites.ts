import { addFavorite, getFavorites, removeFavorite } from "@/lib/favorites"
import type { MealListItem } from "@/types/meal"
import { useState } from "react"

export function useFavorites() {
  const [favorites, setFavorites] = useState<MealListItem[]>(
    () => getFavorites(), // lazy initialization for huge localStorage operation
  ) // source of truth

  const isFavorite = (id: string) => {
    return favorites.some((item) => item.id === id)
  }

  const toggle = (item: MealListItem) => {
    if (isFavorite(item.id)) {
      removeFavorite(item.id)
      setFavorites((prev) => prev.filter((i) => i.id !== item.id))
    } else {
      addFavorite(item)
      setFavorites((prev) => [...prev, item])
    }
  }

  return {
    favorites,
    isFavorite,
    toggle,
  }
}
