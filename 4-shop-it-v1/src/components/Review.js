
function Review({review}) {
    return (
        <div>
            <div className={"alert alert-danger"}>
                {review.author} - {review.rating}
                <hr/>
                {review.body}
            </div>
        </div>
    )
}

export default Review;