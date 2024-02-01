import { createContext, useEffect, useState } from "react"




export const CartContext = createContext()


const CartProvider = ({ children }) => {

const [cart, setCart] = useState([])

const [itemQuantity, setItemQuantity] = useState(0)



//Update item quantity
useEffect(() => {
  if (cart) {
    const quantity = cart.reduce((accumulator, currentItem) => 
    {
      return accumulator + currentItem.quantity;
    }, 0)
    setItemQuantity(quantity)
  }
}, [cart])


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
const increaseQuantity = (_id) => {
  const cartItem = cart.find((item) => item._id === _id);
  addToCart(cartItem, _id);
}

//Decrease quantity
const decreaseQuantity = (_id) => {
  const cartItem = cart.find((item) => {
    return item._id === _id;
  })
  if (cartItem) {
    const newCart = cart.map(item => {
      if (item._id === _id) {
        return { ...item, quantity: cartItem.quantity -1}
      } else {
        return item;
      }
    });
    setCart(newCart);
  } 
    if (cartItem.quantity < 2) {
      removeFromCart(_id)
  }
}



  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    itemQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider