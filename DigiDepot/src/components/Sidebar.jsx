
import { SidebarContext } from '../contexts/SideBarContext';
import { useContext } from 'react';




const Sidebar = () => {

    const { isOpen, handleClose } = useContext(SidebarContext)


  return (
    <div>
        {isOpen ?<div onClick={handleClose} className='black'>black</div> : <div></div>}
        {isOpen ? <div className="sidebar">Sidebar</div> : <div></div>}
    </div>
  )
}
export default Sidebar