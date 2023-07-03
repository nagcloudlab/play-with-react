
function Review({review}) {
    return (
        <div>
            <div className={"alert alert-danger"}>
                {review.author} - {review.rating}
                <hr/>
                {review.review}
            </div>
        </div>
    )
}

export default Review;