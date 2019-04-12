import produce from "immer"
import { 
    ADD_PENDING_ORDER,
    REJECT_PENDING_ORDER,
    ACCEPT_PENDING_ORDER,
    ADD_PENDING_DEV_ORDER,
    ACCEPT_PENDING_DEV_ORDER,
    ADD_ON_DEV_ORDER,
    ADD_DELIVERED_ORDER,
} from "../actions/types";

const initialState = {
    pendingOrders: {},
    pendingDevOrders: {},
    acceptedDev: {},
    onDevOrders: {},
    deliveredOrders: {}
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
        case ADD_PENDING_DEV_ORDER:
            return produce(state,draft =>{
                draft['pendingDevOrders'] = action.payload;
            })
        case ACCEPT_PENDING_DEV_ORDER:
        return produce(state, draft =>{
            delete draft['pendingDevOrders'][action.rid][action.oid];
        })
        case ADD_ON_DEV_ORDER:
            return produce(state,draft => {
                draft['onDevOrders'] = action.payload;
            })
        case ADD_DELIVERED_ORDER:
            return produce(state,draft => {
                draft['deliveredOrders'] = action.payload;
            })
        default:
            return state;
    }

}