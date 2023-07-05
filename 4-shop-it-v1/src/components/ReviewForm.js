import {useRef, useState} from "react";

function ReviewForm({onSubmit}){

    const [isOpen, setIsOpen] = useState(   false);
    // const authorRef=useRef()
    // const bodyRef=useRef()
    // const ratingRef=useRef()

    // const [author, setAuthor] = useState("")
    // const [body, setBody] = useState("")
    // const [rating, setRating] = useState(1)

    const [review, setReview] = useState({
        author: "",
        rating: 5,
        body: ""
    })

    const toggle = () => setIsOpen(!isOpen);

    const handleChange = (e) => {
        setReview({
          ...review,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // let review={
        //     author: authorRef.current.value,
        //     rating: ratingRef.current.value,
        //     body: bodyRef.current.value
        // }
        // console.log(review)
        onSubmit && onSubmit(review)
        setReview({
            author: "",
            rating: 5,
            body: ""
        })
        toggle()
    }

    const renderForm = () => {
        return (
            <div className={"card"}>
                <div className={"card-header"}>Review Form</div>
                <div className={"card-body"}>
                    <form onSubmit={handleSubmit}>
                        <div className={"form-group"}>
                            <label>Author</label>
                            <input className={"form-control"} name={"author"} value={review.author} onChange={handleChange}/>
                        </div>
                        <div className={"form-group"}>
                            <label>Rating</label>
                            <select className={"form-control"} name={"rating"} value={review.rating} onChange={handleChange}>
                                {
                                    [1, 2, 3, 4, 5]
                                        .map(n=> <option key={n}>{n}</option>)
                                }
                            </select>
                            <div className={"text-secondary"}>{review.rating&&review.rating<3?'expected 3 stars':''}</div>
                        </div>
                        <div className={"form-group"}>
                            <label>Body</label>
                            <textarea className={"form-control"} name={"body"} value={review.body} onChange={handleChange}></textarea>
                        </div>
                        <hr/>
                        <div className={"d-flex justify-content-around"}>
                            <button className={"btn btn-primary"}
                            disabled={!(review.author&&review.author!=="")}
                            >
                                Submit</button>
                            <button type={"button"}
                                    onClick={toggle}
                                    className={"btn btn-secondary"}>
                                Cancel
                            </button>
                        </div>
                        <hr/>
                    </form>
                </div>
            </div>

        )
    }

    return isOpen?renderForm():(<button onClick={toggle} className={"btn btn-dark"}>+</button>);
}

export default ReviewForm;