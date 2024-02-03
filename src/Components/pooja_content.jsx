import { createContext, useContext, useReducer } from "react";
import reducer from "./poojaReducer"

const PoojaContext = createContext();

const initialState = {
    pooja: []
};

const PoojaProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const poojaProduct = ( filteredPooja ) => {
        dispatch({type: "BOOK_NOW", payload: filteredPooja})
    };

    return <PoojaContext.Provider value= {{...state, poojaProduct}} >{children}</PoojaContext.Provider>;
}

const usePoojaContext = () =>{
    return useContext(PoojaContext);
}

export { PoojaProvider, usePoojaContext}