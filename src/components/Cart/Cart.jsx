import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartProvider";
import CartDetail from "../CartDetail/CartDetail"; 

const Cart = () => {
    const { cart } = useContext(CartContext);
    console.log("Carrito:", cart);

    return (
        <div>
            {cart.length === 0 ? (
                <h1>No hay productos en el carrito</h1>
            ) : (
                <CartDetail cart={cart} />
            )}
        </div>
    );
};

export default Cart;
