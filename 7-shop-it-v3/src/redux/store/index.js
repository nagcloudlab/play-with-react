

import rootReducer from "../reducers";
import {createStore} from "redux";

const initialState = {
    cart:[]
};

const store = createStore(rootReducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;