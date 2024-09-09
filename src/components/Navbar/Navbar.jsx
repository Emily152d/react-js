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
                        <NavLink
                            to="/category/Sony"
                            className={({ isActive }) => (isActive ? "link active" : "link")}
                        >
                            Sony
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/category/Microsoft"
                            className={({ isActive }) => (isActive ? "link active" : "link")}
                        >
                            Microsoft
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/category/Nintendo"
                            className={({ isActive }) => (isActive ? "link active" : "link")}
                        >
                            Nintendo
                        </NavLink>
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
