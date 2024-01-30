import { createContext, useState } from "react"




export const CartContext = createContext()


const CartProvider = ({ children }) => {


const [cart, setCart] = useState([])


const addToCart = (_id) => {
  console.log(`item ${_id} added to cart`);
}


  const value = {
    cart,
    addToCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider