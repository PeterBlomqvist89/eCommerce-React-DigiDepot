
import { SidebarContext } from '../contexts/SideBarContext';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem'




const Sidebar = () => {

    const { isOpen, handleClose } = useContext(SidebarContext)
     const { cart } = useContext(CartContext)

  return (
    <div>
        <>
        {isOpen ?<div onClick={handleClose} className='black'>black</div> : <div></div>}
        {isOpen ? 
        <div className='sidebar'>
            <div className="">Shopping bag: (0)</div>
            {/* <i onClick={handleClose} className="fa-solid fa-arrow-right"></i>  */}
            <div>{cart.map((item) => {
              return <CartItem item={item} key={item._id} />
            })}</div>
        </div>
        : <div></div>}
        </>
    </div>
  )
}
export default Sidebar