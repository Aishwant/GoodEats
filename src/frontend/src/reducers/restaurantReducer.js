import { 
    GET_RESTAURANTS,
    GET_RESTAURANTS_BY_ZIP,
    GET_RESTAURANTS_BY_ID
} from "../actions/types";

const initialState = {
    restaurants:{}
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_RESTAURANTS:
        console.log([action.payload])
            return{
                ...state,
                restaurants: action.payload
            };
        case GET_RESTAURANTS_BY_ZIP:
        console.log([action.payload])
            return{
                ...state,
                restaurants: action.payload
            };
        case GET_RESTAURANTS_BY_ID:
        console.log([action.payload])
            return{
                ...state,
                restaurants: action.payload
            };
        default:
            return state;
    }
}