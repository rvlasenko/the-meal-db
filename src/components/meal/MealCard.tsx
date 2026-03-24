import type { MealListItem } from "@/types/meal"
import { Link } from "react-router"

type Props = {
  meal: MealListItem
}

export default function MealCard({ meal }: Props) {
  return (
    <Link to={`/meals/${meal.id}`}>
      <li>
        <img src={meal.image} alt={meal.name} width={120} />
        <div>{meal.name}</div>
        <div>{meal.category}</div>
        <div>{meal.area}</div>
      </li>
    </Link>
  )
}
