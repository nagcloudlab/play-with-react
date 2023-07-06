

import rootReducer from "../reducers";
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    cart:[],
    reviews:{},
    products:[]
};


const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
));
export default store;