import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./cartReducer"

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: "",
    total_price: ""
};

const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCartproductpage = ( image, title,  price, qty,   id ) => {
        dispatch({type: "ADD_TO_CART", payload: {image, title,  price, qty,   id} })
    };
    const addToCartproductpage2 = ( image, title,  price, qty,   id ) => {
        dispatch({type: "ADD_TO_CART", payload: {image, title,  price, qty,   id} })
    };
    const addToCartproducthome = ( image, title,  price, qty,   id ) => {
        dispatch({type: "ADD_TO_CART", payload: {image, title,  price, qty,   id} })
    };
    const addToCartproducthome2 = ( image, title,  price,customers, qty,   id ) => {
        dispatch({type: "ADD_TO_CART", payload: {image, title,  price,customers, qty,   id} })
    };
    const addToCart = ( image, title, customers, tagline, price, qty, id ) => {
        dispatch({type: "ADD_TO_CART", payload: {image, title, customers, tagline,  price, qty, id} })
    };

    const increment = ( id ) => {
        dispatch({type: "INCREASE", payload: id})
    };

    const decrement = ( id ) => {
        dispatch({type: "DECREASE", payload: id})
    };
   
  
    useEffect(()=>{
        dispatch({type: "CART_TOTAL_PRICE"});
        
    }, [state.cart]);

    useEffect(()=>{
        dispatch({type: "CART_TOTAL_ITEM"});
        
    }, [state.cart]);

    return <CartContext.Provider value= {{...state, addToCart,addToCartproducthome,addToCartproducthome2,addToCartproductpage,addToCartproductpage2, increment, decrement}}>{children}</CartContext.Provider>;
};

const useCartContext = () =>{
    return useContext(CartContext);
};


export { CartProvider, useCartContext}