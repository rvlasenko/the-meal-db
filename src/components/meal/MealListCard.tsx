import type { MealListItem } from "@/types/meal"
import { Link } from "react-router"

type Props = {
  meal: MealListItem
  action?: React.ReactNode
}

export default function MealListCard({ meal, action }: Props) {
  return (
    <li className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
      <Link to={`/meals/${meal.id}`} className="flex flex-col flex-1">
        <div className="overflow-hidden">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 flex flex-col flex-1">
          <p className="font-semibold text-gray-800 text-sm leading-snug line-clamp-2">
            {meal.name}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {meal.category && (
              <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-600 font-medium">
                {meal.category}
              </span>
            )}
            {meal.area && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700 font-medium">
                {meal.area}
              </span>
            )}
          </div>
        </div>
      </Link>
      {action && <div className="px-3 pb-3">{action}</div>}
    </li>
  )
}
