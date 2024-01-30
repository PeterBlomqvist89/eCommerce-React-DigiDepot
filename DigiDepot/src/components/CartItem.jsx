import { Link } from "react-router-dom";





const CartItem = ({ item }) => {


  const { _id, name, price, images, category, description, quantity } = item;



  return (
    <div className="container">
      <div className="cartitem">
        <Link>
          <img className="cartimg" src={images[0]} alt=""/>
        </Link>
      </div>
    </div>
  )
}
export default CartItem