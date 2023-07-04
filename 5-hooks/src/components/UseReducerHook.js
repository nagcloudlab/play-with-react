import {useReducer} from 'react';


function countReducer(state, action) {
    let {type, payload = 1} = action;
    switch (type) {
        case 'INCREMENT':
            return state + payload;
        case 'DECREMENT':
            return state - payload;
        default:
            return state;
    }
}


function UseReducerHook() {
    console.log('useReducerHook:render');
    const [state, dispatch] = useReducer(countReducer, 0)
    return (
        <div className={"card"}>
            <div className={"card-header"}>useReducer</div>
            <div className={"card-body"}>
                <hr/>
                <div className={"d-flex justify-content-around"}>
                    <button className={"btn btn-danger"}
                            onClick={e => dispatch({type: "DECREMENT"})}>
                        -1
                    </button>
                    <span className={"display-6"}>{state}</span>
                    <button className={"btn btn-primary"}
                            onClick={e => dispatch({type: "INCREMENT"})}>
                        +1
                    </button>
                    <button className={"btn btn-primary"}
                            onClick={e => dispatch({type: "INCREMENT",payload:10})}>
                        +10
                    </button>
                </div>
                <hr/>
            </div>
        </div>
    )
}


export default UseReducerHook;