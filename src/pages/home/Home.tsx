import { useState } from "react"
import { useNavigate } from "react-router"

export default function Home() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    navigate(`/meals?query=${query}`)
  }

  return (
    <>
      <div>cool hero about project</div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="query"
          value={query}
          onChange={handleSearch}
        />
        <button>submit</button>
      </form>
    </>
  )
}
