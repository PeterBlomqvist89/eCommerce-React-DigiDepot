import { createContext, useEffect, useState } from "react"
import axios from 'axios'




export const ProductContext = createContext();


const ProductProvider = ({ children }) => {


   const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get('https://js2-ecommerce-api.vercel.app/api/products');
            setProducts(res.data);
         
        }
        fetchProducts();
    }, [])

    const value = {
        products
    }

  return (
    <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
    
  )
}
export default ProductProvider