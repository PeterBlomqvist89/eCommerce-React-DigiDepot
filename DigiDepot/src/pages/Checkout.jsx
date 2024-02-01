import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { SidebarContext } from "../contexts/SideBarContext";

const Checkout = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  // Här tilldelar du värdet true till isOpen
  // const isOpen = true; <-- Detta behöver inte vara här, eftersom du redan destrukturerar isOpen från useContext.

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default Checkout;