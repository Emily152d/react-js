import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = () => {  
    const { getTotalProducts } = useContext(CartContext);

    return (
        <Link to={"/cart"} className="nav-cart">
            <FaCartPlus />
            {getTotalProducts() === 0 ? null : getTotalProducts()}
        </Link>
    );
};

export default CartWidget;
