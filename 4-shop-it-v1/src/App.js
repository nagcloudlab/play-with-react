import {useState} from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartBadge from "./components/CartBadge";

function App() {

    const [cart,setCart]=useState([])

    return (
        <div className="container">
            <Navbar title={"shop-it-v1"}/>
            <hr/>
            <CartBadge cartCount={cart.length}/>
            <hr/>
            <ProductList onBuy={item=>setCart([item,...cart])}/>
        </div>
    );
}

export default App;
