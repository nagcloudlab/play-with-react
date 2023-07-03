import {useState} from "react";
import Review from "./Review";

function Product({product,onBuy}){
    const [currentTab, setCurrentTab] = useState(1);
    const [reviews,setReviews] = useState([
        {author: "John Doe", rating: 4, review: "This is a very good review"},
        {author: "John Doe", rating: 1, review: "This is a very bad review"}
    ]);
    const renderReviews = () => {
        return reviews.map((review, index) => {
            return (<Review key={index} review={review}/>);
        })
    }
    const renderTabPanel = () => {
        switch (currentTab) {
            case 1:
                return (
                    <div>{product.description}</div>
                )
            case 2:
                return (
                    <div>{"Not Yet"}</div>
                )
            case 3:
                return (
                    <div>{renderReviews()}</div>
                )
            default:
                return
        }
    }
    const renderProduct = () => {
        if (product.isAvailable) {
            return (
                <div className={"list-group-item"} key={product.id}>
                    <div className={"row"}>
                        <div className={"col-4"}>
                            <img className={"img-fluid"} src={product.image} alt={product.name}/>
                        </div>
                        <div className={"col-8"}>
                            <div>{product.name}</div>
                            <div>&#8377;{product.price}</div>
                            <button onClick={e=>onBuy(product)} className={"btn btn-primary"}>Buy</button>
                            <br/>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className={`nav-link ${currentTab === 1? "active" : ""}`}
                                       onClick={e => setCurrentTab(1)}
                                       href="#">
                                        Description
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${currentTab === 2? "active" : ""}`}
                                       onClick={e => setCurrentTab(2)}
                                       href="#">
                                        Specification
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${currentTab === 3? "active" : ""}`}
                                       onClick={e => setCurrentTab(3)}
                                       href="#">
                                        Reviews
                                    </a>
                                </li>
                            </ul>
                            {renderTabPanel(product)}
                        </div>
                    </div>
                </div>
            );
        }
    }
    return renderProduct()
}

export default Product;