import { useContext } from 'react';
import { Product } from '../components/Product';
import { ProductContext } from '../contexts/ProductContext';


import './home.css';


function Home() {



  const { products } = useContext(ProductContext)

  return (
    <div>
        <div className='home-container'>
            <img className='home-image'src="/dataCenter.jpg" alt="data center" />
            <div className="home-textblock">
              <h1 className='home-h1'>Welcome to DigiDepot!</h1>
              <p className='home-p'>Explore a world of digital possibilities with us.</p>
        </div>
            <div>
              <h2 className='home-h2'>Categories</h2>
                <div className="home-category">
                  <p className='home-p2'>All</p>
                  <p>/</p>
                  <p className='home-p2'>Laptop</p>
                  <p>/</p>
                  <p className='home-p2'>Phone</p>
                  <p>/</p>
                  <p className='home-p2'>Vacuums</p>
                  <p>/</p>
                  <p className='home-p2'>TV's</p>
            </div>
            <div className='shop'>
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