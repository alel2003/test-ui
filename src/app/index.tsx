import { lazy } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { MainLayout } from "@/shared/layout"

const HomePage = lazy(() => import("@/pages/home"))
const ResultsPage = lazy(() => import("@/pages/results"))
const NotFoundPage = lazy(() => import("@/pages/not-found"))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
