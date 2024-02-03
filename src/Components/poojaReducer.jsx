const poojaReducer = (state, action) => {
    if(action.type === "BOOK_NOW"){
        let filteredPooja = action.payload;
        // console.log(image, title, customers, tagline, price, index);

        let poojaItems = filteredPooja;

        return{
            ...state,  pooja: [ poojaItems],
        };
    }

   

  return state;
};

export default poojaReducer