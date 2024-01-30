import { Outlet } from "react-router-dom"
import { Navbar } from '../components/Navbar'
import ProductProvider from "../contexts/ProductContext"
import SidebarProvider from "../contexts/SideBarContext"
import Sidebar from "../components/Sidebar"

function RootLayout() {
  return (
    <SidebarProvider>
      <ProductProvider>
        <div>
            <Sidebar />
            <Navbar />
            <Outlet />
            <footer> <p>2024 DigiDepot. All right reserved</p></footer>
        </div>
      </ProductProvider>
    </SidebarProvider>
  )
}
export default RootLayout