import { Link } from "react-router"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-8xl font-extrabold text-orange-200">404</p>
      <h1 className="mt-2 text-2xl font-bold text-gray-800">Page Not Found</h1>
      <p className="mt-2 text-gray-500">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
