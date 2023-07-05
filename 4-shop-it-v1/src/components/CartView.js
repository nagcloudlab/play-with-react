

function CartView({cart}) {
    const renderCartLines = () => {
        if (cart.length === 0) {
            return (
                <div className={"card-body"}>
                    <p>Your cart is empty</p>
                </div>
            )
        }else{
            return cart.map((item, index) => {
                return (
                    <tr key={index} className={"card-body"}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>&#8377;{item.price}</td>
                    </tr>
                )
            })
        }
    }
    return (
        <div className={"card"}>
            <div className={"card-header"}>CartView</div>
            <div className={"card-body"}>
                <table className={"table"}>
                    <tbody>
                    {renderCartLines()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartView;