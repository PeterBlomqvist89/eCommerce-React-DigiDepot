export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">DigiDepot</h1>
        <ul className="nav-links">
          <li><a href="/" className="nav-link"></a>Home</li>
          <li><a href="/productdetails" className="nav-link"></a>Product Details</li>
          <li><a href="/contactus" className="nav-link"></a>Contact Us</li>
          <li><a href="/checkout" className="nav-link"></a><i className="fa-solid fa-cart-shopping"></i></li>
        </ul>
      </div>
    </nav>
  );
};
