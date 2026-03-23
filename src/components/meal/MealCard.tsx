import type { Meal } from "../../types/meal"

export default function MealCard({ meal }: { meal: Meal }) {
  return (
    <li>
      <img src={meal.strMealThumb} alt={meal.strMeal} width={120} />
      <div>{meal.strMeal}</div>
      <div>{meal.strCategory}</div>
      <div>{meal.strArea}</div>
    </li>
  )
}
