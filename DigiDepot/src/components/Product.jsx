import { Link } from 'react-router-dom'
import '../pages/home.css';


export const Product = ({ product }) => {
  return (
    <div className="product">
      <i className="fa-solid fa-square-plus"></i>
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