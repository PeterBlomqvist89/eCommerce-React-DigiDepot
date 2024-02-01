import { createContext, useState } from "react"




export const CartContext = createContext()


const CartProvider = ({ children }) => {


const [cart, setCart] = useState([])

//Add product to cart
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
    setCart([...cart, newItem]);
  }
};



//Remove from cart
const removeFromCart = (_id) => {
  const newCart = cart.filter(item => {
    return item._id !== _id;
  });
  setCart(newCart)
};


//Clear cart
const clearCart = () => {
  setCart([]);
};


//Increase quantity






  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider