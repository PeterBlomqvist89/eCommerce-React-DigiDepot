import { Link } from "react-router-dom";





const CartItem = ({ item }) => {


  const { _id, name, price, images, category, description, quantity } = item;



  return (
    <div className="container">
      <div className="cartitem">
        <Link to={`/productdetail/${_id}`}>
          <img className="cartimg" src={images[0]} alt=""/>
        </Link>
        <div>
          <div>
          <Link to={`/productdetail/${_id}`}  className="carttext">{name}</Link>
          </div>
          <div><i className="fa-solid fa-circle-xmark"></i></div>
          <div className="cartprices">
              <div>quantity</div>
              <div>item price</div>
              <div>final price</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItem