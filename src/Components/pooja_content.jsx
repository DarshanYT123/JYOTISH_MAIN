import { createContext, useContext, useReducer } from "react";
import reducer from "./poojaReducer"

const PoojaContext = createContext();

const initialState = {
    pooja: []
};

const PoojaProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const poojaProduct = (poojaName, img, info, date, astroImg, astroName, index ) => {
        dispatch({type: "BOOK_NOW", payload: {poojaName, img, info, date, astroImg, astroName,index}})
    };

    return <PoojaContext.Provider value= {{...state, poojaProduct}} >{children}</PoojaContext.Provider>;
}

const usePoojaContext = () =>{
    return useContext(PoojaContext);
}

export { PoojaProvider, usePoojaContext}