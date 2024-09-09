import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider'; 
import { Link } from 'react-router-dom';

const CartDetail = ({ cart }) => {
    const { getTotal, getTotalProducts, removeItem, clearCart, buy } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de compras</h2>
            {cart.map((item) => (
                <div key={item.product.id}>
                    <img src={item.product.image} alt={item.product.name} />
                    <p>{item.product.name}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.product.price}</p>
                    <button onClick={() => removeItem(item.product.id)}>Eliminar</button>
                </div>
            ))}
            <h3>Total productos: {getTotalProducts()}</h3>
            <h3>Total a pagar: ${getTotal()}</h3>
            <button onClick={clearCart}>Vaciar el carrito</button>
            <Link to={"/checkout"}>Comprar</Link>
        </div>
    );
};

export default CartDetail;
