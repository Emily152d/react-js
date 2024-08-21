import React from 'react';
import "./CartWidget.css";
import { FaCartPlus } from "react-icons/fa";

const CartWidget = () => {  
    return (
        <div className="nav-cart">
            <p>5</p>
            <FaCartPlus />
        </div>
    );
};

export default CartWidget;  