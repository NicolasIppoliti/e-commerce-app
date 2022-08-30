import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
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

    const totalPrice = () => {
        return cart.reduce((prev, act) => Number(prev + act.discount * act.quantity), 0);
    }

    const totalProducts = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (item) => {
        return cart.findIndex(i => i.id === item.id) !== -1;
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

    const removeProduct = (item) => {
        const newCart = cart.filter(i => i.id !== item);
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{cart, isInCart, clearCart, addToCart, removeFromCart, removeProduct, totalPrice, totalProducts}}>
            {children}
        </CartContext.Provider>
    )
}