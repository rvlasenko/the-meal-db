import { Outlet } from "react-router"
import Header from "./Header"

export default function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
