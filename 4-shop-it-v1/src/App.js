import {useState} from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";

function App() {

    const [cart,setCart]=useState([])

    const handleBuy=(item)=>{
        setCart([item,...cart])
    }

    return (
        <div className="container">
            <Navbar title={"shop-it-v1"}/>
            <hr/>
            <CartBadge cartCount={cart.length}/>
            <hr/>
            <CartView cart={cart}/>
            <hr/>
            <ProductList onBuy={handleBuy}/>
        </div>
    );
}

export default App;
