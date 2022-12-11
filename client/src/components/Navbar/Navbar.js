import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={`/shoppingCart`} className="grid-item">
        <FaShoppingCart className="shopping-cart-icon" />
      </Link>
      <h1 className="title grid-item">
        <Link className="grid-item" to={`/homePage`}>
          Danoa shopping
        </Link>
      </h1>
    </nav>
  );
};

export default Navbar;