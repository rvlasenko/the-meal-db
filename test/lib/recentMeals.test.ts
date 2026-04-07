import { afterEach, describe, expect, test } from "vitest"
import { addRecentMeal, getRecentMeals } from "../../src/lib/recentMeals"

describe("addRecentMeal", () => {
  const basicMeal = { id: "1", name: "Pizza" }

  afterEach(() => {
    localStorage.clear()
  })

  test("adds new meal to recent meals", () => {
    addRecentMeal(basicMeal)
    const result = getRecentMeals()
    expect(result.length).toBe(1)
    expect(result[0]).toEqual(basicMeal)
  })

  test("does not duplicate the same meal", () => {
    addRecentMeal(basicMeal)
    addRecentMeal(basicMeal)
    expect(getRecentMeals().length).toBe(1)
  })

  test("adds new meal to the beginning of the list", () => {
    const meal = { id: "2", name: "Burger" }
    addRecentMeal(basicMeal)
    addRecentMeal(meal)
    const result = getRecentMeals()
    expect(result[0]).toEqual(meal)
  })
})
