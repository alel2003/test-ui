import { Outlet } from "react-router-dom"

import Navbar from "@/shared/components/templates/navbar"
import Footer from "@/shared/components/templates/footer"

export const MainLayout = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-black">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
