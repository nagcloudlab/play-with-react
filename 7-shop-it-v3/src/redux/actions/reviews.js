function loadReviews(productId) {
    let reviews = [
        {author: "John Doe", rating: 4, body: "This is a very good review"},
        {author: "John Doe", rating: 1, body: "This is a very bad review"}
    ]
    return {
        type:"LOAD_REVIEWS_SUCCESS",
        productId,
        reviews
    }
}

function addReview(productId,review) {
    return {
        type:"ADD_REVIEW_SUCCESS",
        productId,
        review
    }
}

export {loadReviews,addReview}