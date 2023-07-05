


import {cartReducer} from './cartReducer'
import {reviewsReducer} from './reviewsReducer'
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    cart: cartReducer,
    reviews: reviewsReducer
})

export default rootReducer;