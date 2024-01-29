import { createContext, useContext } from "react"

export const ProductContext = createContext()


function ProductContextProvider({ children }) {
  
  





  
    
  const value = {
    
  }



  return (
    <ProductContext.Provider value={value}>
        { children }
    </ProductContext.Provider>
  )
}
export default ProductContextProvider






export const useProductContext = () => {
  const context = useContext(ProductContext)

  if(!context) throw new Error('useProductsContext must be called within a ProductContextProvider ')

  return context
}