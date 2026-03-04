import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="logo">
          <Link to="/">Mi tienda</Link>
        </h1>

        <div className="nav-links">
          <Link to="/category/remeras">Remeras</Link>
          <Link to="/category/zapatillas">Zapatillas</Link>
          <Link to="/category/accesorios">Accesorios</Link>
        </div>
      </div>

      <div className="cart">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;