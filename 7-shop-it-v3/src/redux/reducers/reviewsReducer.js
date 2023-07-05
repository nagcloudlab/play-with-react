

/*

reviews={
    productId:[
        {},{}
    ]
}

 */

function reviewsReducer(state={},action){

    let {type} = action;

    switch(type){
        case 'LOAD_REVIEWS_SUCCESS':{
            let {productId,reviews}=action
            let existingReviews=state[productId] || []
            return {
              ...state,
                [productId]:existingReviews.concat(reviews)
            }
        }
        default:
            return state
    }
}

export  {reviewsReducer}