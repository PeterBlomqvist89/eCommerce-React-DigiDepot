import { useEffect, useState } from 'react';
import { Product } from '../components/Product';

import axios from 'axios'
import './home.css';


function Home() {

  const [products, setProducts] = useState([])
  useEffect(() => {
  
  const getProducts = async () => {
    const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products')
    setProducts(res.data)
  }
  
  getProducts()
  
  }, [])
  




  return (
    <div>
        <div className='home-container'>
            <img className='home-image'src="/dataCenter.jpg" alt="data center" />
            <div className="home-textblock">
              <h1 className='home-h1'>Welcome to DigiDepot!</h1>
              <p className='home-p'>Explore a world of digital possibilities with us.</p>
            </div>
            <div className="home-best-collection">
              <h2 className='home-h2'>Best Collection</h2>
              <div className="home-product">
                  {
                    products.map(product => (
                      <Product key={product._id} product={product}/>
                    ))
                  }
                </div>
            </div>
        </div>
    </div>
  )
}
export default Home