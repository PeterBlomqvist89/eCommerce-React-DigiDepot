
import { SidebarContext } from '../contexts/SideBarContext';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';




const Sidebar = () => {

    const { isOpen, handleClose } = useContext(SidebarContext)
    console.log(useContext(CartContext)); 

  return (
    <div>
        <>
        {isOpen ?<div onClick={handleClose} className='black'>black</div> : <div></div>}
        {isOpen ? 
        <div className='sidebar'>
            <div className="">Shopping bag: (0)</div>
            <i onClick={handleClose} className="fa-solid fa-arrow-right"></i> 
        </div>
        : <div></div>}
        </>
    </div>
  )
}
export default Sidebar