import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./buyReducer"

const BuyContext = createContext();

const initialState = {
    buy: [],
    buy_total_item: "",
    buy_total_price: ""
};

const BuyProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const buyNow = ( image, title, customers, tagline, price, qty, id ) => {
        dispatch({type: "BUY_NOW", payload: {image, title, customers, tagline,  price, qty, id} })
    };

    // const increment = ( id ) => {
    //     dispatch({type: "INCREASE", payload: id})
    // };

    // const decrement = ( id ) => {
    //     dispatch({type: "DECREASE", payload: id})
    // };

    useEffect(()=>{
        dispatch({type: "BUY_TOTAL_PRICE"});
        
    }, [state.buy]);

    useEffect(()=>{
        dispatch({type: "BUY_TOTAL_ITEM"});
        
    }, [state.buy]);

    return <BuyContext.Provider value= {{...state, buyNow}}>{children}</BuyContext.Provider>;
};

const useBuyContext = () =>{
    return useContext(BuyContext);
};


export { BuyProvider, useBuyContext}