import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
        {/* <div className="container"> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productdetail' element={<ProductDetail />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/checkout' element={<Checkout />} />

            <Route path='*' element={ <NotFound /> } />
          </Routes>
        {/* </div> */}
    </Router>
  );
}

export default App;
