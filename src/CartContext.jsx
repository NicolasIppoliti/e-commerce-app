import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const isInCart = (item) => {
        return cart.findIndex(i => i.id === item.id) !== -1;
    }

    const addToCart = (item, quantity) => {
        console.log(item, quantity);
        if (isInCart(item)) {
            const newCart = cart.map(i => {
                if (i.id === item.id) {
                    return {...i, quantity: i.quantity + quantity};
                }
                return i;
            }).filter(i => i.quantity > 0);
            setCart(newCart);
        } else {
            setCart([...cart, {...item, quantity}]);
        }
    }

    const removeFromCart = (item) => {
        const newCart = cart.map(i => {
            if (i.id === item.id) {
                return {...i, quantity: i.quantity - 1};
            }
            return i;
        }).filter(i => i.quantity > 0);
        setCart(newCart);
    }

    const removeAllFromCart = (item) => {
        const newCart = cart.filter(i => i.id !== item.id);
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{cart, isInCart, addToCart, removeFromCart, removeAllFromCart}}>
            {children}
        </CartContext.Provider>
    )
}