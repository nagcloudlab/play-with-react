


function cartReducer(state=[],action){
    switch(action.type){
        case "ADD_TO_CART":
            return [...state,action.item]
        case "REMOVE_FROM_CART":
            return state.filter(item=>item.id!==action.id)
        default:
            return state
    }
}

export default cartReducer