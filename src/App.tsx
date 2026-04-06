import { Route, Routes } from "react-router"
import Home from "@/pages/home/Home"
import MealsPage from "@/pages/meals/MealsPage"
import AppLayout from "@/components/layout/AppLayout"
import MealDetailsPage from "@/pages/meals/MealDetailsPage"
import FavoritesPage from "@/pages/favorites/FavoritesPage"
import NotFoundPage from "@/pages/NotFoundPage"

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="meals" element={<MealsPage />} />
        <Route path="meals/:id" element={<MealDetailsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
