import { Route, Routes } from "react-router"
import Home from "./pages/home/Home"
import MealsPage from "./pages/meals/MealsPage"
import AppLayout from "./components/layout/AppLayout"

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="meals" element={<MealsPage />} />
      </Route>
    </Routes>
  )
}

export default App
