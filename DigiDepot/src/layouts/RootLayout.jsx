import { Outlet } from "react-router-dom"
import { Navbar } from '../components/Navbar'
import ProductProvider from "../contexts/ProductContext"

function RootLayout() {
  return (
    <ProductProvider>
      <div>
          <Navbar />
          <Outlet />
          <footer> <p>2024 DigiDepot. All right reserved</p></footer>
      </div>

    </ProductProvider>
  )
}
export default RootLayout