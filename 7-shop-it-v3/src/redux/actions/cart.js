


function addToCart(product){
    return {
        type: "ADD_TO_CART",
        item:{
            id: product.id,
            name: product.name,
            price: product.price,
        }
    }
}
function removeFromCart(id){
    return {
        type: "REMOVE_FROM_CART",
        id
    }
}
export  {addToCart, removeFromCart}