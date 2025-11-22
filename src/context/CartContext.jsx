import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, qty) => {

        if (isInCart(item.id)) {
            setCart(cart.map(prod => {
                return prod.id === item.id ? { ...prod, cantidad: prod.cantidad + qty } : prod;
            }));
        } else {
            setCart([...cart, { ...item, cantidad: qty }]);
        }
    }

    const removeList = () => {
        setCart([]);
    }

    const deleteItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    }

    const getTotal = () => {
        return cart.reduce((total, item) => total + (item.precio * item.cantidad), 0).toFixed(2);
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeList, deleteItem, isInCart, getTotal, cartQuantity }}>
            {children}
        </CartContext.Provider>
    );
}