import { getCategories } from "@/api/mealdb"
import { useQuery } from "@tanstack/react-query"
import Loader from "../ui/Loader"
import ErrorState from "../ui/ErrorState"
import { Link } from "react-router"

export default function CategoriesSection() {
  const {
    data: categories,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  })

  if (isPending) return <Loader />

  if (isError)
    return (
      <ErrorState
        message={error instanceof Error ? error.message : "Unknown error"}
      />
    )

  if (!categories) return null // empty section

  return (
    <section>
      <h2>Categories</h2>

      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <Link to={`/meals?category=${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
