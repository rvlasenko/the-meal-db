import { Outlet } from "react-router"
import Header from "./Header"

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-orange-50/40">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
