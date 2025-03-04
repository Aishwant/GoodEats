import produce from "immer"
import { 
    GET_CART,
    ADD_TO_CART,
    DELETE_CART_ITEM,
    GET_ITEM_COUNT,
    EDIT_INSTRUCTIONS,
    PLACE_ORDER
} from "../actions/types";

const initialState = {
    items:{},
    itemCount: 0,
    pendingOrders: {}
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
                //draft['items'][action.rID]['total'] += action.toBeAdded;
                draft.itemCount += action.qty;
            })
        case DELETE_CART_ITEM:
            return produce(state, draft => {
                delete draft['items'][action.resID][action.payload];
                draft['items'][action.resID]['total'] -= action.price;
                draft['items'][action.resID]['total'] = draft['items'][action.resID]['total'].toFixed(2);
                draft.itemCount -= action.qty;
            })
        case GET_ITEM_COUNT:
            return{
                ...state,
                itemCount: action.payload
            };
        case EDIT_INSTRUCTIONS:
            return produce(state, draft => {
                draft['items'][action.resID][action.id]['Instructions'] = action.instructions
            })
        case PLACE_ORDER:
            return produce(state, draft => {
                delete draft['items'][action.resID];
                draft.itemCount -= action.totalItems;
            })
        default:
            return state;
    }

}