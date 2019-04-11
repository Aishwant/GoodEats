import produce from "immer"
import { 
    ADD_PENDING_ORDER,
    REJECT_PENDING_ORDER,
    ACCEPT_PENDING_ORDER,
    ADD_PENDING_DEV_ORDER,
} from "../actions/types";

const initialState = {
    pendingOrders: {},
    pendingDevOrders: {},
    acceptedDev: {}
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
                // if(draft['pendingOrders']==null) draft['pendingOrders'] = {}
            })
        case ACCEPT_PENDING_ORDER:
        return produce(state, draft =>{
            delete draft['pendingOrders'][action.payload];
            // if(draft['pendingOrders']==null) draft['pendingOrders'] = {}
        })
        case ADD_PENDING_DEV_ORDER:
        return produce(state,draft =>{
            draft['pendingDevOrders'] = action.payload;
        })
        default:
            return state;
    }

}