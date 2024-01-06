
const cartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        let {image, title, customers, tagline, price, index} = action.payload;
        // console.log(image, title, customers, tagline, price, index);

        

        let cartProduct = {
            image, title, customers, tagline, price, index
        };

        return{
            ...state, cart: [...state.cart, cartProduct],
        };
    }

   

  return state;
};

export default cartReducer
