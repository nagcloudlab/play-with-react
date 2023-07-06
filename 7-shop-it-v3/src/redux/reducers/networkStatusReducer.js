


function networkStatusReducer(state={},action){
    switch(action.type){
        case "REQUEST_LOADING":
            return {
                message: "Loading.. pleas wait..",
            }
        case "REQUEST_COMPLETED":
            return {}
        default:
            return state;
    }
}

export default networkStatusReducer;