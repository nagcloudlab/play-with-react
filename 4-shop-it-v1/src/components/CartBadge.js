
function CartBadge(props) {
    return (
        <div className="cart-badge">
            {props.cartCount} items in cart
        </div>
    );
}

export default CartBadge;