import React, { useContext, useState } from 'react';

const CartCountContext = React.createContext();
const CartCountIncrementContext = React.createContext();

export function useCartCount() {
    return useContext(CartCountContext)
}

export function useCartIncrementUpdate() {
    return useContext(CartCountIncrementContext)
}

function CartContext({ children }) {
    const [cartCount, setCartCount] = useState(0);

    function cartIncrement() {
        setCartCount(function (prevCount) {
            return (prevCount += 1);
        });
    };

    function cartDecrement() {
        setCartCount(function (prevCount) {
            if (prevCount > 0) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 0);
            }
        });
    };

    return (
        <CartCountContext.Provider value={cartCount}>
            <CartCountIncrementContext.Provider value={{ cartIncrement, cartDecrement }}>
                {children}
            </CartCountIncrementContext.Provider>
        </CartCountContext.Provider>
    )
}

export { CartContext };