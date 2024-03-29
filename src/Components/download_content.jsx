import { createContext, useContext, useReducer } from "react";
import reducer from "./dwnldReducer"

const DownloadContext = createContext();

const initialState = {
    dwnld: []
};

const DownloadProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const dwnldProduct = (image, title, tagline, id ) => {
        dispatch({type: "DOWNLOAD_NOW", payload: {image, title, tagline, id}})
    };

    return <DownloadContext.Provider value= {{...state, dwnldProduct}} >{children}</DownloadContext.Provider>;
}

const useDownloadContext = () =>{
    return useContext(DownloadContext);
}

export { DownloadProvider, useDownloadContext}