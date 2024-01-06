const poojaReducer = (state, action) => {
    if(action.type === "BOOK_NOW"){
        let {poojaName, img, info, date, astroImg, astroName, index} = action.payload;
        // console.log(image, title, customers, tagline, price, index);

        let poojaItems = {
            poojaName, img, info, date, astroImg, astroName, index
        };

        return{
            ...state,  pooja: [ poojaItems],
        };
    }

   

  return state;
};

export default poojaReducer