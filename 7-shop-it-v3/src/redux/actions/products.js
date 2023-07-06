import {getProducts} from "../../api/products";


export function loadProducts(cat = "elec", count = 10) {
    return function (dispatch) {
        const promise = getProducts()
        dispatch({type: 'REQUEST_LOADING'})
        promise
            .then(response => {
                dispatch({type: 'REQUEST_COMPLETED'})
                dispatch({
                    type: 'LOAD_PRODUCTS_SUCCESS',
                    products:response.data
                })
            })
    }
}