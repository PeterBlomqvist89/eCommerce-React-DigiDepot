import { Outlet } from "react-router-dom"
import { Navbar } from '../components/Navbar'
import ProductContextProvider from "../contexts/ProductContext"

function RootLayout() {
  return (
    <ProductContextProvider>
      <div>
          <Navbar />
          <Outlet />
          <footer> <p>2024 DigiDepot. All right reserved</p></footer>
      </div>

    </ProductContextProvider>
  )
}
export default RootLayout