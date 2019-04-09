import produce from "immer"
import { 
    ADD_PENDING_ORDER
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
        default:
            return state;
    }

}