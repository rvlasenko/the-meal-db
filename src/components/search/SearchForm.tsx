import { useState } from "react"
import { useNavigate } from "react-router"

type Props = {
  initialValue?: string
}

export default function SearchForm({ initialValue = "" }: Props) {
  const [query, setQuery] = useState(initialValue)
  const navigate = useNavigate()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/meals?query=${query}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="search"
        name="query"
        value={query}
        onChange={handleSearch}
        placeholder="Search meals, e.g. Pasta, Chicken..."
        className="flex-1 rounded-xl border border-white/40 bg-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-white/80 focus:bg-white/30 transition"
      />
      <button
        type="submit"
        className="rounded-xl bg-white px-6 py-3 font-semibold text-orange-500 shadow hover:bg-orange-50 transition"
      >
        Search
      </button>
    </form>
  )
}
