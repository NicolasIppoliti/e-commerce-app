import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    let copyCart = [...cart];

    function addToCart(item, quantity){
        if(!isInCart(item.id)){
            copyCart.push( {...item, quantity} );
            setCart(copyCart);
        } else {
            let cartUpdate = cart.map((prod) => {
                if(prod.id === item.id){
                    let productUpdate = {
                        ...prod,
                        quantity: parseInt(quantity + prod.quantity),
                    }
                    return productUpdate
                } else {
                    return prod
                }
            })
            setCart(cartUpdate)
        }
    }

    function isInCart (id){
        return (cart.some((itemInCart) => itemInCart.id === id))
    }

    function clearCart (){
        setCart([])
    }

    function removeItem (item){
        const itemRemove = findItem(item.id);
        const indexItem = copyCart.indexOf(itemRemove);
        copyCart.splice(indexItem, 1);
        setCart(copyCart);
        console.log(copyCart);
    }

    function findItem(id){
        return (copyCart.find(item => item.id === (id)))
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}