import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();


export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = item => {
        setCart(current => [...current, item]);
    };

    const value = { cart, addToCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};