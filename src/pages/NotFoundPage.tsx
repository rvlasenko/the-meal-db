import { Link } from "react-router"

export default function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}
