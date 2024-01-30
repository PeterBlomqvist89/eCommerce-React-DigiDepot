import { Link } from 'react-router-dom'
import '../pages/home.css';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


export const Product = ({ product }) => {

  
  const { addToCart } = useContext(CartContext)

  const { _id, name, price, images, category, description} = product;
  
  return (
    <div className="product">
      <i onClick={() => addToCart(_id)} className="fa-solid fa-square-plus"></i>
      <div className="image-container">
        <Link to={`/productdetail/${product._id}`}><img className='product-image' src={product.images[0]} alt={product.name} /></Link>
      </div>
      <p className='product-name-p'><Link to={`/productdetail/${product._id}`}>{product.name}</Link></p>
      <p className='product-description-p'>{product.description.slice(0, 150)}...</p>
      <p className='product-price-p'>{product.price}:-</p>
      <Link to={`/productdetail/${product._id}`}><button className='btn-show'>Show</button></Link>
    </div>
  )
}