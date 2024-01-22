import {  createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
  
        {
          path: "/",
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "contact",
              element: <Contact />
            },
            {
              path: "checkout",
              element: <Checkout />
            },
            {
              path: "productdetail/:id",
              element: <ProductDetail />
            },
            {
              path: "*",
              element: <NotFound />
            }
          ]
        }
  
      ]
    }
  ])