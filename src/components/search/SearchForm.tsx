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
    <form onSubmit={handleSubmit}>
      <input type="search" name="query" value={query} onChange={handleSearch} />
      <button>submit</button>
    </form>
  )
}
