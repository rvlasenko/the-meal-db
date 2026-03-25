import { getRandomMeal } from "@/api/mealdb"
import { useQuery } from "@tanstack/react-query"
import Loader from "../ui/Loader"
import ErrorState from "../ui/ErrorState"
import { Link } from "react-router"

export default function RandomMealSection() {
  const {
    isPending,
    isError,
    error,
    refetch,
    data: meal,
  } = useQuery({
    queryKey: ["meals", "random"],
    queryFn: () => getRandomMeal(),
  })

  if (isPending) return <Loader />

  if (isError)
    return (
      <ErrorState
        message={error instanceof Error ? error.message : "Unknown error"}
      />
    )

  if (!meal) return null // empty section

  return (
    <section>
      <h2>Random meal</h2>

      <div>
        <img src={meal.image} alt={meal.name} width={200} />

        <div>{meal.name}</div>
        <div>{meal.category}</div>
        <div>{meal.area}</div>

        <div>
          <Link to={`/meals/${meal.id}`}>View recipe</Link>

          <button onClick={() => refetch()}>Another one</button>
        </div>
      </div>
    </section>
  )
}
