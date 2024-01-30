import { createContext, useState } from "react"



export const SidebarContext = createContext()


const SidebarProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)


  const handleClose = () => {
    setIsOpen(false);
  }

  const value = {
    isOpen, setIsOpen, handleClose
  }

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  )
}
export default SidebarProvider