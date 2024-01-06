import { createContext, useContext, useReducer } from "react";
import reducer from "./cartReducer"

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: "",
    total_amount: ""
};

const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCart = ( image, title, customers, tagline, price, index ) => {
        dispatch({type: "ADD_TO_CART", payload: {image, title, customers, tagline, price, index} })
    };

   

    return <CartContext.Provider value= {{...state, addToCart}}>{children}</CartContext.Provider>;
};

const useCartContext = () =>{
    return useContext(CartContext);
};

export {CartProvider, useCartContext}