const buyReducer = (state, action) => {
    if(action.type === "BUY_NOW"){
        let {image, title, customers, tagline, price, qty, id } = action.payload;


        let buyProduct = {
            image, title, customers, tagline, price, qty, id
        };

        return{
            ...state, buy: [...state.buy, buyProduct],
        };
    
    }

    // if (action.type === "INCREASE"){
    //     let updatedProduct = state.cart.map((currElem)=>{
    //         if( currElem.id === action.payload){
    //           let incqty = currElem.qty + 1;

    //           return {...currElem, qty: incqty,};
    //         }else{
    //             return currElem;
    //         }
    //     });
    //     return{
    //         ...state, cart: updatedProduct
    //     };
    // }
   

    // if (action.type === "DECREASE"){
    //     let updatedProduct = state.cart.map((currElem)=>{
    //         if( currElem.id === action.payload){
    //           let decqty = currElem.qty - 1;
    //           if(decqty <= 1){
    //             decqty = 1
    //           }

    //           return {...currElem, qty: decqty,};
    //         }else{
    //             return currElem;
    //         }
    //     });
    //     return{
    //         ...state, cart: updatedProduct
    //     };
    // }
   
    if (action.type === "BUY_TOTAL_PRICE"){
        let buy_total_price = state.buy.reduce((initialVal, currElem)=>{
            let { price, qty } = currElem;
            initialVal = initialVal + price * qty;

            return initialVal
        }, 0);

        return{ 
            ...state, buy_total_price
        };
    }

    if (action.type === "BUY_TOTAL_ITEM"){
        let buy_total_item = state.buy.reduce((initialVal, currElem)=>{
            let { qty } = currElem;
            initialVal = initialVal + qty;

            return initialVal
        }, 0);

        return{ 
            ...state, buy_total_item
        };
    }


  return state;
};

export default buyReducer