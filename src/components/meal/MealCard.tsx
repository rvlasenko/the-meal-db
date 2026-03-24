import type { MealListItem } from "@/types/meal"
import { Link } from "react-router"

type Props = {
  meal: MealListItem
  action?: React.ReactNode
}

export default function MealCard({ meal, action }: Props) {
  return (
    <li>
      <Link to={`/meals/${meal.id}`}>
        <img src={meal.image} alt={meal.name} width={120} />
        <div>{meal.name}</div>
        <div>{meal.category}</div>
        <div>{meal.area}</div>
      </Link>
      {action}
    </li>
  )
}
