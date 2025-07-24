import { Suspense, lazy } from "react"
import { createRoot } from "react-dom/client"

import Spiner from "./shared/components/templates/spinner/index.tsx"

import "./assets/css/index.css"

const App = lazy(() => import("./app/index.tsx"))

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Spiner />}>
    <App />
  </Suspense>
)
