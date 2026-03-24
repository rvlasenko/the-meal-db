import { Link } from "react-router"

export default function Header() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </>
  )
}
