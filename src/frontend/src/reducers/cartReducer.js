import produce from "immer"
import { 
    GET_CART,
    ADD_TO_CART,
    DELETE_CART_ITEM
} from "../actions/types";

const initialState = {
    items:{},
    itemCount: 0
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_CART:
            return{
                ...state,
                items: action.payload
            };
        case ADD_TO_CART:
            return produce(state, draft => {
                draft['items'][action.item] = [action.data];
                draft.itemCount += action.qty;
            })
        case DELETE_CART_ITEM:
            return produce(state, draft => {
                delete draft['items'][action.payload];
                draft.itemCount -= action.qty;
            })
        default:
            return state;
    }

}