import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItems = (product, quantity) => {
        const updatedCart = [...cart];
        const existingProductIndex = updatedCart.findIndex(item => item.product.id === product.id);

        if (existingProductIndex >= 0) {
            updatedCart[existingProductIndex].quantity += quantity;
        } else {
            updatedCart.push({ product, quantity });
        }

        setCart(updatedCart);
        console.log("Carrito actualizado:", updatedCart);
    };

    const isInCart = (productId) => {
        return cart.some((item) => item.product.id === productId);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotal = () => {
        return cart.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
        );
    };

    const getTotalProducts = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const removeItem = (productId) => {
        setCart(cart.filter((item) => item.product.id !== productId));
    };

    const buy = () => { 
        console.log("Compra realizada. buy() fue llamado.");  
    };
    

    return (
        <CartContext.Provider
            value={{
                cart,
                addItems,
                isInCart,
                clearCart,
                getTotal,
                getTotalProducts,
                removeItem,
            }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
