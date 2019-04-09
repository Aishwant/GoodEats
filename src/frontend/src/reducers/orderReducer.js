import produce from "immer"
import { 
    ADD_PENDING_ORDER,
    REJECT_PENDING_ORDER,
    ACCEPT_PENDING_ORDER
} from "../actions/types";

const initialState = {
    pendingOrders: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case ADD_PENDING_ORDER:
            return produce(state, draft => {
                draft['pendingOrders'] = action.payload
            })

        case REJECT_PENDING_ORDER:
            return produce(state, draft =>{
                delete draft['pendingOrders'][action.payload];
            })
        case ACCEPT_PENDING_ORDER:
        return produce(state, draft =>{
            delete draft['pendingOrders'][action.payload];
        })
        default:
            return state;
    }

}