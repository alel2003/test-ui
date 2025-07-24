import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="container mx-auto border-b-2 border-white p-5">
      <Link
        to="/"
        className="text-[16px] font-medium text-white uppercase md:text-[20px]">
        Numbers API
      </Link>
    </nav>
  )
}
