import { Link, NavLink } from "react-router"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-orange-100 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-xl text-orange-500"
        >
          <span className="text-2xl">🍴</span>
          MealDB
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-gray-600 hover:text-orange-500 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "text-gray-600 hover:text-orange-500 transition-colors"
            }
          >
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
