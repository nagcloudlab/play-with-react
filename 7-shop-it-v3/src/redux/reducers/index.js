


import {cartReducer} from './cartReducer'
import {reviewsReducer} from './reviewsReducer'
import {combineReducers} from "redux";
import productsReducer from "./productsReducer";
import networkStatusReducer from "./networkStatusReducer";


const rootReducer = combineReducers({
    cart: cartReducer,
    reviews: reviewsReducer,
    products: productsReducer,
    networkStatus: networkStatusReducer
})

export default rootReducer;