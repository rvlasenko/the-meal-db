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

  if (!categories) return null

  return (
    <section className="py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          🗂️ Browse by Category
        </h2>

        <ul className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                to={`/meals?category=${category.name}`}
                className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
