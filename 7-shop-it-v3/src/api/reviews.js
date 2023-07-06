

import instance from "./index";

export function getReviews(productId){
    return instance.get(`api/${productId}/reviews`);
}


export function postReview(productId,review){
    return instance.post(`api/${productId}/reviews`,review);
}