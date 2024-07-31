import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <p>Mi Logo</p>
            </div>
            <div className="navbar-links">
                <ul>
                    <li>
                        <a href="#">INICIO</a>
                    </li>
                    <li>
                        <a href="#">SERVICIOS</a>
                    </li>
                    <li>
                        <a href="#">QUIENES SOMOS</a>
                    </li>
                    <li>
                        <a href="#">COMPRAR</a>
                    </li>
                    <li>
                        <a href="#">CONTACTO</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-cart">
                <p>CART</p>
            </div>

            <CartWidget/>

        </nav>
    )
}
export default Navbar;