import type { MealListItem } from "@/types/meal"
import { Link } from "react-router"

type Props = {
  meal: MealListItem
}

export default function MealCard({ meal }: Props) {
  return (
    <Link to={`/meals/${meal.idMeal}`}>
      <li>
        <img src={meal.strMealThumb} alt={meal.strMeal} width={120} />
        <div>{meal.strMeal}</div>
        <div>{meal.strCategory}</div>
        <div>{meal.strArea}</div>
      </li>
    </Link>
  )
}
