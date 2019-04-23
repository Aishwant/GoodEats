import produce from "immer"
import { 
    ADD_PENDING_ORDER,
    REJECT_PENDING_ORDER,
    ACCEPT_PENDING_ORDER,
    ADD_PENDING_DEV_ORDER,
    ACCEPT_PENDING_DEV_ORDER,
    ADD_ON_DEV_ORDER,
    ADD_DELIVERED_ORDER,
    DELIVERED_ORDER,
    SET_MY_ORDERS,
} from "../actions/types";

const initialState = {
    pendingOrders: {},
    pendingDevOrders: {},
    acceptedDev: {},
    onDevOrders: {},
    deliveredOrders: {},
    myOrders: {},
    pendingOrderCount: 0
}

export default function(state = initialState, action) {
    switch(action.type){
        case ADD_PENDING_ORDER:
            return produce(state, draft => {
                draft['pendingOrders'] = action.payload
                draft.pendingOrderCount++;
            })

        case REJECT_PENDING_ORDER:
            return produce(state, draft =>{
                delete draft['pendingOrders'][action.payload];
                draft.pendingOrderCount--;
            })
        case ACCEPT_PENDING_ORDER:
            return produce(state, draft =>{
                delete draft['pendingOrders'][action.payload];
                draft.pendingOrderCount--;
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
        case DELIVERED_ORDER:
            return produce(state,draft => {
                delete draft['onDevOrders'][action.rid][action.oid];
            })
        case SET_MY_ORDERS:
            return produce(state, draft => {
                draft['myOrders'] = action.payload;
            })
        default:
            return state;
    }

}