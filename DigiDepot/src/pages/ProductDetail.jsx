import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

import './productDetail.css';




function ProductDetail() {


  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    
    setLoading(true)

    const getProduct = async () => {
      const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products/${id}`)
      setProduct(res.data)
      setLoading(false)
    }
    
    getProduct()
    
    }, [])
    

    // const { test } = useProductContext




  return (
    <div>

      {loading && <p>Loading...</p>}
      {
        product && (
          <>
          <div className="pd-container">
            <h2 className="pd-h2">{product?.name}</h2>
            <div className="pd">
              <div className="pd-gallery">
                <img className='pd-gallery-preview img-pd' src={product.images[0]} alt={product.name} />
                <div className="pd-gallery-thumbs">
                  {product.images && product.images[1] && (
                    <img className='pd-img' src={product.images[1]} alt={product.name} />
                  )}
                  {product.images && product.images[2] && (
                    <img className='pd-img' src={product.images[2]} alt={product.name} />
                  )}
                  {product.images && product.images[3] && (
                    <img className='pd-img' src={product.images[3]} alt={product.name} />
                  )}
                </div>
                <p className="pd-name">{product.name}</p>
                <p className="pd-description">{product.description}...</p>
                <p className="pd-price">{product.price}:-</p>
                <button className='pd-btn'>Add to cart</button>
              </div>
          </div>
          </div>
          </>
      )
    }
    </div>
  )
}
export default ProductDetail