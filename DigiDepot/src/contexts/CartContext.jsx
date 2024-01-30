import { createContext, useState } from "react"




export const CartContext = createContext()


const CartProvider = ({ children }) => {


const [cart, setCart] = useState([])


const addToCart = (product, _id) => {
  const newItem = { ...product, quantity: 1 };
  const cartItem = cart.find(item => item._id === _id);

  if (cartItem) {
    const newCart = [...cart].map(item => {
      if (item._id === _id) {
        return { ...item, quantity: cartItem.quantity + 1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
  } else {
    // If the item is not in the cart, add it with quantity 1
    setCart([...cart, newItem]);
  }
};
console.log(cart);



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