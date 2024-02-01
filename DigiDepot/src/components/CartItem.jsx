import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";





const CartItem = ({ item }) => {

  const { removeFromCart } = useContext(CartContext)

  const { _id, name, price, images, category, description, quantity } = item;



  return (
    <div className="container">
      <div className="cartitem">
        <Link to={`/productdetail/${_id}`}>
          <img className="cartimg" src={images[0]} alt=""/>
        </Link>
        <div>
          <div>
          <Link to={`/productdetail/${_id}`}  className="carttext">{name.length > 20 ? `${name.slice(0, 30)}...` : name}</Link>
          </div>
          <div><i onClick={() => removeFromCart(_id)} className="fa-solid fa-circle-xmark"></i></div>
          <div className="cartprices">
              <div className="cartplusminus">
                <div>
                <i className="fa-solid fa-minus"></i>
                </div>
                <div>{quantity}st</div>
                <div>
                <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className="cartPriceAmout">{price}:-</div>
              <div className="cartPriceFullAmout">{price * quantity}:-</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItem