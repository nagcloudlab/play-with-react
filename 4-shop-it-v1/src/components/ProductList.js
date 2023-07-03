import {useState} from "react";
import Product from "./Product";

function ProductList({onBuy}){

    const [products] = useState([
        {
            id: 1,
            name: "Product 1",
            price: 100,
            isAvailable: true,
            description: "Product 1 description",
            image: "images/Laptop.png"
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
            isAvailable: true,
            description: "Product 2 description",
            image: "images/Mobile.png"
        }
    ]);

    const renderProducts = () => {
        return products.map(product => {
            return <Product product={product} onBuy={onBuy} key={product.id}/>
        });
    }
    return (
        <div className={"list-group"}>
            {renderProducts()}
        </div>
    )
}
export default ProductList;