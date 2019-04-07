import produce from "immer"
import { 
    GET_CART,
    ADD_TO_CART,
    DELETE_CART_ITEM,
    GET_ITEM_COUNT,
    EDIT_INSTRUCTIONS
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
                draft['items'][action.rID] = [action.fd];
                draft.itemCount += action.qty;
            })
        case DELETE_CART_ITEM:
            return produce(state, draft => {
                delete draft['items'][action.payload];
                draft.itemCount -= action.qty;
            })
        case GET_ITEM_COUNT:
            return{
                ...state,
                itemCount: action.payload
            };
        case EDIT_INSTRUCTIONS:
            return produce(state, draft => {
                draft['items'][action.id]['Instructions'] = action.instructions
            })
        default:
            return state;
    }

}