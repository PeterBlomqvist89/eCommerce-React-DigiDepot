import { Outlet } from "react-router-dom"
import { Navbar } from '../components/Navbar'
import ProductProvider from "../contexts/ProductContext"
import SidebarProvider from "../contexts/SideBarContext"
import Sidebar from "../components/Sidebar"
import CartProvider from "../contexts/CartContext"

function RootLayout() {
  return (
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <div>
              <Sidebar />
              <Navbar />
              <Outlet />
              <footer> <p>2024 DigiDepot. All right reserved</p></footer>
          </div>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  )
}
export default RootLayout