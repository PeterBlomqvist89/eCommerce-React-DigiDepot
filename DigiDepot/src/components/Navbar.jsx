import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
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
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/productdetail" className="nav-link">Product Detail</NavLink></li>
          <li><NavLink to="/contactus" className="nav-link">Contact Us</NavLink></li>
          <li><NavLink to="/checkout" className="nav-link"><i className="fa-solid fa-cart-shopping"></i></NavLink></li>
        </ul>
      </div>
    </nav>
  );
};
