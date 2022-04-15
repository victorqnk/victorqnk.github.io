import { Outlet } from "react-router-dom"
import Navigation from "../components/navigation"

const Layout = () => {
  return (
    <div className="bg-gray-800 text-gray-500 h-screen">
      <Navigation />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <div className="bg-gray-900 fixed bottom-0 w-full">
        <div className="container mx-auto">
          <h6 className="text-sm py-3">Code with ❤️ by <b>victorqnk</b> © 2022</h6>
        </div>
      </div>
    </div>
  )
}

export default Layout
