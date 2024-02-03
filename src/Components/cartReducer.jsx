const cartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        let {image, title, customers, tagline, price, qty, id } = action.payload;


        let cartProduct = {
            image, title, customers, tagline, price, qty, id
        };

        return{
            ...state, cart: [...state.cart, cartProduct],
        };
    
    }

    if (action.type === "INCREASE"){
        let updatedProduct = state.cart.map((currElem)=>{
            if( currElem.id === action.payload){
              let incqty = currElem.qty + 1;

              return {...currElem, qty: incqty,};
            }else{
                return currElem;
            }
        });
        return{
            ...state, cart: updatedProduct
        };
    }
   

    if (action.type === "DECREASE"){
        let updatedProduct = state.cart.map((currElem)=>{
            if( currElem.id === action.payload){
              let decqty = currElem.qty - 1;
              if(decqty <= 1){
                decqty = 1
              }

              return {...currElem, qty: decqty,};
            }else{
                return currElem;
            }
        });
        return{
            ...state, cart: updatedProduct
        };
    }
   
    if (action.type === "CART_TOTAL_PRICE"){
        let total_price = state.cart.reduce((initialVal, currElem)=>{
            let { price, qty } = currElem;
            initialVal = initialVal + price * qty;

            return initialVal
        }, 0);

        return{ 
            ...state, total_price
        };
    }

    if (action.type === "CART_TOTAL_ITEM"){
        let total_item = state.cart.reduce((initialVal, currElem)=>{
            let { qty } = currElem;
            initialVal = initialVal + qty;

            return initialVal
        }, 0);

        return{ 
            ...state, total_item
        };
    }


  return state;
};

export default cartReducer