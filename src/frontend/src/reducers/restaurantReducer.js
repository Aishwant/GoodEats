import { 
    GET_RESTAURANTS
} from "../actions/types";

const initialState = {
    restaurants:{},
    resName:""
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_RESTAURANTS:
        console.log([action.payload])
            return{
                ...state,
                restaurants: action.payload
            };
        default:
            return state;
    }

}