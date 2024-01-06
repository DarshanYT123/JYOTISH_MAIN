const dwnldReducer = (state, action) => {
    if(action.type === "DOWNLOAD_NOW"){
        let {image, title, tagline, index} = action.payload;
        // console.log(image, title, customers, tagline, price, index);

        let dwnldItems = {
            image, title, tagline, index
        };

        return{
            ...state,  dwnld: [ dwnldItems],
        };
    }

   

  return state;
};

export default dwnldReducer