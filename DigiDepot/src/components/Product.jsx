import { Link } from 'react-router-dom'
import '../pages/home.css';


export const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="image-container">
        <Link to="/productdetail"><img className='product-image' src={product.images[0]} alt={product.name} /></Link>
      </div>
      <p><Link to="/productdetail">{product.name}</Link></p>
      <p>{product.description.slice(0, 150)}...</p>
      <p>{product.price}:-</p>
      <Link to="/productdetail"><button className='btn-show'>Show</button></Link>
    </div>
  )
}