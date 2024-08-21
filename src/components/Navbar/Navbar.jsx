import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">LOGO</Link>
            </div>

            <div className="navbar-container">
                <ul className="navbar-links">
                    <li>
                        <Link to="/category/Sony" className="link">Sony</Link>
                    </li>
                    <li>
                        <Link to="/category/Nintendo Switch" className="link">Microsoft</Link>
                    </li>
                    <li>
                        <Link to="/category/Xbox" className="link">Nintendo</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-cart">
                <p>CART</p>
            </div>

            <CartWidget />
        </nav>
    );
};

export default Navbar;
