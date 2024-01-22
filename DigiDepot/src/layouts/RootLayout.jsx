import { Outlet } from "react-router-dom"
import { Navbar } from '../components/Navbar'

function RootLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <footer> <p>2024 DigiDepot. All right reserved</p></footer>
    </div>
  )
}
export default RootLayout