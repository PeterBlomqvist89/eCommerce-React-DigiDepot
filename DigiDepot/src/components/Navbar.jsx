import { NavLink } from "react-router-dom"
import { SidebarContext } from "../contexts/SideBarContext";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Navbar = () => {





  const { isOpen, setIsOpen } = useContext(SidebarContext)

  const  { itemQuantity } = useContext(CartContext)

  return (
    <nav className="navbar">
      <div className="container">
          <div className="logo">
          <NavLink to="/">
            <img className="logo-img" src="/logo.png" alt="Logo" />
          </NavLink>
          <h1 className="logo-text">DigiDepot</h1>
          </div>
        <ul className="nav-links">
          <li><NavLink to="/" className="nav-link"><i className="fa-solid fa-house"></i></NavLink></li>
          <li><NavLink to="/contact" className="nav-link"><i className="fa-solid fa-phone"></i></NavLink></li>
          <li><i onClick={() => setIsOpen(!isOpen)} className="fa-solid fa-cart-shopping nav-link"></i></li>
          <div className="itemQuantity">{itemQuantity}</div>
        </ul>
      </div>
    </nav>
  );
};
