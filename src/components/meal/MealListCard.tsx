import type { MealListItem } from "@/types/meal"
import { Link } from "react-router"

type Props = {
  meal: MealListItem
  action?: React.ReactNode
}

export default function MealListCard({ meal, action }: Props) {
  return (
    <li>
      <Link to={`/meals/${meal.id}`}>
        <img src={meal.image} alt={meal.name} width={120} />
        <div>{meal.name}</div>
        {meal.category && <div>{meal.category}</div>}
        {meal.area && <div>{meal.area}</div>}
      </Link>
      {action}
    </li>
  )
}
