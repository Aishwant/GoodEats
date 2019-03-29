import produce from "immer"
import { 
    GET_CART,
    ADD_TO_CART,
    DELETE_CART_ITEM
} from "../actions/types";

const initialState = {
    items:{}
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_CART:
            return{
                ...state,
                items: action.payload
            };
        case ADD_TO_CART:
            return{
                ...state,
                items: [...state.items, action.payload]
            };
        case DELETE_CART_ITEM:
            return produce(state, draft => {
                delete draft['items'][action.payload]
            })
        default:
            return state;
    }

}