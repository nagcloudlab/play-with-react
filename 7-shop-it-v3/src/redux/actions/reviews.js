import {getReviews, postReview} from "../../api/reviews";

function loadReviews(productId) {
   return function (dispatch) {
       dispatch({type:"REQUEST_LOADING"})
       getReviews(productId)
         .then(response => {
             dispatch({type:"REQUEST_COMPLETED"})
             dispatch({
                 type:"LOAD_REVIEWS_SUCCESS",
                 productId,
                 reviews:response.data
             })
         })
   }
}

function addReview(productId,review) {
   return function (dispatch) {
       postReview(productId,review)
           .then(response => {
               dispatch({
                   type:"ADD_REVIEW_SUCCESS",
                   productId,
                   review:response.data
               })
           })
   }
}

export {loadReviews,addReview}